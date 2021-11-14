<template>
  <Section color="dark-purple" class="workTimelineSection">
    <div class="row">
      <div class="column">
        <h1><span class="green">Where</span> have I been?</h1>
      </div>
      <div class="column">
        <work-timeline :jobs="jobs" />
      </div>
    </div>
  </Section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/components/Section.vue'
import WorkTimeline from '@/components/Timeline.vue'
import { Job } from '@/types'

export default defineComponent({
  name: 'WorkTimelineSection',
  components: {
    Section,
    WorkTimeline
  },
  setup() {
    const jobs: Array<Job> = [
      {
        title: 'Pipeline Full Stack Engineer',
        subtitle: 'Garena Studio',
        date: 'Current Job',
        jobDescription: {
          description:
            "I'm working with a 2D Game studio pipeline solution as UX/UI designer and Full Stack Engineer.",
          title: 'Stack and tools:',
          listOfStack: [
            {
              description: 'Prototype with Figma.'
            },
            {
              description: 'SaaS application with VueJS.'
            },
            {
              description: 'Desktop and Application with ElectronJS and VueJS'
            },
            {
              description: 'Firebase realtime database and storage.'
            },
            {
              description: 'Design System web solution with VueJS and Figma.'
            },
            {
              description: 'Extensions for Adobe softwares'
            },
            {
              description: 'Integration with Monday.com'
            }
          ]
        }
      },
      {
        title: 'Pipeline Technical Director',
        subtitle: 'Roof Studio',
        date: 'Current Job',
        jobDescription: {
          description:
            "I'm working with 3D Studio solutions as UX/UI designer and Full Stack Engineer.",

          title: 'Stack and Tools:',
          listOfStack: [
            {
              description: 'Prototype with Figma.'
            },
            {
              description: 'SaaS application with VueJS.'
            },
            {
              description: 'Design System web and QT for python applications.'
            },
            {
              description: 'Desktop and Autodesk Maya plugins.'
            }
          ]
        }
      },
      {
        title: 'Pipeline Full Stack Engineer',
        subtitle: 'Wildife Studios',
        date: '3 years and 6 months',
        jobDescription: {
          description:
            'I built many solutions for 3D pipeline as UX/UI designer, and Full Stack Engineer.',
          title: 'Stack and Tools:',
          listOfStack: [
            {
              description:
                'Prototypes with Adobe XD, Sketch, Figma and Invision Studio.'
            },
            {
              description:
                'SaaS applications with Vanilla Javascript, VueJS, ReactJS, Django and Python.'
            },
            {
              description:
                'Plugins and extensions for Autodesk Maya, Adobe applications with ElectionJS + VueJS, Python + Qt.'
            },
            {
              description:
                'Desktop applications with ElectronJS + VueJS, Python + Qt.'
            },
            {
              description:
                'Shotgrid (Shotgun) integrations. Shotgrid toolkit custom scripts, and automate sripts for Shotgrid web data.'
            },
            {
              description:
                'Design Systems for web and desktop solutions with ReactJS and Qt.'
            }
          ]
        }
      },
      {
        title: 'Pipeline UI/UX Designer',
        subtitle: '02 Filmes',
        date: '6 months',
        jobDescription: {
          description:
            'I built a solution for 3D Studio as UX/UI designer, and Front End Engineer. In this project I made a brand, UX low fidelity and high fidelity prototype. Also I worked as a development Front End solutioon for part of the prototype.',
          title: 'Stack and Tools: ',
          listOfStack: [
            {
              description: 'Prototype with Adobe XD.'
            },
            {
              description: 'SaaS application with ReactJS.'
            }
          ]
        }
      },
      {
        title: 'UI Design and Front End Director',
        subtitle: '02 Filmes',
        date: '6 months',
        jobDescription: {
          description:
            'I worked with entre process of build websites and monoliths softwares based at UX solutions. The entire process consist in the UX planning, UI prototype and code Front End development.',
          title: 'Stack and Tools:',
          listOfStack: [
            {
              description: 'Prototype with Sketch and Inkscape.'
            },
            {
              description:
                'Monolith application with vanilla javascript and PHP.'
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
        date: '2 years and 9 months',
        jobDescription: {
          description:
            'I worked building wordpress websites, advertising teams management, and Ad Management.',
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
            }
          ]
        }
      },
      {
        title: 'IT Technical Support',
        subtitle: 'Unitecnologia',
        date: '7 months',
        jobDescription: {
          description:
            'I worked providing support service, training for customers, and database management.',
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
    return { jobs }
  }
})
</script>
<style lang="stylus" scoped>
h1
  text-align right

.row
  flex-direction column

  .column:last-child
    display flex
    align-items center
    justify-content center
</style>
