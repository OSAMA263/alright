import { motion } from "framer-motion";
  // initial?: TargetAndTransition;
  // whileInView?: TargetAndTransition;
export default function MotionEle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div initial={{}} whileInView={{}}>
      {children}
    </motion.div>
  );
}
