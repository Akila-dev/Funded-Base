"use client";

import { useState } from "react";

import { data } from "@/constants";
import { ChallengeTable } from "@/components";

const Challenge = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVal, setActiveVal] = useState(data.price_list[0].val);
  return (
    <div id="challenges" className="mt-[2rem] lg:mt-[120px]">
      <h1 className="geist px-2 font-semibold text-[30px] md:text-[40px] leading-[100%] max-w-[754px] text-center mx-auto text-white">
        Take The challenge, Earn Your Funding
      </h1>

      <br />
      <br />

      {/* INFO TABLE */}
      <ChallengeTable activeVal={activeVal} activeIndex={activeIndex} />
    </div>
  );
};

export default Challenge;
