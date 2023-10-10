import { mount } from '@vue/test-utils'
import Section from '@/layouts/SectionLayout.vue'

describe('SectionLayout.vue', () => {
  it('Render Section component', () => {
    const section = mount(Section)
    expect(section.element).toMatchSnapshot()
  })
})
