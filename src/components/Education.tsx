import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="section-pad relative bg-navy">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((ed, i) => (
            <motion.div
              key={ed.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="glow-card glass relative overflow-hidden rounded-2xl p-6"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3.4 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet/15 to-cyan/15"
              >
                <GraduationCap className="text-violet" size={22} />
              </motion.div>
              <h3 className="mt-4 text-base font-semibold leading-snug text-ink">
                {ed.degree}
              </h3>
              <p className="mt-2 text-sm text-muted">{ed.institute}</p>
              <div className="mt-5 flex items-center justify-between border-t border-edge pt-4">
                <span className="font-mono text-xs text-faint">
                  {ed.duration}
                </span>
                <span className="rounded-full bg-cyan/10 px-3 py-1 font-mono text-xs text-cyan">
                  {ed.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
