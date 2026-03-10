"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function FloatingMenuButton() {
  const pathname  = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling 300px, hide on menu page
    const handler = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Don't show on the menu page itself
  if (pathname === "/menu") return null;

  return (
    <div
      className={`fixed bottom-6 right-5 z-40 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Link
        href="/menu"
        className="
          flex items-center gap-2 bg-pub-accent text-pub-bg font-semibold
          px-5 py-3 rounded-full shadow-xl shadow-amber-900/40
          text-sm tracking-wide uppercase
          transition-all duration-300
          hover:bg-pub-accent-light hover:shadow-2xl hover:shadow-amber-900/50
          animate-gold-glow
          focus:outline-none focus:ring-2 focus:ring-pub-accent focus:ring-offset-2 focus:ring-offset-pub-bg
        "
        aria-label="Voir le menu du National Pub"
      >
        <span aria-hidden="true">🍺</span>
        Voir le menu
      </Link>
    </div>
  );
}
