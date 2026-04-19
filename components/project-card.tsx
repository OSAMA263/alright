import { LuGithub, LuExternalLink } from "react-icons/lu";

export default function ProjectCard() {
  return (
    <div className="border border-white/10 transition-all hover:border-lightTeal hover:-translate-y-2 duration-300 space-y-4 p-8 rounded-xl bg-dark">
      <div className="flex items-center justify-between">
        <span className="textxl text-lightTeal font-mono">{`<01/>`}</span>
        {/* LINKS REPO AND DEOMo */}
        <div className="flex items-center gap-3 text-xl text-secondary *:transition-all *:hover:text-lightTeal *:hover:scale-115">
          <a href="" target="_blank">
            <LuGithub />
          </a>
          <a href="" target="_blank">
            <LuExternalLink />
          </a>
        </div>
      </div>

      {/* TITLE */}
      <h2 className="text-2xl capitalize">TITLE</h2>

      {/* DESCRIPTION */}
      <p className="text-sm text-secondary">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Molestias, atque. Molestias, atque.
      </p>

      {/* TECH USED */}
      <div className="flex items-center gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <span className="capitalize text-xs text-secondary" key={i}>
            kill
          </span>
        ))}
      </div>
    </div>
  );
}
