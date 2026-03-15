import type { Metadata } from "next";
import Link from "next/link";
import { PUB } from "@/constants/pub";
import { MENU } from "@/data/menu";
import { HeroPremium } from "@/components/HeroPremium";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AmbianceVideo } from "@/components/AmbianceVideo";

export const metadata: Metadata = {
  title: "Accueil — National Pub Bevaix",
  description:
    "Le National Pub de Bevaix vous accueille dans une ambiance chaleureuse. Bières, cocktails, billard, babyfoot, fléchettes et bien plus. Consultez notre menu.",
};

// Only show the first 3 categories as preview
const MENU_PREVIEW = MENU.slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* ─────────────── HERO ─────────────── */}
      <HeroPremium />

      {/* ─────────────── AMBIANCE ─────────────── */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28" aria-labelledby="ambiance-title">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="block w-6 h-px bg-pub-accent/60" aria-hidden="true" />
            <p className="text-pub-accent text-[0.68rem] tracking-[0.32em] uppercase font-semibold">
              Notre âme
            </p>
          </div>
          <h2 id="ambiance-title" className="section-title max-w-xl text-balance">
            Un pub authentique,<br />comme on les aime.
          </h2>
          <div className="gold-divider mx-0 mt-6 mb-0" />
        </ScrollReveal>

        <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <ScrollReveal delay={100}>
            <div className="space-y-5 text-pub-muted text-lg leading-relaxed">
              <p>
                Le <strong className="text-pub-cream font-semibold">National Pub</strong> c&apos;est
                l&apos;endroit où on vient pour se retrouver. Autour d&apos;un verre, d&apos;une partie de
                billard ou simplement pour profiter de la bonne humeur ambiante.
              </p>
              <p>
                Une atmosphère chaleureuse, des lumières tamisées, du bois et des gens sympas —
                rien de plus, rien de moins. Exactement ce qu&apos;un bon pub devrait être.
              </p>
              <p>
                Que vous soyez du coin ou de passage à Bevaix, vous trouverez toujours une
                place et un sourire au comptoir.
              </p>
            </div>
          </ScrollReveal>

          {/* Vidéo d'ambiance */}
          <ScrollReveal delay={200}>
            <AmbianceVideo />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Séparateur ── */}
      <div className="section-sep mx-5" aria-hidden="true" />

      {/* ─────────────── ACTIVITÉS ─────────────── */}
      <section className="bg-pub-surface border-y border-pub-border grain-overlay" aria-labelledby="activities-title">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <ScrollReveal className="text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="block w-6 h-px bg-pub-accent/60" aria-hidden="true" />
              <p className="text-pub-accent text-[0.68rem] tracking-[0.32em] uppercase font-semibold">
                Au programme
              </p>
              <span className="block w-6 h-px bg-pub-accent/60" aria-hidden="true" />
            </div>
            <h2 id="activities-title" className="section-title">
              Il y en a pour tous les goûts.
            </h2>
            <div className="gold-divider" />
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PUB.activities.map((activity, i) => (
              <ScrollReveal key={activity.label} delay={i * 60}>
                <div className="pub-card text-center py-7 px-3 group relative overflow-hidden">
                  {/* Ligne accent dorée en haut */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-pub-accent/20 group-hover:bg-pub-accent/50 transition-colors duration-300" aria-hidden="true" />
                  <span className="block text-4xl mb-3" aria-hidden="true">
                    {activity.icon}
                  </span>
                  <p className="text-pub-cream/90 font-semibold text-sm tracking-wide group-hover:text-pub-cream transition-colors duration-200">
                    {activity.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── APERÇU MENU ─────────────── */}

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28" aria-labelledby="menu-preview-title">
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="block w-6 h-px bg-pub-accent/60" aria-hidden="true" />
              <p className="text-pub-accent text-[0.68rem] tracking-[0.32em] uppercase font-semibold">
                La carte
              </p>
            </div>
            <h2 id="menu-preview-title" className="section-title">
              Ce qu&apos;on sert.
            </h2>
          </div>
          <Link href="/menu" className="btn-ghost flex-shrink-0">
            Carte complète →
          </Link>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {MENU_PREVIEW.map((cat, i) => (
            <ScrollReveal key={cat.id} delay={i * 80}>
              <div className="pub-card h-full relative overflow-hidden">
                {/* Accent doré haut de card */}
                <div className="absolute top-0 left-0 right-0 h-px bg-pub-accent/30" aria-hidden="true" />
                <div className="flex items-center gap-3 mb-5 pt-1">
                  <span className="text-2xl" aria-hidden="true">{cat.emoji}</span>
                  <h3 className="font-display text-lg text-pub-cream">{cat.label}</h3>
                </div>
                <ul className="space-y-0" role="list">
                  {cat.items.slice(0, 4).map((item) => (
                    <li key={item.name} className="flex justify-between gap-2 text-sm py-2 border-b border-pub-border/40 last:border-0">
                      <span className="text-pub-muted">{item.name}</span>
                      <span className="text-pub-accent font-semibold flex-shrink-0">
                        CHF {item.price}
                      </span>
                    </li>
                  ))}
                  {cat.items.length > 4 && (
                    <li className="text-pub-muted/40 text-xs pt-2">
                      + {cat.items.length - 4} autres…
                    </li>
                  )}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200} className="text-center mt-12">
          <Link href="/menu" className="btn-primary">
            Voir toute la carte
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </ScrollReveal>
      </section>

      {/* ─────────────── INFOS PRATIQUES ─────────────── */}
      <section className="bg-pub-surface border-t border-pub-border grain-overlay" aria-labelledby="infos-title">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-4">
              <span className="block w-6 h-px bg-pub-accent/60" aria-hidden="true" />
              <p className="text-pub-accent text-[0.68rem] tracking-[0.32em] uppercase font-semibold">
                Infos pratiques
              </p>
            </div>
            <h2 id="infos-title" className="section-title mb-10">
              Venir nous voir.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Address */}
            <ScrollReveal delay={0}>
              <div className="pub-card h-full">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-pub-accent mb-4" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <h3 className="font-display text-lg text-pub-cream mb-2">Adresse</h3>
                <address className="not-italic text-pub-muted leading-relaxed">
                  {PUB.address.street}<br />
                  {PUB.address.zip} {PUB.address.city}
                </address>
                <a
                  href={PUB.mapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-pub-accent text-sm hover:text-pub-accent-light transition-colors"
                  aria-label="Obtenir l'itinéraire vers le National Pub"
                >
                  Itinéraire →
                </a>
              </div>
            </ScrollReveal>

            {/* Hours */}
            <ScrollReveal delay={80}>
              <div className="pub-card h-full">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-pub-accent mb-4" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <h3 className="font-display text-lg text-pub-cream mb-3">Horaires</h3>
                <ul className="space-y-1.5" role="list">
                  {PUB.hours.map((h) => (
                    <li key={h.days} className="flex justify-between text-sm gap-3">
                      <span className="text-pub-muted">{h.days}</span>
                      <span className="font-semibold text-pub-cream">
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Contact */}
            <ScrollReveal delay={160}>
              <div className="pub-card h-full flex flex-col">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-pub-accent mb-4" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.93 9.93a19.79 19.79 0 01-3.07-8.67A2 2 0 012.84 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 8.62a16 16 0 006.29 6.29l.97-.97a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                <h3 className="font-display text-lg text-pub-cream mb-2">Contact</h3>
                <p className="text-pub-muted text-sm mb-5">
                  Pour réserver un espace ou poser une question, n&apos;hésitez pas à nous appeler.
                </p>
                <div className="mt-auto flex flex-col gap-3">
                  <a href={PUB.phoneHref} className="btn-primary justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.93 9.93a19.79 19.79 0 01-3.07-8.67A2 2 0 012.84 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 8.62a16 16 0 006.29 6.29l.97-.97a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                    {PUB.phone}
                  </a>
                  <Link href="/contact" className="btn-ghost justify-center">
                    Plus d&apos;infos
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Map */}
          <ScrollReveal delay={100} className="mt-10">
            <div
              className="w-full h-56 md:h-80 rounded overflow-hidden border border-pub-border/60"
              style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(200,133,42,0.08)" }}
            >
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
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
