import vueRouter from 'storybook-vue3-router'
import routes from '@/router/routes'
import Card from '.'

export default {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
}

const Template = (args) => ({
  components: { Card },
  setup() {
    return { args }
  },
  template: `<Card v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {
  show: {
    id: 56139,
    url: 'https://www.tvmaze.com/shows/56139/meta-runner',
    name: 'Meta Runner',
    type: 'Animation',
    language: 'English',
    genres: [],
    status: 'Running',
    runtime: 15,
    averageRuntime: 15,
    premiered: '2019-07-25',
    ended: null,
    officialSite: 'https://youtube.com/channel/UCn_FAXem2-e3HQvmK-mOH4g',
    schedule: { time: '', days: ['Friday'] },
    rating: { average: null },
    weight: 51,
    network: null,
    webChannel: {
      id: 21,
      name: 'YouTube',
      country: null,
      officialSite: 'https://www.youtube.com',
    },
    dvdCountry: null,
    externals: { tvrage: null, thetvdb: 367418, imdb: 'tt10695770' },
    image: null,
    summary:
      '<p><b>Meta Runner</b> is an Australian computer animated web television series created and developed by Glitch Productions</p>',
    updated: 1658668666,
    _links: {
      self: { href: 'https://api.tvmaze.com/shows/56139' },
      previousepisode: { href: 'https://api.tvmaze.com/episodes/2354249' },
      nextepisode: { href: 'https://api.tvmaze.com/episodes/2354250' },
    },
  },
}

export const WithImage = Template.bind({})
WithImage.args = {
  show: {
    ...Default.args.show,
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/416/1042390.jpg',
    },
  },
}

Default.decorators = [vueRouter(routes)]
WithImage.decorators = [vueRouter(routes)]
