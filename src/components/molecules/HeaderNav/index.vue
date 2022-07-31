<template>
  <div class="header-nav">
    <div class="header-nav--inner">
      <router-link to="/" class="header-nav--link">
        <Logo />
        <small class="header-nav--strap">@ THE MOVIES</small>
      </router-link>

      <Search class="header-nav--search" />
    </div>
  </div>
</template>

<script>
import Logo from '@/components/atoms/Logo'
import Search from '@/components/atoms/Search'

export default {
  components: {
    Logo,
    Search,
  },
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
