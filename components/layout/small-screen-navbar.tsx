"use client";
import { useState } from "react";
import NavbarLinks from "./navbar-links";

export default function SmallScreenNavbar() {
  const [active, setActive] = useState(false);

  return (
    <>
      <button
        onClick={() => setActive((prev) => !prev)}
        aria-label="navbar-toggler"
        className="md:hidden z-50 fixed backdrop-blur-sm size-fit left-1/2 -translate-x-1/2 top-4 border border-darkerTeal rounded-xl py-2 px-4 transition-all hover:bg-darkerTeal bg-dark/80"
      >
        <div className="relative w-6 h-5">
          <Line
            className={active ? "-rotate-45" : "-translate-y-[8px]"}
          />
          <Line className={active ? "w-0 opacity-0" : ""} />
          <Line
            className={active ? "rotate-45" : "translate-y-[6px]"}
          />
        </div>
      </button>

      {/*  */}
      <nav
        className={`md:hidden overflow-hidden fixed z-40 flex items-center justify-center top-0 w-full bg-darkerTeal/80 backdrop-blur-lg transition-all duration-400 ${active ? "h-dvh" : "h-0"}`}
      >
        <NavbarLinks
          id="underline-2"
          className="flex-col gap-4!"
          onLinkClick={() => setActive(false)}
        />
      </nav>
    </>
  );
}

const Line = ({ className }: { className?: string }) => {
  return (
    <span
      className={`transition-all bg-gray-400 absolute w-full h-0.5  block top-1/2 mx-auto rounded-full -translate-y-1/2 duration-500 ${className ?? ""}`}
    />
  );
};
