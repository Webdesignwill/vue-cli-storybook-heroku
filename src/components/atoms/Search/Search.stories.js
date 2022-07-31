import Search from '.'

export default {
  title: 'Atoms/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
}

const Template = (args) => ({
  components: { Search },
  setup() {
    return { args }
  },
  template: `<Search />`,
})

export const Default = Template.bind({})
