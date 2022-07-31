<template>
  <div class="no-results">
    <h2>
      There are no results for the search <i>{{ query }}</i>
    </h2>
    <p>
      Why not try another search and see if you can find what you're looking
      for?
    </p>

    <Shield class="no-results--shield" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Shield from '@/components/atoms/ShieldIcon'
export default {
  components: {
    Shield,
  },
  computed: mapState({
    query: (state) => state.search.query,
  }),
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
