<template>
  <div class="header-nav">
    <div class="header-nav--inner">
      <router-link to="/" class="header-nav--link">
        <Logo />
      </router-link>

      <Search class="header-nav--search" v-show="show" />
    </div>
  </div>
</template>

<script>
import Logo from '@/components/atoms/Logo'
import Search from '@/components/atoms/Search'

export default {
  data() {
    return {
      show: false,
    }
  },
  watch: {
    $route: {
      deep: true,
      handler(to) {
        this.show = to.name === 'show' ? false : true // I know, I know :(
      },
    },
  },
  components: {
    Logo,
    Search,
  },
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
