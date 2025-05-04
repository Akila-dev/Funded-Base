import React from "react";
import Image from "next/image";
import Link from "next/link";
import { icons } from "@/constants";

const Logo = ({ w }) => {
  return (
    <Link href="/" className={``}>
      <Image
        src={icons.navlogo}
        alt="Logo"
        width={121}
        height={24}
        className="w-[121px] md:w-auto  h-6"
      />
    </Link>
  );
};

export default Logo;
