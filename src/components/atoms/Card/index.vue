<template>
  <div class="card">
    <router-link :to="`/show/${show.externals.imdb}`">
      <div class="card--preview" v-if="show.image">
        <img
          :src="show.image.medium"
          :title="show.name"
          class="card--preview-img"
        />
      </div>
      <div v-else class="card--no-image">
        <p class="card--no-image-text">{{ show.name }}</p>
        <ShieldIcon />
      </div>

      <div class="card--screen" />

      <article class="card--overlay">
        <div>
          <h4 class="card--overlay-title">{{ show.name }}</h4>
          <div class="card--overlay-meta">
            <small class="card--overlay-language">{{ show.language }}</small>
            <p class="card--overlay-rating" v-if="show.rating.average">
              Rating {{ show.rating.average }}
            </p>
          </div>
          <div class="card--overlay-html" v-html="sanitizeHtml(show.summary)" />
        </div>

        <Genres :genres="show.genres" />
      </article>
    </router-link>
  </div>
</template>

<script>
import sanitizeHtml from 'sanitize-html'
import ShieldIcon from '@/components/atoms/ShieldIcon'
import Genres from '@/components/atoms/Genres'

export default {
  components: {
    ShieldIcon,
    Genres,
  },
  props: {
    show: {
      type: Object,
      required: true,
    },
  },
  methods: {
    sanitizeHtml,
  },
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
