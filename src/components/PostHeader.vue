<template>
  <header>
    <div class="post-preview">
      //preview
      <br />
      title: {{ title }}
      <br />
      projectName: {{ projectName }}
      <br />
      snippet: {{ snippet }}
      <br />
      image: {{ imageName }}
      <br />
      date: {{ date }}
      <br />
      endPreview//
    </div>

    <h1 class="post-title">
      <span v-if="projectName" class="green">{{ projectName }} - </span
      >{{ title }}
    </h1>
    <VImg :src="`/blog/${imageName}`" :alt="alt" width="100%" height="auto" />
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
    date: String
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

  @media screen and ({ScreenCondition}: ScreenConditionValue)
    width: 100%
    margin-left: 0
</style>
