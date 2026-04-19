import Section from "@/components/layout/section";
import { CONTACT_DETAILS } from "@/data/contact-info";

export default function Hero() {
  return (
    <Section id="base">
      <div className="flex flex-col gap-6 capitalize md:w-[80%] w-[90%] mx-auto">
        <span className="sm:text-2xl text-darkTeal">
          Hello, i&apos;m
        </span>
        <h2 className="lg:text-7xl sm:text-5xl text-4xl font-bold">
          osama khaled
        </h2>
        <span className="lg:text-3xl text-xl">
          a <span className="text-darkTeal">front-end</span> developer
        </span>
        <p className="text-secondary lg:text-xl xl:w-1/2 lg:w-[80%]">
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
              className="transition-all duration-500 rounded-full p-2 border border-white/10 hover:border-darkTeal hover:text-darkTeal text-2xl"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* GLOWING CIRCLE ON THE RIGHT */}
      <div
        style={{
          background:
            "radial-gradient(circle, rgb(0, 203, 176, 0.1),transparent 70%)",
        }}
        className="size-150 absolute -right-50"
      />
    </Section>
  );
}
