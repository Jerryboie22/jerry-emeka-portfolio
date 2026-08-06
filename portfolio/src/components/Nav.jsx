import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { path: "/about", label: "About" },
  { path: "/experience", label: "Experience" },
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
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm text-muted flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-ok animate-blink" />
          j7hub.dev
        </a>

        <nav className="hidden md:flex items-center gap-1 font-mono text-sm">
          {links.map((l) => (
            <a
              key={l.path}
              href={`#${l.label.toLowerCase()}`}
              className="px-3 py-1.5 rounded text-muted hover:text-text hover:bg-surface2 transition-colors"
            >
              {l.path}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-4 py-1.5 rounded bg-ok text-ink font-semibold hover:bg-ok/90 transition-colors"
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
        <nav className="md:hidden bg-surface border-t border-line px-6 py-4 flex flex-col gap-1 font-mono text-sm">
          {links.map((l) => (
            <a
              key={l.path}
              href={`#${l.label.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="py-2 text-muted hover:text-text"
            >
              {l.path}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
