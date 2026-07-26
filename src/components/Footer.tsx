import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile, navLinks } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () =>
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative border-t border-edge bg-navy">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-ink">
              {profile.name}
            </p>
            <p className="mt-2 max-w-xs text-sm text-muted">
              {profile.title} building secure, scalable full-stack software.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:text-cyan"
                aria-label="GitHub"
              >
                <GithubIcon size={15} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:text-cyan"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={15} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:text-cyan"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-faint">
              Navigate
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() =>
                      document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-faint">
              Get in touch
            </p>
            <p className="mt-4 text-sm text-muted">{profile.email}</p>
            <p className="mt-1 text-sm text-muted">{profile.phone}</p>
            <p className="mt-1 text-sm text-muted">{profile.location}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-edge pt-6 sm:flex-row">
          <p className="font-mono text-xs text-faint">
            © {year} {profile.name}. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="glass flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-muted transition-colors hover:text-cyan"
          >
            Back to top <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
