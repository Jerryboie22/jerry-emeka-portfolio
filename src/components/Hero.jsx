import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, MessageCircle, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { profile, stats } from "../data";

const requestLine = "GET /jeremiah-emeka HTTP/1.1";

const responseLines = [
  `"name": "${profile.name}",`,
  `"role": "${profile.role}",`,
  `"location": "${profile.location}",`,
  `"stack": ["PHP", "React", "Kotlin", "Magento 2", "SEO"],`,
  `"status": "${profile.status}"`,
];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      i++;
      setTyped(requestLine.slice(0, i));
      if (i >= requestLine.length) {
        clearInterval(typing);
        setTimeout(() => setShowResponse(true), 300);
      }
    }, 35);
    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    if (!showResponse) return;
    let n = 0;
    const reveal = setInterval(() => {
      n++;
      setVisibleLines(n);
      if (n >= responseLines.length) clearInterval(reveal);
    }, 180);
    return () => clearInterval(reveal);
  }, [showResponse]);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center bg-grid mesh-bg pt-32 pb-16 overflow-hidden"
    >
      <div className="absolute -top-40 -right-40 w-[32rem] h-[32rem] bg-blue/20 rounded-full blur-3xl animate-driftSlow" />
      <div className="absolute -bottom-40 -left-40 w-[32rem] h-[32rem] bg-violet/20 rounded-full blur-3xl animate-driftSlow [animation-delay:4s]" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full glass text-xs font-mono text-ok">
            <span className="w-1.5 h-1.5 rounded-full bg-ok animate-pulse" />
            {profile.availability}
          </div>

          <p className="font-mono text-sm gradient-text mb-4">// full-stack developer, seo &amp; digital growth</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.05] mb-6">
            High-performance
            <br />
            websites &amp; apps
            <br />
            <span className="gradient-text">that rank &amp; convert.</span>
          </h1>
          <p className="text-muted text-lg max-w-md mb-8">
            I build the product, the SEO that gets it found, and the content
            that gets it chosen — one person across web, mobile, technical
            SEO, writing, and video, turned into measurable business results.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue to-violet text-white font-semibold hover:opacity-90 transition-opacity shadow-glow"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg glass text-text hover:border-white/20 transition-colors"
            >
              View Projects
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg glass text-text hover:border-white/20 transition-colors flex items-center gap-2"
            >
              <FileDown size={16} />
              Resume
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg border border-line text-muted hover:text-text hover:border-ok/50 transition-colors flex items-center gap-2"
            >
              <MessageCircle size={16} />
              Let's Talk
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-text transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-text transition-colors">
              <LinkedinIcon size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="text-muted hover:text-text transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mt-10 pt-8 border-t border-line">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              >
                <p className="font-display text-xl md:text-2xl font-bold gradient-text">{s.value}</p>
                <p className="text-muted text-[11px] leading-snug mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="animate-float"
        >
          <div className="rounded-2xl gradient-border glass-strong shadow-premium overflow-hidden relative">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-black/20">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="ml-3 font-mono text-xs text-muted">request.http</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed min-h-[260px]">
              <p className="text-warm">
                {typed}
                {typed.length < requestLine.length && (
                  <span className="inline-block w-2 h-4 bg-warm ml-0.5 animate-blink align-middle" />
                )}
              </p>
              <p className="text-muted mt-1">Host: jerry-emeka</p>

              {showResponse && (
                <div className="mt-5 pt-5 border-t border-line/60">
                  <p className="text-ok mb-2">
                    HTTP/1.1 200 OK <span className="text-muted">· application/json</span>
                  </p>
                  <p className="text-text">{"{"}</p>
                  {responseLines.slice(0, visibleLines).map((line, idx) => (
                    <p key={idx} className="pl-4 text-text">
                      <span className="text-muted">{line.split(":")[0]}:</span>
                      <span className="text-ok">
                        {line.slice(line.indexOf(":") + 1)}
                      </span>
                    </p>
                  ))}
                  {visibleLines >= responseLines.length && (
                    <p className="text-text">{"}"}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-text flex-col items-center gap-1 text-xs font-mono transition-colors"
      >
        scroll
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
