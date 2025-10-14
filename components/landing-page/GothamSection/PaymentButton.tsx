import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { PaystackConfig } from "./types";

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
      
      <div className="flex justify-center mb-2">
        {!isReadyToSubmit && (
          <p className="text-center text-sm text-sky-400">
            Please upload a file or add a URL to proceed.
          </p>
        )}
      </div>
    </div>
  );
}