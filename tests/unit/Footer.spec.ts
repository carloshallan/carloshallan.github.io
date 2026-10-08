import { mount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'
import i18n from '@/i18n'

describe('Footer.vue', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2026, 0, 1))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('Render Footer component', () => {
    const footer = mount(Footer, { global: { plugins: [i18n] } })
    expect(footer.element).toMatchSnapshot()
  })
})
