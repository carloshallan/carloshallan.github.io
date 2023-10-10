<template>
  <div class="Media">
    <v-img v-if="isImage" :src="src" max-width="100%" class="media"></v-img>

    <v-responsive v-else max-width="100%">
      <video controls width="100%" class="media" :src="src"></video>
    </v-responsive>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true
    }
  },
  computed: {
    isImage() {
      return /\.(jpeg|jpg|gif|png)$/i.test(this.src)
    }
  }
})
</script>

<style scoped>
.media {
  max-width: 100%;
}
</style>
