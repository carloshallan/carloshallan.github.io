import { mount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer.vue', () => {
  it('Render Footer component', () => {
    const footer = mount(Footer)
    expect(footer.element).toMatchSnapshot()
  })
})
