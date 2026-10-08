import type { Locale } from '@/i18n'

const words = {
  en: { year: ['year', 'years'], month: ['month', 'months'], and: 'and' },
  'pt-BR': { year: ['ano', 'anos'], month: ['mês', 'meses'], and: 'e' }
}

function parseDate(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number)
  return new Date(year, month - 1, day) // month is 0-based
}

export function workPeriod(
  entryDate: string,
  exitDate: string | null = null,
  locale: Locale = 'en'
): string {
  const start: Date = parseDate(entryDate)
  const end: Date = exitDate ? parseDate(exitDate) : new Date()
  const { year, month, and } = words[locale]

  let years: number = end.getFullYear() - start.getFullYear()
  let months: number = end.getMonth() - start.getMonth()

  if (months < 0) {
    years -= 1
    months += 12
  }

  const yearsText = `${years} ${years === 1 ? year[0] : year[1]}`
  const monthsText = `${months} ${months === 1 ? month[0] : month[1]}`

  if (years > 0 && months > 0) return `${yearsText} ${and} ${monthsText}`
  if (years > 0) return yearsText
  return monthsText
}
