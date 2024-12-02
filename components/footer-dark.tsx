import type { NextPage } from "next";
import Image from "next/image";
import FooterContent from "./footer-content";

export type FooterDarkType = {
  className?: string;
};

const FooterDark: NextPage<FooterDarkType> = ({ className = "" }) => {
  return (
    <footer
      className={`[background:linear-gradient(-74.46deg,_#161616,_#300a02)] overflow-hidden flex flex-col items-center justify-start pt-boundvariablesdata px-0 pb-boundvariablesdata1 relative gap-6 z-[2] text-left text-base text-white font-desktop-caption-regular ${className}`}
    >
      <Image
        className="w-[844.7px] !m-[0] absolute top-[99.8px] left-[516px] max-h-full object-contain z-[0]"
        width={845}
        height={841}
        alt=""
        src="/frame-35903-1@2x.png"
      />
      <div className="hidden flex-col items-center justify-start gap-14 z-[1] text-45xl text-smoke-white">
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="w-[312.5px] flex flex-col items-center justify-center gap-3">
            <b className="w-[108px] h-[81px] relative inline-block">25+</b>
            <div className="w-[149px] h-6 relative text-base tracking-[0.03em] leading-[24px] font-light text-neutral-400 inline-block">
              Years of Experience
            </div>
          </div>
          <div className="w-[312.5px] flex flex-col items-center justify-center gap-3">
            <b className="w-[118px] h-[81px] relative inline-block">99%</b>
            <div className="w-[134px] h-6 relative text-base tracking-[0.03em] leading-[24px] font-light text-neutral-400 inline-block">
              Happy Customers
            </div>
          </div>
          <div className="w-[312.5px] flex flex-col items-center justify-center gap-3">
            <b className="w-[130px] h-[81px] relative inline-block">127+</b>
            <div className="w-[142px] h-6 relative text-base tracking-[0.03em] leading-[24px] font-light text-neutral-400 inline-block">
              Successful projects
            </div>
          </div>
          <div className="w-[312.5px] flex flex-col items-center justify-center gap-3">
            <b className="w-[75px] h-[81px] relative inline-block">43</b>
            <div className="w-[116px] h-6 relative text-base tracking-[0.03em] leading-[24px] font-light text-neutral-400 inline-block">
              Team Members
            </div>
          </div>
        </div>
        <div className="w-[1441px] relative border-neutral-600 border-t-[1px] border-solid box-border h-px" />
      </div>
      <FooterContent />
      <div className="flex flex-col items-start justify-start gap-8 z-[3]">
        <div className="w-[1140px] flex flex-row items-center justify-between">
          <div className="relative tracking-[0.03em] leading-[24px] font-light">
            About Us
          </div>
          <div className="relative tracking-[0.03em] leading-[24px] font-light">
            Universities
          </div>
          <div className="relative tracking-[0.03em] leading-[24px] font-light">
            Blog
          </div>
          <div className="relative tracking-[0.03em] leading-[24px] font-light">
            FAQ
          </div>
          <div className="relative tracking-[0.03em] leading-[24px] font-light">
            Contact
          </div>
          <div className="relative tracking-[0.03em] leading-[24px] font-light">
            Privacy policy
          </div>
          <div className="relative tracking-[0.03em] leading-[24px] font-light">
            Cookies policy
          </div>
          <div className="relative tracking-[0.03em] leading-[24px] font-light">
            Terms of Use
          </div>
        </div>
        <div className="w-[1140px] flex flex-row items-center justify-center text-right text-sm">
          <div className="flex flex-row items-center justify-start gap-6">
            <div className="w-12 rounded-11xl bg-dark-secondary h-12 overflow-hidden shrink-0 flex flex-row items-center justify-center">
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/typcnsocialfacebook.svg"
              />
            </div>
            <div className="w-12 rounded-11xl bg-dark-secondary h-12 overflow-hidden shrink-0 flex flex-row items-center justify-center">
              <Image
                className="w-6 relative h-6 overflow-hidden shrink-0"
                width={24}
                height={24}
                alt=""
                src="/mingcutesocialxline.svg"
              />
            </div>
            <div className="w-12 rounded-11xl bg-dark-secondary h-12 overflow-hidden shrink-0 flex flex-row items-center justify-center">
              <Image
                className="w-6 relative h-6 overflow-hidden shrink-0"
                width={24}
                height={24}
                alt=""
                src="/riinstagramfill.svg"
              />
            </div>
            <div className="w-12 rounded-11xl bg-dark-secondary h-12 overflow-hidden shrink-0 flex flex-row items-center justify-center">
              <Image
                className="w-6 relative h-6 overflow-hidden shrink-0"
                width={24}
                height={24}
                alt=""
                src="/typcnsociallinkedin.svg"
              />
            </div>
            <div className="w-12 rounded-11xl bg-dark-secondary h-12 overflow-hidden shrink-0 flex flex-row items-center justify-center">
              <Image
                className="w-6 relative h-6 overflow-hidden shrink-0"
                width={24}
                height={24}
                alt=""
                src="/riwhatsappfill.svg"
              />
            </div>
          </div>
          <div className="flex-1 relative leading-[20px]">
            ©Guide. 2024 All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterDark;
