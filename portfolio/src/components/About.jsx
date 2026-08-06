import { profile } from "../data";
import { MapPin, GraduationCap } from "lucide-react";
import { education, certifications } from "../data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-ok mb-3">GET /about</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          About {profile.shortName}
        </h2>

        <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
          {/*
            PHOTO SLOT — replace src below with your uploaded portrait.
            Recommended: square-ish photo, at least 500x500px, good lighting.
          */}
          <div className="relative">
            <div className="aspect-square rounded-xl border border-line bg-surface overflow-hidden flex items-center justify-center">
              <img
                src="/profile-photo.jpg"
                alt={profile.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextSibling.style.display = "flex";
                }}
              />
              <div
                className="hidden w-full h-full flex-col items-center justify-center text-center p-6 font-mono text-xs text-muted"
              >
                <span className="text-4xl mb-2">📷</span>
                Drop your photo at
                <br />
                <span className="text-warm">public/profile-photo.jpg</span>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 bg-ok text-ink text-xs font-mono font-semibold px-3 py-1 rounded">
              available
            </div>
          </div>

          <div>
            <p className="text-muted text-lg leading-relaxed mb-6">
              I'm a full-stack developer and SEO specialist based in{" "}
              <span className="text-text">{profile.location}</span>, with five
              years of experience shipping web, mobile, and e-commerce
              systems. I work across the stack — from Magento 2 REST APIs and
              Laravel backends to React interfaces and Kotlin/Jetpack Compose
              Android apps — and pair that with hands-on technical SEO so
              what I build actually gets found.
            </p>
            <p className="text-muted text-lg leading-relaxed mb-8">
              My work spans repair-management platforms, WooCommerce
              inventory tooling, Shopify storefronts, and school and business
              websites — with a habit of documenting everything I ship
              (Postman collections, Swagger/OpenAPI specs) so clients and
              teammates never inherit a black box.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="flex items-center gap-2 font-mono text-xs text-muted border border-line rounded-full px-3 py-1.5">
                <MapPin size={14} className="text-ok" /> {profile.location}
              </span>
              <span className="flex items-center gap-2 font-mono text-xs text-muted border border-line rounded-full px-3 py-1.5">
                <GraduationCap size={14} className="text-ok" />
                {education.degree}, {education.period}
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              {certifications.map((c) => (
                <div
                  key={c}
                  className="border border-line rounded-lg p-4 bg-surface/50"
                >
                  <p className="font-mono text-[11px] text-warm mb-1">CERT</p>
                  <p className="text-sm text-text leading-snug">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
