import { useState, useEffect } from "react";
import { Menu, X, Mail, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { profile } from "../data";

const links = [
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-premium" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm text-muted flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-ok animate-blink" />
          <span className="group-hover:text-text transition-colors">Jerry Emeka</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 font-mono text-sm">
          {links.map((l) => (
            <a
              key={l.path}
              href={`#${l.label.toLowerCase()}`}
              aria-label={l.label}
              className="px-3 py-1.5 rounded-lg text-muted hover:text-text hover:bg-white/5 transition-colors"
            >
              {l.path}
            </a>
          ))}

          <div className="flex items-center gap-1 ml-2 pl-3 border-l border-line">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-muted hover:text-text hover:bg-white/5 transition-colors"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-muted hover:text-text hover:bg-white/5 transition-colors"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              aria-label="Download résumé"
              className="p-2 rounded-lg text-muted hover:text-text hover:bg-white/5 transition-colors"
            >
              <FileDown size={16} />
            </a>
          </div>

          <a
            href="#contact"
            className="ml-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-blue to-violet text-white font-semibold hover:opacity-90 transition-opacity shadow-glow"
          >
            Hire me
          </a>
        </nav>

        <button
          className="md:hidden text-text"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden glass-strong border-t border-line px-6 py-4 flex flex-col gap-1 font-mono text-sm">
          {links.map((l) => (
            <a
              key={l.path}
              href={`#${l.label.toLowerCase()}`}
              aria-label={l.label}
              onClick={() => setOpen(false)}
              className="py-2 text-muted hover:text-text"
            >
              {l.path}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-3 mt-2 border-t border-line">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-text">
              <GithubIcon size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-text">
              <LinkedinIcon size={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="text-muted hover:text-text">
              <Mail size={18} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
