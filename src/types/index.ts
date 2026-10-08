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
