# Dryvea Docs

Documentation interne Notion-style pour le projet **Dryvea** — plateforme P2P de location de véhicules sans permis (VSP) électriques.

## Stack

- React 19 + Vite
- Tailwind CSS 4 (palette noir & blanc)
- React Router v6
- Lucide React
- Données statiques JSON

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173).

## Raccourcis

- `⌘K` / `Ctrl+K` — Recherche globale

## Structure

```
src/
├── components/   # Sidebar, SearchModal, Breadcrumb, etc.
├── pages/        # Pages par section
├── data/         # JSON statiques (navigation, documents, DB, pages)
└── hooks/        # useSearch
```
