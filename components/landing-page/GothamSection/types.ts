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