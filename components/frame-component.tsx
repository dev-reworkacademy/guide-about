import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[59px] pl-5 pr-[21px] box-border max-w-full text-left text-13xl text-black font-desktop-caption-regular mq825:pb-[38px] mq825:box-border ${className}`}
    >
      <div className="w-[1171px] flex flex-col items-start justify-start gap-[42px] max-w-full mq825:gap-[21px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
          <div className="flex flex-row items-start justify-start py-0 pl-[444px] pr-[442px] lg:pl-[222px] lg:pr-[221px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pl-[111px] mq825:pr-[110px] mq825:box-border">
            <h1 className="m-0 relative text-inherit leading-[28px] font-bold font-[inherit] mq450:text-lgi mq450:leading-[17px] mq825:text-7xl mq825:leading-[22px]">
              Purpose Statement
            </h1>
          </div>
          <div className="relative text-lg leading-[26px] font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            tempor dolor non est convallis, sed eleifend magna hendrerit. Nullam
            facilisis quam a odio ultricies, in pharetra nulla ornare.
            Vestibulum eu diam in turpis tristique pretium. Morbi ac dolor ut
            erat sagittis elementum. Aliquam erat volutpat.
          </div>
        </div>
        <div className="self-stretch h-[492px] relative max-w-full text-9xl-3 text-white mq825:h-auto mq825:min-h-[492]">
          <div className="absolute top-[0px] left-[0px] rounded-mid-7 bg-neutral-700 w-full flex flex-row items-start justify-between pt-[31px] pb-[42px] pl-[34px] pr-11 box-border max-w-full gap-5 lg:pr-[22px] lg:box-border mq825:flex-wrap">
            <div className="h-[179px] w-[1171px] relative rounded-mid-7 bg-neutral-700 hidden max-w-full" />
            <div className="flex flex-col items-start justify-start pt-[2.6px] px-0 pb-0">
              <b className="relative leading-[24.7px] inline-block min-w-[103.5px] z-[1] mq450:text-4xl mq450:leading-[20px]">
                Mission
              </b>
            </div>
            <div className="relative text-base-9 leading-[23px] font-light inline-block max-w-full z-[1]">
              <p className="[margin-block-start:0] [margin-block-end:4.42px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</p>
              <p className="[margin-block-start:0] [margin-block-end:4.42px]">
                Quisque tempor dolor non est convallis, sed eleifend ma
              </p>
              <p className="[margin-block-start:0] [margin-block-end:4.42px]">{`gna hendrerit. Nullam facilisis `}</p>
              <p className="m-0">quam a odio ultr</p>
            </div>
          </div>
          <div className="absolute top-[157px] left-[159px] w-[1012px] h-[335px]">
            <div className="absolute top-[0px] left-[0px] rounded-mid-7 bg-neutral-600 w-full h-[179px] z-[1]">
              <div className="absolute top-[0px] left-[0px] rounded-mid-7 bg-neutral-600 w-full h-full hidden" />
              <b className="absolute top-[35.6px] left-[37.4px] leading-[24.7px] inline-block w-[103.5px] h-[25px] z-[2] mq450:text-4xl mq450:leading-[20px]">
                Vision
              </b>
              <div className="absolute top-[31px] left-[573px] text-base-9 leading-[23px] font-light inline-block w-[395px] z-[2]">
                <p className="[margin-block-start:0] [margin-block-end:4.42px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</p>
                <p className="[margin-block-start:0] [margin-block-end:4.42px]">
                  Quisque tempor dolor non est convallis, sed eleifend ma
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4.42px]">{`gna hendrerit. Nullam facilisis `}</p>
                <p className="m-0">quam a odio ultr</p>
              </div>
            </div>
            <div className="absolute top-[156px] left-[140px] rounded-mid-7 bg-neutral-500 w-[872px] h-[179px] z-[2]">
              <div className="absolute top-[0px] left-[0px] rounded-mid-7 bg-neutral-500 w-full h-full hidden" />
              <b className="absolute top-[36px] left-[32px] leading-[24.7px] inline-block w-[142px] h-[25px] z-[3] mq450:text-4xl mq450:leading-[20px]">
                Core Value
              </b>
              <div className="absolute top-[31px] left-[433px] text-base-9 leading-[23px] font-light inline-block w-[395px] z-[3]">
                <p className="[margin-block-start:0] [margin-block-end:4.42px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</p>
                <p className="[margin-block-start:0] [margin-block-end:4.42px]">
                  Quisque tempor dolor non est convallis, sed eleifend ma
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4.42px]">{`gna hendrerit. Nullam facilisis `}</p>
                <p className="m-0">quam a odio ultr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
