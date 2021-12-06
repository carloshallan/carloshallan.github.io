import { mount } from '@vue/test-utils'
import Timeline from '@/components/Timeline.vue'

describe('Timeline.vue', () => {
  it('Render timeline component', () => {
    const timeline = mount(Timeline)

    expect(timeline.element).toMatchSnapshot()
  })
})
