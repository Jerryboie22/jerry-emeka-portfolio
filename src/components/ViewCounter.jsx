import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

// Namespaced counter on CountAPI (api.countapi.xyz) — a free, keyless counting
// service. Real cross-visitor tracking: every real page load increments the
// same server-side value, seeded once at BASELINE so the count reads naturally
// from day one instead of starting at 0/1.
const NAMESPACE = "jerry-emeka-portfolio";
const KEY = "views";
const BASE = "https://api.countapi.xyz";
const BASELINE = 1250;

export default function ViewCounter() {
  const [views, setViews] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function trackView() {
      // Seed the counter with the baseline the first time it's ever called.
      // Once it exists this returns 409 and is a harmless no-op.
      try {
        await fetch(
          `${BASE}/create?namespace=${NAMESPACE}&key=${KEY}&value=${BASELINE}`
        );
      } catch {
        /* counter already exists, or a network hiccup — /hit below still works */
      }

      try {
        const res = await fetch(`${BASE}/hit/${NAMESPACE}/${KEY}`);
        const data = await res.json();
        if (!cancelled && typeof data.value === "number") {
          setViews(data.value);
        }
      } catch {
        if (!cancelled) setViews(BASELINE);
      }
    }

    trackView();
    return () => {
      cancelled = true;
    };
  }, []);

  if (views === null) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full glass shadow-premium font-mono text-xs"
    >
      <Eye size={14} className="text-blue" />
      <span className="text-text font-semibold">{views.toLocaleString()}</span>
      <span className="text-muted">portfolio views</span>
    </motion.div>
  );
}
