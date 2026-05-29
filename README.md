# ClearSkies ATPL

Statische Website für die ATPL-Theorie-Lernplattform. Web-only, mobile-responsive, kein Build-Step.

> **Hinweis:** `ClearSkies ATPL` ist ein Platzhalter-Name (Alternativen aus dem Konzept: *PassATPL*). Zum Ändern einfach Suchen-&-Ersetzen über alle Dateien.

## Struktur

```
clearskies-atpl/
├── index.html        # Landing Page (Hero, Ansatz, Subjects, Ablauf, Warteliste)
├── luftrecht.html    # Beispiel-Lernmodul Air Law (010) — die Modulstruktur
├── css/
│   └── style.css     # gesamtes Styling (CSS-Variablen oben)
├── js/
│   └── main.js       # Nav, TOC-Highlight, Warteliste-Formular
├── vercel.json       # Clean URLs + Security Headers
├── .gitignore
└── README.md
```

## Lokal ansehen

Einfach `index.html` im Browser öffnen — oder ein kleiner lokaler Server:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Warteliste-Formular verbinden

Das Formular in `index.html` zeigt auf einen Platzhalter. Schritte:

1. Account bei [Formspree](https://formspree.io) anlegen (Free Tier reicht).
2. Form-ID kopieren.
3. In `index.html` `DEIN_FORM_ID` ersetzen:
   `action="https://formspree.io/f/abcd1234"`

`js/main.js` übernimmt Absenden + Erfolgsmeldung automatisch.

## Launch via GitHub + Vercel

**1 — Repo anlegen und pushen:**

```bash
cd clearskies-atpl
git init
git add .
git commit -m "Initial site structure"
git branch -M main
git remote add origin https://github.com/DEIN_USER/clearskies-atpl.git
git push -u origin main
```

**2 — Bei Vercel deployen:**

1. [vercel.com](https://vercel.com) → *Add New… → Project*
2. GitHub-Repo importieren
3. Framework Preset: **Other** (Static), kein Build Command, Output Directory leer lassen
4. *Deploy*

Jeder weitere `git push` auf `main` deployed automatisch neu. Eigene Domain unter *Settings → Domains* verbinden.

## Design-Tokens

Alle Farben/Fonts sind CSS-Variablen oben in `css/style.css`:
Papier `#F4F1E8` · Ink-Navy `#0E2233` · Runway-Amber `#F58A2A`.
Fonts: Bricolage Grotesque (Display) · Hanken Grotesk (Body) · Space Mono (Codes).

## Roadmap (aus dem Konzept)

- **MVP:** Air Law, dann Navigation + Meteorology (höchste Durchfallquote)
- **V2:** alle 14 Subjects, Quiz-Modus, Flashcards, Schwächen-Dashboard
- **V3:** ATO-Lizenz (B2B), Community

*Kein offizielles EASA- oder Austro-Control-Produkt.*
