import type { NextPage } from "next";
import GroupComponent from "./group-component";

export type GroupComponent2Type = {
  className?: string;
};

const GroupComponent2: NextPage<GroupComponent2Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-neutral-200 flex flex-col items-start justify-start pt-[97px] pb-[109.1px] pl-[166px] pr-[165px] box-border gap-[79px] max-w-full z-[4] text-left text-13xl text-text-black font-desktop-caption-regular lg:pt-[63px] lg:pb-[71px] lg:box-border mq450:gap-5 mq450:pl-5 mq450:pr-5 mq450:box-border mq825:gap-[39px] mq825:pt-[41px] mq825:pb-[46px] mq825:pl-[83px] mq825:pr-[82px] mq825:box-border ${className}`}
    >
      <div className="w-[1440px] h-[974px] relative bg-neutral-200 hidden max-w-full" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[436px] lg:pl-[218px] lg:pr-[218px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pl-[109px] mq825:pr-[109px] mq825:box-border">
          <h1 className="m-0 relative text-inherit tracking-[0.03em] leading-[45px] font-bold font-[inherit] z-[1] mq450:text-lgi mq450:leading-[27px] mq825:text-7xl mq825:leading-[36px]">
            Meet The Team
          </h1>
        </div>
        <div className="relative text-base tracking-[0.03em] leading-[24px] font-light text-center z-[1]">
          our greatest asset is our team—a diverse group of passionate
          individuals committed to transforming the educational landscape. Each
          member brings a unique set of skills and experiences, united by a
          shared vision to bridge students with the best educational
          opportunities. Get to know the brilliant minds behind Guide and
          discover the driving force behind our innovation.
        </div>
      </div>
      <div className="self-stretch h-[554.9px] flex flex-row items-start justify-start flex-wrap content-start gap-x-[42.3px] gap-y-[42.7px] max-w-full z-[1] text-xl-5 text-white mq825:gap-[21px]">
        <GroupComponent
          group237754="/group-237754@2x.png"
          solaAdekanye="Sola Adekanye"
          founderOIAAfrica="Founder, OIA Africa"
        />
        <GroupComponent
          group237754="/group-237754-1@2x.png"
          memberDetailsWidth="154.5px"
          memberDetailsPadding="0px 0px 0px 0px"
          solaAdekanye="Ugbeide Ikhile (EJ)"
          solaAdekanyeWidth="308.3px"
          solaAdekanyeDisplay="inline-block"
          memberRolesAlignSelf="unset"
          founderOIAAfrica="Co-Founder, OIA Africa"
        />
        <GroupComponent
          group237754="/group-237754-2@2x.png"
          memberDetailsWidth="154.5px"
          memberDetailsPadding="0px 0px 0px 0px"
          solaAdekanye="Ayomiku Balogun"
          solaAdekanyeWidth="308.3px"
          solaAdekanyeDisplay="inline-block"
          memberRolesAlignSelf="stretch"
          founderOIAAfrica="UI/UX Designer, OIA Africa"
        />
        <GroupComponent
          group237754="/group-237754-3@2x.png"
          memberDetailsWidth="unset"
          memberDetailsPadding="0px 0px 0px"
          solaAdekanye="Sola Adekanye"
          solaAdekanyeWidth="unset"
          solaAdekanyeDisplay="unset"
          memberRolesAlignSelf="unset"
          founderOIAAfrica="Founder, OIA Africa"
        />
        <GroupComponent
          group237754="/group-237754-4@2x.png"
          memberDetailsWidth="154.5px"
          memberDetailsPadding="0px 0px 0px 0px"
          solaAdekanye="Ugbeide Ikhile (EJ)"
          solaAdekanyeWidth="308.3px"
          solaAdekanyeDisplay="inline-block"
          memberRolesAlignSelf="unset"
          founderOIAAfrica="Co-Founder, OIA Africa"
        />
        <GroupComponent
          group237754="/group-237754-5@2x.png"
          memberDetailsWidth="154.5px"
          memberDetailsPadding="0px 0px 0px 0px"
          solaAdekanye="Ayomiku Balogun"
          solaAdekanyeWidth="308.3px"
          solaAdekanyeDisplay="inline-block"
          memberRolesAlignSelf="stretch"
          founderOIAAfrica="UI/UX Designer, OIA Africa"
        />
      </div>
    </div>
  );
};

export default GroupComponent2;
