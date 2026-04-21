"use client";

import { OTHER_PROJECTS } from "@/data/projects";
import ProjectCard from "./project-card";
import { useState } from "react";

export default function OtherProjects() {
  const [itemsShowen, setItemsShowen] = useState(6);

  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {OTHER_PROJECTS.slice(0, itemsShowen).map((project) => (
          <ProjectCard {...project} key={project.title} />
        ))}
      </div>

      {/* LOAD MORE PROJECTS */}
      {itemsShowen <= OTHER_PROJECTS.length && (
        <button
          className="mx-auto block text-sm px-4 w-fit border border-white/10 cursor-pointer hover:bg-darkerTeal transition-all duration-400 p-2 rounded-lg"
          onClick={() => setItemsShowen((prev) => prev + 3)}
        >
          Show more
        </button>
      )}
    </>
  );
}
