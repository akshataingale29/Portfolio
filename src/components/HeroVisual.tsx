import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const codeLines = [
  { text: "const dev = {", color: "text-muted" },
  { text: "  name: 'Akshata Ingale',", color: "text-cyan" },
  { text: "  stack: ['Java', 'Spring Boot', 'React'],", color: "text-electric" },
  { text: "  secure: true,", color: "text-violet" },
  { text: "  shipping: '10+ REST APIs',", color: "text-cyan" },
  { text: "};", color: "text-muted" },
];

const particles = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: Math.round((Math.random() * 100 + i * 3) % 100),
  top: Math.round(Math.random() * 100),
  size: 2 + Math.round(Math.random() * 3),
  duration: 5 + Math.random() * 6,
  delay: Math.random() * 4,
}));

export default function HeroVisual() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 18 });
  const springY = useSpring(my, { stiffness: 60, damping: 18 });

  const rotateY = useTransform(springX, [-1, 1], [-10, 10]);
  const rotateX = useTransform(springY, [-1, 1], [10, -10]);
  const parallaxRingX = useTransform(springX, [-1, 1], [-16, 16]);
  const parallaxRingY = useTransform(springY, [-1, 1], [-16, 16]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);

    const handleMove = (e: PointerEvent) => {
      const rect = wrapRef.current?.getBoundingClientRect();
      if (!rect) return;
      const px = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const py = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      mx.set(Math.max(-1, Math.min(1, px)));
      my.set(Math.max(-1, Math.min(1, py)));
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [mx, my]);

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto flex h-[380px] w-full max-w-md items-center justify-center sm:h-[440px] lg:h-[500px]"
      aria-hidden="true"
    >
      {/* ambient gradient background */}
      <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,_rgba(59,123,255,0.22),_transparent_65%)] blur-2xl" />

      {/* floating particles */}
      {!reduced &&
        particles.map((p) => (
          <motion.span
            key={p.id}
            className="pointer-events-none absolute rounded-full bg-cyan/70 shadow-[0_0_8px_2px_rgba(34,211,238,0.5)]"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -18, 0],
              opacity: [0.2, 0.9, 0.2],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* animated concentric rings with mouse parallax */}
      <motion.div
        style={{ x: parallaxRingX, y: parallaxRingY }}
        className="pointer-events-none absolute inset-0"
      >
        <motion.span
          className="absolute inset-[6%] rounded-full border border-cyan/25"
          animate={reduced ? undefined : { rotate: 360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        />
        <motion.span
          className="absolute inset-[16%] rounded-full border border-electric/20 border-dashed"
          animate={reduced ? undefined : { rotate: -360 }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        />
        <motion.span
          className="absolute inset-[27%] rounded-full border border-violet/25"
          animate={reduced ? undefined : { rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* small orbiting accent dots */}
      {!reduced && (
        <>
          <motion.span
            className="absolute h-3 w-3 rounded-full bg-cyan shadow-[0_0_12px_4px_rgba(34,211,238,0.55)]"
            style={{ left: "8%", top: "22%" }}
            animate={{ y: [0, 10, 0], x: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="absolute h-2.5 w-2.5 rounded-full bg-violet shadow-[0_0_12px_4px_rgba(139,92,246,0.5)]"
            style={{ right: "6%", bottom: "18%" }}
            animate={{ y: [0, -12, 0], x: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {/* central floating code card, with mouse parallax tilt */}
      <motion.div
        style={{
          rotateX: reduced ? 0 : rotateX,
          rotateY: reduced ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={reduced ? undefined : { y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="glass-strong neon-glow relative w-[280px] rounded-2xl p-4 sm:w-[320px]"
      >
        {/* window chrome */}
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-faint">
            Developer.java
          </span>
        </div>

        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed sm:text-xs">
          {codeLines.map((line, i) => (
            <motion.div
              key={line.text}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.18 }}
              className={line.color}
            >
              {line.text}
              {i === codeLines.length - 1 && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 bg-cyan align-middle"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* mini status row */}
        <div className="mt-4 flex items-center justify-between border-t border-edge pt-3">
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-faint">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_6px_2px_rgba(34,211,238,0.6)]" />
            build passing
          </span>
          <span className="font-mono text-[10px] text-faint">100% secure</span>
        </div>
      </motion.div>
    </div>
  );
}
