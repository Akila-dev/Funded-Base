"use client";

import React from "react";
import Image from "next/image";

import { Button, VideoOrFallback } from "@/components";
import { icons, images, data, videos } from "@/constants";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      {/* Text */}
      {/* Text */}
      {/* Text */}
      {/* Text */}
      <div className="relative z-10 pt-10 flex flex-col items-center justify-center gap-6 text-center px-4">
        {/* Gap */}
        <div className="m-[1.2rem] lg:m-[2rem]"></div>
        {/* Title */}
        <div className="relative w-fit">
          {/* Blured BG layer */}
          <h1 className="absolute top-0 left-0 geist font-semibold text-[36px] md:text-[60px] leading-[100%] max-w-[754px] text-white opacity-50 blur-[4px] pointer-events-none select-none">
            Your Go-to Platform For Limitless Trading Growth
          </h1>
          {/* Main Title */}
          <h1 className="relative geist font-semibold text-[36px] md:text-[60px] leading-[100%] max-w-[754px] text-white">
            Your Go-to Platform For Limitless Trading Growth
          </h1>
        </div>
        {/* Subtitle */}
        <h2 className="geist font-medium text-[16px] text-[#7A7A7B] leading-[100%] max-w-[632px]">
          Get instant capital, trade crypto & FX without limits, and keep more
          of what you earn.
        </h2>
        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-[10px] mt-4">
          <Button
            text="Get Funded"
            href={data.def_links.get_funded}
            type="light"
          />
          <Button
            text="Join Discord"
            href={data.def_links.discord}
            type="dark"
          />
        </div>
      </div>
      {/* Video */}
      {/* Video */}
      {/* Video */}
      {/* Video */}
      <div className="relative w-full lg:w-[862px] lg:h-[332px] mx-auto">
        <VideoOrFallback
          video_url={videos.hero}
          fallback_url={images.hero}
          img_class="w-full h-full object-cover absolute top-0 left-0 z-0"
          video_class="w-full h-full pointer-events-none relative z-10"
        />
      </div>
      <br />
      <br />

      {/* Trading View Widget */}
      {/* Trading View Widget */}
      {/* Trading View Widget */}
      {/* Trading View Widget */}
      <div className="tradingview-widget-container w-full h-[104px]">
        <iframe
          src="https://www.tradingview-widget.com/embed-widget/tickers/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22Bitcoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22Ethereum%22%7D%2C%7B%22description%22%3A%22XRP%22%2C%22proName%22%3A%22BITSTAMP%3AXRPUSD%22%7D%2C%7B%22description%22%3A%22DOGE%22%2C%22proName%22%3A%22BITSTAMP%3ADOGEUSD%22%7D%2C%7B%22description%22%3A%22XAU%22%2C%22proName%22%3A%22OANDA%3AXAUUSD%22%7D%2C%7B%22description%22%3A%22EUR%22%2C%22proName%22%3A%22OANDA%3AEURUSD%22%7D%2C%7B%22description%22%3A%22SPX%22%2C%22proName%22%3A%22KRAKEN%3ASPXUSD%22%7D%2C%7B%22description%22%3A%22DXY%22%2C%22proName%22%3A%22TVC%3ADXY%22%7D%5D%2C%22isTransparent%22%3Afalse%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A104%2C%22utm_source%22%3A%22fundedbase.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22tickers%22%2C%22page-uri%22%3A%22fundedbase.com%2F%22%7D"
          title="Tickers TradingView widget"
          lan="en"
          style={{
            userSelect: "none",
            boxSizing: "border - box",
            display: "block",
            height: "calc(100% - 32px)",
            width: "100%",
          }}
        ></iframe>
        <div className="tradingview-widget-copyright">
          <Link
            href="https://www.tradingview.com/?utm_source=fundedbase.com&utm_medium=widget_new&utm_campaign=tickers"
            rel="noopener nofollow"
            target="_blank"
          >
            <span className="blue-text hidden">
              Track all markets on TradingView
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
