import { shallowMount } from '@vue/test-utils'
import ShieldIcon from '@/components/atoms/ShieldIcon'

describe('ShieldIcon', () => {
  const wrapper = shallowMount(ShieldIcon)

  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
