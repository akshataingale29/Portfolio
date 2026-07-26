import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * A soft radial glow that trails the cursor across the whole page.
 * Automatically disabled on touch devices and when the user prefers
 * reduced motion, so it never gets in the way on mobile.
 */
export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 120, damping: 25, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 120, damping: 25, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(fine && !reduced);

    const handleMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[5] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen"
      style={{
        x: springX,
        y: springY,
        background:
          "radial-gradient(circle, rgba(34,211,238,0.10) 0%, rgba(59,123,255,0.06) 35%, transparent 70%)",
      }}
    />
  );
}
