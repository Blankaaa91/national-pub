import Link from "next/link";
import { PUB } from "@/constants/pub";

export function Footer() {
  return (
    <footer className="bg-pub-surface border-t border-pub-border mt-20">
      <div className="mx-auto max-w-6xl px-5 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="font-display text-2xl text-pub-cream mb-1">
            <span className="text-pub-accent">National</span>{" "}
            <span className="italic font-normal">Pub</span>
          </p>
          <p className="text-pub-muted text-sm leading-relaxed mt-2">
            {PUB.tagline}.<br />
            Un endroit simple, chaleureux, et toujours accueillant.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Navigation footer">
          <p className="text-xs uppercase tracking-widest text-pub-accent font-semibold mb-4">
            Navigation
          </p>
          <ul className="flex flex-col gap-2.5" role="list">
            {[
              { href: "/",        label: "Accueil" },
              { href: "/menu",    label: "Menu" },
              { href: "/contact", label: "Contact & Infos" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-pub-muted hover:text-pub-cream transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <p className="text-xs uppercase tracking-widest text-pub-accent font-semibold mb-4">
            Nous trouver
          </p>
          <address className="not-italic text-pub-muted text-sm leading-relaxed">
            <p>{PUB.address.street}</p>
            <p>
              {PUB.address.zip} {PUB.address.city}
            </p>
            <a
              href={PUB.phoneHref}
              className="mt-3 block text-pub-cream hover:text-pub-accent transition-colors duration-200"
              aria-label={`Appeler le ${PUB.phone}`}
            >
              {PUB.phone}
            </a>
          </address>

          {/* Social placeholders */}
          <div className="flex gap-3 mt-5">
            {PUB.social.facebook && (
              <a
                href={PUB.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pub-muted hover:text-pub-accent transition-colors duration-200 text-sm"
                aria-label="Facebook"
              >
                Facebook
              </a>
            )}
            {PUB.social.instagram && (
              <a
                href={PUB.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pub-muted hover:text-pub-accent transition-colors duration-200 text-sm"
                aria-label="Instagram"
              >
                Instagram
              </a>
            )}
            {!PUB.social.facebook && !PUB.social.instagram && (
              <p className="text-pub-border text-xs italic">
                {/* Réseaux sociaux à ajouter dans constants/pub.ts */}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-pub-border px-5 py-4 text-center text-pub-border text-xs">
        © {new Date().getFullYear()} {PUB.name} — {PUB.address.full}
      </div>
    </footer>
  );
}
