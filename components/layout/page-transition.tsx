"use client";
import { motion } from "framer-motion";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.body
      className="bg-[#05080b] font-semibold text-white"
      style={{ overflowX: "hidden" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      {children}
    </motion.body>
  );
}
