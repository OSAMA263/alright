/* eslint-disable react/no-unescaped-entities */
import PageContainer from "@/components/layout/page-container";
import Section from "@/components/layout/section";
import MotionEle from "@/components/ui/animated-ele";
import SectionTitle from "@/components/ui/section-title";
import { CONTACT_DETAILS, LINKS } from "@/data/contact-info";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { Fragment } from "react/jsx-runtime";

export default function Contact() {
  return (
    <Section id="contact" className="min-h-[70vh]!">
      <PageContainer>
        {/* touch me lule */}
        <div className="flex flex-col [&>p]:text-secondary text-center w-fit mx-auto border-b px-4 pb-10 border-white/10 mb-6!">
          <SectionTitle
            y
            number={0}
            title="Get In Touch"
            className="flex-col items-center! gap-2! [&_#gray-line]:hidden [&>h2]:lg:text-6xl!"
          />

          <MotionEle as="p" opacity y={20} delay={0.3}>
            If you would like to discuss a project or just say hi, I'm
            always down to chat. <br className="max-md:hidden" />
            My inbox is always open, and I'll try my best to get back
            to you!
          </MotionEle>
          {/* E-MAIL BUTTON */}
          <MotionEle opacity y={20} delay={0.4}>
            <Link
              className="md:text-lg border w-fit mx-auto flex items-center gap-2 md:px-8 md:py-4 p-4 rounded-full border-darkerTeal transition-all duration-300 hover:bg-darkTeal hover:text-black mt-10 bg-darkerTeal/40 hover:scale-103"
              href={LINKS.gmail}
            >
              <MdOutlineMail className="text-2xl" /> Say Hello
            </Link>
          </MotionEle>
        </div>

        {/* CONTACT LINKS */}
        <MotionEle
          opacity
          delay={0.5}
          className="flex gap-4 flex-wrap items-center mx-auto w-fit font-normal text-secondary"
        >
          {CONTACT_DETAILS.map(({ label, url }, i) => (
            <Fragment key={label}>
              {i !== 0 && (
                <div className="p-1 rounded-full bg-secondary"></div>
              )}
              <Link
                href={url!}
                target="_blank"
                className="transition-all duration-400 hover:text-darkTeal"
              >
                {label}
              </Link>
            </Fragment>
          ))}
        </MotionEle>
      </PageContainer>
    </Section>
  );
}
