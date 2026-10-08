import { createI18n } from 'vue-i18n'
import en from './locales/en'
import ptBR from './locales/pt-BR'

export type Locale = 'en' | 'pt-BR'

export const LOCALES: Array<Locale> = ['en', 'pt-BR']

const STORAGE_KEY = 'locale'

function isLocale(value: unknown): value is Locale {
  return LOCALES.includes(value as Locale)
}

// A escolha salva vence; na primeira visita, segue o idioma do navegador
function initialLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isLocale(stored)) return stored
  } catch {
    // localStorage pode estar bloqueado (aba anônima, cookies desativados)
  }

  return browserLocale()
}

// Percorre as preferências do navegador e usa o primeiro idioma suportado
function browserLocale(): Locale {
  if (typeof navigator === 'undefined') return 'en'

  const preferences = navigator.languages?.length
    ? navigator.languages
    : [navigator.language]

  for (const language of preferences) {
    const code = (language || '').toLowerCase()
    if (code.startsWith('pt')) return 'pt-BR'
    if (code.startsWith('en')) return 'en'
  }

  return 'en'
}

const locale = initialLocale()

const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'en',
  messages: { en, 'pt-BR': ptBR }
})

if (typeof document !== 'undefined') document.documentElement.lang = locale

export function setLocale(newLocale: Locale) {
  i18n.global.locale.value = newLocale
  document.documentElement.lang = newLocale

  try {
    localStorage.setItem(STORAGE_KEY, newLocale)
  } catch {
    // Sem persistência, o idioma vale só até recarregar a página
  }
}

export default i18n
