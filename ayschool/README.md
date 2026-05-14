# AySchool — Vercel Demo

AySchool est une plateforme parascolaire Django créée comme projet portfolio.

Cette version est optimisée pour **Vercel** : elle évite SQLite en production et utilise des données de démonstration + sessions signées.

## Fonctionnalités

- Catalogue d'activités
- Connexion démo élève/professeur
- Inscription aux activités pendant la session
- Suivi des inscriptions
- Page profil
- Design responsive avec Bootstrap + CSS custom
- Déploiement compatible Vercel

## Lancer en local

```bash
python -m pip install -r requirements.txt
python manage.py runserver
```

## Déployer sur Vercel

1. Push le projet sur GitHub
2. Import dans Vercel
3. Framework Preset: Other
4. Laisse Vercel utiliser `vercel.json`

## Note technique

Vercel n'est pas idéal pour un vrai backend Django avec base SQLite persistante. Cette version est donc une **démo portfolio propre**, sans erreur database.

Pour une vraie app production avec base de données, utiliser Render, Railway, Fly.io, PythonAnywhere ou PostgreSQL externe.
