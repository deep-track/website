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

    const verifyResponse = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!verifyResponse.ok) {
      const errorText = await verifyResponse.text();
      console.error("❌ Paystack API error response:", errorText);
      return NextResponse.json(
        {
          status: "error",
          message: `Paystack API request failed (${verifyResponse.status})`,
        },
        { status: verifyResponse.status }
      );
    }

    let verifyData: any;
    try {
      verifyData = await verifyResponse.json();
    } catch (parseErr) {
      const rawText = await verifyResponse.text();
      console.error("⚠️ Paystack returned non-JSON response:", rawText);
      return NextResponse.json(
        {
          status: "error",
          message: "Invalid or unexpected response from Paystack API",
        },
        { status: 502 }
      );
    }

    if (verifyData.status && verifyData.data?.status === "success") {
      console.log("✅ Payment verified for:", reference);
      return NextResponse.json({
        status: "success",
        message: "Payment verified successfully.",
        data: verifyData.data,
      });
    }

    console.warn("⚠️ Payment verification failed:", verifyData);
    return NextResponse.json(
      {
        status: "failed",
        message:
          verifyData.message ||
          "Payment not verified or incomplete. Please try again.",
        data: verifyData.data || null,
      },
      { status: 403 }
    );
  } catch (error: any) {
    console.error("🔥 VERIFY-PAYMENT ERROR:", error);
    return NextResponse.json(
      {
        status: "error",
        message:
          error instanceof Error ? error.message : "An unknown server error occurred",
      },
      { status: 500 }
    );
  }
}
