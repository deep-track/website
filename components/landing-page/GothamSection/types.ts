export interface PaystackReference {
  reference: string;
}

export interface FileMeta {
  name: string;
  type: string;
  size: number;
}

export interface ModelResult {
  name: string;
  status?: string;
  score?: number;
}

// --- NEW INTERFACE: Details about the payment transaction ---
export interface PaymentDetails {
  localAmount: number; // e.g., 100 (in KES)
  localCurrency: string; // e.g., "KES"
  foreignAmount: number | null; // e.g., 0.78 (in USD, if cross-border card used)
  foreignCurrency: string | null; // e.g., "USD"
  channel: string; // e.g., "card", "mpesa"
  cardType?: string; // e.g., "visa", "mastercard"
}
// -----------------------------------------------------------

export interface VerificationResult {
  fileMeta: FileMeta;
  timestamp: string;
  result: {
    status: string;
    score: number | null;
    models?: ModelResult[];
  };
  mediaPreview?: string;
  fileUrl?: string;
  
  // --- UPDATED: Include the new payment details ---
  paymentDetails: PaymentDetails;
  // ------------------------------------------------
}

export interface PaystackConfig {
  email: string;
  amount: number;
  currency: string;
  publicKey: string;
  text: string;
  onClose: () => void;
  metadata: {
    custom_fields: Array<{
      display_name: string;
      variable_name: string;
      value: string;
    }>;
  };
}