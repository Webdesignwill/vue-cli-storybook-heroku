<template>
  <button
    :disabled="disabled"
    :class="`button ${style}`"
    :type="type"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
const acceptedStyles = ['default', 'primary', 'secondary']

export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'button',
    },
    style: {
      type: String,
      required: false,
      default: 'default',
      validator: (value) => acceptedStyles.includes(value),
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
