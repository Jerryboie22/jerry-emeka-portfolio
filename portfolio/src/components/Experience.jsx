import { experience } from "../data";
import { Check } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-ok mb-3">GET /experience</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
          {experience.title}
        </h2>
        <p className="font-mono text-sm text-muted mb-12">
          {experience.location} · {experience.period}
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-mono text-xs text-warm mb-4 uppercase tracking-wider">
              Responsibilities
            </h3>
            <ul className="space-y-4">
              {experience.responsibilities.map((r, i) => (
                <li key={i} className="flex gap-3 text-muted leading-relaxed">
                  <Check size={18} className="text-ok flex-shrink-0 mt-0.5" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs text-warm mb-4 uppercase tracking-wider">
              Key results
            </h3>
            <div className="space-y-4">
              {experience.achievements.map((a, i) => (
                <div
                  key={i}
                  className="border border-line rounded-lg p-4 flex items-center gap-4 bg-surface/50 hover:border-ok/50 transition-colors"
                >
                  <span className="font-display font-bold text-ok text-lg whitespace-nowrap">
                    {a.value}
                  </span>
                  <span className="text-sm text-muted leading-snug">
                    {a.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
