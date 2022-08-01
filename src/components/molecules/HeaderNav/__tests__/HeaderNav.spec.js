import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import HeaderNav from '@/components/molecules/HeaderNav'
import { routes } from '@/router'

import Logo from '@/components/atoms/Logo'
import Search from '@/components/atoms/Search'

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

describe('HeaderNav', () => {
  const wrapper = mount(HeaderNav, {
    global: {
      plugins: [router],
    },
  })

  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBe(true)
  })

  test('should render Logo and Search components', () => {
    expect(wrapper.findComponent(Logo).exists()).toBe(true)
    expect(wrapper.findComponent(Search).exists()).toBe(true)
  })
})
