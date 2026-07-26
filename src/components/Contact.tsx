import { motion } from "framer-motion";
import { useMemo } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "akshata-ingale-dev",
    href: profile.linkedin,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "akshataingale29",
    href: profile.github,
  },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined },
];

const stars = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: Math.round(Math.random() * 100),
  top: Math.round(Math.random() * 100),
  size: 1 + Math.round(Math.random() * 2),
  duration: 2 + Math.random() * 3,
  delay: Math.random() * 3,
}));

export default function Contact() {
  const starField = useMemo(() => stars, []);

  return (
    <section id="contact" className="section-pad relative bg-void">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.12),_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Column: Heading and Contact Details */}
          <div className="flex flex-col space-y-8">
            <div className="text-left [&_div]:mx-0 [&_div]:items-start">
              <SectionHeading
                eyebrow="Contact"
                title="Let's build something secure and scalable"
                description="Open to Software Developer and Java Full Stack roles. Reach out — I reply quickly."
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              {contactDetails.map((d) => {
                const Wrapper = d.href ? motion.a : motion.div;
                return (
                  <Wrapper
                    key={d.label}
                    {...(d.href
                      ? {
                          href: d.href,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : {})}
                    whileHover={{ x: 4 }}
                    className="glow-card glass flex items-center gap-4 rounded-2xl p-4"
                  >
                    <motion.span
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/15 to-violet/15"
                    >
                      <d.icon size={17} className="text-cyan" />
                    </motion.span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-faint">
                        {d.label}
                      </p>
                      <p className="text-sm text-ink">{d.value}</p>
                    </div>
                  </Wrapper>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Floating Astronaut in Space */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center justify-center w-full mt-8 lg:mt-0"
          >
            {/* soft ambient glow behind the astronaut */}
            <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,_rgba(59,123,255,0.25),_transparent_65%)] blur-2xl" />

            {/* twinkling starfield */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {starField.map((s) => (
                <motion.span
                  key={s.id}
                  className="absolute rounded-full bg-white"
                  style={{
                    left: `${s.left}%`,
                    top: `${s.top}%`,
                    width: s.size,
                    height: s.size,
                  }}
                  animate={{ opacity: [0.15, 1, 0.15] }}
                  transition={{
                    duration: s.duration,
                    delay: s.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* astronaut: slow float + gentle drifting rotation, like it's weightless in space */}
            <motion.img
              src={`${import.meta.env.BASE_URL}images/astronaut.png`}
              alt="Astronaut"
              className="relative drop-shadow-[0_0_35px_rgba(59,123,255,0.35)]"
              animate={{
                y: [0, -18, 0, 14, 0],
                rotate: [0, 3, 0, -3, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
