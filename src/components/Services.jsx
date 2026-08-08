import { motion } from "framer-motion";
import { services } from "../data";

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 border-t border-line relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] mesh-bg opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm gradient-text mb-3"
        >
          GET /services
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl md:text-4xl font-bold mb-3"
        >
          What I can build for your business
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted text-lg max-w-2xl mb-14"
        >
          Development, technical SEO, content writing, and UGC/AI video — one
          person handling the product and the growth around it.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((group, gi) => (
            <div key={group.group} id={group.group.toLowerCase().replace(/[^a-z]+/g, "-")}>
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    group.color === "blue" ? "bg-blue" : "bg-violet"
                  }`}
                />
                <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                  {group.group}
                </h3>
              </div>
              <div className="space-y-3">
                {group.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: (gi * 4 + i) * 0.04 }}
                    whileHover={{ y: -3 }}
                    className={`group glass rounded-xl p-5 transition-colors hover:border-white/20 ${
                      group.color === "blue" ? "hover:shadow-glow" : "hover:shadow-glowViolet"
                    }`}
                  >
                    <p className="text-text font-semibold mb-2">{item.name}</p>
                    <p className="text-muted/70 text-xs leading-relaxed mb-2 italic">
                      {item.problem}
                    </p>
                    <p className="text-muted text-sm leading-relaxed">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
