import type { Metadata } from "next";
import Link from "next/link";
import { MENU } from "@/data/menu";
import { PUB } from "@/constants/pub";
import { MenuStickyNav } from "@/components/MenuStickyNav";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Consultez la carte du National Pub de Bevaix : bières, cocktails, softs, snacks et boissons chaudes.",
};

export default function MenuPage() {
  return (
    <div className="min-h-screen">
      {/* ─── Header ─── */}
      <div className="pt-28 pb-10 px-5 grain-overlay bg-pub-surface border-b border-pub-border">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-pub-accent text-xs tracking-[0.3em] uppercase font-semibold mb-3">
            National Pub · Bevaix
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-pub-cream mb-3">
            La Carte
          </h1>
          <div className="gold-divider" />
          <p className="text-pub-muted mt-4 text-base md:text-lg italic">
            Scannez, choisissez, profitez.
          </p>
        </div>
      </div>

      {/* ─── Sticky category nav ─── */}
      <MenuStickyNav categories={MENU} />

      {/* ─── Menu content ─── */}
      <div className="mx-auto max-w-2xl px-5 py-10 space-y-16">
        {MENU.map((category) => (
          <section
            key={category.id}
            id={category.id}
            aria-labelledby={`cat-${category.id}`}
            className="scroll-mt-32"
          >
            {/* Category header */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl" aria-hidden="true">{category.emoji}</span>
              <div>
                <h2
                  id={`cat-${category.id}`}
                  className="font-display text-2xl md:text-3xl text-pub-cream"
                >
                  {category.label}
                </h2>
                <div className="w-10 h-px bg-pub-accent mt-1" />
              </div>
            </div>

            {/* Items */}
            <div
              className="bg-pub-surface border border-pub-border rounded-sm px-5 py-2"
              role="list"
              aria-label={`Items de la catégorie ${category.label}`}
            >
              {category.items.map((item, idx) => (
                <div
                  key={`${item.name}-${idx}`}
                  role="listitem"
                  className="menu-item"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-pub-cream font-semibold text-base leading-snug">
                        {item.name}
                      </span>
                      {item.badge && (
                        <span className="inline-block bg-pub-accent/20 text-pub-accent text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full border border-pub-accent/30">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-pub-muted text-sm mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <span className="text-pub-accent font-bold text-base font-display">
                      CHF {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* ─── CTA fin de menu ─── */}
        <section className="pt-8 pb-4" aria-labelledby="menu-cta">
          <div className="bg-pub-surface border border-pub-border rounded-sm p-7 text-center grain-overlay">
            <span className="text-4xl block mb-4" aria-hidden="true">🍻</span>
            <h2 id="menu-cta" className="font-display text-2xl text-pub-cream mb-2">
              Une question ? Passez au bar.
            </h2>
            <p className="text-pub-muted text-sm mb-6">
              Notre équipe est là pour vous conseiller et vous préparer ce qu&apos;il vous faut.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={PUB.phoneHref} className="btn-primary justify-center">
                📞 {PUB.phone}
              </a>
              <Link href="/contact" className="btn-ghost justify-center">
                Voir les horaires
              </Link>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <p className="text-center text-pub-border text-xs pb-8">
          Prix en CHF, toutes taxes comprises. Carte non contractuelle, soumise à disponibilité.
        </p>
      </div>
    </div>
  );
}
