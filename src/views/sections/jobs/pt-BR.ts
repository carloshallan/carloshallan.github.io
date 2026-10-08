import type { Job } from '@/types'
import { workPeriod } from './workPeriod'

// Os cargos ficam em inglês, como no currículo em português
const jobs: Array<Job> = [
  {
    title: 'Founder & Full Stack Engineer',
    subtitle: 'Creative Olympus',
    date: `Dez 2021 - Atual (${workPeriod('2021-12-16', null, 'pt-BR')})`,
    jobDescription: {
      description:
        'Minha empresa de software. Por meio dela, desenvolvo e comercializo o Momo, meu produto próprio, e atendo estúdios e empresas como prestador de serviços. É por isso que, desde 2021, trabalho com mais de um cliente ao mesmo tempo.',
      clients: [
        {
          name: 'Momo',
          tag: 'produto próprio',
          role: 'Founder, Engineer e Designer',
          date: '2022 - Atual',
          highlights: [
            'Criei do zero um aplicativo desktop para escritores, que guarda os textos no próprio computador, e o transformei em um produto comercial com usuários pagantes.',
            'Aplicativo em Tauri 2 (Rust), React e TypeScript, disponível para Windows (na Microsoft Store), macOS e Linux.',
            'API em Django 5, DRF e PostgreSQL, responsável por contas, licenças, pagamentos (Stripe e Mercado Pago) e distribuição de versões.',
            'Site de vendas com checkout e tradução para 3 idiomas (React, TailwindCSS e Framer Motion).'
          ]
        },
        {
          name: 'Roof Studio',
          tag: 'cliente principal',
          role: 'Software Engineer | Pipeline Technical Director',
          date: 'Nov 2021 - Atual',
          highlights: [
            'Projetei e desenvolvi a pipeline de produção 3D do estúdio, integrando o ShotGrid (Autodesk Flow Production Tracking) a aplicações próprias e plugins para Maya.',
            'Migrei a infraestrutura para um ambiente remoto de baixo custo, o que permitiu o trabalho remoto com segurança, antes restrito ao escritório.',
            'Desenvolvi ferramentas desktop (Tauri e React, Electron e Vue.js, PySide6), entre elas um app de busca visual usado no filme de 100 anos da revista The New Yorker.',
            'Impacto: processos até 80% mais rápidos nas áreas de produção, financeiro e marketing.'
          ]
        },
        {
          name: 'Assembly',
          tag: 'estúdio de VFX',
          role: 'Software Engineer e Designer',
          date: '1 ano',
          highlights: [
            'Substituí planilhas extensas por um CRM completo, que conduzi do design de UX até o deploy (React, TypeScript, Flask, MySQL, Docker e AWS).',
            'Integrei o CRM ao Flow Production Tracking, o que facilitou a análise de custos.',
            'Impacto: processos internos até 70% mais ágeis.'
          ]
        },
        {
          name: 'Tangerine',
          role: 'Software Engineer e UX/UI Designer',
          date: '1 ano e 8 meses',
          highlights: [
            'Desenvolvi do zero duas aplicações integradas de treinamento em segurança alimentar, cuidando da arquitetura, do design e da implementação (Next.js, TypeScript, Chakra UI e Firebase).',
            'Impacto: a ideia virou um produto completo, disponível em 3 idiomas.'
          ]
        },
        {
          name: 'Streetwise',
          role: 'Software Engineer',
          date: '4 meses',
          highlights: [
            'Desenvolvi uma extensão para o After Effects que automatiza a criação de versões de vídeos publicitários (React, TypeScript e ExtendScript).',
            'Impacto: redução de até 90% no tempo de trabalho dos artistas.'
          ]
        }
      ]
    }
  },
  {
    title: 'Pipeline Front End Engineer',
    subtitle: 'Wildlife Studios',
    date: '3 anos e 6 meses (tempo integral)',
    jobDescription: {
      description:
        'Atuei como Front End Engineer e UX/UI Designer, criando ferramentas e integrações para a pipeline de produção de games, usadas por animadores, motion designers e desenvolvedores de pipeline.',
      title: 'Destaques:',
      listOfStack: [
        {
          description:
            'Criei design systems em React e Qt, usados por desenvolvedores front-end e designers.'
        },
        {
          description:
            'Desenvolvi plugins para Maya, extensões para After Effects, aplicativos desktop e automações para o ShotGrid na pipeline de arte.'
        },
        {
          description:
            'Impacto: redução de 60% a 80% no tempo de desenvolvimento das equipes de design, front-end, pipeline e criação.'
        },
        {
          description:
            'Stack: JavaScript, Vue.js, React, Electron, Node.js, Python, PySide, Django, PostgreSQL, MySQL.'
        }
      ]
    }
  },
  {
    title: 'UI/UX Designer e Front End Engineer',
    subtitle: '02 Filmes (freela)',
    date: '6 meses',
    jobDescription: {
      description:
        'Criei uma ferramenta de gestão de projetos para uma produtora de filmes, da identidade visual e dos protótipos de UX até o front-end.',
      title: 'Destaques:',
      listOfStack: [
        {
          description:
            'Criei a marca e a identidade visual do produto, além dos fluxos e das telas no Adobe XD.'
        },
        {
          description:
            'Desenvolvi a maior parte do front-end em React, integrado a um back-end em Flask.'
        },
        {
          description:
            'Impacto: processos padronizados e menos idas e vindas entre as equipes de criação e de gestão.'
        }
      ]
    }
  },
  {
    title: 'UI/UX Design Director e Front End Engineer',
    subtitle: 'Nuvem Agência',
    date: '2014 - 2018 (3 anos e 9 meses)',
    jobDescription: {
      description:
        'Liderei o desenvolvimento de sites e sistemas para os clientes da agência, do início ao fim, unindo estratégia de UX, prototipação de interfaces e front-end. Também cuidava do atendimento e das vendas.',
      title: 'Destaques:',
      listOfStack: [
        {
          description:
            'Stack: JavaScript puro, PHP, MySQL, WordPress, Sketch, Inkscape.'
        }
      ]
    }
  },
  {
    title: 'Experiências anteriores',
    subtitle: 'Marketing e suporte de TI',
    date: '',
    jobDescription: {
      description:
        'Experiências que me trouxeram para o desenvolvimento de software, passando por design, sites e suporte.',
      title: 'Funções:',
      listOfStack: [
        {
          description:
            'Accelera Vendas (2 anos e 9 meses): Gerente de Marketing Digital e Desenvolvedor Web Júnior. Cuidava de sites em WordPress, campanhas e da coordenação da equipe.'
        },
        {
          description:
            'Unitecnologia (7 meses): Suporte Técnico de TI e Desenvolvedor Júnior. Fazia suporte, treinamento de clientes e manutenção de banco de dados.'
        }
      ]
    }
  }
]

export default jobs
