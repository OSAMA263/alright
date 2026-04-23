"use client";

import { OTHER_PROJECTS } from "@/data/projects";
import ProjectCard from "./project-card";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function OtherProjects() {
  const [itemsShowen, setItemsShowen] = useState(6);

  return (
    <>
      <div className="transition-all duration-400 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {OTHER_PROJECTS.slice(0, itemsShowen).map((project,ind) => (
          <ProjectCard {...project} key={project.title} ind={ind} />
        ))}
      </div>

      {/* LOAD MORE PROJECTS */}
      <AnimatePresence mode="wait">
        {itemsShowen <= OTHER_PROJECTS.length && (
          <motion.button
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{once:true}}
            exit={{ opacity: 0 }}
            className="mx-auto block text-sm px-4 w-fit border border-white/10 cursor-pointer hover:bg-darkerTeal transition-all duration-400 p-2 rounded-lg"
            onClick={() => setItemsShowen((prev) => prev + 3)}
          >
            Show more
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
