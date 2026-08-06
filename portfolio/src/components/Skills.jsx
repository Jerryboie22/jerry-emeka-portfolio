import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-line bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-ok mb-3">GET /skills</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          Toolkit
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="border border-line rounded-xl p-6 bg-surface hover:border-ok/50 transition-colors"
            >
              <p className="font-mono text-xs text-warm mb-1">"{group.label}":</p>
              <h3 className="font-display font-semibold text-lg mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs text-muted border border-line rounded px-2 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
