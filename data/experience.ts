export type ExpTypes = {
  title: string;
  company: { name: string; url: string };
  duration: string;
  des: string;
  skills: string[];
};

export const EXP = [
  {
    title: "Frontend Developer Intern",
    company: {
      name: "Web Masters",
      url: "https://www.linkedin.com/company/web-masters-academy/",
    },

    duration: "2025 Feb - 2025 July",
    des: "Developed responsive web applications and contributed to the frontend architecture. Worked with modern React patterns, collaborated with the team on feature development, and improved my skills in professional development environments.",
    skills: ["React", "JavaScript", "Tailwind CSS", "CSS", "HTML"],
  },
  {
    title: "Self-Directed Learning & Development",
    company: {
      name: "Personal Projects",
      url: "https://github.com/OSAMA263?tab=stars",
    },
    duration: "2022 - Present",
    des: "Built multiple web applications and projects to deepen my understanding of web development. Focused on learning modern frameworks, responsive design, and best practices through hands-on implementation.",
    skills: [
      "React",
      "Next",
      "JavaScript",
      "TypeScript",
      "TanStack",
      "Redux",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
];
