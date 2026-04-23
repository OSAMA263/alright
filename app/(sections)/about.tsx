/* eslint-disable react/no-unescaped-entities */
import PageContainer from "@/components/layout/page-container";
import Section from "@/components/layout/section";
import MotionEle from "@/components/ui/animated-ele";
import PlainBtn from "@/components/ui/plain-btn";
import SectionTitle from "@/components/ui/section-title";
import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";

const skills = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Chakra UI",
  "Framer Motion",
  "Zod",
];

export default function About() {
  return (
    <Section id="about">
      <PageContainer className="grid lg:grid-cols-2 max-sm:grid-rows-1 max-lg:grid-rows-2 2xl:gap-20 gap-10">
        {/* LEFT CONTENT ABOUT ME AND SHIT */}
        <Summary />

        {/* RIGHT CONTENT, THE CARD AND THE NAME AND SHIT ALSO */}
        <MotionEle
          opacity
          className="max-sm:hidden card-teal-border flex items-center justify-center"
        >
          <PlainBtn
            step={1}
            aria-label="one-of-the steps"
            className="transition-all duration-500 flex scale-50 items-center justify-center hover:scale-400"
          >
            <div className="relative w-2 h-2">
              <Image src="/o_letter.svg" alt="letter-o" fill />
            </div>
            <div className="relative w-2 h-2">
              <Image src="/k_letter.svg" alt="letter-k" fill />
            </div>
          </PlainBtn>
        </MotionEle>
      </PageContainer>
    </Section>
  );
}

// LEFT SIDE CONTENT YAPPING
const Summary = () => {
  return (
    <div className="space-y-10 sm:text-lg text-secondary">
      <SectionTitle
        title="about"
        number={1}
        className="[&>div]:w-1/2"
      />
      <MotionEle opacity y={8} speed={0.4} as="p">
        I'm a developer passionate about crafting accessible,
        pixel-perfect user interfaces that blend thoughtful design
        with robust engineering. My favorite work lies at the
        intersection of design and development.
      </MotionEle>
      <MotionEle opacity y={8} speed={0.4} as="p">
        Over the past 2 years I've been sharpening my skills through
        personal projects, and gained hands-on experience during a
        frontend internship at{" "}
        <a
          href="https://www.linkedin.com/company/web-masters-academy/"
          target="_blank"
          className="text-lightTeal"
        >
          Web Masters.
        </a>
      </MotionEle>
      <MotionEle opacity y={8} speed={0.4} as="p">
        In my spare time I'm usually exploring new technologies or
        experimenting with creative coding projects.
      </MotionEle>

      {/* tech i work with */}
      <div className="space-y-4 text-sm">
        <p>Technologies I work with:</p>
        <ul className="grid grid-cols-2 gap-2">
          {skills.map((tech, ind) => (
            <MotionEle
              as="li"
              ind={ind}
              x={-10}
              opacity
              className="flex items-center"
              key={tech}
            >
              <IoMdArrowDropright className="text-lightTeal text-lg" />
              {tech}
            </MotionEle>
          ))}
        </ul>
      </div>
    </div>
  );
};
