import { mount } from '@vue/test-utils'
import MainHeader from '@/components/MainHeader.vue'
import router from '@/router'

describe('MainHeader.vue', () => {
  it('Render MainHeader', () => {
    const mainHeader = mount(MainHeader, {
      router
    })
    expect(mainHeader.element).toMatchSnapshot()
  })
})
