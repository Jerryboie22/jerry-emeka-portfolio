import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";
import { profile, education, certifications } from "../data";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-line relative">
      <div className="max-w-6xl mx-auto">
        <motion.p {...fade} className="font-mono text-sm gradient-text mb-3">GET /about</motion.p>
        <motion.h2 {...fade} className="font-display text-3xl md:text-4xl font-bold mb-12">
          About {profile.shortName}
        </motion.h2>

        <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
          <motion.div {...fade} className="relative">
            <div className="aspect-square rounded-2xl gradient-border glass overflow-hidden flex items-center justify-center shadow-premium">
              <img
                src="/profile-photo.jpg"
                alt={profile.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextSibling.style.display = "flex";
                }}
              />
              <div className="hidden w-full h-full flex-col items-center justify-center text-center p-6 font-mono text-xs text-muted mesh-bg">
                <span className="text-4xl mb-2">📷</span>
                Drop your photo at
                <br />
                <span className="text-blue">public/profile-photo.jpg</span>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-blue to-violet text-white text-xs font-mono font-semibold px-3 py-1.5 rounded-lg shadow-glow">
              available
            </div>
          </motion.div>

          <motion.div {...fade} transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}>
            <p className="text-muted text-lg leading-relaxed mb-6">
              I help e-commerce brands, schools, and product founders turn slow, hard-to-maintain
              websites into fast, well-structured systems — built in{" "}
              <span className="text-text">{profile.location}</span> and shipped worldwide. I work
              across the stack: Magento 2 REST APIs, Laravel and PHP backends, React and Vue
              interfaces, and Kotlin/Jetpack Compose Android apps.
            </p>
            <p className="text-muted text-lg leading-relaxed mb-8">
              The problems I get called in for are rarely just "we need a website" — they're
              inventory that doesn't sync, checkout flows that lose customers, or pages that never
              rank. I pair development with hands-on technical SEO, content, and video so the
              product doesn't just work — it gets found and converts. Everything ships documented
              (Postman collections, Swagger/OpenAPI specs) so you're never locked into me to
              understand your own systems.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="flex items-center gap-2 font-mono text-xs text-muted glass rounded-full px-3 py-1.5">
                <MapPin size={14} className="text-blue" /> {profile.location}
              </span>
              <span className="flex items-center gap-2 font-mono text-xs text-muted glass rounded-full px-3 py-1.5">
                <GraduationCap size={14} className="text-violet" />
                {education.degree}, {education.period}
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              {certifications.map((c, i) => (
                <motion.div
                  key={c}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="glass rounded-xl p-4 hover:border-white/20 transition-colors"
                >
                  <p className="font-mono text-[11px] text-blue mb-1">CERT</p>
                  <p className="text-sm text-text leading-snug">{c}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
