import type { NextPage } from "next";
import Image from "next/image";

export type FooterContentType = {
  className?: string;
};

const FooterContent: NextPage<FooterContentType> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-start z-[2] text-left text-base text-white font-desktop-caption-regular ${className}`}
    >
      <div className="flex flex-row items-center justify-start gap-14">
        <div className="flex flex-col items-start justify-start gap-6">
          <div className="w-[458px] flex flex-col items-start justify-center gap-3">
            <Image
              className="w-[113.5px] h-[35.6px] relative overflow-hidden shrink-0"
              loading="lazy"
              width={114}
              height={36}
              alt=""
              src="/guidelogoprimaryred-1-1.svg"
            />
            <div className="self-stretch relative tracking-[0.03em] leading-[24px] font-light">
              We are your trusted companion for a seamless and rewarding global
              education experience.
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-14 text-sm">
            <div className="flex flex-row items-center justify-center gap-3">
              <div className="w-12 rounded-11xl bg-dark-secondary h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                <Image
                  className="w-5 relative h-5"
                  width={20}
                  height={20}
                  alt=""
                  src="/darkicon.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-0.5">
                <div className="relative leading-[20px]">Have a question?</div>
                <a
                  className="relative text-base tracking-[0.03em] leading-[24px] font-medium text-[inherit] [text-decoration:none]"
                  href="tel:+971527142527"
                  target="_blank"
                >
                  +971 52 714 2527
                </a>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-3">
              <div className="w-12 rounded-11xl bg-dark-secondary h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                <Image
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  width={24}
                  height={24}
                  alt=""
                  src="/fluentmail24regular.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-0.5">
                <div className="relative leading-[20px]">Contact us at</div>
                <a
                  className="relative text-base [text-decoration:underline] tracking-[0.03em] leading-[24px] font-medium text-[inherit]"
                  href="mailto:support@guide-ae.com"
                  target="_blank"
                >
                  support@guide-ae.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[259px] w-0 relative border-neutral-600 border-r-[1px] border-solid box-border" />
        <div className="w-[569px] flex flex-col items-start justify-start gap-8 text-lg">
          <div className="self-stretch flex flex-col items-start justify-center gap-3">
            <b className="relative capitalize">Newsletter</b>
            <div className="self-stretch relative text-base tracking-[0.03em] leading-[24px] font-light whitespace-pre-wrap">
              Be the first one to know about offers and updates weekly in your
              mailbox. Unsubscribe whenever you like with one click.
            </div>
          </div>
          <div className="self-stretch rounded-boundvariablesdata3 bg-white h-12 overflow-hidden shrink-0 flex flex-row items-center justify-start py-boundvariablesdata2 pl-6 pr-1 box-border gap-6 text-base text-neutral-500">
            <Image
              className="h-6 w-6 relative overflow-hidden shrink-0"
              width={24}
              height={24}
              alt=""
              src="/fluentmail24regular-1.svg"
            />
            <div className="flex-1 relative tracking-[0.03em] leading-[24px] font-light">
              Enter your email
            </div>
            <div className="self-stretch flex flex-col items-end justify-center text-center text-white">
              <div className="w-[94px] flex-1 rounded-boundvariablesdata3 bg-primary overflow-hidden flex flex-col items-center justify-center py-0 px-[38px] box-border">
                <div className="relative tracking-[0.03em] leading-[24px] font-medium">
                  Submit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1440px] h-0 relative border-neutral-600 border-t-[1px] border-solid box-border" />
    </div>
  );
};

export default FooterContent;
