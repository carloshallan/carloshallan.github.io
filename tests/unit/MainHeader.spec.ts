import { mount } from '@vue/test-utils'
import MainHeader from '@/components/MainHeader.vue'
import router from '@/router'
import vuetify from '@/plugins/vuetify'
import i18n from '@/i18n'

describe('MainHeader.vue', () => {
  it('Render MainHeader', () => {
    const mainHeader = mount(MainHeader, {
      global: { plugins: [router, i18n, vuetify] }
    })
    expect(mainHeader.element).toMatchSnapshot()
  })
})
