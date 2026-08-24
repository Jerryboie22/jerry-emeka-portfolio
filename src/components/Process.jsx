import { motion } from "framer-motion";
import { process } from "../data";

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 border-t border-line relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm gradient-text mb-3"
        >
          GET /process
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl md:text-4xl font-bold mb-14"
        >
          How a project runs, start to finish
        </motion.h2>

        <div className="relative">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-blue/50 via-violet/50 to-transparent" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-6 gap-y-10">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="relative z-10 w-12 h-12 rounded-full glass-strong border border-white/10 flex items-center justify-center font-mono text-sm font-bold text-blue mb-4">
                  {i + 1}
                </div>
                <p className="text-text font-semibold mb-1.5">{p.step}</p>
                <p className="text-muted text-sm leading-relaxed">{p.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
