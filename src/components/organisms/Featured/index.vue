<template>
  <section class="featured">
    <div class="featured--preview">
      <img
        v-if="show.image"
        :src="show.image.original"
        :title="show.name"
        class="featured--preview-img"
      />

      <div v-else class="featured--no-image">
        <ShieldIcon class="featured--no-image-icon" />
      </div>
    </div>

    <div class="featured--content">
      <div class="featured--content-inner">
        <h2>{{ show.name }}</h2>
        <div
          class="featured--content-html"
          v-html="sanitizeHtml(show.summary)"
        />

        <div class="featured--content-row">
          <Button :style="`primary`">Watch {{ show.name }} now</Button>
        </div>

        <Genres :genres="show.genres" />
      </div>
    </div>
  </section>
</template>

<script>
import sanitizeHtml from 'sanitize-html'
import ShieldIcon from '@/components/atoms/ShieldIcon'
import Button from '@/components/atoms/Button'
import Genres from '@/components/atoms/Genres'

export default {
  props: {
    show: {
      type: Object,
      required: true,
    },
  },
  components: {
    ShieldIcon,
    Button,
    Genres,
  },
  methods: {
    sanitizeHtml,
  },
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
