<template>
  <div>
    <HeaderNav />

    <main role="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import HeaderNav from '@/components/organisms/HeaderNav'
export default {
  components: {
    HeaderNav,
  },
}
</script>

<style lang="scss">
@import '~@/assets/scss/index.scss';
</style>
