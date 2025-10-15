"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { PaystackConfig } from "./types";

// Dynamically import Paystack client-side only
const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false }
);

interface PaymentButtonProps {
  paymentCompleted: boolean;
  isLoading: boolean;
  isReadyToSubmit: boolean;
  paystackConfig: PaystackConfig;
  onPaymentSuccess: (response: any) => void;
  onVerify: () => void;
}

export default function PaymentButton({
  paymentCompleted,
  isLoading,
  isReadyToSubmit,
  paystackConfig,
  onPaymentSuccess,
  onVerify,
}: PaymentButtonProps) {
  const isSubmitDisabled = isLoading || !isReadyToSubmit;
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;

    // Check if Paystack script already exists
    const existingScript = document.querySelector<HTMLScriptElement>(
      "script[src*='paystack']"
    );

    if (existingScript) {
      scriptLoaded.current = true;
      return;
    }

    // Inject Paystack script only once globally
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    script.onload = () => {
      scriptLoaded.current = true;
      console.log("Paystack script loaded once");
    };
    document.body.appendChild(script);

    // Cleanup: remove Paystack iframes & any manually injected script on unmount
    return () => {
      // Remove manually added Paystack script
      const manualScript = document.querySelector<HTMLScriptElement>(
        "script[src*='paystack'][data-manual='true']"
      );
      if (manualScript) manualScript.remove();

      // Clean up leftover Paystack iframes
      const paystackIframes = Array.from(
        document.querySelectorAll("iframe[id^='inline-']")
      );

      if (paystackIframes.length > 0) {
        console.log(`🧹 Removed ${paystackIframes.length} leftover Paystack iframes.`);
        paystackIframes.forEach((iframe) => iframe.remove());
      }
    };
  }, []);

  return (
    <div className="mt-6">
      {!paymentCompleted ? (
        <div className="flex justify-center">
          <PaystackButton
            {...paystackConfig}
            onSuccess={onPaymentSuccess}
            disabled={isSubmitDisabled}
            className={`w-full bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded-md font-semibold transition-colors ${
              isSubmitDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          />
        </div>
      ) : (
        <Button
          disabled={isLoading || !isReadyToSubmit}
          onClick={onVerify}
          className="w-full bg-green-600 hover:bg-green-700 text-white mt-6"
        >
          {isLoading ? "Verifying..." : "Re-Verify Media"}
        </Button>
      )}

      {!isReadyToSubmit && (
        <div className="flex justify-center mb-2">
          <p className="text-center text-sm text-sky-400">
            Please upload a file or add a URL to proceed.
          </p>
        </div>
      )}
    </div>
  );
}
