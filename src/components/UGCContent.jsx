import { motion } from "framer-motion";
import { Video } from "lucide-react";
import { ugcContent } from "../data";

export default function UGCContent() {
  return (
    <section id="ugc" className="py-24 px-6 border-t border-line relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm gradient-text mb-3"
        >
          GET /ugc-ai-content
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet to-blue flex items-center justify-center shadow-glowViolet shrink-0">
            <Video size={18} className="text-white" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">UGC &amp; AI Content</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ugcContent.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className="glass rounded-xl p-5 hover:border-white/20 hover:shadow-glowViolet transition-all"
            >
              <p className="text-text font-semibold mb-1.5">{item.name}</p>
              <p className="text-muted text-sm leading-relaxed">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
