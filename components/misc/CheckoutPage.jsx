"use client";

import { useSearchParams } from "next/navigation";

import { CheckoutCard, Loading } from "@/components";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const CheckoutPage = () => {
  const searchParams = useSearchParams();

  const amount = searchParams.get("amount");

  return (
    <div>
      <div className="relative z-10 pt-10 lg:pt-14 flex flex-col items-center justify-center gap-6 text-center px-4">
        {/* Gap */}
        <div className="m-[1.2rem] lg:m-[2rem]"></div>
        {/* Title */}
        <div className="relative w-fit">
          {/* Blured BG layer */}
          <h1 className="absolute top-0 left-0 geist font-semibold text-[36px] md:text-[60px] leading-[100%] max-w-[754px] text-white opacity-50 blur-[4px] pointer-events-none select-none">
            Get Funded
          </h1>
          {/* Main Title */}
          <h1 className="relative geist font-semibold text-[36px] md:text-[60px] leading-[100%] max-w-[754px] text-white">
            Get Funded
          </h1>
        </div>
      </div>

      <div className="relative w-full lg:w-[862px] mx-auto mt-[2rem] lg:mt-[2.5rem] !mb-[4rem] lg:!mb-[5rem] px-3">
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            currency: "usd",
            amount: convertToSubcurrency(amount),
          }}
        >
          <CheckoutCard amount={amount} />
        </Elements>
      </div>
    </div>
  );
};

export default CheckoutPage;
