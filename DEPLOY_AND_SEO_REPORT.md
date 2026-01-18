# Rapport de déploiement et SEO — La Maison Verde (test)

Ce document explique ce que j'ai fait pour rendre ce site visible sur Google (recherche locale "restaurant Kinshasa") et les prochaines actions que vous devez exécuter.

## Changements appliqués dans le dépôt
- Fichier modifié: `maison-verde-test/index.html`
  - Ajout d'un `canonical` et `hreflang`.
  - Meta description et `keywords` optimisés pour « restaurant Kinshasa ».
  - Snippet Google Analytics (GA4) déjà présent (`G-20TJN80ZZ2`).
  - JSON‑LD (`Restaurant`) complété avec données locales fictives (adresse, téléphone, coordonnées, horaires, cuisine).
- Fichiers ajoutés:
  - `maison-verde-test/sitemap.xml` — sitemap listant pages principales.
  - `maison-verde-test/robots.txt` — autorise l'indexation et indique le sitemap.
  - `maison-verde-test/GOOGLE_BUSINESS_PROFILE.md` — contenu prêt pour créer la fiche Google Business Profile.
  - `maison-verde-test/SEARCH_CONSOLE_GUIDE.md` — guide pas à pas pour soumettre le site à Google Search Console.

## Objectif restant (ce que je ne peux pas faire automatiquement)
Pour que Google affiche votre site lors d'une recherche « restaurant Kinshasa », il faut que Google découvre et indexe votre site, et idéalement que vous ayez une fiche Google Business Profile. Ces étapes nécessitent des actions côté Netlify / Google (votre compte). Je vous fournis ci‑dessous les actions exactes.

## Étapes à suivre (ordre recommandé)
1. Déployer le dossier `maison-verde-test` sur Netlify
   - Option A (rapide): aller sur https://app.netlify.com/drop et glisser‑déposer le dossier `maison-verde-test` zippé.
   - Option B (recommandé pour déploiements continus): pousser le projet dans un repo GitHub/GitLab et connecter le repo à Netlify (Site → Deploys → Link to Git provider).
2. Vérifier que les fichiers publics sont accessibles:
   - `https://<votre-site>.netlify.app/` doit retourner la page et `https://<votre-site>.netlify.app/sitemap.xml` doit être accessible.
3. Google Search Console — ajouter la propriété
   - Ajouter la propriété `https://la-maison-verde.netlify.app/` (ou votre domaine personnalisé).
   - Vérifier la propriété (méthode recommandée: fichier HTML upload ou enregistrement TXT DNS).
   - Dans Search Console → Sitemaps, soumettre `https://la-maison-verde.netlify.app/sitemap.xml`.
   - Après soumission, utiliser "Inspecter l'URL" pour demander l'indexation des pages principales.
4. Créer la fiche Google Business Profile (GBP)
   - Aller sur https://business.google.com/ et créer la fiche en utilisant les informations de `GOOGLE_BUSINESS_PROFILE.md`.
   - Vérifier la fiche (carte postale ou téléphone selon options). Après vérification, ajouter les photos et publier.
5. Vérifier Google Analytics et Search Console
   - Dans GA4: vérifier que vous recevez des données (Realtime).
   - Relier Search Console à GA4 pour avoir les données de recherche.

## Conseils pour améliorer le classement local
- Assurez‑vous que le nom, l'adresse et le téléphone (NAP) sont identiques sur le site, la fiche Google et les annuaires locaux.
- Publiez 4–8 photos de qualité sur la fiche GBP (façade, intérieur, plats, équipe).
- Obtenez des avis clients et répondez‑y rapidement.
- Ajoutez des pages supplémentaires utiles (Menu, Contact, À propos) et liez‑les dans le sitemap.
- Publiez régulièrement des contenus (ex: posts GBP, nouveautés menu).

## Vérifications rapides (commandes)
PowerShell (Windows):
```powershell
nslookup la-maison-verde.netlify.app
```
macOS / Linux:
```bash
dig +short la-maison-verde.netlify.app
```

## Fichiers que j'ai créés/modifiés (chemin)
- `maison-verde-test/index.html` (modifié)
- `maison-verde-test/sitemap.xml` (ajouté)
- `maison-verde-test/robots.txt` (ajouté)
- `maison-verde-test/GOOGLE_BUSINESS_PROFILE.md` (ajouté)
- `maison-verde-test/SEARCH_CONSOLE_GUIDE.md` (ajouté)
- `maison-verde-test/DEPLOY_AND_SEO_REPORT.md` (ce fichier)

## Je peux faire pour vous
- Préparer un zip du dossier `maison-verde-test` prêt à glisser sur Netlify.
- Vous guider pas à pas pendant la soumission à Search Console (je peux fournir les snippets ou la vérification HTML si nécessaire).

Si vous voulez que je prépare le zip du dossier pour upload Netlify, dites simplement « prépare le zip » et je le crée ici. Sinon, suivez les étapes ci‑dessous et dites‑moi quand vous aurez déployé pour que j'explique la soumission du sitemap et la création de la fiche GBP.

Fin du rapport.
