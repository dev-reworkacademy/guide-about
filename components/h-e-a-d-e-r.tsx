import type { NextPage } from "next";
import Image from "next/image";

export type HEADERType = {
  className?: string;
};

const HEADER: NextPage<HEADERType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex-1 bg-neutral-700 flex flex-row items-center justify-between py-boundvariablesdata4 px-boundvariablesdata1 text-center text-sm text-white font-desktop-caption-regular ${className}`}
    >
      <Image
        className="h-[35.6px] w-[113.5px] relative overflow-hidden shrink-0"
        loading="lazy"
        width={114}
        height={36}
        alt=""
        src="/guidelogoprimaryred-1.svg"
      />
      <div className="w-[350px] rounded-boundvariablesdata3 bg-gray-200 h-12 hidden flex-row items-center justify-between py-0 px-boundvariablesdata4 box-border text-left">
        <div className="h-[18px] w-[282px] relative inline-block shrink-0 opacity-[0.3]">
          Search Here
        </div>
        <Image
          className="w-5 relative h-5 overflow-hidden shrink-0"
          width={20}
          height={20}
          alt=""
          src="/evasearchoutline.svg"
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-[103px]">
        <div className="relative leading-[20px] font-medium text-smoke-white hidden">
          About
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-1">
          <a className="[text-decoration:none] w-12 relative leading-[20px] font-medium text-[inherit] inline-block shrink-0">
            Explore
          </a>
          <div className="w-6 h-[7px] flex flex-col items-center justify-center pt-boundvariablesdata2 px-0 pb-0 box-border">
            <Image
              className="w-2.5 relative h-[5px]"
              width={10}
              height={5}
              alt=""
              src="/shape.svg"
            />
          </div>
        </div>
        <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit]">
          Blog
        </a>
        <div className="relative leading-[20px] font-medium">Contact Us</div>
      </div>
      <div className="flex flex-row items-center justify-start gap-6">
        <div className="h-12 rounded-boundvariablesdata3 flex flex-row items-center justify-center p-boundvariablesdata6 box-border">
          <div className="relative leading-[20px] font-medium">Sign Up</div>
        </div>
        <div className="h-12 rounded-boundvariablesdata3 bg-smoke-white flex flex-row items-center justify-center py-boundvariablesdata6 px-boundvariablesdata7 box-border text-base text-black">
          <a className="[text-decoration:none] relative tracking-[0.03em] leading-[24px] font-medium text-[inherit]">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
};

export default HEADER;
