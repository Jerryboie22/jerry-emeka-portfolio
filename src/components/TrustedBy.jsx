import { motion } from "framer-motion";
import { trustedByList } from "../data";

export default function TrustedBy() {
  return (
    <section id="trusted-by" className="py-16 px-6 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-mono text-xs uppercase tracking-widest text-muted mb-10"
        >
          Trusted by businesses I've built for
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustedByList.map((c, i) => {
            const Card = c.url ? motion.a : motion.div;
            return (
              <Card
                key={c.name}
                {...(c.url ? { href: c.url, target: "_blank", rel: "noreferrer" } : {})}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="glass rounded-xl px-4 py-6 flex flex-col items-center justify-center text-center gap-1.5 hover:border-white/20 transition-all"
              >
                <span className="font-display text-sm font-semibold text-text">{c.name}</span>
                {c.status && (
                  <span className="font-mono text-[10px] text-warm">{c.status}</span>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
