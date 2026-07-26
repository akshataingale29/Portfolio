import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="scroll-progress-bar fixed left-0 top-0 z-[60] h-[3px] w-full bg-gradient-to-r from-cyan via-electric to-violet"
    />
  );
}
