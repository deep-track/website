import { NextResponse } from "next/server";
import { RealityDefender } from "@realitydefender/realitydefender";
import fs from "fs";
import path from "path";
import os from "os";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const rd = new RealityDefender({
  apiKey: process.env.REALITY_DEFENDER_API_KEY as string,
});

export async function POST(req: Request) {
  console.log("POST /api/check-media called");

  try {
    const contentType = req.headers.get("content-type") || "";
    let fileName = "";
    let fileType = "";
    let fileSize = 0;
    let fileBuffer: Buffer | null = null;
    let rdResult: any;

    // --- Handle File Upload ---
    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      const file = formData.get("media") as File;

      if (!file) {
        return NextResponse.json(
          { error: "No file uploaded" },
          { status: 400 }
        );
      }

      fileName = file.name;
      fileType = file.type;
      fileSize = file.size;
      fileBuffer = Buffer.from(await file.arrayBuffer());

      const tempPath = path.join(os.tmpdir(), fileName);
      await fs.promises.writeFile(tempPath, fileBuffer);

      console.log(`Temp file saved at: ${tempPath}`);

      rdResult = await rd.detect({ filePath: tempPath });
      console.log("RD status:", rdResult?.status, "score:", rdResult?.score);

      await fs.promises.unlink(tempPath);

      // --- Handle URL Submission ---
    } else if (contentType.includes("application/json")) {
      const { url } = await req.json();
      if (!url) {
        return NextResponse.json({ error: "No URL provided" }, { status: 400 });
      }

      console.log(`Downloading remote media from: ${url}`);
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Failed to download media from URL: ${url}`);
      }

      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const tempPath = path.join(
        os.tmpdir(),
        path.basename(new URL(url).pathname) || "remote-media"
      );
      await fs.promises.writeFile(tempPath, buffer);

      console.log(`Temp file saved from URL: ${tempPath}`);

      rdResult = await rd.detect({ filePath: tempPath });
      console.log("RD status:", rdResult?.status, "score:", rdResult?.score);

      await fs.promises.unlink(tempPath);

      fileName = path.basename(new URL(url).pathname) || "remote-media";
      fileType = rdResult?.mimeType || "application/octet-stream";
      fileSize = buffer.length;
    }

    const responsePayload = {
      mediaPreview:
        fileBuffer && fileType.startsWith("image/") && fileSize < 2_000_000
          ? `data:${fileType};base64,${fileBuffer.toString("base64")}`
          : null,
      fileMeta: { name: fileName, type: fileType, size: fileSize },
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
