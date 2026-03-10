"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { PUB } from "@/constants/pub";

const links = [
  { href: "/",        label: "Accueil" },
  { href: "/menu",    label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname  = usePathname();
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-pub-bg/95 backdrop-blur-sm border-b border-pub-border shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl md:text-2xl text-pub-cream hover:text-pub-accent transition-colors duration-200 tracking-wide"
          aria-label="National Pub — retour à l'accueil"
        >
          <span className="text-pub-accent">National</span>{" "}
          <span className="font-normal italic">Pub</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm tracking-wider uppercase font-semibold transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-pub-accent"
                    : "text-pub-muted hover:text-pub-cream"
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={PUB.phoneHref}
              className="btn-primary !py-2 !px-4 text-xs"
              aria-label={`Appeler le ${PUB.phone}`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.93 9.93a19.79 19.79 0 01-3.07-8.67A2 2 0 012.84 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 8.62a16 16 0 006.29 6.29l.97-.97a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              {PUB.phone}
            </a>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9 p-1 rounded focus:outline-none focus:ring-2 focus:ring-pub-accent"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span className={`block w-full h-0.5 bg-pub-cream transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-full h-0.5 bg-pub-cream transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-full h-0.5 bg-pub-cream transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 border-b border-pub-border" : "max-h-0"
        }`}
      >
        <ul className="px-5 pb-6 pt-2 flex flex-col gap-1" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block py-3 text-base tracking-wide font-semibold border-b border-pub-border/50 transition-colors duration-200 ${
                  pathname === link.href ? "text-pub-accent" : "text-pub-cream"
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <a href={PUB.phoneHref} className="btn-primary w-full justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.93 9.93a19.79 19.79 0 01-3.07-8.67A2 2 0 012.84 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 8.62a16 16 0 006.29 6.29l.97-.97a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              {PUB.phone}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
