import type { Film } from '@/types'

// Filmes em que trabalhei. Os da Roof Studio usam o ano como está em
// roofstudio.tv/work, que nem sempre lista a equipe de pipeline (o 4-H, por
// exemplo, não me credita). As capas ficam em public/work/films
const films: Array<Film> = [
  {
    slug: 'galinha-pintadinha-o-filme',
    title: 'Galinha Pintadinha – O Filme',
    client: 'Hype Animation · Bromélia Produções',
    year: 2026,
    role: 'Maya Tools Developer',
    poster: true,
    url: 'https://www.adorocinema.com/filmes/filme-1000043915/'
  },
  {
    slug: 'clash-royale',
    cover: 'clash-royale-revenge',
    title: '30 Seconds for Revenge',
    client: 'Supercell · ClashterPieces',
    year: 2026,
    role: 'Pipeline CGI',
    vimeo: '1185527000'
  },
  {
    slug: 'clash-royale',
    cover: 'clash-royale-cross',
    title: '30 Seconds to Cross',
    client: 'Supercell · ClashterPieces',
    year: 2026,
    role: 'Pipeline CGI',
    vimeo: '1185528499'
  },
  {
    slug: 'clash-royale',
    cover: 'clash-royale-innocence',
    title: '30 Seconds of Innocence',
    client: 'Supercell · ClashterPieces',
    year: 2026,
    role: 'Pipeline CGI',
    vimeo: '1185537568'
  },
  {
    slug: 'credit-karma',
    title: 'Credit Karma',
    client: 'Intuit',
    year: 2026,
    role: 'Pipeline TD',
    vimeo: '948420958'
  },
  {
    slug: 'the-new-yorker-100',
    title: 'The New Yorker 100',
    client: 'The New Yorker',
    year: 2025,
    role: 'Pipeline TD / Programming',
    vimeo: '1077675704',
    awards: [
      { festival: 'Cannes Lions', result: 'Silver' },
      {
        festival: 'New York Festivals Advertising',
        result: '1 Gold, 1 Bronze'
      },
      { festival: 'Commarts', result: '2 Gold' },
      { festival: 'Creative Pool', result: 'Silver' },
      { festival: 'Cresta Awards', result: 'Silver' }
    ]
  },
  {
    slug: 'adc-awards-2025',
    title: 'Be Seen By The Best Eyes',
    client: 'The Art Directors Club',
    year: 2025,
    role: 'Pipeline TD',
    vimeo: '1103843763',
    awards: [
      {
        festival: 'Clio Awards',
        result: 'Grand Winner, 1 Gold, 3 Silver, 1 Bronze'
      },
      {
        festival: 'D&AD',
        result: '1 Graphite Pencil, 2 Wood Pencil, 1 Shortlist'
      },
      {
        festival: 'LIA Awards',
        result: '1 Gold, 2 Silver, 2 Bronze, 1 Finalist'
      }
    ]
  },
  {
    slug: 'good-karma-by-the-pint',
    title: 'Good Karma By The Pint',
    client: 'New York Blood Center',
    year: 2024,
    role: 'Pipeline CGI',
    vimeo: '983168079',
    awards: [
      {
        festival: 'Healthcare Advertising Awards',
        result: 'Best of Show, 2 Gold, 1 Bronze'
      },
      { festival: 'ADDY Awards', result: '5 Silver' }
    ]
  },
  {
    slug: 'capn-crunch-treats',
    title: "Cap'n Crunch Treats",
    client: 'Quaker',
    year: 2024,
    role: 'Pipeline TD'
  },
  {
    slug: 'capn-crunch-crunchventure',
    title: "Cap'n Crunch Crunchventure",
    client: 'Quaker',
    year: 2024,
    role: 'Pipeline TD'
  },
  {
    slug: '4-h',
    title: '4-H',
    client: 'National 4-H Council',
    year: 2023,
    role: 'Pipeline TD',
    vimeo: '838766857',
    awards: [
      { festival: 'Collision Awards', result: '2 Gold' },
      { festival: 'CRESTA Awards', result: 'Shortlisted' }
    ]
  },
  {
    slug: 'a-beautiful-sight',
    title: 'A Beautiful Sight',
    client: 'Vabysmo',
    year: 2020,
    role: 'Pipeline TD',
    vimeo: '946204030',
    awards: [
      { festival: 'LIA Awards', result: '1 Gold, 2 Bronze' },
      { festival: 'Collision Awards', result: '2 Silver' },
      {
        festival: 'Art Directors Club',
        result: '1 Silver Cube, 1 Shortlisted'
      },
      { festival: 'Healthcare Marketing Impact Awards', result: 'Bronze' },
      { festival: 'Cannes Lions', result: 'Shortlisted' },
      { festival: 'Webby Awards', result: 'Nominated' },
      { festival: 'Shots Awards', result: 'Shortlisted' }
    ]
  }
]

export default films
