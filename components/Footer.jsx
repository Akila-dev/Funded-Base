"use client";

import { useRef, useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { images, icons, data } from "@/constants";
import { Logo } from "@/components";

const Footer = () => {
  const emailInput = useRef(null);
  const btnText = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    const email = emailInput.current.value.trim();

    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    // Show loading
    setIsLoading(true);
    btnText.current.textContent = "Subscribing...";

    // Simulate async request
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccessMsg(true);
      btnText.current.textContent = "Subscribe";
      emailInput.current.value = "";
    }, 2000); // Simulates a 2-second network request
  };

  return (
    <footer
      className="px-6 sm:px-10 md:px-[108px] py-[5rem] border-t border-[#7A7A7B59]"
      style={{
        background:
          "radial-gradient(54.37% 124.75% at 53.04% 84.37%, rgba(76, 111, 192, 0.56) 0%, rgba(4, 34, 94, 0.56) 41.43%, rgba(0, 0, 0, 0.56) 100%)",
      }}
    >
      <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
        {/*  Logo */}
        <div className="flex-shrink-0">
          <Logo className="w-[150px] h-auto" lg />
        </div>
        {/* Useful Links + Legal */}
        <div className="flex flex-col sm:flex-row gap-10">
          {/* Useful Links */}
          <div className="space-y-4">
            <p className="text-[16px] font-medium text-white">Useful Links</p>
            <ul className="list-none text-[14px] space-y-4 text-[#7A7A7B]">
              {data.footer_links.usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="hover:text-white duration-200 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <p className="text-[16px] font-medium text-white">Legal</p>
            <ul className="list-none text-[14px] space-y-4 text-[#7A7A7B]">
              {data.footer_links.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="hover:text-white duration-200 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="max-w-xl">
          <p className="text-[16px] mb-3 font-medium text-white">
            Subscribe to Newsletter
          </p>
          <p className="text-[14px] font-medium text-[#7A7A7B] mb-4">
            Stay ahead in the trading world! Subscribe for exclusive updates,
            tips, and funding opportunities.
          </p>

          {/* SUBSCRIBE */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              ref={emailInput}
              type="text"
              placeholder="e-mail address"
              className="w-full sm:w-[298px] h-[45px] px-4 py-3 rounded-[8px] border border-[#7A7A7B] text-white placeholder:text-[#7A7A7B] bg-[linear-gradient(0deg,rgba(10,11,12,0.48),rgba(10,11,12,0.48)),linear-gradient(0deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02))]"
            />

            <button
              onClick={handleSubscribe}
              className="px-6 py-2 rounded text-white tracking-wide backdrop-blur-sm transition-all duration-300 border border-transparent"
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderImageSource:
                  "linear-gradient(315.99deg, rgba(242, 243, 245, 0.7) 3.89%, rgba(0, 7, 18, 0.7) 94.54%)",
                borderImageSlice: 1,
              }}
            >
              <span ref={btnText}>Subscribe</span>
              {isLoading && (
                <span className="ml-2 animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
              )}
            </button>
          </div>

          {/* Success Message Placeholder */}
          {showSuccessMsg && (
            <div className="mt-3 items-center text-white text-sm gap-2">
              <span>Success! You're now subscribed.</span>
            </div>
          )}

          {/* Social Icons */}
          <div className="mt-6 w-[164px] flex justify-between">
            {data.footer_links.socials.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                className="hover:text-white duration-200 cursor-pointer"
              >
                <Image
                  src={social.icon_url}
                  className="transition duration-150 hover:invert hover:brightness-0"
                  alt=""
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="my-[60px] text-[#7A7A7B]  mx-auto ">
        <hr />
        <div className="pt-[20px] text-[12px] leading-[18px] font-normal">
          <h1>
            Disclaimer: All information provided on this site is intended solely
            for educational purposes relating to trading and financial markets,
            it is in no way a specific investment recommendation, trading or
            investment opportunity or similar general recommendations regarding
            trading of investment instruments. Fundedbase Limited only provides
            simulated trading services and educational tools for traders. The
            information contained in this site is not directed at residents of
            countries or jurisdictions where its distribution or use would be
            contrary to local law or regulation. Fundedbase Limited does not act
            as a broker and does not accept any deposits.
          </h1>
        </div>
      </div>

      <div className="mt-10 lg:flex justify-between">
        <h1 className="text-[#7A7A7B] text-[12px] text-center">
          Contact: <span className="underline">support@fundedbase.com</span>
        </h1>
        <br />
        <h1 className="text-[#7A7A7B] text-[12px] text-center">
          �2025 fundedbase. All rights reserved
        </h1>
      </div>

      {/* Bottom Logo */}
      <div className="mt-[5rem]">
        {/* <Image src={images.fundedbase} className="mx-auto" alt="" /> */}
        <div className="relative w-full h-[13.5vw]">
          <h1 className="text-white/20 text-[14vw] text-center absolute top-0 left-1/2 -translate-x-1/2">
            FUNDEDBASE
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
