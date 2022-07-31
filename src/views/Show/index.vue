<template>
  <div class="show-page">
    <Loading v-if="fetching" />

    <template v-else>
      <h1>SHOW PAGE</h1>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loading from '@/components/atoms/Loading'

export default {
  name: 'ShowPage',
  components: {
    Loading,
  },
  computed: mapState({
    error: (state) => state.show.error,
    fetching: (state) => state.show.fetching,
  }),
  created() {
    this.$store.dispatch('show/FETCH', this.$route.params.id)
  },
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
