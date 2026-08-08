import { GithubIcon, LinkedinIcon } from "./Icons";
import { Mail } from "lucide-react";
import { profile } from "../data";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-10 px-6 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-mono text-xs text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-ok animate-pulse" />
          {profile.status}
        </div>

        <nav className="flex items-center gap-5 font-mono text-xs text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-text transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-text transition-colors">
            <GithubIcon size={16} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-text transition-colors">
            <LinkedinIcon size={16} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-muted hover:text-text transition-colors">
            <Mail size={16} />
          </a>
        </div>
      </div>
      <p className="text-center text-xs text-muted/60 font-mono mt-8">
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind &amp; Framer Motion.
      </p>
    </footer>
  );
}
