export const runtime = "nodejs";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const EXPECTED_AMOUNT_KES = 100;
const EXPECTED_AMOUNT_USD_SUBUNIT = 78;
const EXPECTED_AMOUNT_KES_SUBUNIT = 10000;

const extractPaymentDetails = (data: any, localKshAmount: number) => {
  const amountInSubunit = data.amount;
  const currency = data.currency || "KES";
  const initialAmountSubunit = data.log?.initial_amount;
  const initialCurrency = data.log?.initial_currency;

  let finalLocalAmount;
  let finalForeignAmount = null;
  let finalForeignCurrency = null;

  if (initialCurrency && initialCurrency !== currency) {
    finalLocalAmount = localKshAmount;
    finalForeignAmount = initialAmountSubunit / 100;
    finalForeignCurrency = initialCurrency;
  } else if (currency === "KES") {
    finalLocalAmount = localKshAmount;
  } else if (currency === "USD") {
    finalLocalAmount = amountInSubunit / 100;
  } else {
    finalLocalAmount = amountInSubunit;
  }

  return {
    localAmount: finalLocalAmount,
    localCurrency: currency,
    foreignAmount: finalForeignAmount,
    foreignCurrency: finalForeignCurrency,
    channel: data.channel || "Unknown",
    cardType: data.authorization?.card_type || "N/A",
  };
};

export async function POST(req: NextRequest) {
  try {
    const { reference } = await req.json();

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
      console.error("Paystack API error response:", errorText);
      return NextResponse.json(
        { status: "error", message: "Paystack verification failed" },
        { status: verifyResponse.status }
      );
    }

    const verifyData = await verifyResponse.json();

    if (!verifyData.status || !verifyData.data) {
      return NextResponse.json(
        { status: "failed", message: verifyData.message || "Verification failed" },
        { status: 400 }
      );
    }

    const transactionData = verifyData.data;
    const actualCurrency = transactionData.currency;
    const actualAmount = transactionData.amount;

    if (transactionData.status === "success") {
      let expectedSubunit = 0;
      if (actualCurrency === "KES") {
        expectedSubunit = EXPECTED_AMOUNT_KES_SUBUNIT;
      } else if (actualCurrency === "USD") {
        expectedSubunit = EXPECTED_AMOUNT_USD_SUBUNIT;
      }

      if (expectedSubunit > 0 && actualAmount !== expectedSubunit) {
        console.error(
          `Amount mismatch: expected ${expectedSubunit} ${actualCurrency}, received ${actualAmount}`
        );
        return NextResponse.json(
          {
            status: "failed",
            message:
              "Payment amount mismatch. Transaction may be fraudulent or altered.",
          },
          { status: 403 }
        );
      }

      const paymentDetails = extractPaymentDetails(
        transactionData,
        EXPECTED_AMOUNT_KES
      );

      console.log("✅ Payment verified for:", reference, paymentDetails);
      return NextResponse.json({
        status: "success",
        message: "Payment verified successfully.",
        data: transactionData,
        paymentDetails,
      });
    }

    return NextResponse.json(
      {
        status: "failed",
        message:
          transactionData.gateway_response ||
          verifyData.message ||
          "Payment not verified or incomplete.",
      },
      { status: 403 }
    );
  } catch (error: any) {
    console.error("VERIFY-PAYMENT ERROR:", error);
    return NextResponse.json(
      {
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "An unknown server error occurred",
      },
      { status: 500 }
    );
  }
}
