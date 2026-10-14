// Gera os currículos em PDF (public/carloshallan-resume-*.pdf) a partir dos
// mesmos dados da timeline e da formação do site, para que os dois nunca se desencontrem.
// O layout é de coluna única, com títulos de seção convencionais, para que sistemas de
// recrutamento (ATS) extraiam o texto na ordem certa.
// Uso: npm run build:resume (precisa do Google Chrome ou Chromium instalado)
import { execFileSync } from 'node:child_process'
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { createServer } from 'vite'

const root = resolve(import.meta.dirname, '..')

const contact = {
  name: 'Carlos Hallan N. F. da Silva',
  headline: 'Senior Full Stack Software Engineer · Python, React, TypeScript',
  phone: '+55 11 93340-5985',
  email: 'carloshallandev@gmail.com',
  links: [
    { label: 'carloshallan.github.io', href: 'https://carloshallan.github.io' },
    {
      label: 'linkedin.com/in/carlos-hallan',
      href: 'https://www.linkedin.com/in/carlos-hallan/'
    },
    {
      label: 'github.com/carloshallan',
      href: 'https://github.com/carloshallan'
    }
  ]
}

const content = {
  'pt-BR': {
    file: 'carloshallan-resume-pt-br.pdf',
    lang: 'pt-BR',
    location: 'Guarulhos/SP, Brasil',
    summary: 'Resumo profissional',
    experience: 'Experiência profissional',
    education: 'Formação acadêmica',
    skills: 'Competências técnicas',
    impactLabels: ['Impacto:', 'Stack:'],
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
      [
        'APIs e testes',
        'REST APIs (Django REST Framework, Flask, FastAPI), GraphQL, Pytest, testes automatizados (unitários e de integração)'
      ],
      ['Dados', 'PostgreSQL, MySQL, Firebase Realtime Database'],
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
    summary: 'Professional Summary',
    experience: 'Professional Experience',
    education: 'Education',
    skills: 'Technical Skills',
    impactLabels: ['Impact:', 'Stack:'],
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
      [
        'APIs and testing',
        'REST APIs (Django REST Framework, Flask, FastAPI), GraphQL, Pytest, automated testing (unit and integration)'
      ],
      ['Data', 'PostgreSQL, MySQL, Firebase Realtime Database'],
      [
        'Infrastructure and integrations',
        'Docker, AWS, GitLab CI/CD, Stripe, Mercado Pago, Google APIs, Mailchimp, Perforce, Mixpanel'
      ]
    ]
  }
}

const escape = text =>
  String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')

// Destaca o rótulo "Impacto:" / "Stack:" no começo de um item
function bullet(text, labels) {
  const label = labels.find(l => text.startsWith(l))
  const body = label
    ? `<strong>${label}</strong>${escape(text.slice(label.length))}`
    : escape(text)
  return `<li>${body}</li>`
}

// Cada contrato da Creative Olympus vira uma entrada própria, com cargo, empresa
// e período, para que o ATS não confunda os contratos que se sobrepõem
function renderJob(job, labels) {
  const { description, clients = [], listOfStack = [] } = job.jobDescription
  const clientsHtml = clients
    .map(
      client => `
      <div class="client">
        <h4>${escape(client.role)}</h4>
        <span class="date"><span class="company">${escape(client.name)}</span> · ${escape(job.subtitle)} · ${escape(client.date)}</span>
        <ul>${client.highlights.map(h => bullet(h, labels)).join('')}</ul>
      </div>`
    )
    .join('')
  const stackHtml = listOfStack.length
    ? `<ul>${listOfStack.map(item => bullet(item.description, labels)).join('')}</ul>`
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

function renderResume(locale, jobs, education, messages) {
  const c = content[locale]
  const journey = messages.journey
  const summary = `${journey.introBefore} ${journey.introRole} ${journey.introAfter}`
  const contactItems = [
    escape(c.location),
    escape(contact.phone),
    `<a href="mailto:${contact.email}">${escape(contact.email)}</a>`,
    ...contact.links.map(l => `<a href="${l.href}">${escape(l.label)}</a>`)
  ]

  return `<!doctype html>
<html lang="${c.lang}">
<head>
<meta charset="utf-8">
<title>${escape(contact.name)}</title>
<style>
  @page { size: A4; margin: 11mm 14mm; }
  * { box-sizing: border-box; }
  body { font-family: Inter, 'Helvetica Neue', Arial, sans-serif; font-size: 9pt; line-height: 1.35; color: #111; margin: 0; }
  a { color: inherit; text-decoration: none; }
  h1 { font-size: 20pt; font-weight: 500; line-height: 1.15; letter-spacing: -0.01em; margin: 0 0 2px; }
  .headline { font-size: 10.5pt; color: #333; margin: 0 0 4px; }
  .contact { font-size: 8.8pt; color: #333; margin: 0; }
  h2 { font-size: 11.5pt; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; border-bottom: 1px solid #c8c8cc; padding-bottom: 2px; margin: 12px 0 5px; break-after: avoid; }
  h3 { font-size: 10pt; font-weight: 600; margin: 0; break-after: avoid; }
  h4 { font-size: 9.6pt; font-weight: 600; margin: 0; break-after: avoid; }
  .company { font-weight: 600; color: #333; }
  .date { display: block; font-size: 8.8pt; color: #555; margin: 1px 0 3px; }
  p { margin: 2px 0 4px; }
  ul { margin: 2px 0 4px; padding-left: 14px; }
  li { margin: 1px 0; }
  .job { margin-bottom: 10px; break-inside: avoid-page; }
  .job:has(.client) { break-inside: auto; }
  .client { margin: 6px 0 0; break-inside: avoid; }
  .item { margin: 0 0 3px; }
  .item strong { font-weight: 600; }
</style>
</head>
<body>
  <header>
    <h1>${escape(contact.name)}</h1>
    <div class="headline">${escape(contact.headline)}</div>
    <p class="contact">${contactItems.join(' · ')}</p>
  </header>
  <h2>${c.summary}</h2>
  <p>${escape(summary)}</p>
  <h2>${c.skills}</h2>
  ${c.skillItems.map(([k, v]) => `<div class="item"><strong>${escape(k)}:</strong> ${escape(v)}</div>`).join('')}
  <h2>${c.experience}</h2>
  ${jobs.map(job => renderJob(job, c.impactLabels)).join('')}
  <h2>${c.education}</h2>
  ${education.map(e => `<div class="item"><strong>${escape(e.state === 'completed' ? e.title : `${e.title} (${e.status})`)}</strong> · ${escape(`${e.institution}, ${e.date}`)}</div>`).join('')}
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
    const jobs = (
      await server.ssrLoadModule(`/src/views/sections/jobs/${locale}.ts`)
    ).default
    const education = (
      await server.ssrLoadModule(`/src/views/sections/education/${locale}.ts`)
    ).default
    const messages = (
      await server.ssrLoadModule(`/src/i18n/locales/${locale}.ts`)
    ).default
    const htmlPath = join(tmp, `${locale}.html`)
    const pdfPath = join(root, 'public', content[locale].file)

    writeFileSync(htmlPath, renderResume(locale, jobs, education, messages))
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
