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
        <h2 class="featured--content-title">{{ show.name }}</h2>
        <small class="featured--content-language">{{ show.language }}</small>
        <h4>Rating {{ show.rating.average }}</h4>
        <div
          class="featured--content-html"
          v-html="sanitizeHtml(show.summary)"
        />

        <div class="featured--content-row">
          <router-link :to="`/show/${show.externals.imdb}`">
            <Button :style="`secondary`">More Info</Button>
          </router-link>
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
