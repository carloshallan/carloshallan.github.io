<template>
  <header>
    <h1 class="post-title">
      <span v-if="projectName" class="green">{{ projectName }} - </span
      >{{ title }}
    </h1>
    <p>
      <em parentname="p">{{ stack }}</em>
    </p>
    <VImg
      class="color-border"
      v-if="imageName"
      :src="`/work/${imageName}`"
      :alt="alt"
      width="100%"
      height="auto"
    />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    title: String,
    projectName: String,
    alt: String,
    imageName: String,
    snippet: String,
    date: String,
    order: String,
    featured: String,
    stack: String
  },
  name: 'PostHeader'
})
</script>

<style lang="stylus" scoped>
@import '../styles/default'

.post-preview
  display: none

header
  width: 120%
  margin-left: -10%
  padding: 50px 0 25px 0
  display: flex
  flex-direction: column
  align-items center

  p
    text-align center

  @media screen and ({ScreenCondition}: ScreenConditionTabletPortrait)
    width: 100%
    margin-left: 0
</style>
