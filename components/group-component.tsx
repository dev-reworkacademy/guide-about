import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type GroupComponentType = {
  className?: string;
  group237754: string;
  solaAdekanye?: string;
  founderOIAAfrica?: string;

  /** Style props */
  memberDetailsWidth?: CSSProperties["width"];
  memberDetailsPadding?: CSSProperties["padding"];
  solaAdekanyeWidth?: CSSProperties["width"];
  solaAdekanyeDisplay?: CSSProperties["display"];
  memberRolesAlignSelf?: CSSProperties["alignSelf"];
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  group237754,
  memberDetailsWidth,
  memberDetailsPadding,
  solaAdekanye,
  solaAdekanyeWidth,
  solaAdekanyeDisplay,
  memberRolesAlignSelf,
  founderOIAAfrica,
}) => {
  const memberDetailsStyle: CSSProperties = useMemo(() => {
    return {
      width: memberDetailsWidth,
      padding: memberDetailsPadding,
    };
  }, [memberDetailsWidth, memberDetailsPadding]);

  const solaAdekanyeStyle: CSSProperties = useMemo(() => {
    return {
      width: solaAdekanyeWidth,
      display: solaAdekanyeDisplay,
    };
  }, [solaAdekanyeWidth, solaAdekanyeDisplay]);

  const memberRolesStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: memberRolesAlignSelf,
    };
  }, [memberRolesAlignSelf]);

  return (
    <div
      className={`w-[341.5px] flex flex-row items-start justify-start pt-[192.9px] px-0 pb-0 box-border relative max-w-full text-left text-xl-5 text-white font-desktop-caption-regular ${className}`}
    >
      <Image
        className="h-full w-full absolute !m-[0] top-[0px] right-[-0.5px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        width={342}
        height={256}
        alt=""
        src={group237754}
      />
      <div className="flex-1 rounded-t-none rounded-b-[6.83px] bg-gray-500 flex flex-row items-start justify-start pt-[5.2px] px-[23px] pb-[5.1px] box-border max-w-full z-[1]">
        <div className="h-[63.2px] w-[341.5px] relative rounded-t-none rounded-b-[6.83px] bg-gray-500 hidden max-w-full" />
        <div className="flex flex-row items-center justify-center pt-0 px-0 pb-0 z-[2]">
          <div
            className="flex flex-col items-start justify-center gap-[6.8px]"
            style={memberDetailsStyle}
          >
            <b
              className="relative tracking-[0.03em] leading-[25.6px] mq450:text-base mq450:leading-[20px]"
              style={solaAdekanyeStyle}
            >
              {solaAdekanye}
            </b>
            <div
              className="flex flex-row items-center justify-start py-0 pl-0 pr-[25px] text-sm-7 text-neutral-200"
              style={memberRolesStyle}
            >
              <div className="relative tracking-[0.03em] leading-[20.5px] font-medium">
                {founderOIAAfrica}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
