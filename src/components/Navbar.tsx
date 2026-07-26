import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-edge bg-void/70 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <button
          onClick={() => handleNav("home")}
          className="group relative flex items-center justify-center transition-all duration-300 hover:scale-[1.05] outline-none focus:outline-none"
          aria-label="Home"
        >
          {/* Subtle background glow effect on hover for the logo area */}
          <div className="absolute left-0 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-cyan-500/0 blur-xl transition-all duration-500 group-hover:bg-cyan-400/20" />
          
          <svg
            width="50"
            height="50"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10 transition-transform duration-500 group-hover:rotate-[-5deg]"
          >
            {/* Outer Rotating Orbit Ring */}
            <motion.circle
              cx="50"
              cy="50"
              r="44"
              stroke="url(#cyber-grad-1)"
              strokeWidth="2.5"
              strokeDasharray="15 25"
              strokeLinecap="round"
              fill="transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{ originX: "50px", originY: "50px" }}
              className="drop-shadow-[0_0_10px_rgba(34,211,238,0.4)] opacity-70 group-hover:opacity-100 transition-opacity"
            />

            {/* Inner Solid Orbit */}
            <circle 
              cx="50" 
              cy="50" 
              r="35" 
              stroke="url(#cyber-grad-2)" 
              strokeWidth="1" 
              fill="transparent"
              className="opacity-20 group-hover:opacity-60 transition-opacity duration-500"
            />

            {/* Coding Bracket Left `<` */}
            <path
              d="M 38 32 L 22 50 L 38 68"
              fill="none"
              stroke="url(#cyber-grad-3)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-[0_0_8px_rgba(0,245,255,0.7)] group-hover:drop-shadow-[0_0_12px_rgba(0,245,255,1)] transition-all"
            />

            {/* Coding Bracket Right `>` */}
            <path
              d="M 62 32 L 78 50 L 62 68"
              fill="none"
              stroke="url(#cyber-grad-4)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-[0_0_8px_rgba(123,97,255,0.7)] group-hover:drop-shadow-[0_0_12px_rgba(123,97,255,1)] transition-all"
            />

            {/* Center Futuristic Slash `/` */}
            <path
              d="M 55 24 L 45 76"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="5"
              strokeLinecap="round"
              className="drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] opacity-90 group-hover:opacity-100"
            />

            {/* Glowing Star Particles */}
            <circle cx="50" cy="18" r="2.5" fill="#00D9FF" className="drop-shadow-[0_0_5px_#00D9FF] animate-pulse" />
            <circle cx="25" cy="75" r="2" fill="#7B61FF" className="drop-shadow-[0_0_5px_#7B61FF] animate-pulse" style={{ animationDelay: "0.5s" }} />
            <circle cx="75" cy="75" r="1.5" fill="#00F5FF" className="drop-shadow-[0_0_5px_#00F5FF] animate-pulse" style={{ animationDelay: "1s" }} />

            <defs>
              <linearGradient id="cyber-grad-1" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00F5FF" />
                <stop offset="0.5" stopColor="#7B61FF" />
                <stop offset="1" stopColor="#00D9FF" />
              </linearGradient>
              <linearGradient id="cyber-grad-2" x1="100" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7B61FF" />
                <stop offset="1" stopColor="#00F5FF" />
              </linearGradient>
              <linearGradient id="cyber-grad-3" x1="22" y1="32" x2="38" y2="68" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00F5FF" />
                <stop offset="1" stopColor="#00D9FF" />
              </linearGradient>
              <linearGradient id="cyber-grad-4" x1="62" y1="32" x2="78" y2="68" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7B61FF" />
                <stop offset="1" stopColor="#D946EF" />
              </linearGradient>
            </defs>
          </svg>

        </button>

        <nav
          className={`hidden items-center gap-1 rounded-full px-2 py-2 lg:flex ${
            scrolled ? "glass-strong" : ""
          }`}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`relative rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                active === link.id
                  ? "text-void"
                  : "text-muted hover:text-ink"
              }`}
            >
              {active === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan to-electric"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}
        </nav>

        <a
          href="/assets/resume/Akshata_Ingale_CV_new.pdf"
          download="Akshata_Ingale_CV_new.pdf"
          className="btn-glow hidden rounded-full px-5 py-2 font-mono text-xs uppercase tracking-widest text-ink lg:block"
        >
          Resume
        </a>

        <button
          className="rounded-lg p-2 text-ink lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-strong mx-4 mt-3 overflow-hidden rounded-2xl lg:hidden"
          >
            <div className="flex flex-col p-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`rounded-xl px-4 py-3 text-left font-mono text-sm uppercase tracking-widest ${
                    active === link.id ? "text-cyan" : "text-muted"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
