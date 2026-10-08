import type en from './en'

const ptBR: typeof en = {
  language: {
    label: 'Idioma',
    en: 'EN',
    pt: 'PT'
  },
  nav: {
    home: 'início',
    work: 'trabalhos'
  },
  hero: {
    greeting: 'Sou Carlos',
    role: 'Engenheiro de Software Full Stack',
    ux: 'UX/UI',
    momo: 'Criador do Momo para Escritores',
    seeWorks: 'ver meus trabalhos',
    aboutMe: 'sobre mim'
  },
  journey: {
    title: 'Minha Jornada',
    titleHighlight: 'como Desenvolvedor',
    imageAlt: 'Momo nos temas branco, rosa e preto',
    introBefore: 'Sou',
    introRole: 'Engenheiro de Software Full Stack',
    introAfter:
      'e há mais de 10 anos desenvolvo produtos completos, do design de UX/UI e do front-end até APIs, bancos de dados, infraestrutura e aplicativos desktop. Trabalho principalmente com estúdios de VFX, games e criação, transformando processos lentos e manuais em ferramentas que as equipes usam no dia a dia.',
    highlightsTitle: 'Alguns destaques:',
    highlights: {
      momo: {
        label: 'Momo:',
        text: 'um aplicativo desktop para escritores que eu mesmo projetei, desenvolvi e publico, com Tauri, React, Django e sistema de pagamentos, e que já tem usuários pagantes.'
      },
      pipelines: {
        label: 'Pipelines de produção:',
        text: 'criei a pipeline 3D da Roof Studio, integrando o ShotGrid a aplicações e plugins próprios, com processos até 80% mais rápidos.'
      },
      business: {
        label: 'Sistemas de negócio:',
        text: 'um CRM para um estúdio de VFX que substituiu planilhas extensas e deixou os processos internos até 70% mais ágeis.'
      },
      desktop: {
        label: 'Ferramentas desktop:',
        text: 'aplicativos em Tauri, Electron e Qt, entre eles uma ferramenta de busca visual usada no filme de 100 anos da revista The New Yorker.'
      }
    },
    cta: 'Ver portfólio'
  },
  timeline: {
    title: 'Por onde',
    titleRest: 'já passei?'
  },
  about: {
    title: 'Sobre',
    titleHighlight: 'Mim',
    paragraph1:
      'Fora do trabalho, sou marido, pai de três filhos e escrevo romances com o pseudônimo C.H. Blacksmith. O Momo nasceu daí: eu precisava de uma ferramenta melhor para escrever meus próprios livros.',
    paragraph2:
      'Sou fascinado pela relação entre psicologia e design, e estou sempre aprendendo novas linguagens e ferramentas para melhorar os produtos que crio.',
    cta: 'Leia mais no Medium'
  },
  work: {
    title: 'Alguns trabalhos',
    featured: 'Projeto em destaque'
  },
  notFound: {
    page: 'Página',
    notFound: 'não encontrada!',
    sorry: 'Desculpe!',
    contact: 'Fale comigo',
    moreInfo: 'se precisar de mais informações.'
  },
  footer: {
    rights: 'Todos os direitos reservados.'
  }
}

export default ptBR
