import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { reference } = await req.json();

    // Check for missing reference
    if (!reference) {
      return NextResponse.json(
        { status: "error", message: "Missing reference" },
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

    // Verify transaction via Paystack
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (data.status && data.data.status === "success") {
      return NextResponse.json({ status: "success", data: data.data });
    } else {
      return NextResponse.json(
        { status: "failed", message: data.message || "Verification failed" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("PAYSTACK VERIFY ERROR:", error);
    return NextResponse.json(
      { status: "error", message: (error instanceof Error ? error.message : "An unknown error occurred") },
      { status: 500 }
    );
  }
}
