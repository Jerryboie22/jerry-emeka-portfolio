import { motion } from "framer-motion";
import { whyWorkWithMe } from "../data";

export default function WhyWorkWithMe() {
  return (
    <section id="why" className="py-24 px-6 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm gradient-text mb-3"
        >
          GET /why-work-with-me
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl md:text-4xl font-bold mb-14"
        >
          Why clients keep coming back
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyWorkWithMe.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 hover:border-white/20 hover:shadow-glow transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue to-violet flex items-center justify-center font-mono text-xs font-bold text-white mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-text font-semibold mb-2">{item.title}</p>
              <p className="text-muted text-sm leading-relaxed">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
