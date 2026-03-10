# National Pub — Site vitrine

Site web pour le **National Pub**, Rue du Temple 23, 2022 Bevaix.

Stack : **Next.js 14** · **TypeScript** · **Tailwind CSS**

---

## Installation & démarrage

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

---

## Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Démarrer le build de production |
| `npm run lint` | Vérifier le code |

---

## Structure du projet

```
national-pub/
├── app/
│   ├── layout.tsx          # Layout global (Navbar, Footer, fonts)
│   ├── globals.css         # CSS global (Tailwind + custom)
│   ├── page.tsx            # Page d'accueil
│   ├── menu/
│   │   └── page.tsx        # ⭐ Page menu (cible du QR code)
│   └── contact/
│       └── page.tsx        # Page contact & infos
├── components/
│   ├── Navbar.tsx          # Navigation sticky
│   ├── Footer.tsx          # Pied de page
│   ├── FloatingMenuButton.tsx  # Bouton flottant mobile
│   ├── MenuStickyNav.tsx   # Navigation des catégories du menu
│   ├── ScrollReveal.tsx    # Animation au scroll
│   └── HeroImage.tsx       # Placeholder hero (remplacer par vraie photo)
├── constants/
│   └── pub.ts              # ✏️  Infos du pub (adresse, téléphone, horaires…)
├── data/
│   └── menu.ts             # ✏️  Données du menu (catégories, items, prix)
├── public/
│   ├── favicon.svg
│   └── images/             # Dossier pour vos photos
└── tailwind.config.ts      # Palette de couleurs et thème
```

---

## Modifier le menu

**Fichier à éditer :** `data/menu.ts`

Chaque catégorie a la structure :

```ts
{
  id:    "bieres-pression",   // ancre HTML (#bieres-pression)
  label: "Bières pression",
  emoji: "🍺",
  items: [
    {
      name:        "Cardinal Lager",
      description: "Bière blonde suisse",  // optionnel
      price:       "4.50",                 // en CHF
      badge:       "Locale",               // optionnel
    },
  ],
}
```

**Pour ajouter un item :** ajoutez un objet dans le tableau `items` de la catégorie.

**Pour ajouter une catégorie :** ajoutez un objet dans le tableau `MENU`.

---

## Modifier les infos du pub

**Fichier à éditer :** `constants/pub.ts`

Vous y trouverez :
- Nom, adresse, téléphone
- Horaires d'ouverture
- Lien Google Maps
- Réseaux sociaux
- Liste des activités

---

## Remplacer les images

Placez vos photos dans **`public/images/`** et mettez à jour les composants.

| Fichier suggéré | Composant à modifier | Usage |
|----------------|---------------------|-------|
| `public/images/hero.jpg` | `components/HeroImage.tsx` | Grande photo d'accueil |
| `public/images/ambiance.jpg` | `app/page.tsx` (section ambiance) | Photo d'ambiance |

Dans `HeroImage.tsx`, décommentez le bloc `<Image>` et supprimez le div placeholder.

Format recommandé : **WebP ou JPEG**, qualité 80-90%.

---

## QR Code

Le QR code doit pointer vers :
```
https://votre-domaine.com/menu
```

En local, pour tester depuis un mobile : utilisez votre adresse IP locale,
par exemple `http://192.168.1.XX:3000/menu`.

---

## Build et déploiement

```bash
# Build de production
npm run build

# Tester le build en local
npm run start
```

**Déploiement recommandé : [Vercel](https://vercel.com)**
- Connectez votre repo GitHub
- Vercel détecte Next.js automatiquement
- Zero configuration nécessaire

---

## Palette de couleurs

Définie dans `tailwind.config.ts` :

| Token | Hex | Rôle |
|-------|-----|------|
| `pub-bg` | `#120D07` | Fond principal |
| `pub-surface` | `#1E1408` | Cartes, sections |
| `pub-border` | `#3A2A14` | Bordures |
| `pub-accent` | `#C8852A` | Or ambré — accent principal |
| `pub-accent-light` | `#E8A84A` | Accent clair (hover) |
| `pub-cream` | `#F2E8D5` | Texte principal |
| `pub-muted` | `#9A8060` | Texte secondaire |
| `pub-brick` | `#8B3520` | Rouge brique (fermé, alertes) |

---

*Site créé pour le National Pub de Bevaix.*
