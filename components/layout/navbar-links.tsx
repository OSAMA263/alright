import { NAV_LINKS } from "@/data/navigation-links";
import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

type NavbarTypes = {
  onLinkClick?: () => void;
  className?: string;
  id?: string;
};

export default function NavbarLinks(props: NavbarTypes) {
  const { className, id, onLinkClick } = props;
  
  const [activeSection, setActiveSection] = useState("base");

  return (
    <ul className={`flex items-center gap-8 ${className ?? ""}`}>
      {NAV_LINKS.map(({ label, url }) => (
        <li key={label} className="relative">
          {/* link underline */}
          {activeSection == url && (
            <motion.span
              layoutId={id ?? "underline"}
              className="absolute w-full h-px z-0 bg-darkTeal bottom-0 left-0 rounded-md"
            />
          )}

          {/* link tag section */}
          <Link
            onSetActive={() => setActiveSection(url)}
            onClick={() => {
              setActiveSection(url);
              onLinkClick?.();
            }}
            className={`relative font-semibold capitalize py-2 transition-all ${activeSection == url ? "text-darkTeal" : "text-secondary"}`}
            to={url}
            href={url}
            duration={400}
            hashSpy
            smooth
            spy
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
