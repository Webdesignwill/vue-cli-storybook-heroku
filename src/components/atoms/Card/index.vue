<template>
  <div class="card">
    <div class="card--preview" v-if="show.image">
      <img
        :src="show.image.medium"
        :title="show.name"
        class="card--preview-img"
      />
    </div>
    <div v-else class="card--no-image">
      <p class="card--no-image-text">No Preview Image</p>
      <ShieldIcon />
    </div>

    <div class="card--screen" />

    <article class="card--overlay">
      <h4 class="card--overlay-title">{{ show.name }}</h4>
      <p
        class="card--overlay-description"
        v-html="sanitizeHtml(show.summary)"
      />
      <Genres :genres="show.genres" />
    </article>
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
