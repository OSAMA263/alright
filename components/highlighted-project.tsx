import { ProjectTypes } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { LuGithub, LuExternalLink } from "react-icons/lu";

export default function ImportantProject(props: ProjectTypes) {
  return (
    <div className="grid grid-cols-2 relative">
      {/* PROJECT IMAGE */}
      <div
        className={`relative about-teal-card z-10 hover:[&>div]:opacity-0 ${props.id % 2 != 0 ? "order-2" : ""}`}
      >
        {/* OVERLAY ON THE IMAGE */}
        <div className="absolute transition-all max-xl:opacity-0 duration-400 size-full pointer-events-none rounded-2xl bg-darkerTeal" />
        <Link target="_blank" href={props.demo} title="demo">
          <Image
            src={props.img!}
            width={1100}
            height={1}
            className="size-full z-1 realtive rounded-2xl object-cover transition-all duration-400"
            alt={props.title}
          />
        </Link>
      </div>

      {/* PROJECT DETAILS */}
      <div
        className={`py-10 flex flex-col gap-6 ${props.id % 2 == 0 ? "items-end" : ""}`}
      >
        <span className="text-xs font-mono text-lightTeal">
          0{props.id + 1}
        </span>
        <Link
          href={props.demo}
          title="demo"
          target="_blank"
          className="text-4xl capitalize transition-all hover:text-lightTeal"
        >
          {props.title}
        </Link>
        {/* DESCRIPTION */}
        <p
          className={`relative z-50 w-[200%] p-4 rounded-lg bg-dark text-secondary ${
            props.id % 2 == 0 ? "text-end" : ""
          }`}
        >
          {props.des}
        </p>

        {/* TECH USED */}
        <div className="flex items-center gap-3">
          {props?.tech.map((skill) => (
            <span
              className="capitalize text-xs text-secondary/60"
              key={skill}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex items-center gap-5 text-xl text-secondary *:transition-all *:hover:text-lightTeal *:hover:scale-120">
          <Link href={props.repo} title="repo" target="_blank">
            <LuGithub />
          </Link>
          <Link href={props.demo} title="demo" target="_blank">
            <LuExternalLink />
          </Link>
        </div>
      </div>
    </div>
  );
}
