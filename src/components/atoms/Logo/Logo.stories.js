import Logo from '.'

export default {
  title: 'Atoms/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
}

const Template = (args) => ({
  components: { Logo },
  setup() {
    return { args }
  },
  template: `<Logo />`,
})

export const Default = Template.bind({})
