import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import Featured from '@/components/organisms/Featured'
import Logo from '@/components/atoms/Logo'
import { routes } from '@/router'
import { show, showNoImage } from '@/mockData'

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

describe('Featured', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Featured, {
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
    const wrapper = mount(Featured, {
      global: {
        plugins: [router],
      },
      props: {
        show: showNoImage,
      },
    })

    expect(wrapper.find('.featured--preview-img').exists()).toBe(false)
  })

  test('should show the Logo component', () => {
    const wrapper = mount(Featured, {
      global: {
        plugins: [router],
      },
      props: {
        show: showNoImage,
      },
    })

    expect(wrapper.findComponent(Logo).exists()).toBe(true)
  })

  test('should show the correct rating of 5.5', () => {
    const wrapper = mount(Featured, {
      global: {
        plugins: [router],
      },
      props: {
        show: showNoImage,
      },
    })

    expect(wrapper.html()).toContain('<h4>Rating 5.5</h4>')
  })
})
