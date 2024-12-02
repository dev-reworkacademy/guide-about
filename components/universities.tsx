import type { NextPage } from "next";
import Image from "next/image";
import Container from "./container";

export type UniversitiesType = {
  className?: string;
};

const Universities: NextPage<UniversitiesType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full !m-[0] absolute top-[618px] right-[0px] left-[0px] flex flex-row items-center justify-between p-boundvariablesdata5 box-border [row-gap:20px] max-w-full gap-0 z-[3] text-left text-mid-2 text-darkslategray font-desktop-caption-regular mq825:pl-boundvariablesdata5 mq825:pr-boundvariablesdata5 mq825:box-border mq1410:flex-wrap mq1410:justify-center ${className}`}
    >
      <div className="rounded-boundvariablesdata3 bg-orangered-200 border-orangered-100 border-[1px] border-solid flex flex-col items-center justify-center py-[91px] px-0 gap-10 text-29xl text-black mq450:gap-5">
        <div className="flex flex-col items-center justify-center py-0 px-[50px] gap-3 mq450:pl-5 mq450:pr-5 mq450:box-border">
          <b className="relative inline-block min-w-[52px] mq450:text-10xl mq825:text-19xl">
            10
          </b>
          <div className="relative text-base tracking-[0.03em] leading-[24px] font-medium text-neutral-600">
            Destination Countries
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-0 px-[77px] gap-3 mq450:pl-5 mq450:pr-5 mq450:box-border">
          <b className="relative inline-block min-w-[111px] mq450:text-10xl mq825:text-19xl">
            100+
          </b>
          <div className="relative text-base tracking-[0.03em] leading-[24px] font-medium text-neutral-600">
            Institutions
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-0 px-[69px] gap-3 mq450:pl-5 mq450:pr-5 mq450:box-border">
          <b className="relative inline-block min-w-[100px] mq450:text-10xl mq825:text-19xl">
            12k+
          </b>
          <div className="relative text-base tracking-[0.03em] leading-[24px] font-medium text-neutral-600 whitespace-pre-wrap inline-block min-w-[128px]">
            Students Helped
          </div>
        </div>
      </div>
      <div className="h-[554px] w-[1046px] bg-white max-w-full" />
      <div className="w-[148.6px] !m-[0] absolute bottom-[197.8px] left-[623.1px] shadow-[0px_0px_1.9px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded-9xs-8 bg-gray-400 flex flex-row items-start justify-start py-[19.1px] px-0 box-border whitespace-nowrap z-[4]">
        <b className="absolute !m-[0] right-[-64.6px] bottom-[29.3px] leading-[26.7px] inline-block">
          Coventry University
        </b>
        <Image
          className="h-[47.6px] w-[47.6px] relative overflow-hidden shrink-0"
          loading="lazy"
          width={48}
          height={48}
          alt=""
          src="/image-26.svg"
        />
      </div>
      <Container universityOfLagos="University of Lagos" />
      <div className="!m-[0] absolute right-[87px] bottom-[197.8px] shadow-[0px_0px_1.9px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded-9xs-8 bg-gray-400 flex flex-row items-start justify-start py-[19.1px] px-0 gap-[8.6px] z-[4]">
        <Image
          className="h-[47.6px] w-[47.6px] relative overflow-hidden shrink-0"
          loading="lazy"
          width={48}
          height={48}
          alt=""
          src="/image-26-1.svg"
        />
        <div className="flex flex-col items-start justify-start pt-[10.4px] px-0 pb-0">
          <b className="relative leading-[26.7px] shrink-0">On-Campus</b>
        </div>
      </div>
      <Container
        container32Left="unset"
        container32Right="300.5px"
        universityOfLagos="Studio Apartment"
      />
      <div className="w-[886px] !m-[0] absolute top-[105px] right-[188px] rounded-boundvariablesdata3 flex flex-col items-start justify-start gap-[11px] max-w-full z-[4] text-center text-base text-neutral-700">
        <h1 className="m-0 self-stretch relative text-13xl tracking-[0.03em] leading-[45px] font-bold font-[inherit] mq450:text-lgi mq450:leading-[27px] mq825:text-7xl mq825:leading-[36px]">
          Discover Us
        </h1>
        <div className="relative tracking-[0.03em] leading-[24px] font-light">
          Discover and apply to the best universities and find your ideal
          student home abroad. Guide is your trusted companion for a seamless
          and rewarding global education experience.
        </div>
        <div className="self-stretch hidden flex-row items-start justify-start text-left text-white">
          <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] rounded-boundvariablesdata3 bg-neutral-700 flex flex-row items-center justify-start py-boundvariablesdata6 px-boundvariablesdata7 gap-0.5">
            <div className="relative tracking-[0.03em] leading-[24px] font-medium">
              Get Started
            </div>
            <Image
              className="h-5 w-5 relative overflow-hidden shrink-0"
              width={20}
              height={20}
              alt=""
              src="/fluentarrowright24filled.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Universities;
