# A Villa in Puglia

Sito vetrina della villa **A Villa in Puglia** (Fasano, Puglia) — sito statico,
navigabile, ottimizzato per mobile, bilingue **IT / EN**, con video drone nella
hero della pagina "La Villa".

## Struttura

- `index.html`, `villa.html`, `camere.html`, `galleria.html`, `il-territorio.html`,
  `contatti.html`, `privacy-policy.html`, `404.html` — le pagine del sito
- `styles.css` — foglio di stile condiviso
- `menu.js` — menu hamburger mobile
- `i18n.js` — selettore lingua IT/EN (traduzione al volo, salva la scelta)
- `favicon.svg`, `robots.txt`
- `assets/` — immagini (ottimizzate) e video (`drone-villa-desktop.mp4`,
  `drone-villa-mobile.mp4`)

## Come vederlo in locale

Apri semplicemente `index.html` nel browser (è un sito 100% statico, nessun build).

## Pubblicazione

Trattandosi di un sito statico, può essere pubblicato su qualsiasi hosting statico:

- **GitHub Pages** — Settings → Pages → Branch `main` / cartella `/ (root)`
- **Netlify** — trascina la cartella su https://app.netlify.com/drop
- **Cloudflare Pages / Vercel** — collega la repository

## Note

- Le cartelle `assets-originali/` (backup foto originali) e `uploads/` (foto
  sorgente) sono escluse dal repository tramite `.gitignore`: non servono al sito.
