import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects } from "../data/profile";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import { SecureDataIllustration, JobPortalIllustration, CybeorchIllustration, DoctorIllustration } from "../assets/images/projects/ProjectIllustrations";

const projectIllustrations: Record<string, React.ReactNode> = {
  "secure-data-transmission": <SecureDataIllustration />,
  "job-portal": <JobPortalIllustration />,
  "cybeorch-labs": <CybeorchIllustration />,
  "doctor-appointment": <DoctorIllustration />
};

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative bg-navy">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Security-minded systems, full-stack applications and production website work."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
            >
              <TiltCard maxTilt={6} className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl">
                {/* visual header, stands in for a project screenshot */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-electric/10 via-panel to-violet/10 rounded-t-2xl">
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {projectIllustrations[project.id] || (
                      <>
                        <div className="pointer-events-none absolute inset-0 grain opacity-25" />
                        <FolderGit2 className="text-ink/25" size={64} strokeWidth={1.25} />
                      </>
                    )}
                  </motion.div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {project.features.map((f) => (
                      <li key={f} className="flex gap-2 text-xs text-faint">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-edge px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3 border-t border-edge pt-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="glass flex items-center gap-1.5 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-muted transition-colors hover:text-cyan"
                      >
                        <GithubIcon size={13} /> Code
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="btn-glow flex items-center gap-1.5 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-ink"
                      >
                        <ArrowUpRight size={13} /> Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
