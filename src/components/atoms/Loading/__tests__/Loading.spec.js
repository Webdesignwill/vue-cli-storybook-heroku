import { shallowMount } from '@vue/test-utils'
import Loading from '@/components/atoms/Loading'

describe('Loading', () => {
  const wrapper = shallowMount(Loading)

  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
