"use client";

import { useEffect, useRef, useState } from "react";
import type { MenuCategory } from "@/data/menu";

interface Props {
  categories: MenuCategory[];
}

export function MenuStickyNav({ categories }: Props) {
  const [active, setActive] = useState(categories[0]?.id ?? "");
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    categories.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories]);

  // Auto-scroll active tab into view
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const btn = nav.querySelector(`[data-id="${active}"]`) as HTMLElement | null;
    if (btn) {
      const navRect   = nav.getBoundingClientRect();
      const btnRect   = btn.getBoundingClientRect();
      const offset    = btnRect.left - navRect.left - navRect.width / 2 + btnRect.width / 2;
      nav.scrollBy({ left: offset, behavior: "smooth" });
    }
  }, [active]);

  return (
    <div
      className="sticky top-[64px] z-30 bg-pub-bg/95 backdrop-blur-sm border-b border-pub-border"
      role="navigation"
      aria-label="Catégories du menu"
    >
      <div
        ref={navRef}
        className="flex gap-1 px-4 py-2 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            data-id={cat.id}
            className={`
              flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold tracking-wide
              transition-all duration-200 whitespace-nowrap
              ${
                active === cat.id
                  ? "bg-pub-accent text-pub-bg"
                  : "text-pub-muted hover:text-pub-cream hover:bg-pub-surface"
              }
            `}
            aria-current={active === cat.id ? "true" : undefined}
          >
            <span aria-hidden="true">{cat.emoji}</span> {cat.label}
          </a>
        ))}
      </div>
    </div>
  );
}
