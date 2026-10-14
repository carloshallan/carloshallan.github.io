import type { Education } from '@/types'

const education: Array<Education> = [
  {
    title: 'Pós-graduação em Engenharia de Software em IA Aplicada',
    institution: 'UNIPDS · Anhanguera',
    date: 'Mai 2026 - Mai 2027',
    start: '2026-05-13',
    end: '2027-05-12',
    state: 'inProgress',
    status: 'em andamento',
    description:
      '100% online, sobre como aplicar inteligência artificial no desenvolvimento de software, de LLMs a agentes de IA.'
  },
  {
    title: 'Bacharelado em Engenharia de Software',
    institution: 'Estácio de Sá',
    date: '2025',
    state: 'completed',
    status: 'concluído'
  },
  {
    title: 'Licenciatura em Letras',
    institution: 'Faculdade Anhanguera',
    date: '2018',
    state: 'incomplete',
    status: 'incompleta',
    description:
      'Não concluí o curso, mas a escrita seguiu comigo e hoje publico meus livros como C.H. Blacksmith.'
  }
]

export default education
