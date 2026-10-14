import type { Education } from '@/types'

const education: Array<Education> = [
  {
    title: 'Postgraduate degree in Applied AI Software Engineering',
    institution: 'UNIPDS · Anhanguera',
    date: 'May 2026 - May 2027',
    start: '2026-05-13',
    end: '2027-05-12',
    state: 'inProgress',
    status: 'in progress',
    description:
      'Fully online, on applying artificial intelligence to software development, from LLMs to AI agents.'
  },
  {
    title: 'B.S. in Software Engineering',
    institution: 'Estácio de Sá',
    date: '2025',
    state: 'completed',
    status: 'completed'
  },
  {
    title: 'Teaching degree in Languages and Literature',
    institution: 'Faculdade Anhanguera',
    date: '2018',
    state: 'incomplete',
    status: 'incomplete',
    description:
      "I didn't finish the degree, but writing stayed with me, and today I publish my books as C.H. Blacksmith."
  }
]

export default education
