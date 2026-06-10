# Municipio Landing Page

A multilingual gateway to the two Municipality 16+ tools: Participation Index and the Civic Participation Trainer board game. The site is built as a static bundle that can be served with Nginx and deployed via Docker Compose.

## Features

- 🌐 Four languages: English, Čeština, Latviešu and Slovenščina.
- 🎲 Visuals inspired by the Municipio board-game box and mobile app colour palette.
- 📱 Responsive layout that works on desktop, tablet and mobile viewports.
- 🔗 A direct route to Participation Index and a dedicated game page with rules and the online application.
- ⚙️ Lightweight vanilla JavaScript for instant translation switching and link management.

## Project structure

```
public/
  index.html          # Main landing page
  assets/
    css/styles.css    # Styling and layout
    js/main.js        # Language switcher + copy
    img/favicon.svg   # Favicon with Municipio palette
Dockerfile            # Builds an Nginx image that serves /public
docker-compose.yml    # Local orchestration helper
```

## Local development

You can view the site with any static-file server. For example, using Python:

```bash
python3 -m http.server --directory public 8080
```

Then open <http://localhost:8080> in your browser.

## Docker usage

1. Build the image:
   ```bash
   docker compose build
   ```
2. Start the container:
   ```bash
   docker compose up
   ```
3. Visit <http://localhost:8080> to browse the landing page.

## Customising links

Edit `public/assets/js/main.js` to manage all destinations. Add the public game-rule URLs to the `ruleLinks` object; each language has its own brochure. Until a URL is added, the game page clearly marks the rules as forthcoming.

## Deployment

The generated Nginx image serves the static files from `/usr/share/nginx/html`. Any static hosting solution (AWS S3, Netlify, GitHub Pages, your own Docker infrastructure, …) can use the contents of the `public` directory as-is.
