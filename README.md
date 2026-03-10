# 🏎️ F1 Interactive Database

Bienvenue sur la **F1 Interactive Database**, une application web moderne (SPA) développée en React. Ce projet sert de base de données interactive pour les fans de Formule 1, regroupant les informations clés sur les saisons 2024, 2025 et la future saison 2026 (incluant la nouvelle écurie Cadillac).

## ✨ Fonctionnalités Principales

- **Pilotes (Drivers) :** Profils détaillés de 28 pilotes incluant leur biographie, nationalité, numéro de course, et statistiques en carrière (victoires, podiums, titres). Possibilité de filtrer par nom, écurie, saison et nationalité.
- **Écuries (Teams) :** Présentation des 11 écuries du plateau (dont Cadillac Racing en 2026), avec leur historique, leur base, leur motoriste, le directeur d'équipe et leur palmarès.
- **Saisons :** Vue globale dynamique permettant de visualiser instantanément la composition des grilles (duos de pilotes par écurie) pour les saisons 2024, 2025 et 2026.
- **Navigation Croisée :** Interface fluide pour passer facilement d'un pilote à son écurie, ou d'une écurie aux pilotes ayant couru pour elle selon l'année.
- **Design Authentique :** Interface utilisateur élégante, sombre et sportive, reprenant les codes visuels officiels de la Formule 1 (Rouge, Noir, Blanc).

## 🛠️ Technologies Utilisées

Ce projet a été construit avec vélocité et modernité :
- **Framework :** [React](https://react.dev/) généré via [Vite](https://vitejs.dev/) pour des performances optimales.
- **Routage :** `react-router-dom` pour la gestion des multiples vues sans rechargement de la page.
- **Icônes :** `lucide-react` pour une iconographie légère et personnalisable.
- **Styles :** CSS pur (Vanilla CSS) avec des variables et de la responsivité.
- **Données :** Base de données interne factice (Mock DB) structurée en JavaScript (`src/data/database.js`).

## 🚀 Installation et Lancement en Local

Pour lancer ce projet sur votre machine locale, suivez ces étapes :

1. **Cloner le projet**
   ```bash
   git clone https://github.com/jmulliez/f1.git
   cd f1-app
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Accéder à l'application**
   Ouvrez votre navigateur web et accédez à `http://localhost:5173` (ou le port indiqué dans le terminal terminal).

## 📂 Structure du Projet

```text
f1-app/
├── public/                 # Assets statiques généraux
├── src/
│   ├── components/         # Composants réutilisables (ex: Navbar)
│   ├── data/               # Contient database.js (le cœur des données du site)
│   ├── pages/              # Les différentes vues (Home, Drivers, Teams, Seasons...)
│   ├── App.jsx             # Configuration des routes de l'application
│   ├── index.css           # Design system global et styling de la F1
│   └── main.jsx            # Point d'entrée React
├── index.html              # Fichier HTML racine
├── package.json            # Dépendances du projet
└── vite.config.js          # Configuration de Vite
```

## 📝 Comment contribuer (Ajouter des pilotes/écuries)

Toute la donnée est centralisée dans le fichier `src/data/database.js`.
- Pour **ajouter un pilote**, rajoutez simplement un objet complet dans le tableau `drivers`.
- Pour **modifier les line-ups**, ajustez les configurations dans l'objet `seasons`.

---
*Ce projet a été généré à des fins de démonstration et n'est pas affilié officiellement avec Formula One World Championship Limited.*
