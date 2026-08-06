import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-muted">
        <p>
          <span className="text-ok">●</span> {profile.status}
        </p>
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
        </p>
      </div>
    </footer>
  );
}
