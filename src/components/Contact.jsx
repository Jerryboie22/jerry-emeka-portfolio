import { motion } from "framer-motion";
import { Mail, Phone, Globe, MessageCircle } from "lucide-react";
import { LinkedinIcon } from "./Icons";
import { profile } from "../data";

const cards = [
  {
    key: "email",
    href: (p) => `mailto:${p.email}`,
    icon: Mail,
    label: "email",
    value: (p) => p.email,
  },
  {
    key: "whatsapp",
    href: (p) => p.whatsapp,
    external: true,
    icon: MessageCircle,
    label: "whatsapp",
    value: () => "Chat now",
  },
  {
    key: "phone",
    href: (p) => `tel:${p.phone.replace(/\s/g, "")}`,
    icon: Phone,
    label: "phone",
    value: (p) => p.phone,
  },
  {
    key: "linkedin",
    href: (p) => p.linkedin,
    external: true,
    icon: LinkedinIcon,
    label: "linkedin",
    value: () => "/jerry-emeka-470956289",
  },
  {
    key: "website",
    href: (p) => p.website,
    external: true,
    icon: Globe,
    label: "website",
    value: () => "j7hub.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-line relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-60 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm gradient-text mb-3"
        >
          POST /contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl md:text-4xl font-bold mb-4"
        >
          Let's build something.
        </motion.h2>
        <p className="text-muted max-w-xl mb-6">
          Open to conversations with founders, agencies, and recruiters
          alike — whether that's a single project or an ongoing role. Reach
          out directly and I typically reply within a day.
        </p>

        <div className="flex flex-wrap gap-2 mb-12">
          {profile.engagementTypes.map((t) => (
            <span
              key={t}
              className="font-mono text-xs text-muted glass rounded-full px-3 py-1.5"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.key}
                href={c.href(profile)}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl p-6 hover:border-white/20 hover:shadow-glow transition-all"
              >
                <Icon size={20} className="text-blue mb-4" />
                <p className="font-mono text-xs text-muted mb-1">{c.label}</p>
                <p className="text-sm text-text break-all">{c.value(profile)}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
