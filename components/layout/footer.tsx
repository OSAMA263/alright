import Link from "next/link";
import PageContainer from "./page-container";
import { CONTACT_DETAILS, LINKS } from "@/data/contact-info";

export default function Footer() {
  return (
    <footer className="py-8 mb-0! border-t border-white/10">
      <PageContainer>
        <div className="grid md:grid-cols-3 max-md:gap-2 justify-items-center items-center font-normal text-secondary">
          <div>
            Designed & Built by{" "}
            <Link
              className="text-darkTeal hover:underline"
              href={LINKS.github}
              target="_blank"
            >
              Osama
            </Link>
          </div>

          {/* LINK ICONS */}
          <div className="flex items-center gap-2">
            {CONTACT_DETAILS.map(({ url, label, Icon }) => (
              <a
                key={label}
                aria-label={label}
                target="_blank"
                title={label}
                href={url}
                className="transition-all duration-500 rounded-full p-2 hover:text-darkTeal text-xl"
              >
                <Icon />
              </a>
            ))}
          </div>

          <div>2026</div>
        </div>
      </PageContainer>
    </footer>
  );
}
