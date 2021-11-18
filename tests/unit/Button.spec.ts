import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

describe('Button.vue', () => {
  it('Render button with children', () => {
    const text = 'Click Here'
    const button = shallowMount(Button, {
      slots: { default: text }
    })
    expect(button.text()).toContain(text)
  })
})
