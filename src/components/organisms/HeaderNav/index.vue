<template>
  <div class="header-nav">
    <div class="header-nav--inner">
      <router-link to="/">
        <Logo class="header-nav--logo" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/atoms/Logo'

export default {
  components: {
    Logo,
  },
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
