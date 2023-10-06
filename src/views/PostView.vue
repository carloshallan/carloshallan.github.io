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
