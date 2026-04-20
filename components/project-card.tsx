import { ProjectTypes } from "@/data/projects";
import Link from "next/link";
import { LuGithub, LuExternalLink } from "react-icons/lu";

export default function ProjectCard(props: ProjectTypes) {
  return (
    <div className="border border-white/10 transition-all hover:border-lightTeal hover:-translate-y-2 duration-300 space-y-4 p-8 rounded-xl bg-dark">
      <div className="flex items-center justify-between">
        <span className="textxl text-lightTeal font-mono">{`<0${props.id + 1}/>`}</span>
        {/* LINKS REPO AND DEOMo */}
        <div className="flex items-center gap-3 text-xl text-secondary *:transition-all *:hover:text-lightTeal *:hover:scale-115">
          <Link href={props.repo} title="repo" target="_blank">
            <LuGithub />
          </Link>
          <Link href={props.demo} title="demo" target="_blank">
            <LuExternalLink />
          </Link>
        </div>
      </div>

      {/* TITLE */}
      <h2 className="text-2xl capitalize">
        {props.title}{" "}
        {props.title === "portfolio" && (
          <span className="text-xs">(nostalgia)</span>
        )}
      </h2>

      {/* DESCRIPTION */}
      <p className="text-sm text-secondary">{props.des}</p>

      {/* TECH USED */}
      <div className="flex items-center gap-2">
        {props.tech.map((skill) => (
          <span
            className="capitalize text-xs text-secondary/60"
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
