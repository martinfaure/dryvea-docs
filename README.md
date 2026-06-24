# Dryvea Docs

Documentation interne Notion-style pour le projet **Dryvea** — plateforme P2P de location de véhicules entre particuliers.

## Stack du site de documentation

- React 19 + Vite
- Tailwind CSS 4 (palette noir & blanc)
- React Router v6
- Lucide React
- Données statiques JSON

## Stack du projet Dryvea

- PHP 8.1+ (MVC custom)
- MySQL 8+ (PDO)
- JavaScript vanilla
- Apache (mod_rewrite)
- Composer / PHPUnit 11

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
