import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type ContainerType = {
  className?: string;
  universityOfLagos?: string;

  /** Style props */
  container32Left?: CSSProperties["left"];
  container32Right?: CSSProperties["right"];
};

const Container: NextPage<ContainerType> = ({
  className = "",
  container32Left,
  container32Right,
  universityOfLagos,
}) => {
  const container32Style: CSSProperties = useMemo(() => {
    return {
      left: container32Left,
      right: container32Right,
    };
  }, [container32Left, container32Right]);

  return (
    <div
      className={`w-[195.3px] !m-[0] absolute bottom-[197.8px] left-[363px] shadow-[0px_0px_1.9px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded-9xs-8 bg-gray-400 flex flex-row items-start justify-start py-[19.1px] px-0 box-border gap-[11.5px] z-[4] text-center text-mid-2 text-darkslategray font-alegreya ${className}`}
      style={container32Style}
    >
      <Image
        className="h-[47.6px] w-[47.6px] relative overflow-hidden shrink-0"
        loading="lazy"
        width={48}
        height={48}
        alt=""
        src="/image-27.svg"
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-[10.4px] px-0 pb-0">
        <b className="self-stretch relative leading-[26.7px] shrink-0 whitespace-nowrap">
          {universityOfLagos}
        </b>
      </div>
    </div>
  );
};

export default Container;
