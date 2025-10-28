"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import MessageToaster from "./MessageToaster";
import UploadSection from "./UploadSection";
import ContactForm from "./ContactForm";
import PaymentButton from "./PaymentButton";
import FeatureCards from "./FeatureCards";
import ResultsModal from "./ResultsModal";
import { 
  PaystackReference, 
  PaystackConfig, 
  VerificationResult,
} from "./types"; 
import { handleDownloadPDF } from "./pdfUtils";
import { AlertTriangle } from "lucide-react";
import * as Sentry from "@sentry/nextjs";

// Define pricing constants
const PRICES = {
    // FIX APPLIED HERE: KES 100 is 10000 subunits (cents)
    KES: { amount: 100, subunit: 10000, label: "KSh 100" }, 
    USD: { amount: 2, subunit: 200, label: "$2" }, // 0.78 USD = 78 cents (Paystack subunit)
};

export default function GothamSection() {
  const [files, setFiles] = useState<File[]>([]);
  const [urlInput, setUrlInput] = useState("");
  const [urls, setUrls] = useState<string[]>([]);
  
  // State for selected currency
  const [selectedCurrency, setSelectedCurrency] = useState<"KES" | "USD">("KES");
  
  // The VerificationResult must now include PaymentDetails
  const [result, setResult] = useState<VerificationResult | null>(null); 
  
  const [isLoading, setIsLoading] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const publicKey =
    process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "pk_test_xxxxxxxxxx";
  
  const setError = (message: string) => {
    setErrorMessage(message);
    setSuccessMessage("");
  };

  const handleReset = useCallback(() => {
    setResult(null);
    setFiles([]);
    setUrls([]);
    setPaymentCompleted(false);
    // Keep email and phone for convenience
  }, []);

  useEffect(() => {
    if (!successMessage && !errorMessage) return;
    const timer = setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");
    }, 2500);
    return () => clearTimeout(timer);
  }, [successMessage, errorMessage]);

  // Clean up Paystack SDK on unmount
  useEffect(() => {
    return () => {
      const scripts = document.querySelectorAll('script[src*="paystack"]');
      scripts.forEach((s) => s.remove());
    };
  }, []);

  const paystackConfig: PaystackConfig = useMemo(() => {
    const price = PRICES[selectedCurrency];
    
    return {
      email: userEmail || "customer@email.com",
      // Paystack amount is in subunit (e.g., KES 100 * 100 = 10000; USD 0.78 * 100 = 78)
      amount: price.subunit, 
      currency: selectedCurrency,
      publicKey,
      text: `Pay ${price.label} to Verify Media`,
      onClose: () => setErrorMessage("Payment cancelled or closed!"),
      metadata: {
        custom_fields: [
          { display_name: "Customer Phone", variable_name: "customer_phone", value: userPhone },
          { display_name: "Customer Email", variable_name: "customer_email", value: userEmail || "N/A" },
        ],
      },
    };
  }, [userEmail, userPhone, publicKey, selectedCurrency]);

  const handleFileChange = (file: File | null) => {
    handleReset();
    setFiles(file ? [file] : []);
  };

  const handleUrlAdd = () => {
    if (urlInput.trim() === "") return;
    if (files.length > 0) {
      setError("Please clear uploaded files before adding a URL.");
      return;
    }
    handleReset();
    setUrls([urlInput.trim()]);
    setUrlInput("");
  };

  const handleRemoveFile = () => setFiles([]);
  const handleRemoveUrl = (index: number) =>
    setUrls((prev) => prev.filter((_, i) => i !== index));

  // Updated to accept and merge payment details from the verification step
  const handleVerify = useCallback(async (paymentDetails: any = null) => {
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
        body,
      });

      if (!res.ok) throw new Error("Verification failed on backend");
      
      const data = await res.json();
      
      // Merge verification result with the payment details.
      const finalResult: VerificationResult = {
        ...data,
        paymentDetails: paymentDetails || { 
          // If no payment was done (e.g., debug), use the KES default
          localAmount: PRICES.KES.amount, 
          localCurrency: "KES", 
          foreignAmount: null, 
          foreignCurrency: null, 
          channel: "M-Pesa/default" 
        }
      };

      setResult(finalResult);

    } catch (err) {
      console.error("Verification error:", err);
      Sentry.captureException(err);
      setError("Failed to verify media. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [files, urls]);

  // Updated to extract and pass paymentDetails from the server's verification response
  const handlePaymentSuccess = useCallback(
    async (response: PaystackReference) => {
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
          
          // Capture the structured paymentDetails returned by the API route
          const paymentDetails = verifyData.paymentDetails;

          // Proceed to media verification, passing payment details
          await handleVerify(paymentDetails);
        } else {
          setError("Payment verification failed! Please contact support.");
          setPaymentCompleted(false);
        }
      } catch (err) {
        console.error("Payment verification error:", err);
        Sentry.captureException(err);
        setError("Error verifying payment. Please try again or contact support.");
        setPaymentCompleted(false);
      } finally {
        setIsLoading(false);
      }
    },
    [handleVerify]
  );

  const handleDownloadPDFWrapper = useCallback(() => {
    if (result) handleDownloadPDF(result);
  }, [result]);

  const isReadyToSubmit = files.length > 0 || urls.length > 0;

  return (
    <div className="min-h-screen flex flex-col relative bg-card-gradient border-t-customTeal text-white">
      <Image
        src="/Vector.svg"
        alt="Blue Lines"
        width={400}
        height={300}
        className="absolute -right-72 md:-right-20 -z-10 customTeal"
      />

      <section className="mx-auto max-w-4xl text-center px-6 py-14">
        <h1 className="text-4xl md:text-5xl font-bold text-sky-500">
          Secure Media Integrity <br />
          <span className="text-white">Protect Your Digital Reality</span>
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Easily detect deepfakes and confirm authenticity of photos, audio, and videos.
        </p>
      </section>

      <MessageToaster successMessage={successMessage} errorMessage={errorMessage} />

      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-6">
          <Card className="shadow-lg border border-dashed border-customTeal bg-foreground/10">
            <CardContent className="p-8 space-y-10">
              <div className="text-sm text-sky-400 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5" />
                <p>
                  If your image contains faces, ensure they are clearly visible and not too small.
                </p>
              </div>

              <UploadSection
                files={files}
                urls={urls}
                urlInput={urlInput}
                onFileChange={handleFileChange}
                onUrlInputChange={setUrlInput}
                onUrlAdd={handleUrlAdd}
                onRemoveFile={handleRemoveFile}
                onRemoveUrl={handleRemoveUrl}
              />

              <ContactForm
                userEmail={userEmail}
                userPhone={userPhone}
                onEmailChange={setUserEmail}
                onPhoneChange={setUserPhone}
              />
                
              {/* --- CURRENCY SELECTION UI --- */}
              <div className="flex justify-center space-x-4">
                <button
                    onClick={() => setSelectedCurrency("KES")}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedCurrency === "KES"
                        ? "bg-sky-600 text-white shadow-md"
                        : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                    }`}
                >
                    Pay {PRICES.KES.label} (Local)
                </button>
                <button
                    onClick={() => setSelectedCurrency("USD")}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedCurrency === "USD"
                        ? "bg-sky-600 text-white shadow-md"
                        : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                    }`}
                >
                    Pay {PRICES.USD.label} (International)
                </button>
              </div>
              {/* --- END CURRENCY SELECTION UI --- */}

              <PaymentButton
                paymentCompleted={paymentCompleted}
                isLoading={isLoading}
                isReadyToSubmit={isReadyToSubmit}
                paystackConfig={paystackConfig}
                onPaymentSuccess={handlePaymentSuccess}
                // Only call handleVerify directly if payment is NOT required (i.e., skipping logic)
                onVerify={() => handleVerify()} 
              />
            </CardContent>

            <p className="text-xs text-slate-400 text-center pb-4">
              Max file size: 300MB. Accepted formats: JPG, PNG, MP3, WAV, MP4,
              WebM, MOV, AVI, WMV, MKV, FLV.
            </p>
          </Card>
        </div>
      </main>

      <FeatureCards />

      <ResultsModal
        result={result}
        onClose={() => setResult(null)}
        onDownloadPDF={handleDownloadPDFWrapper}
        onReset={handleReset}
      />
    </div>
  );
}