export default async function PaymentSuccess({ searchParams }) {
  const { amount } = await searchParams;

  return (
    <main className="pt-[7rem] lg:pt-[9rem] pb-[2.5rem] lg:pb-[3rem]">
      <div
        className="relative z-10 pb-10 flex flex-col items-center justify-center gap-6 text-center px-4 rounded-2xl w-[90%] max-w-[900px] shadow-lg mx-auto border border-white/10"
        style={{
          background:
            "radial-gradient(54.37% 124.75% at 53.04% 84.37%, rgba(76, 111, 192, 0.56) 0%, rgba(4, 34, 94, 0.56) 41.43%, rgba(0, 0, 0, 0.56) 100%)",
        }}
      >
        {/* Gap */}
        <div className="m-[1.2rem] lg:m-[2rem] !mt-0"></div>
        {/* Title */}
        <div className="relative w-fit">
          {/* Blured BG layer */}
          <h1 className="absolute top-0 left-0 geist font-semibold text-[36px] md:text-[60px] leading-[100%] max-w-[754px] text-white opacity-50 blur-[4px] pointer-events-none select-none">
            Thank you!
          </h1>
          {/* Main Title */}
          <h1 className="relative geist font-semibold text-[36px] md:text-[60px] leading-[100%] max-w-[754px] text-white">
            Thank you!
          </h1>
        </div>
        {/* Subtitle */}
        <h2 className="geist font-medium text-[16px] text-[#7A7A7B] leading-[100%] max-w-[632px]">
          You successfully sent
        </h2>

        <div className="nav-dark-btn-wrapper w-full max-w-[632px] flex justify-center items-center">
          <h2 className="geist font-semibold text-[16px] lg:text-[20px] text-black leading-[100%] tracking-wide backdrop-blur-sm border border-transparent bg-white border-none rounded-[5px] py-3 px-4">
            ${amount}
          </h2>
        </div>
      </div>
      {/* <div className="pt-10">
        <div className="">
          <h1 className="">Thank you!</h1>
          <h2 className="">You successfully sent</h2>

          <div className="">${amount}</div>
        </div>
      </div> */}
    </main>
  );
}
