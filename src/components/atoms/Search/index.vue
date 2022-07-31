<template>
  <div class="search">
    <input
      v-debounce:300ms="handleKeyUp"
      placeholder="Search titles"
      class="search--input"
      ref="search"
      type="text"
    />
  </div>
</template>

<script>
import { vue3Debounce } from 'vue-debounce'

export default {
  directives: {
    debounce: vue3Debounce({ lock: true }),
  },
  methods: {
    handleKeyUp() {
      const { value } = this.$refs.search
      const action = !value.length ? 'FETCH' : 'SEARCH'
      this.$store.commit('search/SET_QUERY', value)

      this.$store.dispatch(`schedule/${action}`)
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
