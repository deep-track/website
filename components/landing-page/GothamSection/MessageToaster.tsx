import { CheckCircle, AlertTriangle } from "lucide-react";

interface MessageToasterProps {
  successMessage: string;
  errorMessage: string;
}

export default function MessageToaster({ successMessage, errorMessage }: MessageToasterProps) {
  return (
    <>
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
    </>
  );
}