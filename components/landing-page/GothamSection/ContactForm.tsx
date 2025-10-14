import { Mail, Phone } from "lucide-react";

interface ContactFormProps {
  userEmail: string;
  userPhone: string;
  onEmailChange: (email: string) => void;
  onPhoneChange: (phone: string) => void;
}

export default function ContactForm({
  userEmail,
  userPhone,
  onEmailChange,
  onPhoneChange,
}: ContactFormProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Email Input */}
      <div className="flex flex-col w-full space-y-2">
        <label htmlFor="user-email" className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Mail className="h-4 w-4 text-sky-400" />
          Email (Optional, for receipt)
        </label>
        <input
          type="email"
          id="user-email"
          value={userEmail}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="name@example.com (Optional)"
          className="rounded-md border border-slate-700 px-4 py-2 text-sm bg-foreground text-white focus:ring-2 focus:ring-sky-500"
        />
      </div>

      {/* Phone Input */}
      <div className="flex flex-col w-full space-y-2">
        <label htmlFor="user-phone" className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Phone className="h-4 w-4 text-sky-400" />
          Phone (Optional, for M-Pesa tracking)
        </label>
        <input
          type="tel"
          id="user-phone"
          value={userPhone}
          onChange={(e) => onPhoneChange(e.target.value)}
          placeholder="e.g., 0712345678 (Optional)"
          className="rounded-md border border-slate-700 px-4 py-2 text-sm bg-foreground/40 text-white focus:ring-2 focus:ring-sky-500"
        />
      </div>
    </div>
  );
}