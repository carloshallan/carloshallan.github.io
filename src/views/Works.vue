<template>
  <div class="blog-container">
    <h1 class="main-title">{{ $t('work.title') }}</h1>
    <div v-for="post in posts" :key="post.slug" class="card">
      <router-link :to="`/work/${post.slug}`" class="card-link">
        <v-img :src="post.image" class="card-img" width="auto" />
        <div class="card-content">
          <span v-if="post.featured" class="featured">
            {{ $t('work.featured') }}
          </span>
          <span class="project-name">{{ post.projectName }}</span>
          <span class="date">{{ post.date }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Post {
  title: string
  slug: string
  content: string
  previewTitle: string
  snippet: string
  image: string
  projectName: string
  date: string
  order: string
  featured: boolean
}

// As opções do import.meta.glob precisam ser literais (o Vite as lê no build)
const postSources = import.meta.glob<string>('@/views/posts/*.mdx', {
  query: '?raw',
  import: 'default',
  eager: true
})
// Versões em português; quando faltar uma, o post em inglês é usado
const ptPostSources = import.meta.glob<string>('@/views/posts/pt/*.mdx', {
  query: '?raw',
  import: 'default',
  eager: true
})

export default defineComponent({
  name: 'BlogView',
  computed: {
    posts(): Array<Post> {
      return this.loadPosts(this.$i18n.locale)
    }
  },
  methods: {
    loadPosts(locale: string): Array<Post> {
      const posts = Object.entries(postSources).map(([filename, enContent]) => {
        const slug = filename.replace(/^.*\/(.*)\.mdx$/, '$1')
        const title = slug
        const ptContent = ptPostSources[`/src/views/posts/pt/${slug}.mdx`]
        const content = locale === 'pt-BR' && ptContent ? ptContent : enContent

        const titleMatch = content.match(/title=['"](.*?)['"]/)
        const imageNameMatch = content.match(/imageName=['"](.*?)['"]/)
        const snippetMatch = content.match(/snippet=['"](.*?)['"]/)
        const dateMatch = content.match(/date=['"](.*?)['"]/)
        const projectNameMatch = content.match(/projectName=['"](.*?)['"]/)
        const orderMatch = content.match(/order=['"](.*?)['"]/)
        const featuredMatch = content.match(/featured=['"](.*?)['"]/)

        const previewTitle = titleMatch ? titleMatch[1] : ''
        const image = imageNameMatch ? '/work/' + imageNameMatch[1] : ''
        const snippet = snippetMatch ? snippetMatch[1] : ''
        const date = dateMatch ? dateMatch[1] : ''
        const projectName = projectNameMatch ? projectNameMatch[1] : ''
        const order = orderMatch ? orderMatch[1] : '-1'
        const featured = featuredMatch ? featuredMatch[1] === 'true' : false

        return {
          title,
          slug,
          content,
          previewTitle,
          snippet,
          image,
          date,
          projectName,
          order,
          featured
        }
      })

      return posts.sort(
        (a: Post, b: Post) => parseInt(a.order) - parseInt(b.order)
      )
    }
  }
})
</script>
<style lang="stylus" scoped>
@import '../styles/default.styl'

.blog-container
  width: 70%
  margin 0 auto
  padding: 50px 0
  display flex
  flex-direction column
  gap 20px

  .main-title
    text-align center
    font-size 2.5em
    margin-bottom 50px

  @media screen and ({ScreenCondition}: ScreenConditionValue)
    width: 80% !important

  @media screen and ({ScreenCondition}: ScreenConditionTabletPortrait)
    width: 90% !important

    .main-title
      font-size 2em

.card
  background-color #150823
  border-radius 10px
  box-shadow 10px 10px 10px rgba(0, 0, 0, 0.2)
  margin: 20px 0
  position relative
  display flex
  align-items center
  justify-content center
  transition: transform 0.3s

  &:hover
    transform: scale(1.05)
    .card-link
      border: 2px solid light-purple


  &:nth-child(even)
    border-color: purple

  &:not(:last-child)::after
    content: ''
    width 10%
    height: 2px !important
    display: block
    border-width 1px
    border-style dashed
    border-color: light-purple
    position absolute
    bottom: -30px


.card-link
  border-radius 10px
  overflow hidden
  text-decoration: none;
  color: inherit;
  display flex
  border: 2px solid transparent
  transtion border 0.3s

  @media screen and ({ScreenCondition}: ScreenConditionTabletPortrait)
    flex-direction column

    .card-img
      max-width: 100%

    .project-name
      font-size 1.25em
      margin-bottom 10px

    .date
      font-size 1em
      margin-top 2px

    .card-content
      padding: 50px 10px


.card-img {
  max-width: 65%;
  background-color dark-pink
}

.card-content {
  width 100%
  padding: 30px;
  display flex
  align-items center
  justify-content center
  flex-direction column
}

.featured
  color: light-pink
  font-size 0.9em
  text-transform uppercase
  letter-spacing 0.1em
  margin-bottom 10px

.project-name
  color: green
  font-size 1.5em
  align-self center
  text-align center

.preview-title {
  font-size: 1.25em;
  margin: 10px 0;
}

.snippet {
  color: #666;
}

.date {
  display: block;
  margin-top: 10px;
  color: #888;
  font-size: 1.25em;
}
</style>
