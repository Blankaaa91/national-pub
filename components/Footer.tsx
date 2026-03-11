import Link from "next/link";
import { PUB } from "@/constants/pub";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-pub-border/30" style={{ background: "#180D05" }}>
      {/* Ornement décoratif */}
      <div className="flex items-center" aria-hidden="true">
        <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(200,133,42,0.45))" }} />
        <div className="px-6 py-3.5 text-pub-accent/50 text-sm font-display italic select-none tracking-[0.3em]">◆</div>
        <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(200,133,42,0.45))" }} />
      </div>

      <div className="mx-auto max-w-6xl px-5 pt-10 pb-10">
        {/* Haut : marque + réseaux sociaux */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="font-display text-4xl md:text-5xl text-pub-cream leading-none tracking-tight">
              <span className="text-pub-accent">National</span>{" "}
              <span className="italic font-normal">Pub</span>
            </p>
            <p className="text-pub-muted/80 text-sm mt-2.5 tracking-wide">
              {PUB.tagline} · Bevaix, Neuchâtel
            </p>
          </div>

          <div className="flex items-center gap-3">
            {PUB.social.instagram && (
              <a
                href={PUB.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram — National Pub"
                className="group w-11 h-11 rounded-full border border-pub-border/60 flex items-center justify-center text-pub-muted/70 hover:text-pub-cream hover:border-pub-accent/60 hover:bg-pub-surface transition-all duration-200"
              >
                <InstagramIcon className="w-[18px] h-[18px]" />
              </a>
            )}
            {PUB.social.facebook && (
              <a
                href={PUB.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook — National Pub"
                className="group w-11 h-11 rounded-full border border-pub-border/60 flex items-center justify-center text-pub-muted/70 hover:text-pub-cream hover:border-pub-accent/60 hover:bg-pub-surface transition-all duration-200"
              >
                <FacebookIcon className="w-[18px] h-[18px]" />
              </a>
            )}
          </div>
        </div>

        {/* Grille infos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-pub-border/30">
          {/* Navigation */}
          <nav aria-label="Navigation footer">
            <p className="text-[10px] uppercase tracking-[0.22em] text-pub-accent/60 font-semibold mb-4">
              Pages
            </p>
            <ul className="flex flex-col gap-2.5" role="list">
              {[
                { href: "/",        label: "Accueil" },
                { href: "/menu",    label: "Menu & Carte" },
                { href: "/contact", label: "Contact & Infos" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-pub-muted/80 hover:text-pub-cream transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Horaires */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-pub-accent/60 font-semibold mb-4">
              Horaires
            </p>
            <ul className="flex flex-col gap-1.5" role="list">
              {PUB.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-2 text-sm">
                  <span className="text-pub-muted/70">{h.days}</span>
                  <span className="font-medium text-pub-cream/90">
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Adresse */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-pub-accent/60 font-semibold mb-4">
              Nous trouver
            </p>
            <address className="not-italic text-pub-muted/80 text-sm leading-relaxed">
              <p>{PUB.address.street}</p>
              <p>{PUB.address.zip} {PUB.address.city}</p>
              <a
                href={PUB.phoneHref}
                className="mt-3 block text-pub-cream/90 hover:text-pub-accent transition-colors duration-200"
                aria-label={`Appeler le ${PUB.phone}`}
              >
                {PUB.phone}
              </a>
              <a
                href={PUB.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 block text-pub-accent/70 hover:text-pub-accent text-xs transition-colors duration-200"
              >
                Voir sur Maps →
              </a>
            </address>
          </div>
        </div>
      </div>

      {/* Barre copyright */}
      <div
        className="border-t border-pub-border/20 px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-2"
        style={{ background: "rgba(0,0,0,0.25)" }}
      >
        <span className="text-pub-border/50 text-[11px] tracking-wide">
          © {new Date().getFullYear()} {PUB.name}
        </span>
        <span className="text-pub-border/30 text-[11px] hidden sm:block" aria-hidden="true">◆</span>
        <span className="text-pub-border/50 text-[11px] tracking-wide">
          {PUB.address.full}
        </span>
      </div>
    </footer>
  );
}
