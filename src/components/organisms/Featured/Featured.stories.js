import vueRouter from 'storybook-vue3-router'
import Featured from '.'
import { routes } from '@/router'
import show from '@/mockData/show'

export default {
  title: 'Organisms/Featured',
  component: Featured,
  parameters: {
    layout: 'centered',
  },
}

const Template = (args) => ({
  components: { Featured },
  setup() {
    return { args }
  },
  template: `<Featured :show="args.show" />`,
})

export const Default = Template.bind({})
Default.args = {
  show,
}

Default.decorators = [vueRouter(routes)]
