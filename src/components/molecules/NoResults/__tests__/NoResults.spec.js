import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import NoResults from '@/components/molecules/NoResults'
import Logo from '@/components/atoms/Logo'

describe('NoResults', () => {
  let store
  let wrapper

  beforeEach(() => {
    store = createStore({
      state: { search: { query: 'Monkey Island' } },
    })

    wrapper = mount(NoResults, {
      global: { plugins: [store] },
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBe(true)
  })

  test('should render correct html content', () => {
    expect(wrapper.html()).toContain(
      'There are no results for the search <i>Monkey Island</i>'
    )
  })

  test('should render Logo component', () => {
    expect(wrapper.findComponent(Logo).exists()).toBe(true)
  })
})
