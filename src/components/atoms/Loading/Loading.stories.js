import Loading from '.'

export default {
  title: 'Atoms/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
}

const Template = (args) => ({
  components: { Loading },
  setup() {
    return { args }
  },
  template: `<Loading />`,
})

export const Default = Template.bind({})
