import { shallowMount } from '@vue/test-utils'
import Logo from '@/components/atoms/Logo'

describe('Logo', () => {
  const wrapper = shallowMount(Logo)

  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
