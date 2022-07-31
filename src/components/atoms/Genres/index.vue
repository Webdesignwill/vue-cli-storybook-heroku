<template>
  <div class="genres">
    <ul class="genres--list">
      <li
        class="genres--list-item"
        v-for="(genre, index) in genres"
        :key="index"
      >
        {{ genre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    genres: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
