import { shallowMount } from '@vue/test-utils'
import Button from '@/components/atoms/Button'

describe('Button', () => {
  const wrapper = shallowMount(Button)

  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
