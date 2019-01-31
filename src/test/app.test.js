import { mount } from '@vue/test-utils'
import FrizaPic from '@/components/friza-pic.vue'

describe('friza-pic', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FrizaPic)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
