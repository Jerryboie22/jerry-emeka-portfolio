import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { testimonials, endorsedJobs, trustBadges } from "../data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="py-24 px-6 border-t border-line">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm gradient-text mb-3 text-center"
        >
          GET /testimonials
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-3"
        >
          What clients say
        </motion.h2>
        <p className="text-center text-muted text-sm mb-10">
          Real reviews from Upwork and LinkedIn.
        </p>

        {/* trust badges */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {trustBadges.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-ok glass rounded-full px-3 py-1.5"
            >
              <CheckCircle2 size={13} />
              {b}
            </span>
          ))}
        </div>

        {/* slider */}
        <div className="relative glass-strong rounded-2xl gradient-border p-8 md:p-12 min-h-[260px] overflow-hidden">
          <Quote size={28} className="text-violet/40 mb-5" />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <p className="text-text text-lg md:text-xl leading-relaxed mb-8">
                "{current.quote}"
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-text font-semibold">{current.name}</p>
                  <p className="text-muted text-sm">{current.role}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} className="fill-warm text-warm" />
                    ))}
                  </div>
                  <span className="font-mono text-xs text-muted border border-line rounded px-2 py-1">
                    {current.source}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-line/60">
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-blue" : "w-1.5 bg-line"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="p-2 rounded-lg glass hover:border-white/20 text-muted hover:text-text transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="p-2 rounded-lg glass hover:border-white/20 text-muted hover:text-text transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* endorsed 5-star jobs strip */}
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          {endorsedJobs.map((job) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} className="fill-warm text-warm" />
                  ))}
                </div>
                <span className="font-mono text-[11px] text-muted">{job.period}</span>
              </div>
              <p className="text-sm text-text font-medium mb-2">{job.title}</p>
              <div className="flex flex-wrap gap-1.5">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] text-muted border border-line rounded px-1.5 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
