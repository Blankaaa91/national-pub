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

  social: {
    facebook:  "https://www.facebook.com/leseb71/?locale=fr_FR",
    instagram: "https://www.instagram.com/nationalpubevaix/",
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
