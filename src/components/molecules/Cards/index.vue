<template>
  <section class="cards">
    <header>
      <h3>SOME GENRE</h3>
    </header>
    <div class="cards--inner">
      <Card />
    </div>
  </section>
</template>

<script>
import Card from '@/components/atoms/Card'
export default {
  components: {
    Card,
  },
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
