import type { NextPage } from "next";
import Image from "next/image";
import GroupComponent1 from "./group-component1";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[75px] pl-6 pr-5 box-border max-w-full text-left text-13xl text-text-black font-desktop-caption-regular mq825:pb-[49px] mq825:box-border ${className}`}
    >
      <div className="w-[804px] flex flex-col items-start justify-start gap-[60px] max-w-full mq825:gap-[30px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[17px] pr-[19px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-px max-w-full">
            <h1 className="m-0 w-[736px] relative text-inherit tracking-[0.03em] leading-[70px] font-semibold font-[inherit] inline-block max-w-full mq450:text-lgi mq450:leading-[42px] mq825:text-7xl mq825:leading-[56px]">
              We Have Over 10 years experience in Education
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[5px] pr-0 box-border max-w-full text-base">
              <div className="flex-1 relative tracking-[0.03em] leading-[24px] font-light whitespace-pre-wrap inline-block max-w-full">
                We'd love to help you find and apply to top universities around
                the world. Explore programs, manage applications, and find your
                ideal student home. Here are a few ways to reach out to our
                team.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-9 text-xl text-neutral-700 mq450:gap-[18px] mq825:flex-wrap">
          <div className="flex-1 rounded-lg bg-whitesmoke-100 flex flex-col items-start justify-start pt-[31px] px-[22px] pb-[33px] box-border gap-[21.5px] min-w-[183px]">
            <div className="w-[244px] h-[236px] relative rounded-lg bg-whitesmoke-100 hidden" />
            <div className="self-stretch flex flex-row items-start justify-center">
              <Image
                className="h-8 w-8 relative overflow-hidden shrink-0 z-[1]"
                width={32}
                height={32}
                alt=""
                src="/solarphonebold.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-7">
              <div className="flex-1 relative leading-[30px] z-[1] mq450:text-base mq450:leading-[24px]">
                Call Us Directly
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[17px] text-5xl">
              <div className="relative leading-[30px] font-medium z-[1] mq450:text-lgi mq450:leading-[24px]">
                +234 706 675 5676
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[43px] pr-[41px] text-sm-2 text-primary">
                <div className="relative tracking-[0.03em] leading-[19.8px] font-medium z-[1]">
                  See more numbers
                </div>
              </div>
            </div>
          </div>
          <GroupComponent1
            bxschat="/bxschat.svg"
            chatWithOurTeam="Chat With our Team"
            proceedToDashbord="Chat  With Team"
          />
          <GroupComponent1
            groupDivFlex="0.825"
            bxschat="/materialsymbolsstackedemail.svg"
            chatWithOurTeam="Send Us an Email"
            chatWithOurAlignSelf="stretch"
            proceedToDashbord="Send Email"
            proceedToDashbordDisplay="inline-block"
            proceedToDashbordMinWidth="75px"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
