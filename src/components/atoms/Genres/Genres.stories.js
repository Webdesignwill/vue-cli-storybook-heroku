import Genres from '.'

export default {
  title: 'Atoms/Genres',
  component: Genres,
  parameters: {
    layout: 'centered',
  },
}

const Template = (args) => ({
  components: { Genres },
  setup() {
    return { args }
  },
  template: `<Genres :genres="args.genres" />`,
})

export const Default = Template.bind({})
Default.args = {
  genres: ['Action', 'Adventure', 'Romance', 'Horror'],
}
