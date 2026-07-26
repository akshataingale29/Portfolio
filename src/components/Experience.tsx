import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.85", "end 0.6"],
  });
  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
  });

  return (
    <section id="experience" className="section-pad relative bg-void">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Three internships, one consistent thread: secure, production-grade code."
        />

        <div ref={trackRef} className="relative pl-8 sm:pl-10">
          {/* static track */}
          <div className="absolute left-0 top-0 h-full w-px bg-edge" />
          {/* animated fill that grows as the section scrolls into view */}
          <motion.div
            style={{ scaleY: lineHeight }}
            className="absolute left-0 top-0 h-full w-px origin-top bg-gradient-to-b from-cyan via-electric to-violet"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative mb-12 last:mb-0"
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 + 0.15 }}
                className="glass neon-glow absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full sm:-left-[49px] sm:h-9 sm:w-9"
              >
                <Briefcase size={14} className="text-cyan" />
              </motion.span>

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="glow-card glass rounded-2xl p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-ink">
                    {exp.role}
                  </h3>
                  <span className="rounded-full border border-edge px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan">
                    {exp.duration}
                  </span>
                </div>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-electric">
                  {exp.company}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {exp.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
