"use client";

import { motion } from "framer-motion";
import { NAV_LINKS } from "@/data/navigation-links";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function Header() {
  const [activeSection, setActiveSection] = useState("base");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      return window.scrollY > 30
        ? setScrolled(true)
        : setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full flex justify-center py-8 transition-all duration-500 border-b z-50 ${scrolled ? "border-white/10 backdrop-blur-sm bg-dark/80" : "border-transparent"}`}
    >
      <nav>
        <ul className="flex items-center gap-8">
          {NAV_LINKS.map(({ label, url }) => (
            <li key={label} className="relative">
              {/* link underline */}
              {activeSection == url && <Underline />}

              {/* link tag section */}
              <Link
                onSetActive={() => setActiveSection(url)}
                onClick={() => setActiveSection(url)}
                className={`relative font-semibold capitalize py-2 transition-all ${activeSection == url ? "text-darkTeal" : "text-secondary"}`}
                to={url}
                href={url}
                duration={400}
                smooth
                spy
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

const Underline = () => {
  return (
    <motion.span
      layoutId="underline"
      className="absolute w-full h-px z-0 bg-darkTeal bottom-0 left-0 rounded-md"
    />
  );
};
