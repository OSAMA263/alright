export type ProjectTypes = {
  id: number;
  img?: string;
  title: string;
  des: string;
  tech: string[];
  repo: string;
  demo: string;
};

export const IMPORTANT_PROJECTS = [
  {
    id: 0,
    img: "/project-1.png",
    title: "luna",
    des: "A multi-section brand showcase website built for a company presenting its services, blog, and team information. Features a custom animated loader on entry, smooth scroll-based animations throughout, and a fully responsive layout. Built with React and structured around reusable components, with Framer Motion handling all transitions and micro-interactions to create a polished, professional feel.",
    tech: ["React", "Tailwind", "Framer Motion", "Chakra UI"],
    repo: "https://github.com/OSAMA263/luna",
    demo: "https://osama263.github.io/luna/",
  },
  {
    id: 1,
    img: "/project-3.png",
    title: "Education",
    des: "A learning management platform where students can access lessons and take online exams across multiple grade levels. Users can create accounts, track their progress, and view scores in real time. Includes an admin dashboard for creating and managing lessons and exams, with live data sync via Supabase.",
    tech: [
      "React",
      "Tailwind",
      "Chakra UI",
      "React Query",
      "Framer Motion",
      "Zod",
      "Supabase",
    ],
    repo: "https://github.com/OSAMA263/education",
    demo: "https://osama263.github.io/education/",
  },
  {
    id: 2,
    img: "/project-2.png",
    title: "store",
    des: "A full e-commerce application where users can create accounts, browse products, and maintain a personalized cart and wishlist across sessions. Includes a complete admin dashboard for managing products, updating store inventory, and monitoring user shopping activity. Redux Toolkit handles global state to keep cart and wishlist data consistent and in sync across the entire app in real time.",
    tech: ["React", "Tailwind", "Redux Toolkit", "Yup", "Swiper"],
    repo: "https://github.com/OSAMA263/store",
    demo: "https://osama263.github.io/store/",
  },
];

export const OTHER_PROJECTS = [
  {
    id: 0,
    title: "Miracle",
    des: "A cloud consulting company website with pages for services, careers, about, and contact, including an FAQ section and global presence display.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "Zod",
    ],
    repo: "https://github.com/OSAMA263/miracle",
    demo: "https://miracle-rose.vercel.app/",
  },
  {
    id: 1,
    title: "journey",
    des: "A responsive multi-section landing site with smooth scroll navigation and organized content layout.",
    tech: ["React", "Tailwind", "SCSS", "Framer Motion"],
    repo: "https://github.com/OSAMA263/journey",
    demo: "https://osama263.github.io/journey/",
  },
  {
    id: 2,
    title: "water",
    des: "A clean company landing page with a minimal structure and responsive layout",
    tech: ["React", "Tailwind", "SCSS", "Vite"],
    repo: "https://github.com/OSAMA263/water",
    demo: "https://osama263.github.io/water/",
  },
  {
    id: 3,
    title: "meditate",
    des: "A UI prototype/sandbox used for testing layouts and design ideas.",
    tech: ["React", "Tailwind", "SCSS", "Vite"],
    repo: "https://github.com/OSAMA263/maybe",
    demo: "https://osama263.github.io/maybe/",
  },
  {
    id: 4,
    title: "sushi",
    des: "A restaurant site with table reservation booking, menu overview, and booking management.",
    tech: ["Next.js", "Tailwind", "SCSS"],
    repo: "https://github.com/OSAMA263/sushi",
    demo: "https://osama263.github.io/sushi/",
  },
  {
    id: 5,
    title: "Constructs",
    des: "A construction company website displaying services, ongoing projects, and organized service information with a clean responsive layout.",
    tech: ["React", "Tailwind", "Vite"],
    repo: "https://github.com/OSAMA263/constructs",
    demo: "https://osama263.github.io/constructs/",
  },
  {
    id: 6,
    title: "portfolio",
    des: "An old personal developer portfolio showcasing projects, skills, and experience with smooth animations and an interactive UI.",
    tech: [
      "React",
      "Tailwind",
      "Framer Motion",
      "Formik & Yup",
      "Vite",
    ],
    repo: "https://github.com/OSAMA263/Portfolio",
    demo: "https://osama263.github.io/Portfolio/",
  },
];
