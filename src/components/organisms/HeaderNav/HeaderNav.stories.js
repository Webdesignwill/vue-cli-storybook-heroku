import vueRouter from 'storybook-vue3-router'
import HeaderNav from '.'

export default {
  title: 'Organisms/HeaderNav',
  component: HeaderNav,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (args) => ({
  components: { HeaderNav },
  setup() {
    return args
  },
  template: `<HeaderNav v-bind="args" />`,
})

export const Default = Template.bind({})

Default.decorators = [vueRouter()]
