import React from "react";
import Link from "next/link";

const LightButton = ({ href, text, icon_r, icon_l }) => (
  <Link
    href={href ? href : "#"}
    className="styledbutton w-[156px] h-[51px] bg-[#E6E6E6] text-black font-mono px-6 py-[14px] rounded-[4px]  border-[#00000050] border-[1.5px]  transition-all duration-300 flex gap-2 items-center"
  >
    {icon_l && icon_l}
    <p>{text}</p>
    {icon_r && icon_r}
  </Link>
);

const NavDarkButton = ({ href, text, icon_r, icon_l }) => (
  <Link href={href ? href : "#"} className="nav-dark-btn-wrapper">
    <div className="mobile flex px-3 py-2 text-white tracking-wide text-[14px] backdrop-blur-sm transition-all duration-300 hover:bg-[#ffffff13] border border-transparent gap-2 items-center bg-black border-none rounded-[5px]">
      {icon_l && icon_l}
      <p>{text}</p>
      {icon_r && icon_r}
    </div>
  </Link>
);

const DarkButton = ({ href, text, icon_r, icon_l }) => (
  <Link href={href ? href : "#"} className="dark-btn-wrapper">
    <div className="relative group">
      <div className="h-[51px] px-6 py-[14px] rounded-[4px] text-white font-mono tracking-wide backdrop-blur-sm transition-all duration-300 border-none w-full flex gap-2 items-center bg-black">
        {icon_l && icon_l}
        <span>{text}</span>
        {icon_r && icon_r}
      </div>
      {/* OVERLAY ON HOVER */}
      <div className="absolute inset-0 rounded-[4px] bg-[#ffffff13] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
    </div>
  </Link>
);

const NeutralButton = ({ href, text, icon_r, icon_l }) => (
  <Link href={href ? href : "#"} className="link-text-btn">
    {icon_l && icon_l}
    <p>{text}</p>
    {icon_r && icon_r}
  </Link>
);

const NormalButton = ({ href, text, icon_r, icon_l }) => (
  <Link href={href ? href : "#"} className="flex gap-2 items-center">
    {icon_l && icon_l}
    <p>{text}</p>
    {icon_r && icon_r}
  </Link>
);

const NavButton = ({ href, text, icon_r, icon_l }) => (
  <Link href={href ? href : "#"} className="nav-btn-wrapper">
    <div className="relative group">
      <div className="hidden lg:flex px-6 py-[14px] rounded-[4px] text-white font-mono tracking-wide backdrop-blur-sm transition-all duration-300 border-none w-full gap-2 items-center bg-[#000713ef]">
        {icon_l && icon_l}
        <span>{text}</span>
        {icon_r && icon_r}
      </div>
      {/* OVERLAY ON HOVER */}
      <div className="absolute inset-0 rounded-[4px] bg-[#ffffff13] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
    </div>
  </Link>
);

const Button = (props) => {
  return (
    <>
      {props.type === "dark" && <DarkButton {...props} />}
      {props.type === "nav-dark" && <NavDarkButton {...props} />}
      {props.type === "neutral" && <NeutralButton {...props} />}
      {props.type === "light" && <LightButton {...props} />}
      {props.type === "nav" && <NavButton {...props} />}
      {!props.type && <NormalButton {...props} />}
    </>
  );
};

export default Button;
