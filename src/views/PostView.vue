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
import { defineComponent, markRaw, type Component } from 'vue'
import Section from '@/layouts/SectionLayout.vue'
import PostLayout from '@/layouts/PostLayout.vue'

type PostModule = { default: Component }

const posts = import.meta.glob<PostModule>('@/views/posts/*.mdx')
// Versões em português; quando faltar uma, o post em inglês é usado
const ptPosts = import.meta.glob<PostModule>('@/views/posts/pt/*.mdx')

export default defineComponent({
  name: 'PostView',
  components: {
    Section,
    PostLayout
  },
  data() {
    return { dynamicComponent: null as Component | null }
  },
  computed: {
    postKey(): string {
      return `${this.$i18n.locale}:${this.$route.params.slug}`
    }
  },
  watch: {
    postKey: {
      immediate: true,
      handler: 'loadComponent'
    }
  },
  methods: {
    async loadComponent() {
      const requestedKey = this.postKey
      const slug = String(this.$route.params.slug)
      let module: PostModule
      try {
        const loader =
          (this.$i18n.locale === 'pt-BR' &&
            ptPosts[`/src/views/posts/pt/${slug}.mdx`]) ||
          posts[`/src/views/posts/${slug}.mdx`]
        if (!loader) throw new Error(`Post "${slug}" not found`)
        module = await loader()
      } catch (error) {
        module = await import('@/views/PageNotFound.vue')
        console.error('Erro ao carregar o componente MDX', error)
      }

      // Ignora respostas antigas se o post ou o idioma mudou no meio do caminho
      if (requestedKey !== this.postKey) return
      this.dynamicComponent = markRaw(module.default)
    }
  }
})
</script>
