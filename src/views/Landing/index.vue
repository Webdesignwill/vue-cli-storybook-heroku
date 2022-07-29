<template>
  <div class="landing-page">
    <Featured />
    <Cards />
  </div>
</template>

<script>
import Featured from '@/components/organisms/Featured'
import Cards from '@/components/molecules/Cards'

export default {
  name: 'LandingPage',
  components: {
    Featured,
    Cards,
  },
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
