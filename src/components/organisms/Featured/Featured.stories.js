import Featured from '.'

export default {
  title: 'Organisms/Featured',
  component: Featured,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (args) => ({
  components: { Featured },
  setup() {
    return args
  },
  template: `<Featured v-bind="args" />`,
})

export const Default = Template.bind({})
