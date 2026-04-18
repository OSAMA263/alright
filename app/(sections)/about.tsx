/* eslint-disable react/no-unescaped-entities */
import PageContainer from "@/components/layout/page-container";
import Section from "@/components/layout/section";
import SectionTitle from "@/components/section-title";
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
        <div className="space-y-10 text-lg text-secondary">
          <SectionTitle title="about" number={1} />
          <p>
            I'm a developer passionate about crafting accessible,
            pixel-perfect user interfaces that blend thoughtful design
            with robust engineering. My favorite work lies at the
            intersection of design and development.
          </p>
          <p>
            Over the past 2 years I've been sharpening my skills
            through personal projects, and gained hands-on experience
            during a frontend internship at{" "}
            <a
              href="https://www.linkedin.com/company/web-masters-academy/"
              target="_blank"
              className="text-lightTeal"
            >
              Web Masters.
            </a>
          </p>
          <p>
            In my spare time I'm usually exploring new technologies or
            experimenting with creative coding projects.
          </p>

          {/* tech i work with */}
          <div className="space-y-4 text-sm">
            <p>Technologies I work with:</p>
            <ul className="grid grid-cols-2 gap-2">
              {skills.map((tech) => (
                <li className="flex items-center" key={tech}>
                  <IoMdArrowDropright className="text-lightTeal text-lg" />
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT CONTENT, THE CARD AND THE NAME AND SHIT ALSO */}
        <div className="max-sm:hidden about-teal-card flex items-center justify-center text-5xl text-[#152d2e]">
          OK
        </div>
      </PageContainer>
    </Section>
  );
}
