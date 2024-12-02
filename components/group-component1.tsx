import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type GroupComponent1Type = {
  className?: string;
  bxschat: string;
  chatWithOurTeam?: string;
  proceedToDashbord?: string;

  /** Style props */
  groupDivFlex?: CSSProperties["flex"];
  chatWithOurAlignSelf?: CSSProperties["alignSelf"];
  proceedToDashbordDisplay?: CSSProperties["display"];
  proceedToDashbordMinWidth?: CSSProperties["minWidth"];
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({
  className = "",
  groupDivFlex,
  bxschat,
  chatWithOurTeam,
  chatWithOurAlignSelf,
  proceedToDashbord,
  proceedToDashbordDisplay,
  proceedToDashbordMinWidth,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: groupDivFlex,
    };
  }, [groupDivFlex]);

  const chatWithOurStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: chatWithOurAlignSelf,
    };
  }, [chatWithOurAlignSelf]);

  const proceedToDashbordStyle: CSSProperties = useMemo(() => {
    return {
      display: proceedToDashbordDisplay,
      minWidth: proceedToDashbordMinWidth,
    };
  }, [proceedToDashbordDisplay, proceedToDashbordMinWidth]);

  return (
    <div
      className={`flex-[0.93] rounded-lg bg-whitesmoke-100 flex flex-col items-start justify-start pt-[30px] px-[29px] pb-[60px] box-border gap-[23px] min-w-[183px] text-left text-xl text-neutral-700 font-desktop-caption-regular mq450:flex-1 ${className}`}
      style={groupDivStyle}
    >
      <div className="w-[244px] h-[236px] relative rounded-lg bg-whitesmoke-100 hidden" />
      <div className="flex flex-row items-start justify-start py-0 px-[77px]">
        <Image
          className="h-8 w-8 relative overflow-hidden shrink-0 z-[1]"
          width={32}
          height={32}
          alt=""
          src={bxschat}
        />
      </div>
      <div
        className="relative leading-[30px] z-[1] mq450:text-base mq450:leading-[24px]"
        style={chatWithOurStyle}
      >
        {chatWithOurTeam}
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[18px] text-mini text-white">
        <div className="rounded-md bg-primary overflow-hidden flex flex-row items-start justify-start py-[5px] px-[19px] z-[1]">
          <div
            className="relative leading-[28px] whitespace-pre-wrap"
            style={proceedToDashbordStyle}
          >
            {proceedToDashbord}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
