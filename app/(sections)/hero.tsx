/* eslint-disable react/no-unescaped-entities */
import PlainBtn from "@/components/plain-btn";
import Section from "@/components/layout/section";
import GlowingCircle from "@/components/ui/glowing-circle";
import { CONTACT_DETAILS } from "@/data/contact-info";

export default function Hero() {
  return (
    <Section id="base">
      <div className="flex flex-col relative gap-6 capitalize md:w-[80%] w-[90%] mx-auto">
        <GlowingCircle className="size-150 absolute -top-full -translate-x-1/2" />

        <span className="sm:text-2xl text-darkTeal">Hello, i'm</span>
        <h2 className="lg:text-7xl sm:text-5xl text-4xl font-bold">
          osama khaled
        </h2>
        <span className="lg:text-3xl text-xl">
          a <span className="text-darkTeal">front-end</span> developer
        </span>
        <p className="text-secondary lg:text-lg xl:w-1/2 lg:w-[80%]">
          Crafting polished software and web experiences.
          Experimenting with magical details in user interfaces.
          Building things that feel alive.
        </p>

        {/* contact links */}
        <div className="flex items-center gap-4">
          {CONTACT_DETAILS.map(({ url, label, Icon }) => (
            <a
              key={label}
              aria-label={label}
              target="_blank"
              title={label}
              href={url}
              className="transition-all duration-500 rounded-full p-2 border border-white/10 hover:border-darkTeal hover:text-darkTeal text-2xl hover:rotate-10"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* GLOWING CIRCLE ON THE RIGHT */}
      <GlowingCircle className="size-150 absolute right-0 translate-x-1/2" />

      {/*  */}
      <p className="-rotate-90 w-fit right-0 translate-x-1/3 absolute text-sm text-secondary whitespace-nowrap">
        Yesterday, today was tomorrow And tomorrow, today will be
        yesterday, breath{" "}
        <PlainBtn step={0} className="text-darkerTeal text-2xl cursor-pointer">
          .
        </PlainBtn>
      </p>
    </Section>
  );
}
