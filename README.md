# carloshallan.github.io

A simple portfolio website.

Built with Vue 3, Vite, Vuetify and MDX. Requires Node.js 24+ (see `.nvmrc`).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Preview the production build
```
npm run preview
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Regenerate the resume PDFs
```
npm run build:resume
```
Builds `public/carloshallan-resume-{pt-br,en}.pdf` from the same job data the site uses (`src/views/sections/jobs/`). Needs Google Chrome or Chromium (or `CHROME_PATH`). Run it after editing the jobs and commit the PDFs.

### Deploy to GitHub Pages
Every push to `main` is deployed automatically by the GitHub Actions workflow in `.github/workflows/deploy.yml` (lint, unit tests, build, publish). It can also be run manually from the Actions tab.

### Customize configuration
See [Vite Configuration Reference](https://vite.dev/config/).
