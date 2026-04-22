"use client";

import { useEffect, useState } from "react";
import SmallScreenNavbar from "./small-screen-navbar";
import NavbarLinks from "./navbar-links";

export default function Header() {
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
      className={`fixed w-full flex justify-center py-8 transition-all duration-500 sm:border-b z-50 ${scrolled ? "md:border-white/10 border-transparent md:backdrop-blur-sm md:bg-dark/80" : "border-transparent"}`}
    >
      {/* large screens */}
      <nav className="max-md:hidden">
        <NavbarLinks />
      </nav>

      {/* small screens */}
      <SmallScreenNavbar />
    </header>
  );
}
