import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { projects } from "../data";

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-line rounded-xl bg-surface overflow-hidden hover:border-ok/50 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 flex items-start justify-between gap-4"
      >
        <div>
          <p className="font-mono text-xs text-ok mb-2">{project.endpoint}</p>
          <h3 className="font-display font-semibold text-lg mb-1">{project.name}</h3>
          <p className="text-sm text-muted mb-3">{project.role}</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[11px] text-muted border border-line rounded px-2 py-0.5"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 mt-1 text-muted transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-6 pb-6 pt-0 border-t border-line/60 mt-0">
          <ul className="space-y-2 mt-4 mb-2">
            {project.points.map((p, i) => (
              <li key={i} className="text-sm text-muted leading-relaxed flex gap-2">
                <span className="text-ok font-mono">›</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-ok font-mono mt-2 hover:underline"
            >
              Visit live site <ExternalLink size={14} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-line bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-ok mb-3">GET /projects</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
          Selected work
        </h2>
        <p className="text-muted mb-12 max-w-xl">
          Nine shipped projects across REST APIs, Android apps, WordPress
          plugins, and e-commerce storefronts. Tap any card to expand.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <ProjectCard key={p.endpoint} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
