# Ayush Singh — Portfolio (Datum Nexus Replica)

This repository contains a lightweight, static replication of the Datum Nexus portfolio.

How to run locally:

```powershell
# from d:\Ayush_Portfolio
python -m http.server 8000
# or using npx:
npx serve . -l 8000
```

Folder structure:

- `index.html` — main page
- `assets/css/` — styles
- `assets/js/` — scripts
- `assets/img/` — images and media
- `assets/Ayush_Singh_Resume.pdf` — resume

Notes:
- The design was replicated from https://datum-nexus-suite.lovable.app/ for local use and deployment.
- Before deploying, review external script references and replace them if needed.
