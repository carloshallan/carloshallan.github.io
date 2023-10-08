<template>
  <header>
    <h1 class="post-title">
      <span v-if="projectName" class="green">{{ projectName }} - </span
      >{{ title }}
    </h1>
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

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: String,
    projectName: String,
    alt: String,
    imageName: String,
    snippet: String,
    date: String,
    order: String
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

  @media screen and ({ScreenCondition}: ScreenConditionTabletPortrait)
    width: 100%
    margin-left: 0
</style>
