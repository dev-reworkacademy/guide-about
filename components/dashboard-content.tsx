import type { NextPage } from "next";
import Image from "next/image";

export type DashboardContentType = {
  className?: string;
};

const DashboardContent: NextPage<DashboardContentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-full !m-[0] absolute top-[0px] right-[0px] left-[0px] flex flex-row items-start justify-center [row-gap:20px] max-w-full text-left text-lg text-text-black font-desktop-caption-regular lg:flex-wrap ${className}`}
    >
      <div className="w-[704px] bg-neutral-200 flex flex-col items-start justify-start pt-20 pb-[71px] pl-[95px] pr-[94px] box-border shrink-0 max-w-full z-[2] lg:flex-1 mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pl-[47px] mq825:pr-[47px] mq825:box-border mq825:min-w-full">
        <div className="w-[704px] h-[662px] relative bg-neutral-200 hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border min-h-[473px] max-w-full">
          <div className="mb-[-29px] flex-1 relative leading-[28px] inline-block max-w-full z-[3]">
            <p className="[margin-block-start:0] [margin-block-end:12px] text-13xl">
              <b>Building Partnerships</b>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:12px] font-light">
              As Guide began to take shape, the team reached out to universities
              worldwide. They aimed to create a diverse and comprehensive
              database of institutions, from prestigious Ivy League schools to
              emerging institutions in developing countries. They emphasized the
              benefits of joining Guide for universities, such as increased
              visibility and the ability to attract a diverse pool of
              applicants.
            </p>
            <p className="[margin-block-start:0] [margin-block-end:12px] font-light">
              Many universities were initially skeptical but were eventually won
              over by Guide’s potential to streamline the admissions process and
              reach a broader audience. They saw Guide as a way to connect with
              students who might not have had access to their programs
              otherwise. As partnerships grew, EduLink's database expanded,
              offering students an unprecedented range of options.
            </p>
            <p className="m-0 font-light">&nbsp;</p>
          </div>
        </div>
        <div className="rounded-md bg-primary overflow-hidden flex flex-row items-start justify-start py-[5px] px-[17px] z-[4] text-mini text-white">
          <div className="relative leading-[28px] inline-block min-w-[127px]">
            Partner with Guide
          </div>
        </div>
      </div>
      <Image
        className="h-[662px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[480px] shrink-0 mq825:min-w-full"
        loading="lazy"
        width={738}
        height={662}
        alt=""
        src="/pexelsedmonddantes4342493-1@2x.png"
      />
    </div>
  );
};

export default DashboardContent;
