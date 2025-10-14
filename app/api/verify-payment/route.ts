import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { reference, testMode } = await req.json();

    if (!reference) {
      return NextResponse.json(
        { status: "error", message: "Missing payment reference" },
        { status: 400 }
      );
    }

    const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
    if (!PAYSTACK_SECRET_KEY) {
      return NextResponse.json(
        { status: "error", message: "Missing Paystack secret key" },
        { status: 500 }
      );
    }

    // TEST MODE (for development)
    if (testMode === true) {
      console.log("🧪 Test Mode: Skipping Paystack API call — faking success.");
      return NextResponse.json({
        status: "success",
        message: "Payment verified successfully (test mode).",
        data: {
          reference,
          amount: 1000,
          currency: "KES",
          paid_at: new Date().toISOString(),
        },
      });
    }

    // REAL PAYMENT VERIFICATION
    const verifyResponse = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const verifyData = await verifyResponse.json();

    if (verifyData.status && verifyData.data.status === "success") {
      console.log("Payment verified for:", reference);
      return NextResponse.json({
        status: "success",
        message: "Payment verified successfully.",
        data: verifyData.data,
      });
    } else {
      console.log("Payment verification failed:", verifyData);
      return NextResponse.json(
        { status: "failed", message: "Payment not verified or incomplete." },
        { status: 403 }
      );
    }
  } catch (error) {
    console.error("VERIFY-PAYMENT ERROR:", error);
    return NextResponse.json(
      {
        status: "error",
        message:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}
