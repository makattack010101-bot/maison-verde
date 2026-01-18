Guide rapide — soumettre le site à Google Search Console

Étapes pour ajouter et vérifier le site:
1. Aller sur https://search.google.com/search-console
2. Ajouter une propriété: choisir "Préfixe de l'URL" et entrer `https://la-maison-verde.netlify.app/` (recommandé) ou ajouter le domaine complet.
3. Vérification:
   - Méthode rapide: téléversez le fichier HTML fourni par Google dans la racine du site (uploader via Netlify drag-drop ou déployer).
   - Alternative (préférée si vous contrôlez le DNS): ajouter l'enregistrement TXT chez votre registrar.
4. Une fois vérifié, aller dans "Sitemaps" → soumettre `https://la-maison-verde.netlify.app/sitemap.xml`.
5. Après soumission, surveiller le rapport "Coverage" et cliquer sur "Inspect URL" pour demander l'indexation des pages principales.

Vérifications DNS utiles (exemples):
PowerShell (Windows):
```
nslookup la-maison-verde.netlify.app
```
macOS / Linux:
```
dig +short la-maison-verde.netlify.app
```

Conseils pratiques:
- Assurez-vous que `robots.txt` permet l'indexation et que `sitemap.xml` est accessible publiquement.
- Attendez 24–72h pour que Google commence à crawler; utiliser "Inspect URL" pour accélérer.
- Lier la propriété Search Console à Google Analytics (si GA4 configuré) pour plus d'insights.
