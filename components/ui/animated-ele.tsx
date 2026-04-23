"use client";

import { motion } from "framer-motion";

type AnimationTypes = {
  y?: number;
  ind?: number;
  opacity?: boolean;
  scale?: number;
  className?: string;
  delay?: number;
  speed?: number;
  x?: number;
  as?: keyof typeof motion;
  children: React.ReactNode;
};

export default function MotionEle(props: AnimationTypes) {
  const {
    delay,
    speed,
    className,
    y,
    x,
    scale,
    ind,
    opacity,
    children,
    as = "div",
  } = props;

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className ?? ""}
      initial={{
        opacity: opacity ? 0 : 1,
        scale: scale ?? 1,
        y: y ?? 0,
        x: x ?? 0,
      }}
      // just for the fucking header
      animate={{ y: as == "header" ? 0 : undefined }}
      whileInView={{ opacity: 1, y: 0, scale: 1, x: 0 }}
      transition={{
        duration: speed ?? 0.4,
        delay:
          ind !== undefined
            ? (delay ?? 0) + ind * 0.08
            : (delay ?? 0.1),
        type: "tween",
      }}
      viewport={{once:true}}
    >
      {children}
    </MotionTag>
  );
}
