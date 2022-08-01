import Groups from '.'
import { shows } from '@/mockData'

export default {
  title: 'Molecules/Groups',
  component: Groups,
  parameters: {
    layout: 'centered',
  },
}

const Template = (args) => ({
  components: { Groups },
  setup() {
    return { args }
  },
  template: `<Groups :group="args" />`,
})

export const Default = Template.bind({})
Default.args = {
  title: 'Storybook',
  shows,
}
