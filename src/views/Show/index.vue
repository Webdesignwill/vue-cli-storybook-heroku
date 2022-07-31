<template>
  <div class="show-page">
    <Loading v-if="fetching" />

    <template v-else>
      <section class="show-page--preview">
        <img
          v-if="show.image"
          :src="show.image.original"
          :title="show.name"
          class="show-page--preview-img"
        />
      </section>

      <section class="show-page--content">
        <div class="show-page--content-inner">
          <h1>{{ show.name }}</h1>
          <small>{{ show.language }}</small>
          <h4>Rating {{ show.rating.average }}</h4>
          <div
            class="show-page--content-html"
            v-html="sanitizeHtml(show.summary)"
          />
        </div>
      </section>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import sanitizeHtml from 'sanitize-html'
import Loading from '@/components/atoms/Loading'

export default {
  name: 'ShowPage',
  components: {
    Loading,
  },
  computed: mapState({
    show: (state) => state.show.data,
    error: (state) => state.show.error,
    fetching: (state) => state.show.fetching,
  }),
  created() {
    this.$store.dispatch('show/FETCH', this.$route.params.id)
  },
  methods: {
    sanitizeHtml,
  },
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
