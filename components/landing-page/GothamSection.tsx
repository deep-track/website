"use client";

import { useState, useMemo, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  UploadCloud,
  Link2,
  X,
  CheckCircle, 
  AlertTriangle, 
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Dynamically import PaystackButton to avoid "window is not defined" SSR errors
const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false }
);

interface PaystackReference {
  reference: string;
}

export default function GothamSection() {
  
  // ---------------- State Management ----------------
  const [files, setFiles] = useState<File[]>([]);
  const [urlInput, setUrlInput] = useState("");
  const [urls, setUrls] = useState<string[]>([]);
  const [result, setResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  // State for user contact details
  const [userEmail, setUserEmail] = useState(""); 
  const [userPhone, setUserPhone] = useState(""); 

  // Paystack Configuration
  const publicKey =
    process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "pk_test_xxxxxxxxxx";
  const verificationFeeKsh = 100; // Example fee in KES

  // Paystack config memoized - UPDATED FOR OPTIONAL CONTACTS
  const paystackConfig = useMemo(() => ({
    // Use userEmail if valid, otherwise use a placeholder email.
    // Paystack requires a non-empty, valid email string for all transactions.
    email: userEmail.includes('@') && userEmail.includes('.') ? userEmail : 'customer@email.com', 
    amount: verificationFeeKsh * 100, // Amount in kobo/cent
    currency: "KES",
    publicKey,
    text: `Pay KSh ${verificationFeeKsh} to Verify Media`,
    onClose: () => setErrorMessage("Payment cancelled or closed!"),
    metadata: {
      custom_fields: [
        // Store the user's phone number as a custom field (even if empty)
        {
          display_name: "Customer Phone",
          variable_name: "customer_phone",
          value: userPhone,
        },
        // Store the actual email used (which might be the placeholder)
        {
          display_name: "Customer Email",
          variable_name: "customer_email",
          value: userEmail.includes('@') && userEmail.includes('.') ? userEmail : 'N/A (using placeholder)',
        },
      ],
    },
  }), [publicKey, userEmail, userPhone]); // Dependency: Include userPhone

  // Utility function for error messages
  const setError = (message: string) => {
    setErrorMessage(message);
    setSuccessMessage("");
  };
  
  // Effect for message dismissal
  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  // ---------------- Handlers (UI/Local State) ----------------

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files;
    if (!newFiles) return;
    if (urls.length > 0) {
      setError("Please clear URLs before uploading files.");
      return;
    }
    setFiles((prev) => [...prev, ...Array.from(newFiles)]);
  };

  const handleUrlAdd = () => {
    if (urlInput.trim() !== "") {
      if (files.length > 0) {
        setError("Please clear uploaded files before adding a URL.");
        return;
      }
      setUrls((prev) => [...prev, urlInput.trim()]);
      setUrlInput("");
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    if (files.length === 1 && urls.length === 0) setPaymentCompleted(false);
  };

  const handleRemoveUrl = (index: number) => {
    setUrls((prev) => prev.filter((_, i) => i !== index));
    if (urls.length === 0 && files.length === 0) setPaymentCompleted(false);
  };
  
  // ---------------- Core Logic (Payment/Verification) ----------------

  const handleVerify = async () => {
    if (files.length === 0 && urls.length === 0) return;

    setIsLoading(true);
    setResult(null);
    setError(""); 

    try {
      let body: FormData | string;
      if (files.length > 0) {
        body = new FormData();
        body.append("media", files[0]);
      } else {
        body = JSON.stringify({ url: urls[0] });
      }

      const res = await fetch("/api/check-media", {
        method: "POST",
        headers: files.length === 0 ? { "Content-Type": "application/json" } : undefined,
        body: body,
      });

      if (!res.ok) throw new Error("Verification failed on backend");

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error("Verification error:", err);
      setError("Failed to verify media. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePaymentSuccess = async (response: PaystackReference) => {
    setIsLoading(true);
    setSuccessMessage(""); 
    setError(""); 

    try {
      const verifyRes = await fetch("/api/verify-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reference: response.reference }),
      });

      const verifyData = await verifyRes.json();
      if (verifyData.status === "success") {
        setPaymentCompleted(true);
        setSuccessMessage("Payment verified! Starting media analysis...");
        await handleVerify();
      } else {
        setError("Payment verification failed! Please contact support.");
        setPaymentCompleted(false);
      }
    } catch (err) {
      console.error("Payment verification error:", err);
      setError("Error verifying payment. Please try again or contact support.");
      setPaymentCompleted(false);
    } finally {
      setIsLoading(false);
    }
  };


  const isReadyToSubmit = files.length > 0 || urls.length > 0;
  // UPDATED: isSubmitDisabled now only checks if content is ready
  const isSubmitDisabled = isLoading || !isReadyToSubmit;

  return (
    <div className="min-h-screen flex flex-col relative bg-slate-900 text-white">
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

      {/* Message Toasters */}
      {successMessage && (
        <div className="fixed top-5 right-5 z-[100] p-4 rounded-lg bg-green-600 text-white shadow-xl flex items-center gap-2 transition-opacity duration-500">
          <CheckCircle className="h-5 w-5" />
          <p className="font-medium">{successMessage}</p>
        </div>
      )}
      {errorMessage && (
        <div className="fixed top-5 right-5 z-[100] p-4 rounded-lg bg-red-600 text-white shadow-xl flex items-center gap-2 transition-opacity duration-500">
          <AlertTriangle className="h-5 w-5" />
          <p className="font-medium">{errorMessage}</p>
        </div>
      )}

      {/* Upload Section */}
      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-6">
          <Card className="shadow-lg border border-dashed border-customTeal bg-slate-800">
            <CardContent className="p-8 space-y-10">
              
              {/* Upload */}
              <div className="flex flex-col items-center justify-center border border-dashed border-muted-foreground/70 rounded-xl p-10 bg-slate-900/40">
                <UploadCloud className="h-10 w-10 text-sky-500 mb-3" />
                <p className="font-medium text-slate-200">Upload Media for Verification</p>
                
                <input
                  type="file"
                  accept="image/*,video/*,audio/*"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                  disabled={urls.length > 0}
                />
                <Button
                  onClick={() => document.getElementById("file-upload")?.click()}
                  className="bg-sky-600 hover:bg-sky-700 text-white mt-4"
                  disabled={urls.length > 0}
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
                    className="flex-1 rounded-md border border-slate-700 px-4 py-2 text-sm bg-slate-800 text-white focus:ring-2 focus:ring-sky-500"
                    disabled={files.length > 0}
                  />
                  <Button
                    onClick={handleUrlAdd}
                    className="bg-sky-600 hover:bg-sky-700 text-white"
                    disabled={files.length > 0}
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

              {/* UPDATED: Email and Phone Input Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Email Input */}
                  <div className="flex flex-col w-full space-y-2">
                      <label htmlFor="user-email" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                          <Mail className="h-4 w-4 text-sky-400" />
                          Your Email (Optional, for receipt)
                      </label>
                      <input
                          type="email"
                          id="user-email"
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                          placeholder="name@example.com (Optional)"
                          className="rounded-md border border-slate-700 px-4 py-2 text-sm bg-slate-900 text-white focus:ring-2 focus:ring-sky-500"
                      />
                  </div>
                  
                  {/* Phone Input */}
                  <div className="flex flex-col w-full space-y-2">
                      <label htmlFor="user-phone" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                          <Phone className="h-4 w-4 text-sky-400" />
                          Your Phone (Optional, for M-Pesa tracking)
                      </label>
                      <input
                          type="tel"
                          id="user-phone"
                          value={userPhone}
                          onChange={(e) => setUserPhone(e.target.value)}
                          placeholder="e.g., 0712345678 (Optional)"
                          className="rounded-md border border-slate-700 px-4 py-2 text-sm bg-slate-900 text-white focus:ring-2 focus:ring-sky-500"
                      />
                  </div>
              </div>


              {/* Action Button: Pay or Verify */}
              <div className="mt-6">
                {!paymentCompleted ? (
                  <div className="flex justify-center">
                    <PaystackButton
                      {...paystackConfig}
                      onSuccess={handlePaymentSuccess}
                      // Submission is only disabled if no file/URL is ready
                      disabled={isSubmitDisabled} 
                      className={`w-full bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded-md font-semibold text-lg transition-colors ${
                        isSubmitDisabled ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    />
                  </div>
                ) : (
                  <Button
                    disabled={isLoading || !isReadyToSubmit} 
                    onClick={handleVerify}
                    className="w-full bg-green-600 hover:bg-green-700 text-white mt-6"
                  >
                    {isLoading ? "Verifying..." : "Re-Verify Media"}
                  </Button>
                )}
                 {!isReadyToSubmit && (
                    <p className="mt-2 text-center text-sm text-slate-400">Please upload a file or add a URL to proceed.</p>
                )}
                {/* Removed the red error message about email/phone being required */}
              </div>
            </CardContent>

            {/* Footer note */}
            <p className="text-xs text-slate-400 text-center pb-4">
              Max file size: 300MB. Accepted formats: images, video, audio. Verification Fee: KSh {verificationFeeKsh} (via Paystack).
            </p>
          </Card>
        </div>
      </main>

      {/* Results Modal */}
      {result && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-2">
          <div className="bg-slate-800 border border-sky-600 rounded-2xl py-4 px-8 w-full max-w-4xl text-neutral-100 shadow-2xl
            max-h-[95vh] overflow-y-auto">
            
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
              {/* Media Preview (Simplified) */}
              <div className="flex flex-col items-center justify-center">
                {(result.fileMeta.type.startsWith("image/") || result.fileMeta.type.startsWith("video/")) && (
                  <img
                    src={result.mediaPreview || result.fileUrl}
                    alt={result.fileMeta.name}
                    className="w-72 h-72 object-contain rounded-lg border border-slate-700"
                  />
                )}
                {result.fileMeta.type.startsWith("audio/") && (
                    <p className="text-sm text-slate-400">Audio results available.</p>
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
                        className={`text-lg font-bold ${result.result.status === "AUTHENTIC"
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
                        width: `${result.result.score ? result.result.score * 100 : 0
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
                  </div>
                </div>
              </div>
            </div>

            {/* Developer Raw */}
            <div className="mt-8 border-t border-slate-700 pt-4">
              <details className="bg-neutral-800/40 rounded-lg p-4">
                <summary className="cursor-pointer text-sky-400 font-medium">
                  Raw Developer Data
                </summary>
                <pre className="text-xs mt-3 max-h-60 overflow-auto text-slate-300 bg-black/30 border border-slate-700 p-3 rounded-lg">
                  {JSON.stringify(result.result.raw, null, 2)}
                </pre>
              </details>

              <div className="flex justify-end mt-6 gap-3">
                <Button
                  variant="outline"
                  className="border-slate-500 text-slate-900 bg-slate-200 hover:bg-red-600 hover:text-white"
                  onClick={() => {
                    setResult(null);
                    setFiles([]);
                    setUrls([]);
                    setPaymentCompleted(false);
                    setUserEmail("");
                    setUserPhone("");
                  }}
                >
                  Close & Reset
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}