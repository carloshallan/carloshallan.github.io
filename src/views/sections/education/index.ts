import type { Locale } from '@/i18n'
import type { Education } from '@/types'
import en from './en'
import ptBR from './pt-BR'

const educationByLocale: Record<Locale, Array<Education>> = {
  en,
  'pt-BR': ptBR
}

export function getEducation(locale: string): Array<Education> {
  return educationByLocale[locale as Locale] ?? en
}
