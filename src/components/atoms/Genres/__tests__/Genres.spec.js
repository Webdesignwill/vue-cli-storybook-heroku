import { shallowMount } from '@vue/test-utils'
import Genres from '@/components/atoms/Genres'

describe('Genres', () => {
  const wrapper = shallowMount(Genres, {
    props: {
      genres: ['Action', 'Thriller', 'Romance'],
    },
  })

  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBe(true)
  })

  test('should render 3 Genres', () => {
    expect(wrapper.findAll('.genres--list-item').length).toBe(3)
  })
})
