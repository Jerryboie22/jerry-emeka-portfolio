import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm gradient-text mb-3"
        >
          GET /experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl md:text-4xl font-bold mb-2"
        >
          {experience.title}
        </motion.h2>
        <p className="font-mono text-sm text-muted mb-12">
          {experience.location} · {experience.period}
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45 }}
          >
            <h3 className="font-mono text-xs text-blue mb-4 uppercase tracking-wider">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <h3 className="font-mono text-xs text-violet mb-4 uppercase tracking-wider">
              Key results
            </h3>
            <div className="space-y-4">
              {experience.achievements.map((a, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  className={`glass rounded-xl p-4 flex items-center gap-4 hover:border-white/20 transition-all ${
                    i === 0 ? "shadow-glow border-blue/30" : ""
                  }`}
                >
                  <span className="font-display font-bold gradient-text text-lg whitespace-nowrap">
                    {a.value}
                  </span>
                  <span className="text-sm text-muted leading-snug">
                    {a.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
