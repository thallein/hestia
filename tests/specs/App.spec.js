import { shallowMount } from '@vue/test-utils'
import WelcomeMessage from '@/components/home/welcomeMessage'

describe('WelcomeMessage.vue', () => {
  it('renders props.msg when passed', () => {
    const name = 'tester'

    const wrapper = shallowMount(WelcomeMessage, {
      propsData: { name }
    })

    expect(wrapper.text()).toBe('Hestia')
  })
})
