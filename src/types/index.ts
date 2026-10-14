export interface CustomRouterLink {
  text: string
  to: string
  class?: string
}

export interface CustomSlide {
  order: number
  title: string
  description?: string
  image?: string
  path?: string
}

export interface Children {
  description: string
  children?: Array<Children>
}

export interface JobClient {
  name: string
  tag?: string
  role: string
  date: string
  highlights: Array<string>
}

export interface JobDescription {
  description: string
  title?: string
  listOfStack?: Array<Children>
  clients?: Array<JobClient>
}

export interface Job {
  title: string
  subtitle: string
  date: string
  jobDescription: JobDescription
}

export interface GalleryItems {
  title: string
  subtitle: string
  description?: string
  asset?: string
}

export interface Phrase {
  en: string
  pt: string
}

export interface Education {
  title: string
  institution: string
  date: string
  // Datas ISO de início e fim, para mostrar o progresso de um curso em andamento
  start?: string
  end?: string
  state: 'inProgress' | 'completed' | 'incomplete'
  status: string
  description?: string
}

export interface Film {
  slug: string
  title: string
  client: string
  year: number
  role: string
  // Nome da capa em public/work/films, quando um projeto tem vários filmes
  cover?: string
  // Capa em formato de cartaz (retrato), mostrada inteira no card
  poster?: boolean
  // Página do filme fora da Roof; sem ela, o link vai para roofstudio.tv
  url?: string
  // Prêmios como aparecem na página do filme na Roof, do mais importante para
  // o menos. Shortlists e indicações aparecem, mas não contam como prêmio
  awards?: Array<{ festival: string; result: string }>
  // Id do vídeo no Vimeo; sem ele, o card abre a página do filme na Roof
  vimeo?: string
}
