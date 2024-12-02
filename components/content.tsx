import type { NextPage } from "next";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-end justify-start pt-[94px] px-[94px] pb-[58px] relative gap-[379px] mt-[-1px] text-left text-45xl text-black font-inter lg:gap-[189px] lg:flex-wrap lg:pl-[47px] lg:pr-[47px] lg:box-border mq825:gap-[95px] mq825:pl-[23px] mq825:pr-[23px] mq825:box-border ${className}`}
    >
      <div className="w-[113px] flex flex-row items-start justify-between gap-5">
        <div className="relative leading-[84px] mq450:text-19xl mq450:leading-[50px] mq825:text-32xl mq825:leading-[67px]" />
        <div className="w-0 flex flex-col items-start justify-start pt-[110px] px-0 pb-0 box-border text-center">
          <div className="relative leading-[84px] mq450:text-19xl mq450:leading-[50px] mq825:text-32xl mq825:leading-[67px]" />
        </div>
      </div>
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-300 z-[2]" />
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2.5 text-white font-desktop-caption-regular">
        <div className="flex flex-col items-start justify-start gap-[23px]">
          <h1 className="m-0 relative text-inherit leading-[26px] font-bold font-[inherit] z-[3] mq450:text-19xl mq450:leading-[16px] mq825:text-32xl mq825:leading-[21px]">
            About Us
          </h1>
          <div className="flex flex-row items-start justify-start py-0 pl-[81px] pr-20 text-smi text-primary mq450:pl-5 mq450:pr-5 mq450:box-border">
            <b className="relative leading-[26px] inline-block min-w-[108px] z-[3]">
              <span>Home</span>
              <span className="text-white whitespace-pre-wrap">{`  >  About us`}</span>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
