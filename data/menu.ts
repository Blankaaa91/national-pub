// ─────────────────────────────────────────────────────────────────────────────
// MENU DATA — National Pub, Bevaix
//
// ⚠️  Les données ci-dessous sont des EXEMPLES / PLACEHOLDERS.
//     Remplacez chaque item par les vraies boissons, snacks et prix du pub.
//
// Comment modifier:
//   - Changer le nom, la description ou le prix d'un item
//   - Ajouter un item dans le tableau `items` de la catégorie concernée
//   - Ajouter une nouvelle catégorie en copiant la structure { id, label, items }
//   - Supprimer un item ou une catégorie
// ─────────────────────────────────────────────────────────────────────────────

export interface MenuItem {
  name: string;
  description?: string;
  price: string; // ex: "4.50" ou "6.-"
  badge?: string; // ex: "Nouveau", "Coup de cœur"
}

export interface MenuCategory {
  id: string;
  label: string;
  emoji: string;
  items: MenuItem[];
}

export const MENU: MenuCategory[] = [
  {
    id: "bieres-pression",
    label: "Bières pression",
    emoji: "🍺",
    items: [
      {
        name: "Cardinal Lager",
        description: "Bière blonde suisse, légère et rafraîchissante",
        price: "4.50",
        badge: "Locale",
      },
      {
        name: "Feldschlösschen",
        description: "Blonde classique, amertume douce",
        price: "4.50",
      },
      {
        name: "Blonde du mois",
        description: "Sélection tournante — demandez au bar",
        price: "5.00",
        badge: "Rotation",
      },
    ],
  },
  {
    id: "bieres-bouteille",
    label: "Bières bouteille",
    emoji: "🍻",
    items: [
      {
        name: "Heineken",
        price: "4.00",
      },
      {
        name: "Corona",
        description: "Avec quartier de citron",
        price: "5.00",
      },
      {
        name: "Desperados",
        description: "Bière tequila",
        price: "5.00",
      },
      {
        name: "Leffe Blonde",
        description: "Bière d'abbaye belge",
        price: "5.50",
      },
      {
        name: "Leffe Brune",
        description: "Robe ambrée, notes caramélisées",
        price: "5.50",
      },
      {
        name: "Bière sans alcool",
        price: "3.50",
      },
    ],
  },
  {
    id: "cocktails",
    label: "Cocktails",
    emoji: "🍹",
    items: [
      {
        name: "Mojito",
        description: "Rhum, menthe fraîche, citron vert, sucre de canne",
        price: "12.00",
        badge: "Coup de cœur",
      },
      {
        name: "Aperol Spritz",
        description: "Aperol, prosecco, eau gazeuse, orange",
        price: "11.00",
      },
      {
        name: "Gin Tonic",
        description: "Gin, tonic, citron, concombre",
        price: "12.00",
      },
      {
        name: "Moscow Mule",
        description: "Vodka, ginger beer, citron vert",
        price: "12.00",
      },
      {
        name: "Negroni",
        description: "Gin, Campari, vermouth rouge",
        price: "13.00",
      },
      {
        name: "Sex on the Beach",
        description: "Vodka, pêche, jus d'orange, grenadine",
        price: "12.00",
      },
    ],
  },
  {
    id: "softs",
    label: "Softs & Jus",
    emoji: "🥤",
    items: [
      {
        name: "Coca-Cola / Zero / Light",
        price: "3.50",
      },
      {
        name: "Fanta Orange",
        price: "3.50",
      },
      {
        name: "Sprite",
        price: "3.50",
      },
      {
        name: "Ice Tea Pêche",
        price: "3.50",
      },
      {
        name: "Jus d'orange",
        description: "Pressé ou en bouteille",
        price: "4.00",
      },
      {
        name: "Eau minérale",
        description: "50cl — plate ou gazeuse",
        price: "2.50",
      },
      {
        name: "Red Bull",
        price: "4.50",
      },
    ],
  },
  {
    id: "snacks",
    label: "Snacks",
    emoji: "🍟",
    items: [
      {
        name: "Chips du bar",
        description: "Grand bol à partager",
        price: "4.00",
      },
      {
        name: "Cacahuètes",
        price: "3.00",
      },
      {
        name: "Mix apéro",
        description: "Assortiment de snacks salés",
        price: "5.00",
        badge: "À partager",
      },
      {
        name: "Hot-dog maison",
        description: "Pain brioché, saucisse, moutarde et ketchup",
        price: "6.50",
      },
      {
        name: "Sandwich du bar",
        description: "Jambon-fromage ou thon — selon disponibilité",
        price: "7.00",
      },
    ],
  },
  {
    id: "chauds",
    label: "Boissons chaudes",
    emoji: "☕",
    items: [
      {
        name: "Café expresso",
        price: "2.80",
      },
      {
        name: "Café crème",
        price: "3.50",
      },
      {
        name: "Thé",
        description: "Sélection de thés en sachet",
        price: "3.00",
      },
      {
        name: "Café irlandais",
        description: "Café, whiskey, crème fouettée",
        price: "9.00",
        badge: "Spécialité",
      },
    ],
  },
];
