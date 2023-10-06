<template>
  <main>
    <Section class="post" color="dark">
      <PostLayout>
        <component :is="dynamicComponent" />
      </PostLayout>
    </Section>
  </main>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'
import Section from '@/layouts/SectionLayout.vue'
import PostLayout from '@/layouts/PostLayout.vue'

export default Vue.extend({
  name: 'PostView',
  components: {
    Section,
    PostLayout
  },
  data() {
    const dynamicComponent: VueConstructor | null = null
    return { dynamicComponent }
  },
  watch: {
    '$route.params.slug': {
      immediate: true,
      handler: 'loadComponent'
    }
  },
  methods: {
    async loadComponent(newSlug: string, oldSlug: string) {
      if (newSlug !== oldSlug || !this.dynamicComponent) {
        let module = null
        try {
          module = await import(
            /* webpackChunkName: "post-[request]" */ `@/views/posts/${newSlug}.mdx`
          )
          this.dynamicComponent = module.default
        } catch (error) {
          module = await import('@/views/PageNotFound.vue')
          console.error('Erro ao carregar o componente MDX', error)
        }

        this.dynamicComponent = module.default
      }
    }
  }
})
</script>
<style lang="stylus">
.post
  width: 80%
  height: auto
  margin auto auto 50px auto

.post .button
  width: auto
  margin: 40px 0

.post .v-image
  margin: 20px 0

.post h1
  font-size 36px

.post h2, .post h3, .post h4, .post h5
  font-size 30px

.post h1, .post h2, .post h3, .post h4, .post h5
  padding 20px 0
</style>
