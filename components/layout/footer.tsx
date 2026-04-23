import Link from "next/link";
import PageContainer from "./page-container";
import { LINKS } from "@/data/contact-info";
import MotionEle from "../ui/animated-ele";
import { IoMdDownload } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="py-8 mb-0! border-t border-white/10">
      <PageContainer>
        <MotionEle
          opacity
          className="grid md:grid-cols-3 max-md:gap-2 justify-items-center items-center font-normal text-secondary"
        >
          <MotionEle>
            Designed & Built by{" "}
            <Link
              className="text-darkTeal hover:underline"
              href={LINKS.github}
              target="_blank"
            >
              Osama
            </Link>
          </MotionEle>

  
          {/* resume links */}
          <MotionEle
            opacity
            y={30}
            className="flex items-center gap-4 w-fit relative z-1"
          >
            <a
              href="https://drive.google.com/uc?export=download&id=1_akeEYhkjr0LGVcZB18UmECshjn_gDjY"
              download="Osama_Khaled_Front-end_CV.pdf"
              className="border flex items-center gap-2 border-darkTeal text-darkTeal px-6 py-2 rounded-lg text-sm uppercase transition-all duration-300 hover:bg-darkTeal hover:text-dark"
            >
              Resume
              <IoMdDownload />
            </a>
          </MotionEle>

          <MotionEle opacity>2026</MotionEle>
        </MotionEle>
      </PageContainer>
    </footer>
  );
}
