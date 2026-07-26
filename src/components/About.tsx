import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, Sparkle } from "lucide-react";
import { profile, additional } from "../data/profile";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Secure by design",
    body: "AES encryption, role-based auth and session management baked into every build.",
  },
  {
    icon: GraduationCap,
    title: "9.43 CGPA graduate",
    body: "B.Tech in Computer Science, backed by a strong DSA and systems foundation.",
  },
  {
    icon: Sparkle,
    title: "AI-accelerated workflow",
    body: "Fluent with Copilot, Cursor, ChatGPT and Gemini to ship faster without cutting corners.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative bg-navy">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering clean, secure, full-stack software"
        />

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto max-w-sm"
          >
            <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-electric/25 via-cyan/10 to-violet/25 blur-3xl" />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="gradient-border neon-glow relative rounded-[2rem] p-[3px]"
            >
              <div className="glass-strong group relative overflow-hidden rounded-[1.9rem] p-2">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src={`${import.meta.env.BASE_URL}images/akshata-photo.jpg`}
                    alt="Akshata"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>
            </motion.div>

            {/* orbiting accent badge */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-lg leading-relaxed text-ink/90">
              {profile.summary}
            </p>
            <p className="mt-5 leading-relaxed text-muted">
              {profile.objective}
            </p>

            <ul className="mt-8 space-y-3">
              {additional.map((line) => (
                <li key={line} className="flex gap-3 text-sm text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                  {line}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-2xl p-4"
                >
                  <h.icon className="text-cyan" size={20} />
                  <h3 className="mt-3 text-sm font-semibold text-ink">
                    {h.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-faint">
                    {h.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
