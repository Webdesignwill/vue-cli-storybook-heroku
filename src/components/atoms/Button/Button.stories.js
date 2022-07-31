import Button from '.'

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
}

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: `<Button type="button" :style="args.style" :disabled="args.disabled">ABN Button</RGButton>`,
})

export const Default = Template.bind({})

export const Primary = Template.bind({})
Primary.args = {
  style: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  style: 'secondary',
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Primary.args,
  disabled: true,
}
