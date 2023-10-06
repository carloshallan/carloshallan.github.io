<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.slug">
        <v-img :src="post.image" />
        <router-link :to="`/blog/${post.slug}`">{{
          post.previewTitle
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Post {
  title: string
  slug: string
  content: string
  extractedText: string
  previewTitle: string
  snippet: string
  image: string
}

export default Vue.extend({
  name: 'BlogView',
  data() {
    return {
      posts: [] as Array<Post>
    }
  },
  created() {
    const requireContext = require.context(
      '@/views/posts/',
      false,
      /\.mdx$/,
      'sync'
    )

    console.log(requireContext.keys())

    const posts = requireContext.keys().map((filename: string) => {
      const slug = filename.replace(/^\.\/(.*)\.mdx$/, '$1')
      const title = slug
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const content = require('!!raw-loader!@/views/posts/' +
        slug +
        '.mdx').default

      const match = content.match(/\/\/preview([\s\S]*?)endPreview\/\//)
      const extractedText = match ? match[1].trim() : ''

      console.log('extractedText', extractedText)

      const titleMatch = content.match(/title=['"](.*?)['"]/)
      const imageNameMatch = content.match(/imageName=['"](.*?)['"]/)
      const snippetMatch = content.match(/snippet=['"](.*?)['"]/)

      const previewTitle = titleMatch ? titleMatch[1] : ''
      const image = imageNameMatch ? '/blog/' + imageNameMatch[1] : ''
      const snippet = snippetMatch ? snippetMatch[1] : ''

      return {
        title,
        slug,
        content,
        extractedText,
        previewTitle,
        snippet,
        image
      }
    })

    console.log(posts) // Aqui, você pode ver os textos extraídos no console
    this.posts = posts
  }
})
</script>
