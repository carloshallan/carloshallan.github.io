import type { Job } from '@/types'
import { workPeriod } from './workPeriod'

const jobs: Array<Job> = [
  {
    title: 'Founder & Full Stack Engineer',
    subtitle: 'Creative Olympus',
    date: `Dec 2021 - Present (${workPeriod('2021-12-16', null, 'en')})`,
    jobDescription: {
      description:
        'My own software company (Brazilian PJ). Through it I build and sell my own product, Momo, and work as a contractor for studios and companies — which is why my client work since 2021 overlaps.',
      clients: [
        {
          name: 'Momo',
          tag: 'own product',
          role: 'Founder, Engineer, and Designer',
          date: '2022 - Present',
          highlights: [
            'Took a local-first desktop app for novelists from zero to a commercial product with paying users.',
            'Tauri 2 (Rust) + React + TypeScript app for Windows (Microsoft Store), macOS, and Linux.',
            'Django 5 + DRF + PostgreSQL API for accounts, licensing, payments (Stripe and Mercado Pago), and releases.',
            'Marketing website with checkout and i18n in 3 languages (React, TailwindCSS, Framer Motion).'
          ]
        },
        {
          name: 'Roof Studio',
          tag: 'main client',
          role: 'Software Engineer | Pipeline Technical Director',
          date: 'Nov 2021 - Present',
          highlights: [
            'Designed and built the 3D production pipeline, integrating ShotGrid (Autodesk Flow Production Tracking) with custom apps and Maya plugins.',
            'Moved the studio to a low-cost remote infrastructure, enabling secure remote work that was previously limited to the office.',
            'Built desktop tools (Tauri + React, Electron + Vue.js, PySide6), including a visual search app used in the film for The New Yorker’s 100th anniversary.',
            'Impact: processes up to 80% faster across production, finance, and marketing.'
          ]
        },
        {
          name: 'Assembly',
          tag: 'VFX studio',
          role: 'Software Engineer and Designer',
          date: '1 year',
          highlights: [
            'Replaced large spreadsheets with a full CRM, from UX design to deployment (React, TypeScript, Flask, MySQL, Docker, AWS).',
            'Integrated it with Flow Production Tracking to make cost evaluation easier.',
            'Impact: internal processes up to 70% faster.'
          ]
        },
        {
          name: 'Tangerine',
          role: 'Software Engineer and UX/UI Designer',
          date: '1 year and 8 months',
          highlights: [
            'Built two integrated food-safety training apps from scratch: architecture, design, and implementation (Next.js, TypeScript, Chakra UI, Firebase).',
            'Impact: an idea turned into a complete product, translated into 3 languages.'
          ]
        },
        {
          name: 'Streetwise',
          role: 'Software Engineer',
          date: '4 months',
          highlights: [
            'Built an After Effects extension that automates versioning of advertising videos (React, TypeScript, ExtendScript).',
            'Impact: up to 90% less working time for artists.'
          ]
        }
      ]
    }
  },
  {
    title: 'Pipeline Front End Engineer',
    subtitle: 'Wildlife Studios',
    date: '3 years and 6 months (full time)',
    jobDescription: {
      description:
        'Built tools and integrations for the game production pipeline, serving animators, motion designers, and pipeline developers, as a Front End Engineer and UX/UI Designer.',
      title: 'Highlights:',
      listOfStack: [
        {
          description:
            'Designed and implemented design systems (React and Qt) used by frontend developers and designers.'
        },
        {
          description:
            'Created Maya plugins, After Effects extensions, desktop apps, and ShotGrid automations for the art pipeline.'
        },
        {
          description:
            'Impact: 60% to 80% shorter development time across design, frontend, pipeline, and creative teams.'
        },
        {
          description:
            'Stack: JavaScript, Vue.js, React, Electron, Node.js, Python, PySide, Django, PostgreSQL, MySQL.'
        }
      ]
    }
  },
  {
    title: 'UI/UX Designer and Front End Engineer',
    subtitle: '02 Filmes (freelance client)',
    date: '6 months (contract)',
    jobDescription: {
      description:
        'Designed and built a project management tool for a film production company, from branding and UX prototypes to the front end.',
      title: 'Highlights:',
      listOfStack: [
        {
          description:
            'Created the brand and product identity, and designed workflows and screens in Adobe XD.'
        },
        {
          description:
            'Developed most of the front end in React, integrated with a Flask backend.'
        },
        {
          description:
            'Impact: standardized processes and fewer handoffs between creative and management teams.'
        }
      ]
    }
  },
  {
    title: 'UI/UX Design Director and Front End Engineer',
    subtitle: 'Nuvem Agência',
    date: '2014 - 2018 (3 years and 9 months)',
    jobDescription: {
      description:
        'Led end-to-end development of websites and monolithic systems for agency clients, combining UX strategy, UI prototyping, and front-end development. Also handled client service and sales.',
      title: 'Highlights:',
      listOfStack: [
        {
          description:
            'Stack: vanilla JavaScript, PHP, MySQL, WordPress, Sketch, Inkscape.'
        }
      ]
    }
  },
  {
    title: 'Earlier experience',
    subtitle: 'Marketing and IT support',
    date: '',
    jobDescription: {
      description:
        'Roles that led me into software development, working with design, websites, and support.',
      title: 'Roles:',
      listOfStack: [
        {
          description:
            'Accelera Vendas (2 years and 9 months) — Digital Marketing Manager and Junior Web Developer: WordPress sites, campaigns, and team coordination.'
        },
        {
          description:
            'Unitecnologia (7 months) — IT Technical Support and Junior Developer: support, client training, and database maintenance.'
        }
      ]
    }
  }
]

export default jobs
