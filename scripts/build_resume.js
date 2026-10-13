// Gera os currículos em PDF (public/carloshallan-resume-*.pdf) a partir dos
// mesmos dados da timeline do site, para que os dois nunca se desencontrem.
// Uso: npm run build:resume (precisa do Google Chrome ou Chromium instalado)
import { execFileSync } from 'node:child_process'
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { createServer } from 'vite'

const root = resolve(import.meta.dirname, '..')

const contact = {
  name: 'Carlos Hallan N. F. da Silva',
  headline: 'Full Stack Software Engineer · Python, React, TypeScript',
  phone: '+55 11 93340-5985',
  email: 'carloshallandev@gmail.com',
  links: [
    { label: 'carloshallan.github.io', href: 'https://carloshallan.github.io' },
    {
      label: 'linkedin.com/in/carlos-hallan',
      href: 'https://www.linkedin.com/in/carlos-hallan/'
    },
    { label: 'github.com/carloshallan', href: 'https://github.com/carloshallan' }
  ]
}

const content = {
  'pt-BR': {
    file: 'carloshallan-resume-pt-br.pdf',
    lang: 'pt-BR',
    location: 'Guarulhos/SP, Brasil',
    summary: 'Sobre mim',
    experience: 'Experiência',
    education: 'Formação',
    skills: 'Competências técnicas',
    impactLabels: ['Impacto:', 'Stack:'],
    educationItems: [
      ['Bacharelado em Engenharia de Software', 'Estácio de Sá, 2025'],
      ['Licenciatura em Letras (incompleta)', 'Faculdade Anhanguera, 2018']
    ],
    skillItems: [
      [
        'Linguagens e frameworks',
        'Python (Django, DRF, Flask, FastAPI, SQLAlchemy, Alembic, PySide), TypeScript e JavaScript (React, Vue.js, Next.js, Node.js, Vite), Rust (Tauri), PHP'
      ],
      [
        'Desktop e pipelines',
        'Tauri, Electron, Qt/PySide, plugins para Autodesk Maya, extensões para After Effects, ShotGrid (Toolkit, automações e integrações)'
      ],
      [
        'Front-end e UX/UI',
        'Design systems (React e Qt), Tailwind CSS, Chakra UI, Vuetify, Figma, Adobe XD, Sketch'
      ],
      ['Dados', 'PostgreSQL, MySQL, Firebase Realtime Database, GraphQL'],
      [
        'Infraestrutura e integrações',
        'Docker, AWS, GitLab CI/CD, Stripe, Mercado Pago, Google APIs, Mailchimp, Perforce, Mixpanel'
      ]
    ]
  },
  en: {
    file: 'carloshallan-resume-en.pdf',
    lang: 'en',
    location: 'Guarulhos/SP, Brazil',
    summary: 'About me',
    experience: 'Experience',
    education: 'Education',
    skills: 'Technical skills',
    impactLabels: ['Impact:', 'Stack:'],
    educationItems: [
      ['B.S. in Software Engineering', 'Estácio de Sá, 2025'],
      [
        'Teaching degree in Languages and Literature (incomplete)',
        'Faculdade Anhanguera, 2018'
      ]
    ],
    skillItems: [
      [
        'Languages and frameworks',
        'Python (Django, DRF, Flask, FastAPI, SQLAlchemy, Alembic, PySide), TypeScript and JavaScript (React, Vue.js, Next.js, Node.js, Vite), Rust (Tauri), PHP'
      ],
      [
        'Desktop and pipelines',
        'Tauri, Electron, Qt/PySide, Autodesk Maya plugins, After Effects extensions, ShotGrid (Toolkit, automation, and integrations)'
      ],
      [
        'Front end and UX/UI',
        'Design systems (React and Qt), Tailwind CSS, Chakra UI, Vuetify, Figma, Adobe XD, Sketch'
      ],
      ['Data', 'PostgreSQL, MySQL, Firebase Realtime Database, GraphQL'],
      [
        'Infrastructure and integrations',
        'Docker, AWS, GitLab CI/CD, Stripe, Mercado Pago, Google APIs, Mailchimp, Perforce, Mixpanel'
      ]
    ]
  }
}

const escape = (text) =>
  String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')

// Destaca o rótulo "Impacto:" / "Stack:" no começo de um item
function bullet(text, labels) {
  const label = labels.find((l) => text.startsWith(l))
  const body = label
    ? `<strong>${label}</strong>${escape(text.slice(label.length))}`
    : escape(text)
  return `<li>${body}</li>`
}

function renderJob(job, labels) {
  const { description, clients = [], listOfStack = [] } = job.jobDescription
  const clientsHtml = clients
    .map(
      (client) => `
      <div class="client">
        <h4>${escape(client.name)} <span class="role">· ${escape(client.role)}</span></h4>
        <span class="date">${escape(client.date)}</span>
        <ul>${client.highlights.map((h) => bullet(h, labels)).join('')}</ul>
      </div>`
    )
    .join('')
  const stackHtml = listOfStack.length
    ? `<ul>${listOfStack.map((item) => bullet(item.description, labels)).join('')}</ul>`
    : ''

  return `
    <article class="job">
      <h3>${escape(job.title)}</h3>
      <span class="date"><span class="company">${escape(job.subtitle)}</span>${job.date ? ` · ${escape(job.date)}` : ''}</span>
      <p>${escape(description)}</p>
      ${stackHtml}
      ${clientsHtml}
    </article>`
}

function renderResume(locale, jobs, messages) {
  const c = content[locale]
  const journey = messages.journey
  const summary = `${journey.introBefore} ${journey.introRole} ${journey.introAfter}`

  return `<!doctype html>
<html lang="${c.lang}">
<head>
<meta charset="utf-8">
<title>${escape(contact.name)}</title>
<style>
  @page { size: A4; margin: 14mm 12mm; }
  * { box-sizing: border-box; }
  body { font-family: Inter, 'Helvetica Neue', Arial, sans-serif; font-size: 9.2pt; line-height: 1.42; color: #111; margin: 0; }
  a { color: inherit; text-decoration: none; }
  .layout { display: grid; grid-template-columns: 31% 1fr; column-gap: 9mm; }
  /* A linha vertical se repete em todas as páginas impressas */
  .divider { position: fixed; top: 0; bottom: 0; left: calc(31% + 4.5mm); border-left: 1px solid #c8c8cc; }
  h1 { font-size: 20pt; font-weight: 500; line-height: 1.15; letter-spacing: -0.01em; margin: 0 0 4px; }
  .headline { font-size: 9.6pt; color: #444; margin: 0 0 12px; }
  .contact { list-style: none; padding: 0; margin: 0; font-size: 8.6pt; }
  .contact li { margin: 0 0 5px; overflow-wrap: anywhere; }
  hr { border: none; border-top: 1px solid #c8c8cc; margin: 14px 0; }
  h2 { font-size: 12.5pt; font-weight: 500; margin: 0 0 8px; }
  aside h2 { margin-top: 16px; }
  h3 { font-size: 9.8pt; font-weight: 600; margin: 0; }
  h4 { font-size: 9.4pt; font-weight: 600; margin: 0; }
  .company, .role { font-weight: 400; color: #333; }
  .date { display: block; font-size: 8.6pt; color: #555; margin: 1px 0 3px; }
  p { margin: 2px 0 4px; }
  ul { margin: 2px 0 4px; padding-left: 14px; }
  li { margin: 1px 0; }
  .job { margin-bottom: 11px; break-inside: avoid-page; }
  .job:has(.client) { break-inside: auto; }
  .client { margin: 7px 0 0 10px; break-inside: avoid; }
  .item { margin: 0 0 8px; font-size: 8.8pt; break-inside: avoid; }
  .item strong { display: block; font-weight: 600; }
</style>
</head>
<body>
  <div class="divider"></div>
  <div class="layout">
    <aside>
      <h1>${escape(contact.name)}</h1>
      <div class="headline">${escape(contact.headline)}</div>
      <ul class="contact">
        <li>${escape(contact.phone)}</li>
        <li><a href="mailto:${contact.email}">${escape(contact.email)}</a></li>
        <li>${escape(c.location)}</li>
        ${contact.links.map((l) => `<li><a href="${l.href}">${escape(l.label)}</a></li>`).join('')}
      </ul>
      <hr>
      <h2>${c.education}</h2>
      ${c.educationItems.map(([k, v]) => `<div class="item"><strong>${escape(k)}</strong>${escape(v)}</div>`).join('')}
      <h2>${c.skills}</h2>
      ${c.skillItems.map(([k, v]) => `<div class="item"><strong>${escape(k)}</strong>${escape(v)}</div>`).join('')}
    </aside>
    <main>
      <h2>${c.summary}</h2>
      <p>${escape(summary)}</p>
      <hr>
      <h2>${c.experience}</h2>
      ${jobs.map((job) => renderJob(job, c.impactLabels)).join('')}
    </main>
  </div>
</body>
</html>`
}

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    'google-chrome',
    'google-chrome-stable',
    'chromium',
    'chromium-browser'
  ].filter(Boolean)
  for (const bin of candidates) {
    try {
      execFileSync(bin, ['--version'], { stdio: 'ignore' })
      return bin
    } catch {
      // tenta o próximo
    }
  }
  throw new Error('Chrome/Chromium não encontrado. Defina CHROME_PATH.')
}

const server = await createServer({
  root,
  logLevel: 'error',
  server: { middlewareMode: true },
  appType: 'custom'
})
const tmp = mkdtempSync(join(tmpdir(), 'resume-'))

try {
  const chrome = findChrome()
  for (const locale of Object.keys(content)) {
    const jobs = (await server.ssrLoadModule(`/src/views/sections/jobs/${locale}.ts`)).default
    const messages = (await server.ssrLoadModule(`/src/i18n/locales/${locale}.ts`)).default
    const htmlPath = join(tmp, `${locale}.html`)
    const pdfPath = join(root, 'public', content[locale].file)

    writeFileSync(htmlPath, renderResume(locale, jobs, messages))
    execFileSync(
      chrome,
      [
        '--headless',
        '--disable-gpu',
        '--no-pdf-header-footer',
        `--print-to-pdf=${pdfPath}`,
        `file://${htmlPath}`
      ],
      { stdio: 'ignore' }
    )
    console.log(`✓ public/${content[locale].file}`)
  }
} finally {
  await server.close()
  rmSync(tmp, { recursive: true, force: true })
}
