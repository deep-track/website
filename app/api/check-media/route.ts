import { NextResponse } from "next/server";
import { RealityDefender } from "@realitydefender/realitydefender";
import fs from "fs";
import path from "path";
import os from "os";

// Ensure this API route is server-only
export const dynamic = "force-dynamic";
export const runtime = "nodejs";


const rd = new RealityDefender({
  apiKey: process.env.REALITY_DEFENDER_API_KEY as string,
});

export async function POST(req: Request) {
  console.log("POST /api/check-media called");

  let fileName = "";
  let fileType = "";
  let fileSize = 0;
  let fileBuffer: Buffer;

  try {
    // 🧭 Determine if it's a file upload or a URL submission
    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      // --- Handle File Upload ---
      const formData = await req.formData();
      const file = formData.get("media") as File;

      if (!file) {
        return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
      }

      fileName = file.name;
      fileType = file.type;
      fileSize = file.size;
      fileBuffer = Buffer.from(await file.arrayBuffer());

    } else if (contentType.includes("application/json")) {
      // --- Handle URL Submission ---
      const body = await req.json();
      const url = body.url;

      if (!url) {
        return NextResponse.json({ error: "No URL provided" }, { status: 400 });
      }

      console.log(`Fetching media from URL: ${url}`);
      const response = await fetch(url);
      if (!response.ok) {
        return NextResponse.json(
          { error: `Failed to fetch media from URL: ${response.statusText}` },
          { status: 400 }
        );
      }

      const arrayBuffer = await response.arrayBuffer();
      fileBuffer = Buffer.from(arrayBuffer);

      // Extract filename and extension from URL or MIME
      const urlObj = new URL(url);
      const originalName = path.basename(urlObj.pathname);
      const extensionFromUrl = path.extname(originalName);
      const mimeType = response.headers.get("content-type") || "application/octet-stream";
      const extensionFromMime =
        mimeType.split("/")[1] && !extensionFromUrl ? `.${mimeType.split("/")[1]}` : "";

      fileName = extensionFromUrl
        ? originalName
        : `remote-media${extensionFromMime || ".jpg"}`; // fallback to jpg
      fileType = mimeType;
      fileSize = fileBuffer.length;
    } else {
      return NextResponse.json({ error: "Unsupported content type" }, { status: 400 });
    }

    // 📁 Save temp file with proper extension
    const tempPath = path.join(os.tmpdir(), fileName);
    fs.writeFileSync(tempPath, fileBuffer);
    console.log(`Temp file saved at: ${tempPath}`);

    // 🧠 Send file to Reality Defender
    const rdResult = await rd.detect({ filePath: tempPath });
    console.log("Reality Defender full response:", JSON.stringify(rdResult, null, 2));

    // 🧹 Cleanup temp file
    fs.unlinkSync(tempPath);

    // 🪄 Build normalized response
    const responsePayload = {
mediaPreview: fileType.startsWith("image/") ||
              fileType.startsWith("video/") ||
              fileType.startsWith("audio/")
  ? `data:${fileType};base64,${fileBuffer.toString("base64")}`
  : null,
      fileMeta: {
        name: fileName,
        type: fileType,
        size: fileSize,
      },
      result: {
        requestId: rdResult?.requestId ?? "N/A",
        status: rdResult?.status ?? "UNKNOWN",
        score: typeof rdResult?.score === "number" ? rdResult.score : null,
        models: Array.isArray(rdResult?.models) ? rdResult.models : [],
        raw: rdResult,
      },
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(responsePayload);
  } catch (error: any) {
    console.error("Error in check-media:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
