# Portfolio d’Ayoub El Houdaigui

Site bilingue réalisé avec React, React Router et Vite. Les quatre pages donnent accès aux projets, au parcours, aux CV et au contact.

## Développement local

Depuis ce dossier, avec Node.js 22.12 ou une version ultérieure compatible avec Vite 8, exécutez les commandes suivantes.

```sh
npm ci
npm run dev
```

`npm run lint` vérifie le code. `npm run build` génère le site dans `dist/`. `npm run preview` permet de vérifier cette version localement.

## Contenu

- Les études de cas et les liens vers les démonstrations se trouvent dans [src/data/projects.js](src/data/projects.js).
- Les [CV français et anglais](public/cv/) sont téléchargeables depuis l’accueil, le parcours et le contact.
- Les liens `/?lang=fr` et `/?lang=en` ouvrent directement la langue voulue. Le sélecteur permet de mémoriser sa préférence.
