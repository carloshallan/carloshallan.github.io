import { shallowMount } from '@vue/test-utils'
import Gallery from '@/components/Gallery.vue'
import router from '@/router'

describe('Gallery.vue', () => {
  it('Render gallery', () => {
    const gallery = shallowMount(Gallery, {
      global: { plugins: [router] }
    })
    expect(gallery.element).toMatchSnapshot()
  })
})
