# CLAUDE.md

## Contexte du projet

Tu travailles sur le site du National Pub.

Objectif principal :
créer / améliorer un site web moderne, propre, premium, simple à utiliser, avec une page menu accessible via QR code.

Le site doit être fiable, facile à maintenir, et surtout ne rien casser de ce qui fonctionne déjà.

Ce projet est manipulé aussi par une personne qui n'a jamais créé de site web auparavant.
Donc tu dois travailler avec une logique ultra prudente, très claire, très propre, et très défensive.

---

## Règles absolues

### 1. Ne rien casser
- Ne supprime jamais du code existant sans raison claire.
- Ne fais pas de refactor global inutile.
- Ne renomme pas des fichiers, routes, composants, variables ou dossiers sans nécessité absolue.
- Ne modifie pas l'architecture si ce n'est pas indispensable.
- Fais les changements les plus petits, les plus sûrs et les plus isolés possible.

### 2. Toujours préserver l'existant
Avant de modifier quoi que ce soit :
- lis les fichiers concernés
- comprends leur rôle
- vérifie les dépendances
- vérifie si une route, un lien ou une section dépend déjà de ce code

Si quelque chose est ambigu :
- n'invente jamais
- laisse un commentaire clair
- ou propose une solution minimale et sûre

### 3. Ne jamais inventer
- N'invente jamais une information métier
- N'invente jamais des horaires
- N'invente jamais des prix
- N'invente jamais des plats
- N'invente jamais des textes "marketing" trop précis si l'information n'est pas fournie
- N'invente jamais des URLs
- N'invente jamais la structure d'un backend si elle n'existe pas déjà

Si une donnée manque :
- utilise un placeholder simple et explicite
- ou garde la structure prête à être remplie
- ou note clairement ce qu'il manque

### 4. Toujours expliquer clairement
Quand tu fais une modification :
- explique ce que tu changes
- explique pourquoi tu le fais
- explique quels fichiers sont touchés
- explique s'il y a un risque
- explique comment tester

Tes explications doivent être compréhensibles par un débutant.

### 5. Priorité à la stabilité
Entre une solution "impressionnante" et une solution "solide", choisis toujours la solution solide.

---

## Règle critique sur l'URL du menu / de la carte

### Règle NON négociable
La carte / le menu doit toujours rester sur l'URL actuelle et ne jamais changer.

URL à préserver :
`https://national-pub.ch/menu`

### Ce que cela veut dire concrètement
- Ne change jamais cette URL
- Ne remplace jamais cette route par une autre
- Ne redirige jamais `/menu` vers une autre page
- Ne transforme jamais `/menu` en `/menu/`, `/fr/menu`, `/carte`, `/food-menu`, `/restaurant-menu` ou autre variation
- Ne modifie jamais les liens QR code qui pointent vers cette page
- Toute évolution du contenu du menu doit se faire en gardant exactement cette URL

### Important
Le QR code imprimé chez le client dépend de cette URL.
Donc casser cette URL = casser l'accès au menu pour les clients.

Si une nouvelle structure est proposée :
- la route `/menu` doit rester fonctionnelle dans tous les cas
- si besoin, la page interne peut évoluer
- mais l'URL publique finale doit toujours rester exactement la même

---

## Objectif fonctionnel principal

Créer une page menu / carte du National Pub qui :
- fonctionne parfaitement sur mobile
- soit agréable à lire via un QR code
- soit rapide à charger
- soit claire pour les clients
- soit élégante visuellement
- reste simple à maintenir
- reste stable dans le temps

---

## Priorités UX

### Mobile first
La page sera souvent ouverte via QR code sur téléphone.
Donc la priorité absolue est :
- mobile first
- lecture facile
- textes lisibles
- boutons simples
- navigation intuitive
- chargement rapide

### Expérience souhaitée
Le ressenti doit être :
- propre
- moderne
- premium
- chaleureux
- convivial
- simple
- pas surchargé

### À éviter absolument
- animations lourdes
- effets inutiles
- sections trop complexes
- texte trop petit
- contrastes faibles
- composants fragiles
- dépendances inutiles
- logique compliquée pour modifier le menu

---

## Structure souhaitée de la page menu

La page menu peut inclure si pertinent :

1. Un header simple
- nom du lieu
- éventuellement un petit sous-titre
- visuellement propre
- pas trop haut sur mobile

2. Une navigation légère si utile
- ex : Boissons, Bières, Cocktails, Softs, Snacks, etc.
- navigation simple
- ancres fluides si cela aide

3. Les catégories du menu
- chaque catégorie bien séparée
- titre clair
- liste lisible
- prix visibles
- descriptions courtes seulement si elles existent réellement

4. Une section d'informations pratiques si nécessaire
- adresse
- horaires uniquement si fournis
- téléphone uniquement si fourni
- réseaux sociaux uniquement si fournis

5. Un footer simple

---

## Style visuel

Le design doit être :
- élégant
- propre
- moderne
- légèrement premium
- inspiré d'un pub chaleureux
- lisible avant tout

### Design system recommandé
- spacing cohérent
- typographie lisible
- hiérarchie claire
- cartes visuelles simples
- sections aérées
- responsive propre

### Couleurs
Ne choisis pas des couleurs agressives au hasard.
Si les couleurs officielles du National Pub ne sont pas encore définies :
- utilise une palette sobre
- fond clair ou légèrement chaud
- texte très lisible
- accent discret et élégant

### Typographie
- très lisible sur mobile
- pas de fantaisie excessive
- bonne hiérarchie visuelle
- tailles cohérentes

---

## Règles techniques

### 1. Faire simple
- privilégie des composants simples
- code lisible
- logique claire
- structure facile à modifier

### 2. Composants réutilisables
Si le projet le permet :
- crée de petits composants réutilisables
- mais n'abuse pas de l'abstraction
- pas de sur-ingénierie

### 3. Données du menu
Si possible, structure les données du menu proprement.
Par exemple :
- tableau d'objets
- catégories séparées
- nom
- prix
- description optionnelle

Le but est de pouvoir modifier le menu facilement sans casser l'affichage.

### 4. Accessibilité
Toujours faire attention à :
- contraste
- tailles de texte
- labels clairs
- structure HTML propre
- boutons et liens facilement cliquables sur mobile

### 5. SEO basique
Même si la page est surtout utilisée via QR code :
- garder un title propre
- meta description simple
- structure sémantique correcte
- headings cohérents

### 6. Performance
- images optimisées
- pas d'énormes librairies inutiles
- pas d'animations coûteuses
- priorité au chargement rapide

---

## Workflow obligatoire

### Avant toute modification
Tu dois :
1. Lire les fichiers liés à la page concernée
2. Comprendre la structure existante
3. Identifier les risques
4. Faire le changement minimal nécessaire

### Pendant la modification
Tu dois :
- préserver l'existant
- commenter si nécessaire
- garder le code propre
- éviter les effets de bord

### Après modification
Tu dois toujours :
1. Résumer les changements
2. Lister les fichiers modifiés
3. Expliquer comment tester
4. Vérifier que l'URL `/menu` n'a jamais changé
5. Vérifier que le rendu mobile est propre

---

## Check-list obligatoire après chaque changement

Toujours vérifier :

- [ ] la page compile sans erreur
- [ ] la page menu fonctionne
- [ ] l'URL `https://national-pub.ch/menu` reste inchangée
- [ ] aucun lien important n'a été cassé
- [ ] le rendu mobile est bon
- [ ] le texte est lisible
- [ ] les prix sont visibles clairement
- [ ] le scroll est fluide
- [ ] rien d'inutile n'a été ajouté
- [ ] le code reste simple à comprendre pour un débutant

---

## Si tu dois modifier le menu

Quand tu modifies le menu :
- garde la même URL
- ne change pas la structure publique du lien
- ne fais pas de redirection
- ne touche pas au comportement QR code
- mets à jour seulement le contenu ou la structure interne si nécessaire

---

## Si une info manque

Si une donnée manque :
- n'invente pas
- utilise un placeholder explicite
- ex : "À compléter"
- ou laisse la structure prête à recevoir la vraie donnée

---

## Ton attendu dans les réponses

Quand tu rends ton travail :
- sois clair
- sois structuré
- sois concret
- explique comme à une personne qui débute
- évite le jargon inutile

Format attendu :

### Changements effectués
- ...

### Fichiers modifiés
- ...

### Pourquoi
- ...

### Comment tester
- ...

### Points d'attention
- ...

---

## Interdictions

Tu ne dois pas :
- casser une route existante
- changer l'URL du menu
- supprimer du code utile
- inventer des données
- ajouter des dépendances inutiles
- compliquer le projet
- faire un redesign total sans demande explicite
- modifier tout le site si seule la page menu est concernée

---

## Mission principale

Ta mission est de construire ou améliorer une page menu excellente, stable, propre et mobile-first pour National Pub, sans rien casser, avec une attention extrême à la stabilité de l'URL suivante :

`https://national-pub.ch/menu`

Cette URL doit toujours rester la même. Jamais changer.
