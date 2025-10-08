"use client";

import { useState } from "react";
import {
  UploadCloud,
  Link2,
  Image as ImageIcon,
  Video,
  AudioWaveform,
  Shield,
  Globe,
  UsersRound,
  X,
  FileDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import jsPDF from "jspdf";

export default function GothamSection() {
  const [files, setFiles] = useState<File[]>([]);
  const [urlInput, setUrlInput] = useState("");
  const [urls, setUrls] = useState<string[]>([]);
  const [result, setResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  // 🧠 File Handlers
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files)]);
    }
  };

  const handleUrlAdd = () => {
    if (urlInput.trim() !== "") {
      setUrls((prev) => [...prev, urlInput.trim()]);
      setUrlInput("");
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRemoveUrl = (index: number) => {
    setUrls((prev) => prev.filter((_, i) => i !== index));
  };

  // 🚀 Submit for verification
  const handleSubmit = async () => {
    if (files.length === 0 && urls.length === 0) return;

    setIsLoading(true);
    setResult(null);

    try {
      // Handle files first (you could adapt for URLs if needed)
      const formData = new FormData();
      formData.append("media", files[0]); // just one file for demo

      const res = await fetch("/api/check-media", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };


const handleDownloadPDF = async () => {
  if (!result) return;

  const doc = new jsPDF("p", "mm", "a4");
  const margin = 20;
  const lineHeight = 8;
  let y = margin + 30; 

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // --- Load header and footer ---
  const headerImg = "/pdfHeader.png"; 
  const footerImg = "/pdfFooter.png";
  const headerHeight = 32;
  const footerHeight = 25;

  // --- Add header and footer ---
  doc.addImage(headerImg, "PNG", 0, 0, pageWidth, headerHeight);
  doc.addImage(footerImg, "PNG", 0, pageHeight - footerHeight, pageWidth, footerHeight);

  // --- Title ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text("Deeptrack Gotham Media Verification Report", margin, y);
  y += 10;


// --- Uploaded Media ---
let infoX = margin + 60; 
let infoY = y + 15;      
let blockHeight = 60;    

try {
  if (result.fileMeta.type.startsWith("image/")) {
    const imgData = result.imageBase64;
    doc.addImage(imgData, "JPEG", margin, y, 50, 50);
  } else {
    infoX = margin;
    infoY = y + 10;
    blockHeight = 40; 
  }
} catch (err) {
  console.error("Media not added to PDF:", err);
}

// --- File Info ---
doc.setFont("helvetica", "bold");
doc.setFontSize(12);
doc.setTextColor(0);
doc.text("File Information", infoX, infoY);

doc.setFont("helvetica", "normal");
doc.setTextColor(60);
const fileInfoStartY = infoY + 10;

doc.text(`File Name: ${result.fileMeta.name}`, infoX, fileInfoStartY);
doc.text(`Type: ${result.fileMeta.type}`, infoX, fileInfoStartY + lineHeight);
doc.text(
  `Size: ${(result.fileMeta.size / 1024).toFixed(2)} KB`,
  infoX,
  fileInfoStartY + 2 * lineHeight
);
doc.text(
  `Uploaded: ${new Date(result.timestamp).toLocaleString()}`,
  infoX,
  fileInfoStartY + 3 * lineHeight
);

y += blockHeight; 

 y += 10;

  // --- Verification Summary ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(0);
  doc.text("Verification Summary", margin, (y += 10));
  doc.setDrawColor(0, 0, 0);
  doc.line(margin, y + 2, 190, y + 2);

  y += 10;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0);
  doc.setFontSize(12);


  doc.text(`Request ID: ${result.result.requestId}`, margin, (y += lineHeight));
  doc.text(`Status: ${result.result.status}`, margin, (y += lineHeight));
  if (result.result.score !== null) {
    doc.text(
      `Confidence Score: ${(result.result.score * 100).toFixed(1)}%`,
      margin,
      (y += lineHeight)
    );
  }

  const models = result.result.models?.map((m) => m.name).join(", ") || "N/A";
  doc.text(`Models Used: ${models}`, margin, (y += lineHeight));

  y += 15;

  // --- Raw Developer Data ---
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0);
  doc.setFontSize(14);
  doc.text("Raw Developer Data", margin, (y += 10));
  doc.setDrawColor(0, 0, 0);
  doc.line(margin, y + 2, 190, y + 2);

  y += 10;
  doc.setFont("courier", "normal");
  doc.setFontSize(8);
  doc.setTextColor(60);

  const rawData = JSON.stringify(result.result.raw, null, 2);
  const splitRaw = doc.splitTextToSize(rawData, 170);
  for (let i = 0; i < splitRaw.length; i++) {
    if (y > pageHeight - footerHeight - 15) {
      doc.addPage();
      doc.addImage(headerImg, "PNG", 0, 0, pageWidth, headerHeight);
      doc.addImage(footerImg, "PNG", 0, pageHeight - footerHeight, pageWidth, footerHeight);
      y = margin + 10;
    }
    doc.text(splitRaw[i], margin, y);
    y += 4;
  }

  doc.save(`Gotham-Verification-${result.fileMeta.name}.pdf`);
};

  return (
    <div className="min-h-screen flex flex-col relative">
      <Image
        src="/Vector.svg"
        alt="Blue Lines"
        width={400}
        height={300}
        className="absolute -right-72 md:-right-20 -z-10 customTeal"
      />

      {/* Hero Section */}
      <section className="mx-auto max-w-4xl text-center px-6 py-14">
        <h1 className="text-4xl md:text-5xl font-bold text-sky-500">
          Secure Media Integrity <br />
          <span className="text-white">Protect Your Digital Reality</span>
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Easily detect deepfakes and confirm the authenticity of photos, audio,
          and videos so you always know what’s real and what’s not.
        </p>
      </section>

      {/* Upload Section */}
      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-6">
          <Card className="shadow-lg border border-dashed border-customTeal bg-foreground">
            <CardContent className="p-8 space-y-10">
              {/* Upload */}
              <div className="flex flex-col items-center justify-center border border-dashed border-muted-foreground/70 rounded-xl p-10 bg-muted-foreground/10">
                <UploadCloud className="h-10 w-10 text-sky-500 mb-3" />
                <p className="font-medium text-slate-200">Upload Media for Verification</p>
                <div className="flex items-center gap-3 text-sm text-slate-400 mt-2">
                  <span className="flex items-center gap-1"><Video className="h-4 w-4" /> Video</span>
                  <span className="flex items-center gap-1"><ImageIcon className="h-4 w-4" /> Image</span>
                  <span className="flex items-center gap-1"><AudioWaveform className="h-4 w-4" /> Audio</span>
                </div>
                <input
                  type="file"
                  accept="image/*,video/*,audio/*"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <Button
                  onClick={() => document.getElementById("file-upload")?.click()}
                  className="bg-sky-600 hover:bg-sky-600 text-white mt-4"
                >
                  Browse Files
                </Button>
                {files.length > 0 && (
                  <ul className="mt-4 space-y-2 w-full text-sm text-slate-300">
                    {files.map((f, i) => (
                      <li
                        key={i}
                        className="flex justify-between bg-slate-800/40 rounded-md px-3 py-2"
                      >
                        {f.name}
                        <X className="h-4 w-4 text-red-400 cursor-pointer" onClick={() => handleRemoveFile(i)} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* URL input */}
              <div className="flex flex-col items-center w-full">
                <div className="relative w-full flex items-center my-6">
                  <Separator className="flex-1 bg-slate-500" />
                  <span className="px-3 text-sm text-slate-400 flex items-center gap-2">
                    <Link2 className="h-4 w-4 text-sky-400" />
                    Or add from URL
                  </span>
                  <Separator className="flex-1 bg-slate-500" />
                </div>

                <div className="flex w-full gap-2">
                  <input
                    type="text"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="Paste media URL here..."
                    className="flex-1 rounded-md border border-slate-700 px-4 py-2 text-sm bg-foreground text-white focus:ring-2 focus:ring-sky-500"
                  />
                  <Button
                    onClick={handleUrlAdd}
                    className="bg-sky-600 hover:bg-sky-600 text-white"
                  >
                    Add
                  </Button>
                </div>

                {urls.length > 0 && (
                  <ul className="mt-4 space-y-2 w-full text-sm text-slate-300">
                    {urls.map((url, i) => (
                      <li
                        key={i}
                        className="flex justify-between bg-slate-800/40 rounded-md px-3 py-2"
                      >
                        <span className="truncate w-64">{url}</span>
                        <X className="h-4 w-4 text-red-400 cursor-pointer" onClick={() => handleRemoveUrl(i)} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <Button
                disabled={isLoading}
                onClick={handleSubmit}
                className="w-full bg-sky-600 hover:bg-sky-700 text-white mt-6"
              >
                {isLoading ? "Verifying..." : "Verify Media"}
              </Button>
            </CardContent>
             {/* Footer note */}
                        <p className="text-xs text-slate-200 text-center pb-4">
                          Max file size: 300MB. Accepted formats: JPG, PNG, MP3, WAV, MP4,
                          WebM, MOV, AVI, WMV, MKV, FLV
                        </p>
          </Card>
        </div>
      </main>

{/* Feature Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 mt-10 px-4 sm:px-6">
  {[
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "AI-Powered Detection",
      text: "Advanced analysis for detecting manipulations and synthetic media.",
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      title: "C2PA Provenance",
      text: "Complete media lineage tracking and authenticity verification.",
    },
    {
      icon: <UsersRound className="h-8 w-8 text-white" />,
      title: "Enterprise Ready",
      text: "Multi-tenant architecture with advanced user management.",
    },
  ].map((card, i) => (
    <Card
      key={i}
      className="bg-card-gradient border border-customTeal shadow-lg rounded-xl 
                 flex flex-col items-center justify-center text-center p-2
                 w-full h-auto min-h-[160px] sm:min-h-[180px] transition-all"
    >
      <CardHeader className="flex items-center justify-center">
        <div className="flex items-center justify-center p-3 rounded-full bg-white/10">
          {card.icon}
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-white text-base font-semibold mb-2">
          {card.title}
        </CardTitle>
        <p className="text-sm text-gray-200 leading-snug">{card.text}</p>
      </CardContent>
    </Card>
  ))}
</div>

{/* Results Modal */}
{result && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-2">
    <div className="bg-foreground border border-customTeal rounded-2xl py-4 px-8 w-full max-w-4xl text-neutral-100 shadow-2xl
                    max-h-[95vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-sky-400">
          Verification Results
        </h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setResult(null)}
          className="text-slate-400 hover:text-sky-400"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
{/* Media Preview */}
<div className="flex flex-col items-center justify-center">
  {result.fileMeta.type.startsWith("image/") && (
    <img
      src={result.imageBase64}
      alt={result.fileMeta.name}
      className="w-72 h-72 object-contain rounded-lg border border-slate-700"
    />
  )}

  {result.fileMeta.type.startsWith("video/") && (
    <video
      controls
      className="w-72 h-72 object-contain rounded-lg border border-slate-700"
    >
      <source src={result.fileUrl || result.imageBase64} type={result.fileMeta.type} />
      Your browser does not support the video tag.
    </video>
  )}

  {result.fileMeta.type.startsWith("audio/") && (
    <div className="w-72 flex flex-col items-center p-4 border border-slate-700 rounded-lg bg-slate-900/40">
      <audio controls className="w-full">
        <source src={result.fileUrl || result.imageBase64} type={result.fileMeta.type} />
        Your browser does not support the audio tag.
      </audio>
      <p className="mt-3 text-sm text-slate-400">Audio Preview</p>
    </div>
  )}

  <p className="mt-2 text-sm text-slate-400">
    Uploaded media {result.fileMeta.name}
  </p>
</div>

        {/* Results Summary */}
        <div className="rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-4">Overall Result</h3>
            <div className="flex justify-between items-center mb-3">
              <div>
                <p className="text-xs uppercase text-gray-400">Status</p>
                <p
                  className={`text-lg font-bold ${
                    result.result.status === "AUTHENTIC"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {result.result.status}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase text-gray-400">Confidence</p>
                <p className="text-lg font-bold">
                  {result.result.score !== null
                    ? `${(result.result.score * 100).toFixed(1)}%`
                    : "N/A"}
                </p>
              </div>
            </div>

            <div className="w-full bg-neutral-700 h-2 rounded-full mb-4">
              <div
                className="h-2 rounded-full bg-sky-500"
                style={{
                  width: `${
                    result.result.score ? result.result.score * 100 : 0
                  }%`,
                }}
              ></div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
              <p>
                <strong>Uploaded:</strong>{" "}
                {new Date(result.timestamp).toDateString()}
              </p>
              <p>
                <strong>Models Used:</strong>{" "}
                {result.result.models?.map((m: any) => m.name).join(", ") ||
                  "N/A"}
              </p>
              <p>
                <strong>Type:</strong> {result.fileMeta.type.split("/")[0]}
              </p>
              <p>
                <strong>Format:</strong>{" "}
                {result.fileMeta.type.split("/")[1].toUpperCase()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Raw + Download */}
      <div className="mt-8 border-t border-slate-700 pt-4">
        <details className="bg-neutral-800/40 rounded-lg p-4">
          <summary className="cursor-pointer text-sky-400 font-medium">
            Raw Developer Data
          </summary>
          <pre className="text-xs mt-3 max-h-60 overflow-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent text-slate-300 bg-black/30 border border-slate-700 p-3 rounded-lg">
            {JSON.stringify(result.result.raw, null, 2)}
          </pre>
        </details>

        <div className="flex justify-end mt-6 gap-3">
          <Button
            onClick={handleDownloadPDF}
            className="bg-sky-600 hover:bg-sky-700 text-white flex items-center gap-2"
          >
            <FileDown className="h-4 w-4" /> Download PDF Report
          </Button>
          <Button
            variant="outline"
            className="border-slate-500 text-black hover:bg-red-600 hover:text-white"
onClick={() => {
    setResult(null);
    setFiles([]);
    setUrls([]);
  }}          >
            Close
          </Button>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
