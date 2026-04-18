import Section from "@/components/layout/section";
import { CONTACT_DETAILS } from "@/data/contact-info";

export default function Hero() {
  return (
    <Section id="base">
      <div className="flex flex-col gap-6 capitalize w-[80%] mx-auto">
        <span className="text-2xl text-darkTeal">Hello, i'm</span>
        <h2 className="text-7xl font-bold">osama khaled</h2>
        <span className="text-3xl">
          a <span className="text-darkTeal">front-end</span> developer
        </span>
        <p className="text-secondary text-xl w-1/2">
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
              className="transition-all duration-500 rounded-full p-2 border border-white/20 hover:border-darkTeal hover:text-darkTeal text-2xl"
            >
              <Icon className="" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
