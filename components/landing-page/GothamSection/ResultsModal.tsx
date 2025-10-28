import { X, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VerificationResult } from "./types";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { modelMap } from "./pdfUtils";


interface ResultsModalProps {
    result: VerificationResult | null;
    onClose: () => void;
    onDownloadPDF: (result: VerificationResult) => void;
    onReset: () => void;
}

export default function ResultsModal({
    result,
    onClose,
    onDownloadPDF,
    onReset,
}: ResultsModalProps) {
    if (!result) return null;

    const { paymentDetails } = result;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-foreground border border-customTeal rounded-2xl p-6 w-full max-w-5xl text-neutral-100 shadow-2xl max-h-[95vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-sky-400">Verification Report</h2>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="text-slate-400 hover:text-sky-400"
                    >
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                {/* Top Summary Section */}
                <div className="grid md:grid-cols-2 gap-8">                        

                    {/* Media confidence */}
                    <div className="flex flex-col justify-between space-y-4">
                        <div>
                            <div className="flex justify-between items-center mt-2 mb-3">
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
                                    className={`h-2 rounded-full ${result.result.status === "AUTHENTIC"
                                            ? "bg-green-600"
                                            : "bg-red-500"
                                        }`}
                                    style={{
                                        width: `${result.result.score ? result.result.score * 100 : 0}%`,
                                    }}
                                ></div>
                            </div>

                        </div>
                    </div>
                      {/* Media Details */}

                                        <div className="flex flex-col items-center justify-center space-y-3">
                                                <div>
                            <h3 className="text-lg font-semibold mb-4">File Details</h3>



                            <div className="grid grid-cols-2 gap-2 text-slate-300">
                                <p>
                                    <strong>File Name:</strong> {result.fileMeta.name}
                                </p>
                                <p>
                                    <strong>Uploaded:</strong>{" "}
                                    {new Date(result.timestamp).toDateString()}
                                </p>
                                <p>
                                    <strong>Type:</strong>{" "}
                                    {result.fileMeta.type.split("/")[0].toUpperCase()}
                                </p>
                                <p>
                                    <strong>Format:</strong>{" "}
                                    {result.fileMeta.type.split("/")[1].toUpperCase()}
                                </p>
                                <p>
                                    <strong>Status:</strong>{" "}
                                    <span className="font-semibold">
                                        {result.result.status}
                                    </span>
                                </p>
                                <p>
                                    <strong>Confidence:</strong>{" "}
                                    {result.result.score
                                        ? `${(result.result.score * 100).toFixed(1)}%`
                                        : "N/A"}
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* --- UPDATED: Payment Summary Section --- */}
                <div className="mt-10 p-4 border border-slate-700 rounded-lg bg-slate-800/40">
                    <h3 className="text-lg font-semibold mb-3 border-b border-customTeal pb-2 text-sky-400">Payment Summary</h3>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
                        <p>
                            <strong>Amount Charged:</strong>{" "}
                            {/* Primary Display: Show Foreign amount (e.g., $0.78 USD) if available, otherwise show Local (e.g., KES 100) */}
                            {paymentDetails.foreignAmount && paymentDetails.foreignCurrency ? (
                                <span className="font-bold text-lg text-green-400">
                                    {paymentDetails.foreignCurrency}{" "}
                                    {paymentDetails.foreignAmount.toFixed(2)}
                                </span>
                            ) : (
                                <span className="font-semibold text-white">
                                    {paymentDetails.localCurrency}{" "}
                                    {paymentDetails.localAmount.toFixed(2)}
                                </span>
                            )}
                        </p>
                        <p>
                            <strong>Payment Channel:</strong>{" "}
                            <span className="font-semibold capitalize">
                                {paymentDetails.channel} {paymentDetails.cardType ? `(${paymentDetails.cardType})` : ''}
                            </span>
                        </p>
                    </div>

                    {/* Secondary Display: Show the local equivalent if foreign was primary */}
                    {paymentDetails.foreignAmount && paymentDetails.foreignCurrency && (
                        <p className="mt-2 text-xs italic text-slate-400">
                            * Paid in local currency:{" "}
                            <span className="font-semibold text-white">
                                {paymentDetails.localCurrency}{" "}
                                {paymentDetails.localAmount.toFixed(2)}
                            </span>
                        </p>
                    )}
                </div>
                {/* --- END UPDATED SECTION --- */}

                {/* Analysis Results Grid */}
                <div className="mt-10">
                    <h3 className="text-lg font-semibold mb-4">Analysis Results</h3>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {result.result.models?.map((model, index) => (
                            <div
                                key={index}
                                className={`rounded-xl p-4 shadow-md shadow-slate-900 border border-slate-800 transition-all ${model.status === "MANIPULATED"
                                        ? "border-l-4 border-l-red-500 pl-6"
                                        : model.status === "AUTHENTIC"
                                            ? "border-l-4 border-l-green-600 pl-6"
                                            : "border-slate-600 bg-slate-800/40"
                                    }`}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="text-sm font-semibold text-white">
                                        {modelMap[model.name]?.label || model.name}
                                    </h4>
                                    <span
                                        className={`text-xs px-2 py-1 rounded-full ${model.status === "MANIPULATED"
                                                ? "bg-red-600/40 text-red-300"
                                                : model.status === "AUTHENTIC"
                                                    ? "bg-green-600/40 text-green-300"
                                                    : "bg-slate-700 text-gray-300"
                                            }`}
                                    >
                                        {model.status || "ANALYZING"}
                                    </span>
                                </div>

                                <div className="w-full bg-neutral-700 h-1.5 mt-8 rounded-full">
                                    <div
                                        className={`h-1.5 rounded-full ${model.status === "MANIPULATED"
                                                ? "bg-red-500"
                                                : model.status === "AUTHENTIC"
                                                    ? "bg-green-500"
                                                    : "bg-sky-500 animate-pulse"
                                            }`}
                                        style={{
                                            width: `${model.score ? model.score * 100 : 10}%`,
                                        }}
                                    ></div>
                                </div>

                                <p className="mt-1 text-right text-[10px] text-gray-400">
                                    Confidence:{" "}
                                    {model.score
                                        ? `${(model.score * 100).toFixed(1)}%`
                                        : "N/A"}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex justify-end mt-8 gap-3 border-t border-slate-700 pt-4">
                    <Button
                        onClick={() => onDownloadPDF(result)}
                        className="bg-sky-600 hover:bg-sky-700 text-white flex items-center gap-2"
                    >
                        <FileDown className="h-4 w-4" /> Download PDF Report
                    </Button>

                    <Button
                        variant="outline"
                        className="border-slate-500 text-white bg-slate-700/50 hover:bg-red-600 hover:text-white"
                        onClick={onReset}
                    >
                        Close & Reset
                    </Button>
                </div>
            </div>
        </div>
    );
}