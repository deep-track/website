"use client";

import dynamic from "next/dynamic";
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

  /* Removed the manual useEffect for script injection and cleanup.
  The 'react-paystack' library handles the script injection via 
  the dynamic import and handles cleanup internally when the component unmounts.
  Manual intervention often leads to conflicts or unnecessary complexity.
  */

  return (
    <div className="mt-6">
      {!paymentCompleted ? (
        <div className="flex justify-center">
          {/* PaystackButton is only rendered client-side due to dynamic import */}
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
        // Button displayed after successful payment, used to trigger media verification
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