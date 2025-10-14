import { UploadCloud, Video, ImageIcon, AudioWaveform, X, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface UploadSectionProps {
  files: File[];
  urls: string[];
  urlInput: string;
  onFileChange: (file: File | null) => void; // ✅ simplified — single file only
  onUrlInputChange: (value: string) => void;
  onUrlAdd: () => void;
  onRemoveFile: () => void; // ✅ no index needed since only one file
  onRemoveUrl: (index: number) => void;
}

export default function UploadSection({
  files,
  urls,
  urlInput,
  onFileChange,
  onUrlInputChange,
  onUrlAdd,
  onRemoveFile,
  onRemoveUrl,
}: UploadSectionProps) {
  const handleSingleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFile = e.target.files?.[0] || null;
    onFileChange(newFile);
  };

  return (
    <div className="space-y-10">
      {/* File Upload */}
      <div className="flex flex-col items-center justify-center border border-dashed border-muted-foreground/50 rounded-xl p-10 bg-foreground/20">
        <UploadCloud className="h-10 w-10 text-sky-500 mb-3" />
        <p className="font-medium text-slate-200">Upload Media for Verification</p>

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

        <input
          type="file"
          accept="image/*,video/*,audio/*"
          onChange={handleSingleFileChange}
          className="hidden"
          id="file-upload"
          disabled={urls.length > 0}
        />

        <Button
          onClick={() => document.getElementById("file-upload")?.click()}
          className="bg-sky-600 hover:bg-sky-700 text-white mt-4"
          disabled={urls.length > 0}
        >
          {files.length > 0 ? "Replace File" : "Browse File"}
        </Button>

        {/* ✅ Only one file shown */}
        {files.length > 0 && (
          <div className="mt-4 w-full text-sm text-slate-300">
            <div className="flex justify-between bg-slate-800/40 rounded-md px-3 py-2">
              <span className="truncate">{files[0].name}</span>
              <X
                className="h-4 w-4 text-red-400 cursor-pointer"
                onClick={onRemoveFile}
              />
            </div>
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
            onChange={(e) => onUrlInputChange(e.target.value)}
            placeholder="Paste media URL here..."
            className="flex-1 rounded-md border border-muted-foreground/50 px-4 py-2 text-sm bg-foreground/20 text-white focus:ring-2 focus:ring-sky-500"
            disabled={files.length > 0}
          />
          <Button
            onClick={onUrlAdd}
            className="bg-sky-600 hover:bg-sky-700 text-white"
            disabled={files.length > 0}
          >
            Add
          </Button>
        </div>

        {urls.length > 0 && (
          <ul className="mt-4 space-y-2 w-full text-sm text-slate-300">
            {urls.map((url, index) => (
              <li
                key={index}
                className="flex justify-between bg-slate-800/40 rounded-md px-3 py-2"
              >
                <span className="truncate w-64">{url}</span>
                <X
                  className="h-4 w-4 text-red-400 cursor-pointer"
                  onClick={() => onRemoveUrl(index)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
