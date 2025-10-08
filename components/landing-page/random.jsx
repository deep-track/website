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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function GothamSection() {
  const [files, setFiles] = useState<File[]>([]);
  const [urlInput, setUrlInput] = useState("");
  const [urls, setUrls] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selected = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...selected]);
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

  const handleSubmit = () => {
    console.log("Files:", files);
    console.log("URLs:", urls);
    // 👉 This is where you’d send the files/URLs to your verification endpoint
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Decorative Image */}
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

      {/* Upload Area */}
      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-6">
          <Card className="shadow-lg border border-dashed border-customTeal bg-foreground">
            <CardContent className="p-8 space-y-10">
              {/* File Upload */}
              <div className="flex flex-col items-center justify-center border border-dashed border-muted-foreground/70 rounded-xl p-10 hover:border-customTeal transition bg-muted-foreground/10">
                <UploadCloud className="h-10 w-10 text-sky-500 mb-3" />
                <p className="font-medium text-slate-200">
                  Upload Media for Verification
                </p>
                <div className="flex items-center gap-3 text-sm text-slate-400 mt-2">
                  <span className="flex items-center gap-1">
                    <Video className="h-4 w-4" /> Video
                  </span>
                  <span className="flex items-center gap-1">
                    <ImageIcon className="h-4 w-4" /> Image
                  </span>
                  <span className="flex items-center gap-1">
                    <AudioWaveform className="h-4 w-4" /> Audio
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-400 text-center mb-3">
                  (Max 10MB each) • Multiple files supported
                </p>

                <input
                  id="file-upload"
                  type="file"
                  accept="image/*,video/*,audio/*"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                />
                <Button
                  size="lg"
                  className="bg-sky-600 hover:bg-sky-700 text-white rounded-xl px-6"
                  onClick={() =>
                    document.getElementById("file-upload")?.click()
                  }
                >
                  Browse Files
                </Button>

                {/* Display selected files */}
                {files.length > 0 && (
                  <div className="mt-5 w-full text-left">
                    <p className="text-sm text-slate-300 mb-2">
                      Selected Files:
                    </p>
                    <ul className="space-y-2">
                      {files.map((file, i) => (
                        <li
                          key={i}
                          className="flex justify-between items-center text-sm text-slate-400 bg-slate-800/50 px-3 py-2 rounded-md"
                        >
                          <span>{file.name}</span>
                          <button
                            onClick={() => handleRemoveFile(i)}
                            className="text-red-400 hover:text-red-600"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* URL Input */}
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
                    className="flex-1 rounded-md border border-slate-700 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-foreground text-white"
                  />
                  <Button
                    size="default"
                    className="text-white bg-sky-600 hover:bg-sky-700 rounded-md px-4"
                    onClick={handleUrlAdd}
                  >
                    Add
                  </Button>
                </div>

                {/* Display added URLs */}
                {urls.length > 0 && (
                  <div className="mt-5 w-full text-left">
                    <p className="text-sm text-slate-300 mb-2">Added Links:</p>
                    <ul className="space-y-2">
                      {urls.map((url, i) => (
                        <li
                          key={i}
                          className="flex justify-between items-center text-sm text-slate-400 bg-slate-800/50 px-3 py-2 rounded-md"
                        >
                          <span className="truncate w-64">{url}</span>
                          <button
                            onClick={() => handleRemoveUrl(i)}
                            className="text-red-400 hover:text-red-600"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <Button
                onClick={handleSubmit}
                size="lg"
                className="w-full bg-sky-600 hover:bg-sky-700 text-white mt-6 rounded-xl"
              >
                Verify Media
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
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-6 mb-8 mt-10 px-6">
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
            className="bg-card-gradient border border-customTeal w-[380px] h-[180px] shadow-lg rounded-lg flex flex-col items-center justify-center text-center p-6"
          >
            <CardHeader className="flex items-center justify-center">
              <div className="flex items-center justify-center p-2 rounded-full bg-white/10">
                {card.icon}
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-white text-base font-semibold mb-2">
                {card.title}
              </CardTitle>
              <p className="text-sm text-gray-200">{card.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
