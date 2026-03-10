# 🏁 F1 INFO

> Portal d'informations **Formule 1** en temps réel — affichage des classements, du prochain Grand Prix et des dernières actualités.

---

## ✨ Fonctionnalités

| Section | Description |
|---|---|
| **Sidebar** | Navigation fixe à gauche (Accueil, Pilotes, Écuries, Saisons) |
| **Prochain GP** | Compte à rebours en direct vers la prochaine course |
| **Top 3 Pilotes** | Les 3 premiers du championnat en temps réel |
| **Classements** | Championnat pilotes & constructeurs côte à côte (API live) |
| **Actualités F1** | Grille 3 colonnes d'articles Motorsport.com (flux RSS) |
| **Base de données** | Profils de 28 pilotes et 11 écuries (saisons 2024–2026) |

---

## 🔌 APIs utilisées (gratuites, sans clé)

- **[Jolpica F1 API](https://api.jolpi.ca)** — Classements, calendrier, résultats (successeur d'Ergast)
- **[RSS2JSON](https://rss2json.com)** + Flux RSS Motorsport.com — Dernières actualités F1

---

## 🛠️ Stack technique

- **React** + **Vite** — SPA ultra-rapide
- **React Router** — navigation multi-pages
- **Lucide-React** — icônes
- **Vanilla CSS** — design system custom (thème sombre F1)

---

## 🚀 Lancer en local

```bash
git clone https://github.com/jmulliez/f1.git
cd f1
npm install
npm run dev
```

Ouvrir : [http://localhost:5173](http://localhost:5173)

---

## 📂 Structure

```
f1-app/
├── public/
│   └── images/
│       ├── drivers/    ← photos pilotes (.png)
│       └── teams/      ← logos écuries (.png)
├── src/
│   ├── api/
│   │   └── f1-api.js       # Fetch Jolpica + RSS news
│   ├── components/
│   │   └── Sidebar.jsx     # Navigation latérale
│   ├── data/
│   │   └── database.js     # Base de données interne (pilotes, écuries, saisons)
│   ├── pages/
│   │   ├── Home.jsx        # Accueil : countdown, classements, actus
│   │   ├── Drivers.jsx
│   │   ├── DriverDetail.jsx
│   │   ├── Teams.jsx
│   │   ├── TeamDetail.jsx
│   │   └── Seasons.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
└── package.json
```

---

## 🖼️ Ajouter des images locales

Placez vos fichiers `.png` dans :
- `public/images/drivers/leclerc.png` → accessible via `/images/drivers/leclerc.png`
- `public/images/teams/ferrari.png` → accessible via `/images/teams/ferrari.png`

Puis mettez à jour le champ `image` ou `logo` correspondant dans `src/data/database.js`.

---

*Projet non affilié à Formula One World Championship Limited.*
