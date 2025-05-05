import React from "react";
import Image from "next/image";
import Link from "next/link";
import { icons } from "@/constants";

const Logo = ({ className, lg }) => {
  return (
    <Link
      href="/"
      className={`text-gradient font-semibold ${
        lg
          ? "text-[6vw] xs:text-[22px] md:text-[24px]"
          : "text-[5.5vw] xs:text-[20px] md:text-[22px]"
      }`}
    >
      {/* <Image
        src={icons.navlogo}
        alt="Logo"
        width={150}
        height={30}
        className={className ? className : "w-[121px] md:w-auto  h-6"}
      /> */}
      FundedBase
    </Link>
  );
};

export default Logo;
