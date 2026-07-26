import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, X } from "lucide-react";
import { certifications } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="certifications" className="section-pad relative bg-void">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Certifications" title="Verified expertise" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <motion.button
              key={cert}
              type="button"
              onClick={() => setActive(cert)}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="glow-card glass btn-glow rounded-2xl p-6 text-center outline-none"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan/20 to-violet/20"
              >
                <Award className="text-cyan" size={20} />
              </motion.div>
              <p className="mt-4 text-sm font-medium leading-snug text-ink">
                {cert}
              </p>
              <span className="mt-3 block font-mono text-[10px] uppercase tracking-widest text-faint">
                Tap to preview
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-void/80 backdrop-blur-sm p-5"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${active} certificate preview`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="gradient-border neon-glow relative w-full max-w-md rounded-[1.75rem] p-[3px]"
            >
              <div className="glass-strong relative rounded-[1.6rem] p-8 text-center">
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close preview"
                  className="glass absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:text-ink"
                >
                  <X size={15} />
                </button>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan/25 to-violet/25">
                  <Award className="text-cyan" size={28} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {active}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Issued to Akshata Ingale. Verified credential covering
                  hands-on, applied coursework and project-based assessment.
                </p>
                <div className="mt-6 border-t border-edge pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-faint">
                    Certificate details available on request
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
