import { mount } from '@vue/test-utils'
import Nav from '@/components/Navigator.vue'
import router from '@/router'

describe('Navigator.vue', () => {
  it('Render Navigator', () => {
    const navigator = mount(Nav, { global: { plugins: [router] } })

    expect(navigator.element).toMatchSnapshot()
  })
})
