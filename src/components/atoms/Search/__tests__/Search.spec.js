import { mount } from '@vue/test-utils'
import Search from '@/components/atoms/Search'

describe('Search', () => {
  const wrapper = mount(Search)

  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
