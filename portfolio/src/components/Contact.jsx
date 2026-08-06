import { Mail, Phone, Link2, Globe } from "lucide-react";
import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-ok mb-3">POST /contact</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Let's build something.
        </h2>
        <p className="text-muted max-w-xl mb-12">
          Open to freelance engagements and long-term backend, mobile, or
          e-commerce projects. Reach out directly — I typically reply within
          a day.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="border border-line rounded-xl p-6 hover:border-ok/50 transition-colors group"
          >
            <Mail size={20} className="text-ok mb-4" />
            <p className="font-mono text-xs text-muted mb-1">email</p>
            <p className="text-sm text-text break-all">{profile.email}</p>
          </a>

          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="border border-line rounded-xl p-6 hover:border-ok/50 transition-colors"
          >
            <Phone size={20} className="text-ok mb-4" />
            <p className="font-mono text-xs text-muted mb-1">phone</p>
            <p className="text-sm text-text">{profile.phone}</p>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="border border-line rounded-xl p-6 hover:border-ok/50 transition-colors"
          >
            <Link2 size={20} className="text-ok mb-4" />
            <p className="font-mono text-xs text-muted mb-1">linkedin</p>
            <p className="text-sm text-text break-all">
              /jerry-emeka-470956289
            </p>
          </a>

          <a
            href={profile.website}
            target="_blank"
            rel="noreferrer"
            className="border border-line rounded-xl p-6 hover:border-ok/50 transition-colors"
          >
            <Globe size={20} className="text-ok mb-4" />
            <p className="font-mono text-xs text-muted mb-1">website</p>
            <p className="text-sm text-text">j7hub.com</p>
          </a>
        </div>
      </div>
    </section>
  );
}
