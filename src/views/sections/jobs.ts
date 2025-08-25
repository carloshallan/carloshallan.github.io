function parseDate(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number)
  return new Date(year, month - 1, day) // month is 0-based
}

function calculateWorkPeriod(
  entryDate: string,
  exitDate: string | null = null
): string {
  const start: Date = parseDate(entryDate)
  const end: Date = exitDate ? parseDate(exitDate) : new Date()

  let years: number = end.getFullYear() - start.getFullYear()
  let months: number = end.getMonth() - start.getMonth()

  if (months < 0) {
    years -= 1
    months += 12
  }

  if (years > 0 && months > 0) {
    return `${years} ${years === 1 ? 'year' : 'years'} and ${months} ${
      months === 1 ? 'month' : 'months'
    }`
  } else if (years > 0) {
    return `${years} ${years === 1 ? 'year' : 'years'}`
  } else {
    return `${months} ${months === 1 ? 'month' : 'months'}`
  }
}

export default [
  {
    title: 'Pipeline Technical Director | Full-Stack Engineer',
    subtitle: 'Roof Studio',
    date: `Nov 2021 - Current Job (${calculateWorkPeriod('2021-11-20', null)})`,
    jobDescription: {
      description:
        'Leading the design and implementation of an advanced 3D production pipeline integrating Shotgun (Autodesk Flow Production Tools) with custom applications and plugins. Developing user-centric solutions as a Full Stack Engineer and UX/UI Designer, driving efficiency and scalability in creative workflows.',
      title: 'Stack and Tools:',
      listOfStack: [
        {
          description:
            'Python 3.11, Flask, SQLAlchemy with MySQL, Alembic, Pytest.'
        },
        {
          description: 'Desktop Applications with PySide 6'
        },
        {
          description:
            'Desktop Applications with Rust (Tauri), React + Typescript.'
        },
        {
          description:
            'Desktop applications with Python + Vuejs + Typescript + ElectronJS.'
        },
        {
          description: 'QT Design System for Python'
        },
        {
          description: 'SaaS applications with VueJS, typescript, vuetify.'
        },
        {
          description: 'Prototype with Figma.'
        },
        {
          description: 'Plugins for Autodesk Maya'
        },
        {
          description: 'Scripts for Google Spreadsheet and Google Drive API'
        },
        {
          description: 'Mailchimp Integrations'
        },
        {
          description: 'Firebase realtime database.'
        }
      ]
    }
  },
  {
    title: 'FullStack Engineer',
    subtitle: 'Assembly',
    date: '1 year (temporary)',
    jobDescription: {
      description:
        'Developed a comprehensive CRM system for a VFX studio, leading from conceptual design to full deployment. Collaborated across teams to deliver an intuitive and robust solution tailored to studio needs.',
      title: 'Stack and Tools:',
      listOfStack: [
        {
          description:
            'ReactJS, Typescript, Redux, Redux-toolkit, Styled-Components, Chakra-UI.'
        },
        {
          description:
            'Python 3.9, Flask, SQLAlchemy with MySQL, Alembic, Pytest.'
        }
      ]
    }
  },
  {
    title: 'Full Stack Engineer and UX/UI Designer',
    subtitle: 'Tangerine',
    date: '1 year and 8 months (temporary)',
    jobDescription: {
      description:
        'Designed and developed two integrated applications for managing and using the Tangerine Training platform. Played a dual role as UX/UI Designer and Full Stack Engineer, ensuring seamless user experience and robust technical functionality.',
      title: 'Stack and Tools:',
      listOfStack: [
        {
          description: 'Prototype with Figma.'
        },
        {
          description: 'Web apps with NextJS, Typescript and ChakraUI.'
        },
        {
          description: 'Firebase realtime database.'
        }
      ]
    }
  },
  {
    title: 'Full Stack Engineer',
    subtitle: 'Streetwise',
    date: '4 Months (temporary)',
    jobDescription: {
      description:
        'Developed an After Effects extension offering streamlined project management capabilities. Managed the entire development cycle as a UX/UI Designer and Full Stack Engineer, delivering a cross-platform solution.',
      title: 'Stack and Tools:',
      listOfStack: [
        { description: 'Prototype with Figma' },
        {
          description:
            'SPA application with ReactJS + Typescript + Vite + Adobe ExtendScript'
        }
      ]
    }
  },
  {
    title: 'Pipeline Front End Engineer',
    subtitle: 'Wildlife Studios',
    date: '3 years and 6 months (full time)',
    jobDescription: {
      description:
        'Engineered scalable pipeline solutions as a Front End Engineer and UX/UI Designer. Contributed as a Full Stack Developer, delivering projects from concept to deployment, driving improvements in game production workflows.',
      title: 'Stack and Tools:',
      listOfStack: [
        {
          description:
            'Prototypes with Adobe XD, Sketch, Figma and Invision Studio.'
        },
        {
          description:
            'SaaS applications with Vanilla Javascript, VueJS, ReactJs, Django and Python.'
        },
        {
          description: 'Microservices with python and javascript'
        },
        {
          description:
            'Plugins and extensions for Autodesk Maya with Python and Pyside.'
        },
        {
          description:
            'Extensions for Adobe After Effects  with javascript, Vuejs.'
        },
        {
          description:
            'Desktop solutions with ElectronJs, Nodejs, Vuejs or Python + Qt'
        },
        {
          description: 'PostgresSQL and MySQL with Django or Sequelize.'
        },
        {
          description: 'Mixpanel integration to a Design System.'
        },
        {
          description:
            'Shotgrid (Shotgun) integrations. Shotgrid toolkit custom scripts, and automate scripts for Shotgrid web data.'
        },
        {
          description: 'Trello integrations'
        },
        {
          description: 'React Design System'
        },
        {
          description: ' Qt Design System for Python'
        }
      ]
    }
  },
  {
    title: 'UI/UX Designer and Front End Engineer',
    subtitle: '02 Filmes (temporary)',
    date: '6 months',
    jobDescription: {
      description:
        'Designed and developed a project management solution, including branding, UX prototypes, and front-end implementation, delivering an intuitive tool for creative teams.',
      title: 'Stack and Tools:',
      listOfStack: [
        {
          description: 'Prototype with Adobe XD.'
        },
        {
          description: 'SaaS application with ReactJS.'
        },
        {
          description: 'Backend with python and Flask'
        }
      ]
    }
  },
  {
    title: 'UI/UX Design Director and Front End Engineer',
    subtitle: 'Nuvem Agência',
    date: '3 years and 9 months (full time)',
    jobDescription: {
      description:
        'Led end-to-end development of websites and monolithic software solutions, combining UX strategy, UI prototyping, and front-end development to deliver impactful digital products.',
      title: 'Stack and Tools:',
      listOfStack: [
        {
          description: 'Prototype with Sketch and Inkscape.'
        },
        {
          description: 'Monolith application with vanilla javascript and PHP.'
        },
        {
          description: 'Websites with vanilla javascript and PHP.'
        },
        {
          description: 'Wordpress templates and API.'
        }
      ]
    }
  },
  {
    title: 'Digital Marketing Manager',
    subtitle: 'Accelera Vendas',
    date: '2 years and 9 months (full time)',
    jobDescription: {
      description:
        'I started as a designer but quickly moved up, managing digital marketing campaigns and web development projects. This included focusing on WordPress websites, coordinating teams, and enhancing online visibility for improved reach.',
      title: 'Stack and Tools:',
      listOfStack: [
        {
          description: 'Websites with vanilla javascript.'
        },
        {
          description: 'Wordpress templates.'
        },
        {
          description: 'Google Analytics.'
        },
        {
          description: 'Facebook ADS.'
        },
        {
          description: 'Designs for Social Media'
        }
      ]
    }
  },
  {
    title: 'IT Technical Support',
    subtitle: 'Unitecnologia',
    date: '7 months (full time)',
    jobDescription: {
      description:
        'Provided technical support, customer training, and database management, ensuring seamless operation of Delphi and web-based software solutions.',
      title: 'Stack and Tools:',
      listOfStack: [
        {
          description: 'Support for Delphi Softwares.'
        },
        {
          description: 'PHP and Vanilla javascript softwares.'
        },
        {
          description: 'MySql Database.'
        }
      ]
    }
  }
]
