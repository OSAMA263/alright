import { ProjectTypes } from "@/data/projects";
import Link from "next/link";
import { LuGithub, LuExternalLink } from "react-icons/lu";
import MotionEle from "./ui/animated-ele";

type ProjectsTypesDelay = ProjectTypes & {
  ind: number;
};

export default function ProjectCard(props: ProjectsTypesDelay) {
  return (
    <MotionEle
      y={20}
      opacity
      delay={0.2}
      ind={props.ind}
      className="border hover:[&_h2]:text-lightTeal border-white/10 transition-all hover:border-lightTeal hover:bg-dark hover:-translate-y-2 duration-300 md:space-y-4 space-y-2 md:p-8 p-4 rounded-xl bg-dark/30"
    >
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
      <h2 className="text-2xl capitalize transition-all duration-400">
        {props.title}{" "}
        {props.title === "portfolio" && (
          <span className="text-xs">(nostalgia)</span>
        )}
      </h2>

      {/* DESCRIPTION */}
      <p className="text-sm text-secondary">{props.des}</p>

      {/* TECH USED */}
      <div className="flex items-center flex-wrap gap-2">
        {props.tech.map((skill) => (
          <span
            className="capitalize text-xs text-secondary/60"
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </MotionEle>
  );
}
