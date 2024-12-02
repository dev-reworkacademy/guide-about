import type { NextPage } from "next";
import Image from "next/image";
import Component1 from "../components/component1";
import Content from "../components/content";
import FrameComponent from "../components/frame-component";
import DashboardContent from "../components/dashboard-content";
import Universities from "../components/universities";
import GroupComponent2 from "../components/group-component2";
import FrameComponent1 from "../components/frame-component1";
import DivMarqueeStrip from "../components/div-marquee-strip";
import DivFlexH from "../components/div-flex-h";
import FooterDark from "../components/footer-dark";

const AboutUs: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start leading-[normal] tracking-[normal] text-left text-mid-2 text-gray-100 font-desktop-caption-regular">
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[79px] mq450:pb-[51px] mq450:box-border">
        <Component1 property1="header 2" />
        <Content />
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[90px] box-border max-w-full text-left text-13xl text-black font-desktop-caption-regular mq825:pb-[58px] mq825:box-border">
        <div className="w-[1216px] flex flex-row items-start justify-start gap-[97px] max-w-full lg:flex-wrap mq450:gap-6 mq825:gap-12">
          <div className="h-[447px] flex-1 relative min-w-[415px] max-w-full mq825:min-w-full">
            <Image
              className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-lg max-h-full w-80 object-cover"
              width={320}
              height={447}
              alt=""
              src="/pexelsnewmanphotographs12428702-1@2x.png"
            />
            <div className="absolute top-[155px] left-[232px] rounded-lg bg-gainsboro w-[406px] h-[183px] z-[1]" />
            <Image
              className="absolute top-[172px] left-[250px] rounded-lg w-[371px] h-[197px] object-cover z-[2]"
              loading="lazy"
              width={371}
              height={197}
              alt=""
              src="/pexelsphoto256395-1@2x.png"
            />
          </div>
          <div className="h-[304px] w-[481px] relative inline-block shrink-0 max-w-full lg:flex-1 mq825:min-w-full">
            <p className="m-0">
              <b>
                <span className="tracking-[0.03em] leading-[45px]">
                  Who Are We
                </span>
              </b>
            </p>
            <p className="m-0 text-primary">
              <span className="leading-[26px]">
                <b>
                  <span>&nbsp;</span>
                </b>
              </span>
            </p>
            <p className="m-0 text-lg text-slategray">
              <span className="leading-[26px]">
                <span className="font-light">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor dolor non est convallis, sed eleifend magna hendrerit. Nullam facilisis `}</span>
              </span>
            </p>
            <p className="m-0">
              <span className="leading-[26px]">
                <span className="font-light">{`quam a odio ultricies, in pharetra nulla ornare. Vestibulum eu diam in turpis tristique pretium. Morbi ac dolor ut erat sagittis elementum. Aliquam `}</span>
              </span>
            </p>
            <p className="m-0">
              <span className="leading-[26px]">
                <span className="font-light">erat volutpat.</span>
              </span>
            </p>
            <p className="m-0">
              <span className="leading-[26px]">
                <span className="font-light">{`rem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor dolor non est convallis, sed eleifend magna hendrerit. Nullam facilisis `}</span>
              </span>
            </p>
            <p className="m-0">
              <span className="leading-[26px]">
                <span className="font-light">{`quam a odio ultricies, in pharetra nulla ornare. Vestibulum eu diam in turpis tristique pretium. Morbi ac dolor ut erat sagittis elementum. Aliquam `}</span>
              </span>
            </p>
            <p className="m-0">
              <span className="leading-[26px]">
                <span className="font-light">erat volutpat.</span>
              </span>
            </p>
          </div>
        </div>
      </section>
      <FrameComponent />
      <Image
        className="w-full h-[262px] absolute !m-[0] top-[100px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover z-[1]"
        width={1440}
        height={262}
        alt=""
        src="/collegestudentwalkingtouniversitycampuseducationbannerconceptfreephoto-1@2x.png"
      />
      <section className="self-stretch flex flex-row items-start justify-center [row-gap:20px] max-w-full text-left text-lg text-text-black font-desktop-caption-regular lg:flex-wrap">
        <Image
          className="w-[704px] relative max-h-full object-cover shrink-0 max-w-full z-[3] lg:flex-1"
          loading="lazy"
          width={704}
          height={662}
          alt=""
          src="/pexelsfauxels3182812-1@2x.png"
        />
        <div className="flex-1 bg-neutral-200 flex flex-row items-start justify-start pt-[125px] pb-[143px] pl-[101px] pr-[75px] box-border min-w-[480px] shrink-0 max-w-full z-[1] mq450:pl-5 mq450:box-border mq825:pt-[81px] mq825:pb-[93px] mq825:pl-[50px] mq825:pr-[37px] mq825:box-border mq825:min-w-full">
          <div className="h-[662px] w-[738px] relative bg-neutral-200 hidden max-w-full z-[1]" />
          <div className="flex-1 relative leading-[28px] inline-block max-w-full z-[2]">
            <p className="[margin-block-start:0] [margin-block-end:12px] text-13xl">
              <b>The Birth of Guide</b>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:12px] font-light">
              The journey began with countless brainstorming sessions, sleepless
              nights, and numerous cups of coffee. They named their platform
              Guide, symbolizing the guidance they hoped to give students on
              their future academic pursuit. The core idea was to leverage
              technology to break down barriers, providing students with easy
              access to a wealth of information about universities and programs.
            </p>
            <p className="m-0 font-light">
              Guide's development was marked by a commitment to user-centric
              design. The team envisioned a platform where students could
              explore universities based on their interests, academic goals, and
              financial constraints. They wanted a space where students could
              not only discover educational opportunities but also receive
              tailored advice to navigate the complexities of university
              admissions.
            </p>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-end py-[72px] px-0 box-border relative min-h-[2328px] max-w-full lg:h-auto lg:pt-[47px] lg:pb-[47px] lg:box-border mq825:pt-[31px] mq825:pb-[31px] mq825:box-border">
        <DashboardContent />
        <Universities />
        <GroupComponent2 />
      </section>
      <b className="absolute !m-[0] top-[3237px] left-[363px] text-lgi-1 leading-[28.6px] inline-block z-[4]">
        Institutions Present
      </b>
      <Image
        className="w-px h-[45.7px] absolute !m-[0] bottom-[3263.8px] left-[614.5px] z-[4]"
        loading="lazy"
        width={1}
        height={46}
        alt=""
        src="/line-8.svg"
      />
      <div className="absolute !m-[0] right-[655.9px] bottom-[3280.5px] leading-[26.7px] inline-block min-w-[100px] z-[4]">
        Adaba Mews
      </div>
      <Image
        className="w-[41.9px] h-[41.9px] absolute !m-[0] bottom-[3265.6px] left-[629.8px] rounded-5xs-6 object-cover z-[4]"
        loading="lazy"
        width={42}
        height={42}
        alt=""
        src="/image-28@2x.png"
      />
      <div className="absolute !m-[0] bottom-[3280.5px] left-[417.3px] leading-[26.7px] z-[4]">
        Covenant University
      </div>
      <Image
        className="w-[41.9px] h-[41.9px] absolute !m-[0] bottom-[3265.6px] left-[363px] rounded-5xs-6 object-cover z-[4]"
        loading="lazy"
        width={42}
        height={42}
        alt=""
        src="/image-29@2x.png"
      />
      <b className="absolute !m-[0] top-[3237px] right-[256.8px] text-lgi-1 leading-[28.6px] inline-block z-[4]">
        Available Accommodations
      </b>
      <Image
        className="w-px h-[45.7px] absolute !m-[0] right-[243.2px] bottom-[3263.8px] z-[4]"
        loading="lazy"
        width={1}
        height={46}
        alt=""
        src="/line-9.svg"
      />
      <div className="absolute !m-[0] right-[120.7px] bottom-[3280.5px] leading-[26.7px] inline-block min-w-[54px] z-[4]">
        Duplex
      </div>
      <Image
        className="w-[41.9px] h-[41.9px] absolute !m-[0] right-[187.1px] bottom-[3265.6px] rounded-5xs-6 object-cover z-[4]"
        loading="lazy"
        width={42}
        height={42}
        alt=""
        src="/image-30@2x.png"
      />
      <div className="w-[160.1px] absolute !m-[0] right-[281.4px] bottom-[3280.5px] leading-[26.7px] inline-block z-[4]">
        Shared Apartments
      </div>
      <Image
        className="w-[41.9px] h-[41.9px] absolute !m-[0] right-[453.9px] bottom-[3265.6px] rounded-5xs-6 object-cover z-[4]"
        loading="lazy"
        width={42}
        height={42}
        alt=""
        src="/image-31@2x.png"
      />
      <b className="absolute !m-[0] bottom-[3102.4px] left-[378.2px] leading-[26.7px] inline-block text-primary min-w-[64.8px] z-[4]">
        Explore
      </b>
      <Image
        className="w-[15.7px] h-[15.7px] absolute !m-[0] bottom-[3106px] left-[447.8px] overflow-hidden shrink-0 z-[4]"
        width={16}
        height={16}
        alt=""
        src="/fluentarrowright24filled-1.svg"
      />
      <b className="absolute !m-[0] right-[412.9px] bottom-[3102.4px] leading-[26.7px] inline-block text-primary min-w-[64.8px] z-[4]">
        Explore
      </b>
      <Image
        className="w-[15.7px] h-[15.7px] absolute !m-[0] right-[392.4px] bottom-[3106px] overflow-hidden shrink-0 z-[4]"
        width={16}
        height={16}
        alt=""
        src="/fluentarrowright24filled-2.svg"
      />
      <FrameComponent1 />
      <section className="self-stretch [background:linear-gradient(62.48deg,_#161616,_#300a02)] flex flex-col items-start justify-start pt-[100px] px-0 pb-24 box-border relative gap-[72px] mix-blend-normal max-w-full text-left text-13xl text-whitesmoke-200 font-desktop-caption-regular lg:pt-[65px] lg:pb-[62px] lg:box-border mq450:gap-[18px] mq450:pt-[42px] mq450:pb-10 mq450:box-border mq825:gap-9">
        <Image
          className="w-[877.3px] h-[880.9px] !m-[0] absolute top-[-114px] left-[-218px] object-contain"
          width={877}
          height={881}
          alt=""
          src="/testimonial-container@2x.png"
        />
        <div className="flex flex-row items-start justify-start py-0 pl-[490px] pr-[489px] mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pl-[245px] mq825:pr-[244px] mq825:box-border">
          <h1 className="m-0 relative text-inherit tracking-[0.03em] leading-[45px] font-bold font-[inherit] z-[1] mq450:text-lgi mq450:leading-[27px] mq825:text-7xl mq825:leading-[36px]">
            What Our Users Say About Us
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-6 max-w-full">
          <DivMarqueeStrip />
          <DivFlexH />
        </div>
      </section>
      <FooterDark />
    </div>
  );
};

export default AboutUs;
