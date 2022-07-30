import ShieldIcon from '.'

export default {
  title: 'Atoms/ShieldIcon',
  component: ShieldIcon,
  parameters: {
    layout: 'centered',
  },
}

const Template = (args) => ({
  components: { ShieldIcon },
  setup() {
    return { args }
  },
  template: `<ShieldIcon style="width: 100px;" v-bind="args" />`,
})

export const Default = Template.bind({})
