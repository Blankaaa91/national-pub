import type { Metadata } from "next";
import Link from "next/link";
import { PUB } from "@/constants/pub";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact & Infos",
  description: `Retrouvez le National Pub au ${PUB.address.full}. Horaires d'ouverture, téléphone, itinéraire et menu en ligne.`,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* ─── Header ─── */}
      <div className="mx-auto max-w-6xl px-5 mb-16">
        <ScrollReveal>
          <p className="text-pub-accent text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Informations
          </p>
          <h1 className="section-title max-w-lg text-balance">
            Venez nous rendre visite.
          </h1>
          <div className="gold-divider mx-0 mt-5" />
        </ScrollReveal>
      </div>

      {/* ─── Grid infos ─── */}
      <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Adresse */}
        <ScrollReveal delay={0}>
          <div className="pub-card h-full">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl" aria-hidden="true">📍</span>
              <h2 className="font-display text-xl text-pub-cream">Adresse</h2>
            </div>
            <address className="not-italic text-pub-muted text-base leading-relaxed mb-5">
              <strong className="text-pub-cream block">{PUB.name}</strong>
              {PUB.address.street}<br />
              {PUB.address.zip} {PUB.address.city}<br />
              Suisse
            </address>
            <a
              href={PUB.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
              aria-label="Obtenir l'itinéraire vers le National Pub"
            >
              📍 Itinéraire
            </a>
          </div>
        </ScrollReveal>

        {/* Téléphone */}
        <ScrollReveal delay={80}>
          <div className="pub-card h-full">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl" aria-hidden="true">📞</span>
              <h2 className="font-display text-xl text-pub-cream">Téléphone</h2>
            </div>
            <p className="text-pub-muted text-sm mb-3">
              Pour toute question ou information, n&apos;hésitez pas à nous appeler directement.
            </p>
            <a
              href={PUB.phoneHref}
              className="text-pub-accent font-display text-2xl hover:text-pub-accent-light transition-colors duration-200 block mb-5"
              aria-label={`Appeler le ${PUB.phone}`}
            >
              {PUB.phone}
            </a>
            <a
              href={PUB.phoneHref}
              className="btn-primary w-full justify-center"
            >
              📞 Appeler maintenant
            </a>
          </div>
        </ScrollReveal>

        {/* Horaires */}
        <ScrollReveal delay={160}>
          <div className="pub-card h-full">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl" aria-hidden="true">🕐</span>
              <h2 className="font-display text-xl text-pub-cream">Horaires</h2>
            </div>
            <ul className="space-y-2.5" role="list">
              {PUB.hours.map((h) => (
                <li
                  key={h.days}
                  className="flex justify-between items-center gap-4 text-sm border-b border-pub-border/40 pb-2.5 last:border-0 last:pb-0"
                >
                  <span className="text-pub-muted">{h.days}</span>
                  <span
                    className="font-semibold text-right text-pub-cream"
                  >
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>

      {/* ─── Map ─── */}
      <ScrollReveal className="mx-auto max-w-6xl px-5 mb-12">
        <div className="w-full h-72 md:h-96 rounded-sm overflow-hidden border border-pub-border relative">
          <iframe
            src="https://maps.google.com/maps?q=Rue+du+Temple+23,+2022+Bevaix,+Suisse&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation du National Pub — Rue du Temple 23, 2022 Bevaix"
          />
        </div>
        <p className="text-center text-pub-muted text-xs mt-3">
          📍 Rue du Temple 23, 2022 Bevaix —{" "}
          <a
            href={PUB.mapsDirections}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pub-accent hover:underline"
          >
            Ouvrir dans Google Maps
          </a>
        </p>
      </ScrollReveal>

      {/* ─── QR code info ─── */}
      <ScrollReveal className="mx-auto max-w-6xl px-5 mb-12">
        <div className="bg-pub-surface border border-pub-accent/30 rounded-sm p-8 text-center grain-overlay">
          <span className="text-5xl block mb-4" aria-hidden="true">📱</span>
          <h2 className="font-display text-2xl text-pub-cream mb-3">
            Notre menu est aussi disponible en ligne
          </h2>
          <p className="text-pub-muted max-w-md mx-auto text-sm leading-relaxed mb-6">
            Scannez le QR code sur votre table ou visitez directement notre page menu.
            Toujours à jour, lisible sur mobile.
          </p>
          <Link href="/menu" className="btn-primary">
            🍺 Consulter le menu
          </Link>
        </div>
      </ScrollReveal>

      {/* ─── Comment venir ─── */}
      <ScrollReveal className="mx-auto max-w-6xl px-5">
        <div className="pub-card">
          <h2 className="font-display text-2xl text-pub-cream mb-5">
            Comment venir ?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm text-pub-muted">
            <div>
              <p className="font-semibold text-pub-cream mb-1">🚗 En voiture</p>
              <p>
                Parking disponible à proximité. Naviguer vers «{" "}
                <span className="text-pub-cream">{PUB.address.full}</span> ».
              </p>
            </div>
            <div>
              <p className="font-semibold text-pub-cream mb-1">🚌 En transports</p>
              <p>
                {/* PLACEHOLDER — à remplir selon les lignes de bus locales */}
                Arrêt à proximité du village de Bevaix. Consulter les horaires CFF ou des
                transports régionaux.
              </p>
            </div>
            <div>
              <p className="font-semibold text-pub-cream mb-1">🚶 À pied</p>
              <p>
                Situé au cœur de Bevaix, rue du Temple. Facilement accessible depuis le centre
                du village.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
