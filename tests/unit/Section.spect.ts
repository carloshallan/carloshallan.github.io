import { mount } from '@vue/test-utils'
import Section from '@/components/Section.vue'

describe('Section.vue', () => {
  it('Render Section component', () => {
    const section = mount(Section)
    expect(section.element).toMatchSnapshot()
  })
})
