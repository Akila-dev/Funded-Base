"use client";

import { useState } from "react";

import Image from "next/image";
import { FaRegCopy } from "react-icons/fa6";

import { data, icons } from "@/constants";

const QRPopup = ({ close }) => (
  <div className="bg-black/20 fixed top-0 left-0 w-full h-screen flex justify-center items-center z-50 backdrop-blur-sm">
    <div className="w-[80%] max-w-[320px] overflow-hidden flex flex-col items-center justify-center bg-[#FFFFFF0F] border border-[#7A7A7B70] rounded-[12px] backdrop-blur-md gap-4 p-4 relative">
      <Image
        src={icons.cancel}
        width={200}
        height={200}
        alt="QR Code"
        className="w-4 h-4 absolute top-0 right-0 m-4 cursor-pointer"
        onClick={close}
      />
      <h1 className="text-center geist text-[18px] md:text-[20px] text-white font-semibold mt-7">
        Scan this QR code to get funded
      </h1>
      <Image
        src={data.qr_data.img}
        width={200}
        height={200}
        alt="QR Code"
        className="w-48 h-48"
      />
      <button
        onClick={() => {
          navigator.clipboard.writeText(data.qr_data.code);
          alert("Copied to clipboard");
        }}
        className="w-full break-words text-white/60"
      >
        <FaRegCopy className="inline" /> {data.qr_data.code}
      </button>
    </div>
  </div>
);

const GetFundedButton = ({ text, className }) => {
  const [showQR, setShowQR] = useState(false);
  return (
    <div className="flex">
      <button
        type="button"
        className={className ? className : ""}
        onClick={() => setShowQR(true)}
      >
        {text}
      </button>
      {showQR && <QRPopup close={() => setShowQR(false)} />}
    </div>
  );
};

export default GetFundedButton;
