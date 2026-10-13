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
    aboutMe: 'sobre mim',
    seeExperience: 'ver minha experiência'
  },
  journey: {
    title: 'Minha Jornada',
    titleHighlight: 'como Desenvolvedor',
    imageAlt: 'Momo nos temas branco, rosa e preto',
    introBefore: 'Sou',
    introRole: 'Engenheiro de Software Full Stack',
    introAfter:
      'com mais de 12 anos de experiência criando produtos completos, do design de UX/UI e do front-end até APIs, bancos de dados, infraestrutura e aplicativos desktop. Fundei a Creative Olympus, onde crio e vendo o Momo, um aplicativo desktop para escritores com usuários pagantes, e atendo estúdios de VFX, games e criação, transformando processos manuais em ferramentas do dia a dia.',
    highlightsTitle: 'Alguns destaques:',
    highlights: {
      momo: {
        label: 'Momo:',
        text: 'um aplicativo desktop para escritores que eu mesmo projetei, desenvolvi e publico, com Tauri, React, Django e sistema de pagamentos, e que já tem usuários pagantes.'
      },
      pipelines: {
        label: 'Pipelines de produção:',
        text: 'criei a pipeline 3D da Roof Studio, integrando o ShotGrid a aplicações e plugins próprios, o que tornou viável a operação do estúdio com baixo custo.'
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
  writer: {
    reveal: 'Conhecer meu lado escritor, C.H. Blacksmith',
    revealHint: 'psiu… clique',
    backToDev: 'Voltar para o currículo de desenvolvedor',
    backToDevHint: 'voltar ao dev',
    mediaKit: 'Mídia kit',
    hero: {
      greeting: 'Sou',
      role: 'Escritor',
      craft: 'Autor artesão',
      genres: 'Drama em suas várias faces',
      seeBooks: 'ver meus livros',
      seeAbout: 'sobre o autor',
      booksSold: 'livros físicos vendidos desde 2025'
    },
    about: {
      title: 'Quem é',
      paragraph1:
        'C.H. Blacksmith é o pseudônimo com que assino meus livros: as iniciais do meu nome e a ideia do ferreiro, porque sou um autor artesão que produz os próprios livros físicos em casa.',
      paragraph2:
        'Escrevo drama em suas várias faces há mais de 16 anos, passando por suspense, distopia, romance e terror psicológico. Em 2024 montei uma gráfica na sala de casa e, desde então, produzo meus livros e vendo em eventos pelo Brasil. Sou apaixonado por livros de bolso e acredito que eles são um ótimo caminho para incentivar a leitura.',
      momoBefore: 'E o',
      momoAfter:
        'nasceu daqui: eu precisava de uma ferramenta melhor para escrever meus próprios livros, então criei uma.'
    },
    stats: {
      donated: { value: '250+', label: 'livros doados' },
      years: { value: '16+', label: 'anos escrevendo' },
      books: { value: '4', label: 'livros lançados' }
    },
    events: {
      title: 'Eventos e',
      titleHighlight: 'Reconhecimentos',
      photoAlt: 'C.H. Blacksmith em um evento literário',
      galleryCaption:
        'Na minha banca em feiras literárias e eventos de cultura geek, e em bate-papos com leitores.',
      items: {
        award: {
          date: 'Maio de 2025',
          title: 'Menção Honrosa em Literatura',
          text: 'Recebi da Universidade Guarulhos (UNG) a Menção Honrosa Sociedade, Paz e Educação 2025, no segmento Literatura, em sessão extraordinária do Conselho Universitário.',
          alt: 'Certificado de Menção Honrosa da Universidade Guarulhos'
        },
        talk: {
          date: 'Agosto de 2025',
          title: 'Entre Palavras & Páginas',
          text: 'Fui o autor convidado do 1º Encontro Literário Entre Palavras & Páginas, no ParqueShopping Maia, num bate-papo aberto ao público.',
          alt: 'Cartaz do encontro Entre Palavras & Páginas com C.H. Blacksmith'
        }
      }
    },
    books: {
      title: 'Meus',
      titleHighlight: 'Livros',
      coverAlt: 'Capa de {title}',
      with: 'com {name}',
      inProgress: 'Em andamento',
      upcoming: 'Próximo lançamento',
      cta: 'Ver mais em chblacksmith.com.br',
      items: {
        andarilho: {
          genre: 'Drama · Suspense',
          hook: 'Numa noite solitária, Edgar, um homem marcado por traumas, entra em um bar e conhece Sara. A partir daí, ele precisa encarar o próprio passado. Uma jornada poética e introspectiva sobre amor, perda e redenção.'
        },
        retaliacao: {
          genre: 'Drama · Suspense',
          hook: 'A conclusão da duologia. Uma série de mortes parece anunciar o retorno de Edgar, e enquanto um jornalista tenta provar sua inocência, um viúvo jura encontrá-lo.'
        },
        esperar: {
          genre: 'Drama · Romance',
          hook: 'Lia enfrenta os costumes da sua vila. Pedro, um escritor romântico em tempos modernos, encontra Ana. Entre vidas e lendas, o amor ecoa.'
        },
        trombeta: {
          genre: 'Drama · Suspense · Distopia',
          hook: 'Numa cidade onde o som da trombeta obriga todos a dormir, Marina perde a mãe e começa a desconfiar das regras. Uma distopia teocrática sombria sobre obediência, memória e o preço de despertar.'
        },
        fabrica: {
          genre: 'Drama · Suspense · Terror',
          hook: 'Na cidade de Verdades, a fábrica é emprego, rotina, fé e esperança, até que as pessoas começam a voltar diferentes. O que acontece quando uma cidade fabrica a própria verdade?'
        },
        prometheus: {
          genre: 'Comédia',
          hook: 'Num bloco de carnaval, Genival descobre que os filhos nasceram e, na confusão do cartório, registra os dois como Prometheus e Cumpreus. Anos depois, um telefonema mal compreendido coloca a família na estrada, de Recife a São Paulo.'
        }
      }
    }
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
