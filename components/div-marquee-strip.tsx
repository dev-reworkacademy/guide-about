import type { NextPage } from "next";
import Image from "next/image";

export type DivMarqueeStripType = {
  className?: string;
};

const DivMarqueeStrip: NextPage<DivMarqueeStripType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start mix-blend-normal max-w-full z-[1] text-left text-xl text-darkgray font-desktop-caption-regular ${className}`}
    >
      <div className="flex-1 overflow-x-auto flex flex-row items-start justify-start py-0 pl-boundvariablesdata1 pr-0 box-border gap-6 mix-blend-normal max-w-full mq825:pl-boundvariablesdata1 mq825:box-border">
        <div className="rounded-xl bg-neutral-700 border-neutral-600 border-[1px] border-solid box-border flex flex-col items-start justify-between py-[25px] px-6 mix-blend-normal min-h-[290px] max-w-full">
          <div className="relative tracking-[0.03em] leading-[32px] mq450:text-base mq450:leading-[26px]">{`“There is Apple & then there's Capsule's UX & UI. This is world-class execution.” `}</div>
          <div className="w-[350px] flex flex-row items-start justify-between max-w-full gap-5 text-base-1 text-whitesmoke-200 font-inter mq450:flex-wrap">
            <Image
              className="h-[60px] w-[60px] relative rounded-81xl overflow-hidden shrink-0 object-cover mix-blend-normal"
              loading="lazy"
              width={60}
              height={60}
              alt=""
              src="/image-avatarimg@2x.png"
            />
            <div className="w-56 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[6.3px] mix-blend-normal">
              <b className="relative tracking-[-0.17px] leading-[17px] inline-block min-w-[129px]">
                Karthik Puvvada
              </b>
              <div className="relative text-mini-4 leading-[18px] text-whitesmoke-300">
                Founder and CEO at Build in Public
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-neutral-700 border-neutral-600 border-[1px] border-solid box-border flex flex-col items-start justify-between py-[23px] px-6 mix-blend-normal min-h-[290px] max-w-full">
          <div className="relative tracking-[0.03em] leading-[32px] mq450:text-base mq450:leading-[26px]">{`“There is Apple & then there's Capsule's UX & UI. This is world-class execution.” `}</div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-[42px] gap-6 text-base-1 text-whitesmoke-200 font-inter mq450:flex-wrap mq450:pr-5 mq450:box-border">
            <Image
              className="h-[60px] w-[60px] relative rounded-81xl overflow-hidden shrink-0 object-cover mix-blend-normal"
              loading="lazy"
              width={60}
              height={60}
              alt=""
              src="/image-avatarimg-1@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[6.3px] mix-blend-normal min-w-[146px]">
              <b className="relative tracking-[-0.17px] leading-[17px] inline-block min-w-[129px]">
                Karthik Puvvada
              </b>
              <div className="w-56 relative text-mini-4 leading-[18px] text-whitesmoke-300 flex items-center">
                Founder and CEO at Build in Public
              </div>
            </div>
          </div>
        </div>
        <div className="h-[290px] rounded-xl bg-neutral-700 border-neutral-600 border-[1px] border-solid box-border flex flex-col items-start justify-between py-[23px] px-6 mix-blend-normal max-w-full mq450:h-auto">
          <div className="relative tracking-[0.03em] leading-[32px] mq450:text-base mq450:leading-[26px]">{`“There is Apple & then there's Capsule's UX & UI. This is world-class execution.” `}</div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-[42px] gap-6 text-base-1 text-whitesmoke-200 font-inter mq450:flex-wrap mq450:pr-5 mq450:box-border">
            <Image
              className="h-[60px] w-[60px] relative rounded-81xl overflow-hidden shrink-0 object-cover mix-blend-normal"
              loading="lazy"
              width={60}
              height={60}
              alt=""
              src="/image-avatarimg-2@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[6.3px] mix-blend-normal min-w-[146px]">
              <b className="relative tracking-[-0.17px] leading-[17px] inline-block min-w-[129px]">
                Karthik Puvvada
              </b>
              <div className="w-56 relative text-mini-4 leading-[18px] text-whitesmoke-300 flex items-center">
                Founder and CEO at Build in Public
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-neutral-700 border-neutral-600 border-[1px] border-solid box-border flex flex-col items-start justify-between py-[23px] px-6 mix-blend-normal min-h-[290px] max-w-full">
          <div className="relative tracking-[0.03em] leading-[32px] mq450:text-base mq450:leading-[26px]">{`“There is Apple & then there's Capsule's UX & UI. This is world-class execution.” `}</div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-[42px] gap-6 text-base-1 text-whitesmoke-200 font-inter mq450:flex-wrap mq450:pr-5 mq450:box-border">
            <Image
              className="h-[60px] w-[60px] relative rounded-81xl overflow-hidden shrink-0 object-cover mix-blend-normal"
              loading="lazy"
              width={60}
              height={60}
              alt=""
              src="/image-avatarimg-3@2x.png"
            />
            <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 gap-[6.3px] mix-blend-normal">
              <b className="relative tracking-[-0.17px] leading-[17px] inline-block min-w-[129px]">
                Karthik Puvvada
              </b>
              <div className="w-56 flex-1 relative text-mini-4 leading-[18px] text-whitesmoke-300 flex items-center">
                Founder and CEO at Build in Public
              </div>
            </div>
          </div>
        </div>
        <div className="h-[290px] rounded-xl bg-neutral-700 border-neutral-600 border-[1px] border-solid box-border flex flex-col items-start justify-between py-[23px] px-6 mix-blend-normal max-w-full mq450:h-auto">
          <div className="self-stretch relative tracking-[0.03em] leading-[32px] mq450:text-base mq450:leading-[26px]">{`“There is Apple & then there's Capsule's UX & UI. This is world-class execution.” `}</div>
          <div className="self-stretch h-[60px] flex flex-row items-start justify-start py-0 pl-0 pr-[42px] box-border gap-6 text-base-1 text-whitesmoke-200 font-inter mq450:flex-wrap mq450:pr-5 mq450:box-border">
            <Image
              className="h-[60px] w-[60px] relative rounded-81xl overflow-hidden shrink-0 object-cover mix-blend-normal"
              loading="lazy"
              width={60}
              height={60}
              alt=""
              src="/image-avatarimg-4@2x.png"
            />
            <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 gap-[6.3px] mix-blend-normal">
              <b className="relative tracking-[-0.17px] leading-[17px] inline-block min-w-[129px]">
                Karthik Puvvada
              </b>
              <div className="w-56 flex-1 relative text-mini-4 leading-[18px] text-whitesmoke-300 flex items-center">
                Founder and CEO at Build in Public
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivMarqueeStrip;
