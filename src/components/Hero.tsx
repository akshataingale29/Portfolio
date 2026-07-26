import { Suspense, lazy, useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { profile, stats } from "../data/profile";
import HeroVisual from "./HeroVisual";

const NetworkField = lazy(() => import("../three/NetworkField"));

const TITLES = [
  "Java Full Stack Developer",
  "Spring Boot Developer",
  "Full Stack Developer",
  "Backend Developer",
  "Software Developer",
  "Problem Solver",
  "Open Source Enthusiast"
];

function TypewriterText() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const timer = setTimeout(() => {
      const i = loopNum % TITLES.length;
      const fullText = TITLES[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 40 : 100);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <>
      {text}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="inline-block ml-[2px]"
      >
        |
      </motion.span>
    </>
  );
}

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-void"
    >
      <Suspense fallback={<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(59,123,255,0.12),_transparent_60%)]" />}>
        <NetworkField />
      </Suspense>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,123,255,0.16),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(139,92,246,0.14),_transparent_55%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pt-28 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-cyan"
          >
            <Sparkles size={13} />
            Available for new opportunities
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl lg:text-7xl"
          >
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 font-mono text-sm uppercase tracking-[0.25em] text-electric sm:text-base min-h-[40px] sm:min-h-[28px]"
          >
            <TypewriterText />
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.heroSummary}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("contact")}
              className="btn-glow rounded-full bg-gradient-to-r from-electric to-violet px-7 py-3.5 font-mono text-xs font-medium uppercase tracking-widest text-white shadow-[0_0_30px_rgba(59,123,255,0.35)] transition-transform hover:scale-105"
            >
              Hire Me
            </button>
            <a
              href={profile.resumeFile}
              download
              className="glass flex items-center gap-2 rounded-full px-7 py-3.5 font-mono text-xs font-medium uppercase tracking-widest text-ink transition-transform hover:scale-105"
            >
              <Download size={15} />
              Download Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 rounded-full border border-edge px-7 py-3.5 font-mono text-xs font-medium uppercase tracking-widest text-muted transition-colors hover:text-ink"
            >
              <Mail size={15} />
              Contact Me
            </button>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="border-l border-edge pl-4">
                <dt className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {s.value}
                  <span className="text-cyan">{s.suffix}</span>
                </dt>
                <dd className="mt-1 font-mono text-[11px] uppercase tracking-widest text-faint">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="order-first lg:order-last"
        >
          <HeroVisual />
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ y: { repeat: Infinity, duration: 1.8 }, opacity: { delay: 1 } }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-faint"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={22} />
      </motion.button>
    </section>
  );
}
