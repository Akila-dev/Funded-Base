import Image from "next/image";
import { FaArrowDownLong } from "react-icons/fa6";
import { HiOutlineArrowDown } from "react-icons/hi";

import { images, data } from "@/constants";
import { GetFundedCTA, JoinCommunityCTA } from "@/components";
import {
  Hero,
  Challenges,
  TradingPlatforms,
  EvaluationProcess,
  FlexiblePayouts,
  Dashboard,
} from "@/containers";

export default function Home() {
  return (
    <>
      <Hero />
      <Challenges />
      <TradingPlatforms />
      <EvaluationProcess />
      <FlexiblePayouts />
      {/* Why Fundedbase */}
      <div className="mt-[5.5rem] lg:mt-[11.26rem]">
        <h1 className="geist font-medium text-[14px] leading-[100%] max-w-[754px] text-center mb-3 mx-auto text-[#7A7A7B]">
          Why FundedBase
        </h1>
        <h1 className="geist font-semibold text-[30px] lg:text-[40px] leading-[100%] px-2 mb-10 text-center mx-auto text-white">
          The Benefits You want are available here
        </h1>
      </div>
      <div className="overflow-hidden relative w-full">
        {/* Left Blur Overlay */}
        <div className="absolute top-0 left-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent"></div>
        {/* Right Blur Overlay */}
        <div className="absolute top-0 right-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent"></div>
        {/* Marquee */}
        <div className="marquee flex items-center gap-10 w-max">
          {[...data.why_choose_us, ...data.why_choose_us].map((item, index) => (
            <Image
              key={index}
              src={item}
              alt={"why choose us" + index + 1}
              width={332}
              height={195}
              className="w-[332px] h-[195px]"
            />
          ))}
        </div>
      </div>
      <GetFundedCTA />
      {/* Celebrate Every win */}
      <div className="mt-[5.5rem] lg:mt-[11.26rem]">
        <h1 className="geist font-semibold text-[30px] lg:text-[40px] leading-[100%] px-2 mb-5 text-center mx-auto text-white">
          Celebrate Every Win
        </h1>
        <h1 className="geist font-medium text-[14px] leading-[100%] max-w-[754px] text-center mb-3 mx-auto text-[#7A7A7B]">
          and unlock access to a funded account
        </h1>
      </div>
      <br />
      {/* Marquee */}
      <div className="overflow-hidden relative ">
        <div className="marquee flex items-center gap-10 w-max">
          {data.certifications.map((item, index) => (
            <Image
              key={index}
              src={item}
              alt={"certificate" + index + 1}
              width={301}
              height={301}
              className="w-[301px] h-[301px] object-cover"
            />
          ))}
        </div>
      </div>

      <Dashboard />

      {/* HEAR FROM OUR TRADERS */}
      <div className="overflow-hidden relative my-[11.255rem]">
        <div className="marquee flex items-center gap-10 w-max">
          {data.testimonials.map((item, index) => (
            <div key={index} className="w-[400px] h-[300px] bg-white">
              <Image
                src={item}
                alt={"testimonial" + index + 1}
                width={300}
                height={400}
                className="w-[300px] h-[400px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <JoinCommunityCTA />
    </>
  );
}
