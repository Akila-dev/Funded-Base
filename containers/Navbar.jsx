"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Logo, MenuButton, IconButton, Button } from "@/components";
import { data, icons } from "@/constants";

const MobileNavPopup = () => (
  <div className="fixed !z-100 lg:hidden top-[6rem] left-0 w-full animate-fade-in-down">
    <div className="w-full px-4 py-6 bg-[#FFFFFF0F] border border-[#7A7A7B70] rounded-[12px] flex flex-col items-center gap-4 backdrop-blur-sm z-10">
      <ul className="flex flex-col items-center gap-4 list-none w-full">
        {data.menu_links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.url}
              className="cursor-pointer w-full  hover:text-white text-center"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={data.def_links.dashboard}
            className="flex justify-center cursor-pointer hover:text-white duration-200 gap-2 items-center bg-[#FFFFFF0F] w-[15rem] px-4 py-2 rounded-[8px]"
          >
            <Image src={icons.dashboardicon} alt="dashboard" />
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

const Navbar = () => {
  const [showMenuPopup, setShowMenuPopup] = useState(false);

  return (
    <div className="flex fixed w-full justify-center z-100">
      <nav className=" flex justify-between mx-[0.5rem] lg:block   bg-[#FFFFFF0F] border  border-[#7A7A7B70] backdrop-blur-xl rounded-[12px] w-full max-w-[900px]   mt-1 lg:mt-5 px-5 py-4 text-[#7A7A7B]">
        <div className="flex justify-between">
          {/* Hamburger and Logo */}
          <div className="flex items-center gap-2">
            <MenuButton
              showMenuPopup={showMenuPopup}
              setShowMenuPopup={setShowMenuPopup}
            />
            <Logo />
          </div>
          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center list-none gap-[2rem]">
            {data.menu_links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className="cursor-pointer duration-200   hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-5">
            <Button
              icon_l={<Image src={icons.dashboardicon} alt="dashboard" />}
              text="Dashboard"
              href={data.def_links.dashboard}
            />
            <Button
              text="Get Funded"
              href={data.def_links.challenges}
              type="nav"
            />
          </div>
        </div>

        {/* Tablet and Mobile Only */}
        <div className="lg:hidden">
          <Button
            text="Get Funded"
            href={data.def_links.challenges}
            type="nav-dark"
          />
        </div>
      </nav>
      {showMenuPopup && <MobileNavPopup />}
    </div>
  );
};

export default Navbar;
