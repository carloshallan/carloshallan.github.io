import { mount } from '@vue/test-utils'
import Gallery from '@/components/Gallery.vue'

describe('Gallery.vue', () => {
  it('Render gallery', () => {
    const gallery = mount(Gallery)
    expect(gallery.element).toMatchSnapshot()
  })
})
