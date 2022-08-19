import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import Card from '@/components/atoms/Card'
import Logo from '@/components/atoms/Logo'
import { routes } from '@/router'
import { show, showNoImage } from '@/mockData'

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

describe('Card', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Card, {
      global: {
        plugins: [router],
      },
      props: {
        show,
      },
    })

    expect(wrapper.exists()).toBe(true)
  })

  test('should NOT display the image', () => {
    const wrapper = mount(Card, {
      global: {
        plugins: [router],
      },
      props: {
        show: showNoImage,
      },
    })

    expect(wrapper.find('.card--preview-img').exists()).toBe(false)
  })

  test('should show the Logo component', () => {
    const wrapper = mount(Card, {
      global: {
        plugins: [router],
      },
      props: {
        show: showNoImage,
      },
    })

    expect(wrapper.findComponent(Logo).exists()).toBe(true)
  })
})
