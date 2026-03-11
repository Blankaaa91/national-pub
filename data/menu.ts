// ─────────────────────────────────────────────────────────────────────────────
// MENU DATA — National Pub, Bevaix
//
// Comment modifier :
<<<<<<< Updated upstream
//   - Changer le prix d'un article → modifiez price: "x.xx"
//   - Ajouter un article → copiez une ligne { name: "...", price: "..." }
//   - Ajouter une catégorie → copiez un bloc complet { id, label, emoji, items: [...] }
//   - Supprimer un article ou une catégorie → effacez le bloc concerné
=======
//   - Changer le nom ou le prix d'un item
//   - Ajouter un item dans le tableau `items` de la catégorie concernée
//   - Ajouter une nouvelle catégorie en copiant la structure { id, label, emoji, items }
//   - Supprimer un item ou une catégorie
>>>>>>> Stashed changes
// ─────────────────────────────────────────────────────────────────────────────

export interface MenuItem {
  name: string;
  description?: string;
<<<<<<< Updated upstream
  price: string;
  badge?: string;
=======
  price: string; // ex: "4.50" ou "6.00"
  badge?: string; // ex: "Spécialité", "Nouveau"
>>>>>>> Stashed changes
}

export interface MenuCategory {
  id: string;
  label: string;
  emoji: string;
  items: MenuItem[];
}

export const MENU: MenuCategory[] = [
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  // ─── BIÈRES PRESSION ──────────────────────────────────────────────────────
  {
    id: "bieres-pression",
    label: "Bières pression",
    emoji: "🍺",
    items: [
      { name: "Feldschlösschen 2DL", price: "3.80" },
      { name: "Feldschlösschen 3DL", price: "4.50" },
      { name: "Feldschlösschen 5DL", price: "6.50" },
      { name: "Grimbergen 2.5DL", price: "5.00" },
      { name: "Grimbergen 5DL", price: "8.00" },
      { name: "1664 2.5DL", price: "5.50" },
      { name: "1664 5DL", price: "7.20" },
      { name: "Schneider 3DL", price: "5.50" },
      { name: "Schneider 5DL", price: "7.50" },
      { name: "L'Avenir 3DL", price: "5.00" },
      { name: "L'Avenir 5DL", price: "8.00" },
      { name: "Leffe 2.5DL", price: "5.00" },
      { name: "Leffe 5DL", price: "8.00" },
      { name: "DR Pepper", price: "12.00" },
      { name: "Bière Chaude", price: "4.50" },
    ],
  },

  // ─── BIÈRES BOUTEILLE ─────────────────────────────────────────────────────
  {
    id: "bieres-bouteille",
    label: "Bières bouteille",
    emoji: "🍻",
    items: [
      { name: "Desperados", price: "5.80" },
      { name: "Smirnoff Ice", price: "5.80" },
      { name: "Somersby", price: "5.80" },
      { name: "Super Bock 50CL", price: "4.20" },
      { name: "Super Bock 25CL", price: "3.50" },
      { name: "Moretti", price: "4.20" },
      { name: "Septentrion", price: "6.80" },
      { name: "Heineken 25CL", price: "4.50" },
      { name: "Corona Extra", price: "6.50" },
      { name: "Bière sans alcool", price: "4.30" },
      { name: "Feld sans alcool", price: "3.50" },
    ],
  },

  // ─── VINS ─────────────────────────────────────────────────────────────────
  {
    id: "vins",
    label: "Vins",
    emoji: "🍷",
    items: [
      { name: "Los Condes (verre)", price: "4.30" },
      { name: "DL Blanc", price: "3.80" },
      { name: "DL Porte Novembre", price: "5.30" },
      { name: "DL Rosé", price: "3.80" },
      { name: "DL Oeil de Perdrix", price: "5.00" },
      { name: "DL Rouge", price: "3.60" },
      { name: "DL Primitivo", price: "3.90" },
      { name: "1.5DL Blanc / Rouge Lime", price: "3.80" },
      { name: "Kir", price: "5.00" },
      { name: "Prosecco", price: "5.00" },
      { name: "Rosé Pétillant", price: "3.80" },
      { name: "Rosé 5DL", price: "8.00" },
      { name: "Oeil de Perdrix BT", price: "14.00" },
      { name: "Porte Novembre BT", price: "28.00" },
      { name: "Los Condes BT", price: "30.00" },
      { name: "Les Trois Grains BT", price: "30.00" },
      { name: "Chasselas Barrique BT", price: "40.00" },
      { name: "Pinot Noir BT", price: "42.00" },
      { name: "Galota BT", price: "46.00" },
      { name: "Fantini Edition BT", price: "65.00" },
    ],
  },

  // ─── APÉRITIFS & COCKTAILS ────────────────────────────────────────────────
  {
    id: "aperitifs-cocktails",
    label: "Apéritifs & Cocktails",
    emoji: "🍹",
    items: [
      { name: "Pastis 51 / Ricard 2.5CL", price: "4.00" },
      { name: "Absinthe 53% 3CL", price: "5.80" },
      { name: "Suze 4CL", price: "5.20" },
      { name: "Martini 4CL", price: "5.70" },
      { name: "Cynar 4CL", price: "5.20" },
      { name: "Campari 4CL", price: "5.20" },
      { name: "Porto 4CL", price: "5.20" },
      { name: "Fernet Branca 4CL", price: "5.20" },
      { name: "Aperol Spritz", price: "11.00" },
      { name: "Cocktail avec Alcool", price: "12.00" },
      { name: "Cocktail sans Alcool", price: "9.00" },
      { name: "Amaretto Cocktail", price: "15.00" },
      { name: "Pêche d'Enfer", price: "5.80" },
    ],
  },

  // ─── SPIRITUEUX ───────────────────────────────────────────────────────────
<<<<<<< Updated upstream
  {
    id: "spiritueux",
    label: "Spiritueux",
    emoji: "🥃",
    items: [
      { name: "Pomme 2CL", price: "3.90" },
      { name: "Prune 2CL", price: "3.90" },
      { name: "Marc 2CL", price: "3.90" },
      { name: "Abricotine 2CL", price: "6.40" },
      { name: "Poire William 2CL", price: "5.40" },
      { name: "Prunelle de Bourgogne 4CL", price: "7.20" },
      { name: "Grappa 4CL", price: "5.80" },
      { name: "Cognac Biscuit 4CL", price: "7.30" },
      { name: "Amaretto 4CL", price: "6.30" },
      { name: "Bailey's 5CL", price: "7.50" },
      { name: "Frangelico 4CL", price: "6.40" },
      { name: "Limoncello", price: "5.80" },
      { name: "Rhum", price: "10.00" },
      { name: "Tequila", price: "10.00" },
      { name: "Vodka", price: "10.00" },
      { name: "Gin", price: "10.00" },
      { name: "Malibu Coconut", price: "10.00" },
      { name: "Passoa", price: "10.00" },
      { name: "Shots Divers", price: "5.50" },
      { name: "Lebonseb", price: "10.00" },
      { name: "Jagerboom", price: "10.00" },
      { name: "L'Q d'Nonne", price: "11.00" },
      { name: "TGV", price: "15.00" },
      { name: "Kamikaze", price: "24.00" },
      { name: "The Froid Valaisan", price: "9.00" },
    ],
  },

  // ─── WHISKIES ─────────────────────────────────────────────────────────────
=======
  {
    id: "spiritueux",
    label: "Spiritueux",
    emoji: "🥃",
    items: [
      { name: "Pomme 2CL", price: "3.90" },
      { name: "Prune 2CL", price: "3.90" },
      { name: "Marc 2CL", price: "3.90" },
      { name: "Abricotine 2CL", price: "6.40" },
      { name: "Poire William 2CL", price: "5.40" },
      { name: "Prunelle de Bourgogne 4CL", price: "7.20" },
      { name: "Grappa 4CL", price: "5.80" },
      { name: "Cognac Biscuit 4CL", price: "7.30" },
      { name: "Amaretto 4CL", price: "6.30" },
      { name: "Bailey's 5CL", price: "7.50" },
      { name: "Frangelico 4CL", price: "6.40" },
      { name: "Limoncello", price: "5.80" },
      { name: "Rhum", price: "10.00" },
      { name: "Tequila", price: "10.00" },
      { name: "Vodka", price: "10.00" },
      { name: "Gin", price: "10.00" },
      { name: "Malibu Coconut", price: "10.00" },
      { name: "Passoa", price: "10.00" },
      { name: "Shots Divers", price: "5.50" },
      { name: "Lebonseb", price: "10.00" },
      { name: "Jagerboom", price: "10.00" },
      { name: "L'Q d'Nonne", price: "11.00" },
      { name: "TGV", price: "15.00" },
      { name: "Kamikaze", price: "24.00" },
      { name: "The Froid Valaisan", price: "9.00" },
    ],
  },

  // ─── WHISKIES ─────────────────────────────────────────────────────────────
  {
    id: "whisky",
    label: "Whiskies",
    emoji: "🥃",
    items: [
      { name: "Ballantine's 2CL", price: "6.50" },
      { name: "Ballantine's 4CL", price: "10.00" },
      { name: "J&B 2CL", price: "6.50" },
      { name: "J&B 4CL", price: "10.00" },
      { name: "Jack Daniel's 4CL", price: "10.00" },
      { name: "Oban 2CL", price: "7.50" },
      { name: "Oban", price: "15.00" },
    ],
  },

  // ─── CAFETERIE ────────────────────────────────────────────────────────────
  {
    id: "cafeterie",
    label: "Cafeterie",
    emoji: "☕",
    items: [
      { name: "Café / Thé", price: "3.60" },
      { name: "Renversé", price: "3.90" },
      { name: "Latte Machiatto", price: "4.90" },
      { name: "Capuccino", price: "4.60" },
      { name: "DL Café", price: "5.20" },
      { name: "Ovo - Chocolat Chaud", price: "3.90" },
      { name: "Chocolat Froid 2DL", price: "3.00" },
      { name: "Chocolat Froid 3DL", price: "4.40" },
      { name: "Chocolat Froid 5DL", price: "5.80" },
      { name: "Thé Rhum", price: "5.60" },
      { name: "Vin Chaud", price: "5.00" },
    ],
  },

  // ─── SOFTS & EAUX ─────────────────────────────────────────────────────────
  {
    id: "softs",
    label: "Softs & Eaux",
    emoji: "🥤",
    items: [
      { name: "Sportif 2DL", price: "2.90" },
      { name: "Sportif 3DL", price: "3.60" },
      { name: "Sportif 5DL", price: "5.30" },
      { name: "Jus de Fruits 2DL", price: "3.60" },
      { name: "Jus de Fruits 3DL", price: "4.50" },
      { name: "Jus de Fruits 5DL", price: "6.00" },
      { name: "Sirop 2DL", price: "1.00" },
      { name: "Sirop 3DL", price: "1.50" },
      { name: "Sirop 5DL", price: "2.50" },
      { name: "Minérale BT 35CL", price: "4.50" },
      { name: "Minérale BT 150CL", price: "8.00" },
      { name: "Soda BT 30CL", price: "4.50" },
      { name: "Schweppes BT 20CL", price: "4.50" },
      { name: "San Bitter BT 10CL", price: "3.70" },
      { name: "Jus / Nectar Fruits 20CL", price: "4.50" },
      { name: "Red Bull 25CL", price: "5.00" },
      { name: "Coca-Cola", price: "6.00" },
      { name: "Thé Froid (pêche, citron)", price: "6.00" },
    ],
  },

  // ─── SNACKS ───────────────────────────────────────────────────────────────
>>>>>>> Stashed changes
  {
    id: "whisky",
    label: "Whiskies",
    emoji: "🥃",
    items: [
<<<<<<< Updated upstream
      { name: "Ballantine's 2CL", price: "6.50" },
      { name: "Ballantine's 4CL", price: "10.00" },
      { name: "J&B 2CL", price: "6.50" },
      { name: "J&B 4CL", price: "10.00" },
      { name: "Jack Daniel's 4CL", price: "10.00" },
      { name: "Oban 2CL", price: "7.50" },
      { name: "Oban", price: "15.00" },
    ],
  },

  // ─── CAFETERIE ────────────────────────────────────────────────────────────
  {
    id: "cafeterie",
    label: "Cafeterie",
    emoji: "☕",
    items: [
      { name: "Café / Thé", price: "3.60" },
      { name: "Renversé", price: "3.90" },
      { name: "Latte Machiatto", price: "4.90" },
      { name: "Capuccino", price: "4.60" },
      { name: "DL Café", price: "5.20" },
      { name: "Ovo - Chocolat Chaud", price: "3.90" },
      { name: "Chocolat Froid 2DL", price: "3.00" },
      { name: "Chocolat Froid 3DL", price: "4.40" },
      { name: "Chocolat Froid 5DL", price: "5.80" },
      { name: "Thé Rhum", price: "5.60" },
      { name: "Vin Chaud", price: "5.00" },
=======
      { name: "Croissant", price: "1.30" },
      { name: "Pain au Chocolat", price: "2.30" },
      { name: "Bretzel", price: "2.00" },
      { name: "Petit Chips", price: "1.80" },
      { name: "Grand Chips", price: "3.20" },
      { name: "Chips Kezz", price: "3.90" },
      { name: "Vaya", price: "3.90" },
      { name: "Gâteau", price: "2.40" },
      { name: "Baguette de Pain", price: "2.00" },
      { name: "Croque-Monsieur", price: "5.50" },
      { name: "Hamburger", price: "6.50" },
      { name: "Cheesburger", price: "7.20" },
      { name: "Double Cheesburger", price: "8.00" },
      { name: "Le Natio", price: "12.00", badge: "Spécialité" },
      { name: "Petit Jambon", price: "4.50" },
      { name: "Grand Jambon", price: "7.50" },
      { name: "Petit Jambon / Fromage", price: "5.00" },
      { name: "Grand Jambon / Fromage", price: "8.00" },
      { name: "Petit Salami", price: "4.50" },
      { name: "Grand Salami", price: "7.50" },
      { name: "Petit Salami / Fromage", price: "5.80" },
      { name: "Grand Salami / Fromage", price: "8.00" },
      { name: "Petit Fromage", price: "4.50" },
      { name: "Grand Fromage", price: "6.00" },
      { name: "Petit Roastbeef", price: "7.00" },
      { name: "Grand Roastbeef", price: "10.50" },
      { name: "Petit Thon", price: "5.50" },
      { name: "Grand Thon", price: "8.00" },
      { name: "Petit Hotdog", price: "5.00" },
      { name: "Grand Hotdog", price: "6.50" },
      { name: "Panini Tomate / Mozza", price: "8.70" },
      { name: "Panini Jambon Cru", price: "9.70" },
      { name: "Poulet Chaud", price: "8.50" },
      { name: "Pizza", price: "15.00" },
      { name: "Vigneron Magic", price: "12.00" },
      { name: "Saucisse Apéro 240gr", price: "15.00" },
      { name: "Planchette", price: "9.00" },
      { name: "Le Petit Chèvre", price: "6.50" },
      { name: "Le Grand Chèvre", price: "8.00" },
      { name: "Raclette", price: "5.00" },
      { name: "Chorizo Petit", price: "4.50" },
    ],
  },

  // ─── SALADES ──────────────────────────────────────────────────────────────
  {
    id: "salades",
    label: "Salades",
    emoji: "🥗",
    items: [
      { name: "Petite Mêlée", price: "8.50" },
      { name: "Grande Mêlée", price: "10.00" },
      { name: "P. Mêlée Roastbeef", price: "16.00" },
      { name: "G. Mêlée Roastbeef", price: "18.50" },
      { name: "P. Salade Tomate / Mozza", price: "12.00" },
      { name: "G. Salade Tomate / Mozza", price: "13.50" },
      { name: "Roastbeef", price: "16.00" },
>>>>>>> Stashed changes
    ],
  },

  // ─── SOFTS & EAUX ─────────────────────────────────────────────────────────
  {
    id: "softs",
    label: "Softs & Eaux",
    emoji: "🥤",
    items: [
      { name: "Sportif 2DL", price: "2.90" },
      { name: "Sportif 3DL", price: "3.60" },
      { name: "Sportif 5DL", price: "5.30" },
      { name: "Jus de Fruits 2DL", price: "3.60" },
      { name: "Jus de Fruits 3DL", price: "4.50" },
      { name: "Jus de Fruits 5DL", price: "6.00" },
      { name: "Sirop 2DL", price: "1.00" },
      { name: "Sirop 3DL", price: "1.50" },
      { name: "Sirop 5DL", price: "2.50" },
      { name: "Minérale BT 35CL", price: "4.50" },
      { name: "Minérale BT 150CL", price: "8.00" },
      { name: "Soda BT 30CL", price: "4.50" },
      { name: "Schweppes BT 20CL", price: "4.50" },
      { name: "San Bitter BT 10CL", price: "3.70" },
      { name: "Jus / Nectar Fruits 20CL", price: "4.50" },
      { name: "Red Bull 25CL", price: "5.00" },
      { name: "Coca-Cola", price: "6.00" },
      { name: "Thé Froid (pêche, citron)", price: "6.00" },
    ],
  },

  // ─── VIENNOISERIES & PETITS SNACKS ────────────────────────────────────────
  {
    id: "viennoiseries",
    label: "Viennoiseries & Petits Snacks",
    emoji: "🥐",
    items: [
      { name: "Croissant", price: "1.30" },
      { name: "Pain au Chocolat", price: "2.30" },
      { name: "Gâteau", price: "2.40" },
      { name: "Vaya", price: "3.90" },
      { name: "Bretzel", price: "2.00" },
      { name: "Baguette de Pain", price: "2.00" },
      { name: "Petit Chips", price: "1.80" },
      { name: "Grand Chips", price: "3.20" },
      { name: "Chips Kezz", price: "3.90" },
    ],
  },

  // ─── SANDWICHES ───────────────────────────────────────────────────────────
  {
    id: "sandwiches",
    label: "Sandwiches",
    emoji: "🥪",
    items: [
      { name: "Petit Jambon", price: "4.50" },
      { name: "Grand Jambon", price: "7.50" },
      { name: "Petit Jambon / Fromage", price: "5.00" },
      { name: "Grand Jambon / Fromage", price: "8.00" },
      { name: "Petit Salami", price: "4.50" },
      { name: "Grand Salami", price: "7.50" },
      { name: "Petit Salami / Fromage", price: "5.80" },
      { name: "Grand Salami / Fromage", price: "8.00" },
      { name: "Petit Fromage", price: "4.50" },
      { name: "Grand Fromage", price: "6.00" },
      { name: "Petit Roastbeef", price: "7.00" },
      { name: "Grand Roastbeef", price: "10.50" },
      { name: "Petit Thon", price: "5.50" },
      { name: "Grand Thon", price: "8.00" },
    ],
  },

  // ─── CHAUD & GRILLÉ ───────────────────────────────────────────────────────
  {
    id: "chaud-grille",
    label: "Chaud & Grillé",
    emoji: "🍔",
    items: [
      { name: "Croque-Monsieur", price: "5.50" },
      { name: "Petit Hotdog", price: "5.00" },
      { name: "Grand Hotdog", price: "6.50" },
      { name: "Hamburger", price: "6.50" },
      { name: "Cheesburger", price: "7.20" },
      { name: "Double Cheesburger", price: "8.00" },
      { name: "Panini Tomate / Mozza", price: "8.70" },
      { name: "Panini Jambon Cru", price: "9.70" },
      { name: "Poulet Chaud", price: "8.50" },
      { name: "Pizza", price: "15.00" },
      { name: "Le Natio", price: "12.00", badge: "Spécialité" },
    ],
  },

  // ─── PLANCHES & SPÉCIALITÉS ───────────────────────────────────────────────
  {
    id: "planches",
    label: "Planches & Spécialités",
    emoji: "🧀",
    items: [
      { name: "Planchette", price: "9.00" },
      { name: "Vigneron Magic", price: "12.00" },
      { name: "Saucisse Apéro 240gr", price: "15.00" },
      { name: "Le Petit Chèvre", price: "5.50" },
      { name: "Le Grand Chèvre", price: "8.00" },
      { name: "Raclette", price: "5.00" },
      { name: "Chorizo Petit", price: "4.50" },
    ],
  },

  // ─── SALADES ──────────────────────────────────────────────────────────────
  {
    id: "salades",
    label: "Salades",
    emoji: "🥗",
    items: [
      { name: "Petite Mêlée", price: "8.50" },
      { name: "Grande Mêlée", price: "10.00" },
      { name: "P. Mêlée Roastbeef", price: "16.00" },
      { name: "G. Mêlée Roastbeef", price: "18.50" },
      { name: "P. Salade Tomate / Mozza", price: "12.00" },
      { name: "G. Salade Tomate / Mozza", price: "13.50" },
      { name: "Roastbeef", price: "16.00" },
    ],
  },

];
