<template>
  <div class="landing-page">
    <Loading v-if="fetching" />
    <NoResults v-else-if="noResults" />

    <template v-else>
      <Featured :show="featured" />
      <Groups v-for="(group, index) in groups" :key="index" :group="group" />
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Featured from '@/components/organisms/Featured'
import Groups from '@/components/molecules/Groups'
import Loading from '@/components/atoms/Loading'
import NoResults from '@/components/molecules/NoResults'

export default {
  name: 'LandingPage',
  components: {
    Featured,
    Groups,
    Loading,
    NoResults,
  },
  computed: mapState({
    error: (state) => state.shows.error,
    fetching: (state) => state.shows.fetching,
    groups: (state) => state.shows.groups,
    featured: (state) => state.shows.featured,
    noResults: (state) => state.shows.noResults,
  }),
  created() {
    this.$store.dispatch('shows/FETCH')
  },
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
