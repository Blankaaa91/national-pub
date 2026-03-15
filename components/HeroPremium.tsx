"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PUB } from "@/constants/pub";

export function HeroPremium() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef      = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleRef   = useRef<HTMLHeadingElement>(null);
  const descRef    = useRef<HTMLParagraphElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);
  const pillsRef   = useRef<HTMLDivElement>(null);

  // ── Ken Burns lent au chargement ─────────────────────────────────────────
  useEffect(() => {
    if (!bgRef.current) return;
    gsap.fromTo(bgRef.current, { scale: 1.07 }, { scale: 1.02, duration: 9, ease: "power1.out" });
  }, []);

  // ── Parallax au scroll via ScrollTrigger ─────────────────────────────────
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const trig = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=90%",
      scrub: 1.8,
      onUpdate: (self) => {
        if (bgRef.current) gsap.set(bgRef.current, { y: self.progress * 110 });
      },
    });

    return () => trig.kill();
  }, []);

  // ── Animations d'entrée ───────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(eyebrowRef.current, { y: 0, opacity: 1, duration: 0.6 }, 0.4)
        .to(
          titleRef.current!.querySelectorAll(".hero-line"),
          { y: 0, opacity: 1, duration: 0.85, stagger: 0.13 },
          0.65
        )
        .to(descRef.current,  { y: 0, opacity: 1, duration: 0.65 }, 1.2)
        .to(ctaRef.current,   { y: 0, opacity: 1, duration: 0.55 }, 1.42)
        .to(pillsRef.current, { y: 0, opacity: 1, duration: 0.45 }, 1.6);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex items-end overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* ── Fond photo + calques ────────────────────────────────────────── */}
      <div className="absolute inset-0" aria-hidden="true">

        <div ref={bgRef} className="absolute will-change-transform" style={{ inset: "-10%" }}>
          <Image
            src="/images/bar-photo.webp"
            alt="Intérieur chaleureux du National Pub à Bevaix"
            fill
            priority
            className="object-cover object-center"
            quality={88}
          />
        </div>

        {/* Assombrissement global */}
        <div className="absolute inset-0" style={{ background: "rgba(5,2,1,0.46)" }} />

        {/* Glow ambré chaud — côté contenu */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 12% 68%, rgba(155,75,8,0.30) 0%, transparent 58%)",
          }}
        />

        {/* Vignette bords */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 145% 130% at 50% 50%, transparent 24%, rgba(0,0,0,0.84) 100%)",
          }}
        />

        {/* Fondu bas très doux */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "24rem",
            background:
              "linear-gradient(to top, #241408 0%, rgba(36,20,8,0.85) 30%, rgba(36,20,8,0.35) 62%, transparent 100%)",
          }}
        />

        {/* Grain cinématographique */}
        <div
          className="absolute inset-0 pointer-events-none select-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
            opacity: 0.45,
          }}
        />
      </div>

      {/* ── Contenu ─────────────────────────────────────────────────────── */}
      <div className="relative z-20 mx-auto max-w-6xl px-5 pt-32 pb-16 md:pb-24 w-full">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <div
            ref={eyebrowRef}
            className="flex items-center gap-4 mb-7"
            style={{ opacity: 0, transform: "translateY(14px)" }}
          >
            <span className="block w-7 h-px bg-pub-accent/80" aria-hidden="true" />
            <p className="text-pub-accent text-[0.68rem] font-semibold uppercase tracking-[0.38em]">
              Bevaix · Neuchâtel
            </p>
          </div>

          {/* Titre */}
          <h1 ref={titleRef} id="hero-title" className="font-display leading-[1.02]">
            <span
              className="hero-line block text-pub-cream text-[2.6rem] sm:text-6xl lg:text-7xl"
              style={{ opacity: 0, transform: "translateY(34px)" }}
            >
              Le pub du village,
            </span>
            <em
              className="hero-line block text-pub-accent not-italic italic text-[2.6rem] sm:text-6xl lg:text-7xl"
              style={{ opacity: 0, transform: "translateY(34px)" }}
            >
              chaleureux
            </em>
            <span
              className="hero-line block text-pub-cream text-[2.6rem] sm:text-6xl lg:text-7xl"
              style={{ opacity: 0, transform: "translateY(34px)" }}
            >
              & convivial.
            </span>
          </h1>

          {/* Séparateur */}
          <div className="mt-8 mb-6 w-10 h-px bg-pub-accent/35" aria-hidden="true" />

          {/* Description */}
          <p
            ref={descRef}
            className="text-pub-muted/85 text-base md:text-lg max-w-[44ch] leading-relaxed"
            style={{ opacity: 0, transform: "translateY(22px)" }}
          >
            Bières, cocktails, billard & bonne humeur — le National Pub
            vous accueille au cœur de Bevaix.
          </p>

          {/* CTA */}
          <div
            ref={ctaRef}
            className="mt-8 flex flex-wrap gap-3"
            style={{ opacity: 0, transform: "translateY(18px)" }}
          >
            <Link href="/menu" className="btn-primary">
              Voir le menu
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-ghost">
              Nous trouver
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </Link>
          </div>

          {/* Pills */}
          <div
            ref={pillsRef}
            className="mt-9 flex flex-wrap gap-2"
            style={{ opacity: 0, transform: "translateY(14px)" }}
          >
            <div className="flex items-center gap-1.5 text-pub-muted/75 text-xs bg-black/30 backdrop-blur-sm border border-white/10 rounded-full px-3.5 py-1.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"
                className="w-3 h-3 text-pub-accent/50 flex-shrink-0" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {PUB.address.full}
            </div>
            <a
              href={PUB.phoneHref}
              className="flex items-center gap-1.5 text-pub-muted/75 text-xs bg-black/30 backdrop-blur-sm border border-white/10 rounded-full px-3.5 py-1.5 hover:border-pub-accent/40 hover:text-pub-cream transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"
                className="w-3 h-3 text-pub-accent/50 flex-shrink-0" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.93 9.93a19.79 19.79 0 01-3.07-8.67A2 2 0 012.84 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 8.62a16 16 0 006.29 6.29l.97-.97a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              {PUB.phone}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
