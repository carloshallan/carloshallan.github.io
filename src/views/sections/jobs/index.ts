import type { Locale } from '@/i18n'
import type { Job } from '@/types'
import en from './en'
import ptBR from './pt-BR'

const jobsByLocale: Record<Locale, Array<Job>> = { en, 'pt-BR': ptBR }

export function getJobs(locale: string): Array<Job> {
  return jobsByLocale[locale as Locale] ?? en
}
