import vueRouter from 'storybook-vue3-router'
import { routes } from '@/router'
import { show, showNoImage } from '@/mockData'
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
Default.args = {
  show: showNoImage,
}

export const WithImage = Template.bind({})
WithImage.args = {
  show,
}

Default.decorators = [vueRouter(routes)]
WithImage.decorators = [vueRouter(routes)]
