import { ExpTypes } from "@/data/experience";
import { FaExternalLinkAlt } from "react-icons/fa";
import MotionEle from "./ui/animated-ele";

type ExpSectionProps = ExpTypes & {
  ind: number;
};

export default function ExpSection(props: ExpSectionProps) {
  const { title, company, duration, des, skills, ind } = props;

  return (
    <MotionEle
      opacity
      delay={.2}
      y={20}
      ind={ind}
      className="relative hover:[&_h2]:text-darkTeal pb-10 hover:[&_#line]:bg-lightTeal hover:[&_#circle]:bg-lightTeal hover:[&_#circle]:border-lightTeal"
    >
      <ProggressLine />

      {/* EXP DETAILS */}
      <div className="space-y-4 ms-10">
        {/* COMPANY LOCATION */}
        <div>
          <div className="flex flex-wrap items-end gap-3">
            <h2 className="text-xl transition-all">{title}</h2>
            <span className="text-secondary">@</span>
            <a
              href={company?.url}
              target="_blank"
              className="text-darkTeal hover:underline flex items-center gap-1"
            >
              {company?.name}
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
          <p className="text-xs text-secondary">{duration}</p>
        </div>

        {/* DESCRIPTION */}
        <p className="sm:text-lg text-secondary w-[80%]">{des}</p>

        {/* SKILLS */}
        <div className="flex items-center flex-wrap gap-3">
          {skills?.map((skill, i) => (
            <span
              className="text-darkTeal rounded-full text-xs px-2 py-1 bg-gray-900"
              key={i}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </MotionEle>
  );
}

const ProggressLine = () => {
  return (
    <>
      <div
        id="line"
        className="absolute h-full w-px bg-white/10 transition-all duration-500"
      ></div>
      {/* circle */}
      <div
        id="circle"
        className="transition-all duration-500 absolute left-0 -translate-x-1/2 border border-white/10 rounded-full size-4 bottom-full"
      />
    </>
  );
};
