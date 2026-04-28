/* eslint-disable react/no-unescaped-entities */
import PlainBtn from "@/components/ui/plain-btn";
import Section from "@/components/layout/section";
import GlowingCircle from "@/components/ui/glowing-circle";
import MotionEle from "@/components/ui/animated-ele";
import { CONTACT_DETAILS } from "@/data/contact-info";

export default function Hero() {
  return (
    <Section id="base" className="overflow-hidden">
      <div className="flex flex-col relative gap-4 capitalize md:w-[80%] w-[90%] mx-auto">
        {/* GLOWING CIRCLE ON THE RIGHT */}
        <GlowingCircle className="size-150 absolute right-0 translate-x-1/2 -z-1" />
        <GlowingCircle className="size-150 absolute -top-full -translate-x-1/2" />

        <MotionEle
          speed={0.3}
          as="span"
          y={30}
          opacity
          className="sm:text-2xl text-darkTeal"
        >
          Hello, i'm
        </MotionEle>

        {/* NAME */}
        <h2 className="flex normal-case! lg:text-7xl sm:text-5xl text-4xl font-bold">
          {"Osama Khaled".split("").map((char, ind) => (
            <MotionEle
              speed={0.3}
              delay={0.3}
              key={ind}
              ind={ind}
              y={20}
              opacity
            >
              {char === " " ? "\u00A0" : char}
            </MotionEle>
          ))}
        </h2>

        {/* role */}
        <MotionEle
          speed={0.3}
          as="span"
          opacity
          y={30}
          delay={1.1}
          className="lg:text-3xl text-xl"
        >
          a <span className="text-darkTeal">front-end</span> developer
        </MotionEle>

        {/* shit i do */}
        <MotionEle
          speed={0.3}
          as="p"
          opacity
          y={30}
          delay={1.3}
          className="text-secondary lg:text-lg xl:w-1/2 lg:w-[80%]"
        >
          Crafting polished software and web experiences.
          Experimenting with magical details in user interfaces.
          Building things that feel alive.
        </MotionEle>

        {/* LINK ICONS */}
        <div className="flex relative z-10 items-center gap-2">
          {CONTACT_DETAILS.map(({ url, label, Icon }, ind) => (
            <MotionEle
              ind={ind}
              opacity
              scale={0.4}
              delay={1.6}
              key={label}
            >
              <a
                className="transition-all rounded-full p-2 border border-white/20 hover:border-darkTeal hover:text-darkTeal text-2xl hover:rotate-10 inline-block"
                aria-label={label}
                target="_blank"
                title={label}
                href={url}
              >
                <Icon />
              </a>
            </MotionEle>
          ))}
        </div>
      </div>

      {/*  */}
      <MotionEle
        speed={0.3}
        opacity
        y={30}
        delay={1.6}
        as="p"
        className="max-md:hidden -rotate-90 w-fit -right-4 translate-x-1/3 absolute text-sm text-secondary whitespace-nowrap"
      >
        Yesterday, today was tomorrow And tomorrow, today will be
        yesterday, breath{" "}
        <PlainBtn
          step={0}
          className="text-darkerTeal text-2xl cursor-pointer"
        >
          .
        </PlainBtn>
      </MotionEle>
    </Section>
  );
}
