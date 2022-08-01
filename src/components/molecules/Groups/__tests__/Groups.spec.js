import { mount } from '@vue/test-utils'
import { shows } from '@/mockData'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import Groups from '@/components/molecules/Groups'
import Card from '@/components/atoms/Card'

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

describe('Groups', () => {
  const wrapper = mount(Groups, {
    global: {
      plugins: [router],
    },
    props: {
      group: {
        title: 'Monkey Island',
        shows,
      },
    },
  })

  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBe(true)
  })

  test('should render title correctly', () => {
    expect(wrapper.html()).toContain('Monkey Island (3)')
  })

  test('should render Card component', () => {
    expect(wrapper.findComponent(Card).exists()).toBe(true)
  })

  test('should render 3 Card components', () => {
    expect(wrapper.findAllComponents(Card).length).toBe(3)
  })
})
