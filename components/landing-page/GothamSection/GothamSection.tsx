"use client";

import { useState, useMemo, useEffect } from "react";
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

export default function GothamSection() {
    // ─── State Management ─────────────────────────────────────────────
    const [files, setFiles] = useState<File[]>([]);
    const [urlInput, setUrlInput] = useState("");
    const [urls, setUrls] = useState<string[]>([]);
    const [result, setResult] = useState<VerificationResult | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [paymentCompleted, setPaymentCompleted] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");

    // ─── Constants ────────────────────────────────────────────────────
    const publicKey =
        process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "pk_test_xxxxxxxxxx";
    const verificationFeeKsh = 100;

    // ─── Paystack Configuration ───────────────────────────────────────
    const paystackConfig: PaystackConfig = useMemo(
        () => ({
            email:
                userEmail.includes("@") && userEmail.includes(".")
                    ? userEmail
                    : "customer@email.com",
            amount: verificationFeeKsh * 100,
            currency: "KES",
            publicKey,
            text: `Pay KSh ${verificationFeeKsh} to Verify Media`,
            onClose: () => setErrorMessage("Payment cancelled or closed!"),
            metadata: {
                custom_fields: [
                    {
                        display_name: "Customer Phone",
                        variable_name: "customer_phone",
                        value: userPhone,
                    },
                    {
                        display_name: "Customer Email",
                        variable_name: "customer_email",
                        value:
                            userEmail.includes("@") && userEmail.includes(".")
                                ? userEmail
                                : "N/A (using placeholder)",
                    },
                ],
            },
        }),
        [publicKey, userEmail, userPhone]
    );

    // ─── Utility Functions ────────────────────────────────────────────
    const setError = (message: string) => {
        setErrorMessage(message);
        setSuccessMessage("");
    };

    // ─── Effects ──────────────────────────────────────────────────────
    useEffect(() => {
        if (successMessage || errorMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage("");
                setErrorMessage("");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [successMessage, errorMessage]);

    // ─── Event Handlers ───────────────────────────────────────────────
    const handleFileChange = (file: File | null) => {
        setFiles(file ? [file] : []); // ✅ Always replace
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

    const handleRemoveFile = () => setFiles([]);

    const handleRemoveUrl = (index: number) => {
        setUrls((prev) => prev.filter((_, i) => i !== index));
        if (urls.length === 0 && files.length === 0) setPaymentCompleted(false);
    };

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
                body,
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

    const handleDownloadPDFWrapper = () => {
        if (result) handleDownloadPDF(result);
    };

    const handleReset = () => {
        setResult(null);
        setFiles([]);
        setUrls([]);
        setPaymentCompleted(false);
        setUserEmail("");
        setUserPhone("");
    };

    const isReadyToSubmit = files.length > 0 || urls.length > 0;

    // ─── Render ───────────────────────────────────────────────────────
    return (
        <div className="min-h-screen flex flex-col relative bg-card-gradient border-t-customTeal text-white">
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
                    and videos so you always know what's real and what's not.
                </p>
            </section>

            {/* Message Toasters */}
            <MessageToaster successMessage={successMessage} errorMessage={errorMessage} />

            {/* Main Content */}
            <main className="flex-1">
                <div className="mx-auto max-w-2xl px-6">
                    <Card className="shadow-lg border border-dashed border-customTeal bg-foreground/10">
                        <CardContent className="p-8 space-y-10">
                            <div className="text-sm text-sky-400 flex items-start gap-2">
                                <AlertTriangle className="w-4 h-4 mt-0.5" />
                                <p>
                                    If your image contains faces, please ensure they are clearly visible and not too small.
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

                            <PaymentButton
                                paymentCompleted={paymentCompleted}
                                isLoading={isLoading}
                                isReadyToSubmit={isReadyToSubmit}
                                paystackConfig={paystackConfig}
                                onPaymentSuccess={handlePaymentSuccess}
                                onVerify={handleVerify}
                            />
                        </CardContent>

                        {/* Footer Note */}
                        <p className="text-xs text-slate-400 text-center pb-4">
                            Max file size: 300MB. Accepted formats: JPG, PNG, MP3, WAV, MP4,
                            WebM, MOV, AVI, WMV, MKV, FLV.
                        </p>
                    </Card>
                </div>
            </main>

            {/* Feature Cards */}
            <FeatureCards />

            {/* Results Modal */}
            <ResultsModal
                result={result}
                onClose={() => setResult(null)}
                onDownloadPDF={handleDownloadPDFWrapper}
                onReset={handleReset}
            />
        </div>
    );
}
