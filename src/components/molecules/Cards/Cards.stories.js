import Cards from '.'

export default {
  title: 'Molecules/Cards',
  component: Cards,
  parameters: {
    layout: 'centered',
  },
}

const Template = (args) => ({
  components: { Cards },
  setup() {
    return { args }
  },
  template: `<Cards />`,
})

export const Default = Template.bind({})
