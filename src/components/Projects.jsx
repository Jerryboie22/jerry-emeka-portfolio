import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import { projects } from "../data";

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
      className="glass rounded-2xl overflow-hidden hover:border-white/20 hover:shadow-glow transition-all"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 flex items-start justify-between gap-4"
      >
        <div>
          <p className="font-mono text-xs text-blue mb-2">{project.endpoint}</p>
          <h3 className="font-display font-semibold text-lg mb-1">{project.name}</h3>
          <p className="text-sm text-muted mb-1">{project.role}</p>
          {project.client && (
            <p className="font-mono text-[11px] text-violet mb-3">Client: {project.client}</p>
          )}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[11px] text-muted border border-line rounded px-2 py-0.5 bg-black/20"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 mt-1 text-muted transition-transform duration-300 ${
            open ? "rotate-180 text-blue" : ""
          }`}
        />
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pt-0 border-t border-line/60">
          {project.screenshot && (
            <div className="mt-5 rounded-xl overflow-hidden border border-line max-h-72">
              <img
                src={project.screenshot}
                alt={`${project.name} screenshot`}
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>
          )}
          <div className="grid sm:grid-cols-3 gap-4 mt-5 mb-5">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-warm mb-1.5">Problem</p>
              <p className="text-sm text-muted leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-blue mb-1.5">Solution</p>
              <p className="text-sm text-muted leading-relaxed">{project.solution}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-ok mb-1.5">Result</p>
              <p className="text-sm text-muted leading-relaxed">{project.result}</p>
            </div>
          </div>

          <ul className="space-y-2 mb-4 pt-4 border-t border-line/40">
            {project.points.map((p, i) => (
              <li key={i} className="text-sm text-muted leading-relaxed flex gap-2">
                <span className="text-violet font-mono">›</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 pt-1">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-blue font-mono hover:underline"
              >
                Live Demo <ExternalLink size={14} />
              </a>
            )}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              title="Private/client repository"
              className="inline-flex items-center gap-1.5 text-sm text-muted font-mono opacity-50 cursor-not-allowed"
            >
              <GithubIcon size={14} /> Private repo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-line relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm gradient-text mb-3"
        >
          GET /projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl md:text-4xl font-bold mb-2"
        >
          Selected work
        </motion.h2>
        <p className="text-muted mb-12 max-w-xl">
          Nine shipped projects across REST APIs, Android apps, WordPress
          plugins, and e-commerce storefronts. Tap any card for the problem,
          solution, and result.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.endpoint} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
