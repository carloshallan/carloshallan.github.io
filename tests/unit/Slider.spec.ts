import { mount } from '@vue/test-utils'
import Slider from '@/components/Slider.vue'
import { CustomSlide } from '@/types'

const slides: Array<CustomSlide> = [
  {
    order: 3,
    title: 'is a test',
    description: 'description test'
  }
]

describe('Slider.vue', () => {
  it('Render slider component', () => {
    const slider = mount(Slider, {
      propsData: {
        slides
      }
    })
    expect(slider.element).toMatchSnapshot()
  })
})
