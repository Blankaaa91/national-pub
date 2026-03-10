// ─────────────────────────────────────────────
// Pub information — edit this file to update
// all contact details across the entire site.
// ─────────────────────────────────────────────

export const PUB = {
  name:     "National Pub",
  tagline:  "Le pub convivial de Bevaix",
  address: {
    street: "Rue du Temple 23",
    city:   "Bevaix",
    zip:    "2022",
    full:   "Rue du Temple 23, 2022 Bevaix",
  },
  phone:    "032 846 20 50",
  phoneHref: "tel:+41328462050",

  // Google Maps — replace with real embed URL and directions URL
  mapsEmbed: "https://www.google.com/maps?q=Rue+du+Temple+23+2022+Bevaix&output=embed",
  mapsDirections: "https://www.google.com/maps/dir/?api=1&destination=Rue+du+Temple+23+2022+Bevaix",

  // Social media — add your handles or remove unused ones
  social: {
    facebook:  null, // e.g. "https://facebook.com/nationalpubbevaix"
    instagram: null, // e.g. "https://instagram.com/nationalpub"
  },

  // Opening hours — PLACEHOLDER, replace with real hours
  hours: [
    { days: "Lundi – Mardi",   time: "Fermé" },
    { days: "Mercredi – Jeudi", time: "17h00 – 23h00" },
    { days: "Vendredi",         time: "17h00 – 01h00" },
    { days: "Samedi",           time: "15h00 – 01h00" },
    { days: "Dimanche",         time: "15h00 – 22h00" },
  ],

  activities: [
    { label: "Billard",    icon: "🎱" },
    { label: "Babyfoot",   icon: "⚽" },
    { label: "Fléchettes", icon: "🎯" },
    { label: "Air Hockey", icon: "🏒" },
    { label: "Bonne bière", icon: "🍺" },
    { label: "Convivialité", icon: "🤝" },
  ],
} as const;
