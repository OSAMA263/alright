import { LuGithub, LuExternalLink,  } from "react-icons/lu";

export default function ImportantProject() {
  let num = 2;
  return (
    <div className="grid grid-cols-2 relative">
      <divw
        className={`bg-black ${num % 2 != 0 ? "order-2" : ""}`}
      >
        img
      </divw>

      {/* PROJECT DETAILS */}
      <div>
        <div
          className={`absolute flex flex-col left-0 gap-4 w-full z-1 ${num % 2 == 0 ? "items-end" : ""}`}
        >
          <span className="text-xs text-lightTeal">
            Featured Project
          </span>

          {/* DESCRIPTION */}
          <h2 className="text-4xl capitalize">project title</h2>
          <p className="p-6 rounded-lg bg-dark text-secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptates pariatur molestiae dolor, tempora labore
            tempore reprehenderit quaerat tenetur odit beatae.
          </p>
          {/* TECH USED */}
          <div className="flex items-center gap-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                className="capitalize text-xs text-secondary"
                key={i}
              >
                kill
              </span>
            ))}
          </div>

          {/* LINKS REPO AND DEOMo */}
          <div className="flex items-center gap-5 text-xl text-secondary *:transition-all *:hover:text-lightTeal *:hover:scale-120">
            <a href="" target="_blank">
              <LuGithub />
            </a>
            <a href="" target="_blank">
              <LuExternalLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
