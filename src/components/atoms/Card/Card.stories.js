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
