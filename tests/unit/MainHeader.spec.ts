import { mount } from '@vue/test-utils'
import MainHeader from '@/components/MainHeader.vue'
import router from '@/router'

describe('MainHeader.vue', () => {
  it('Render MainHeader', () => {
    const mainHeader = mount(MainHeader, { global: { plugins: [router] } })
    expect(mainHeader.element).toMatchSnapshot()
  })
})
