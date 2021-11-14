<template>
  <div class="WorkTimeline">
    <div class="job">
      <div class="header">
        <h2 class="title">Title</h2>
        <h3 class="subtitle">Subtitle</h3>
      </div>
      <ul class="jobDescription">
        <li>Description of job</li>
        <li>
          <strong>Slack and tools:</strong>
          <ul>
            <li>Sub description</li>
            <li>Sub description 2</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'workTimeline'
})
</script>
<style lang="stylus" scoped>
@import "../styles/default.styl"

.job
  display flex
  justify-content space-between
  position relative
  gap 30px

  ul
    li
      list-style none
      padding-bottom 10px

      ul
        margin-top 20px

      li
        list-style circle
        margin-left 40px

.jobDescription
  position relative
  padding 0 40px

.jobDescription::after
.jobDescription::before
  content ''
  width 12px
  background-color pink
  display block
  position absolute
  border-radius 30px
  left 0px

.jobDescription::before
  top 0
  height 12px !important

.jobDescription::after
  top 22px
  height calc(100% - 30px)

h1
  position relative
  text-align right
  padding-bottom 35px
  margin-bottom 35px
</style>
