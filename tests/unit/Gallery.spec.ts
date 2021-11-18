import { mount } from '@vue/test-utils'
import Gallery from '@/components/Gallery.vue'
import router from '@/router'

describe('Gallery.vue', () => {
  it('Render gallery', () => {
    const gallery = mount(Gallery, {
      global: {
        plugins: [router]
      }
    })
    expect(gallery.element).toMatchSnapshot()
  })
})
