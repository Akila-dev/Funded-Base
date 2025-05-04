import React from "react";
import Image from "next/image";
import Link from "next/link";
import { icons } from "@/constants";

const Logo = ({ className }) => {
  return (
    <Link href="/" className={``}>
      <Image
        src={icons.navlogo}
        alt="Logo"
        width={150}
        height={30}
        className={className ? className : "w-[121px] md:w-auto  h-6"}
      />
    </Link>
  );
};

export default Logo;
