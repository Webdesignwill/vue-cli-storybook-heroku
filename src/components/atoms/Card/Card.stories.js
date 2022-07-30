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
  show: {
    name: 'Storybook',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus tempor quam, a feugiat elit ultrices quis. Suspendisse nunc libero, dictum sed aliquet sit amet, posuere posuere eros. Pellentesque eleifend odio in vehicula tempus. Mauris pulvinar nunc varius, blandit quam at, pharetra ipsum. Cras eget maximus neque, sed posuere massa. Duis blandit sed tellus quis pulvinar. Fusce posuere tincidunt sem, quis pretium eros maximus ac. Nullam iaculis est eu aliquet placerat. Vivamus at lorem commodo, volutpat enim eu, consectetur nunc.',
  },
}

export const WithImage = Template.bind({})
WithImage.args = {
  show: {
    ...Default.args.show,
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/416/1042390.jpg',
    },
  },
}
