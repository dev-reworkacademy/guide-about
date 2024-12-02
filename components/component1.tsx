import type { NextPage } from "next";
import HEADER from "./h-e-a-d-e-r";

export type Component1Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Component1: NextPage<Component1Type> = ({
  className = "",
  property1 = "header 51",
}) => {
  return (
    <header
      className={`w-[1440px] h-[100px] flex flex-col items-center justify-center z-[1] text-center text-sm text-white font-desktop-caption-regular ${className}`}
      data-property1={property1}
    >
      <HEADER />
    </header>
  );
};

export default Component1;
