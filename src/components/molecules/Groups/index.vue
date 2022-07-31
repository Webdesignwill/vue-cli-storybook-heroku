<template>
  <section class="groups">
    <header class="groups--header">
      <h3>{{ group.title }}</h3>
    </header>
    <div class="groups--inner">
      <Card v-for="(show, index) in group.shows" :key="index" :show="show" />
    </div>
  </section>
</template>

<script>
import Card from '@/components/atoms/Card'
export default {
  props: {
    group: {
      type: Object,
      required: true,
    },
  },
  components: {
    Card,
  },
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
