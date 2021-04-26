import MessageContainer from '@/components/MessageContainer.vue'
import { mount } from '@vue/test-utils'

describe('MessageContainer', () => {
  it('Wraps MessageDisplay component', () => {
    const wrapper = mount(MessageContainer, {
      stubs: ['MessageDisplay'],
    })

    const mockMessage = ''
    console.log(wrapper.html())
    const message = wrapper.find('[data-testid="message"').element.textContent
    expect(message).toEqual(mockMessage)
  })
})
