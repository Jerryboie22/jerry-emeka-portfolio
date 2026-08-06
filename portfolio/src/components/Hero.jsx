import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { profile } from "../data";

const requestLine = "GET /jeremiah-emeka HTTP/1.1";

const responseLines = [
  `"name": "${profile.name}",`,
  `"role": "${profile.role}",`,
  `"location": "${profile.location}",`,
  `"stack": ["PHP", "React", "Kotlin", "Magento 2"],`,
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
      className="relative min-h-screen flex items-center bg-grid pt-28 pb-16 overflow-hidden"
    >
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-ok/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-warm/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-fadeUp">
          <p className="font-mono text-sm text-ok mb-4">// full-stack developer &amp; seo specialist</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.05] mb-6">
            I build backend
            <br />
            systems that
            <br />
            <span className="text-ok">ship &amp; rank.</span>
          </h1>
          <p className="text-muted text-lg max-w-md mb-8">
            Five years turning REST APIs, WordPress builds, and Android
            companion apps into measurable business results — from
            e-commerce storefronts to repair-management platforms.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded bg-ok text-ink font-semibold hover:bg-ok/90 transition-colors"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded border border-line text-text hover:border-ok transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="animate-fadeUp [animation-delay:150ms]">
          <div className="rounded-xl border border-line bg-surface shadow-2xl shadow-black/40 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-surface2">
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
              <p className="text-muted mt-1">Host: j7hub.com</p>

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
        </div>
      </div>

      <a
        href="#about"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-text flex-col items-center gap-1 text-xs font-mono"
      >
        scroll
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
