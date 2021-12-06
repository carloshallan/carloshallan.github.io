<template>
  <div class="WorkTimeline">
    <div v-for="(job, index) in jobs" class="job" :key="index">
      <div class="header">
        <h2 class="title">{{ job.title }}</h2>
        <h3 class="subtitle">
          <span class="light-pink">{{ job.subtitle }}</span> {{ job.date }}
        </h3>
      </div>
      <ul class="jobDescription">
        <li>{{ job.jobDescription.description }}</li>
        <li>
          <strong class="description-title">{{
            job.jobDescription.title
          }}</strong>
          <ul>
            <li v-for="(stack, j) in job.jobDescription.listOfStack" :key="j">
              {{ stack.description }}
              <ul v-if="stack.children">
                <li v-for="(child, k) in stack.children" :key="k">
                  {{ child.description }}
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import { Job } from '@/types'

export default Vue.extend({
  name: 'workTimeline',
  props: {
    jobs: {
      type: Array as PropType<Array<Job>>
    }
  }
})
</script>
<style lang="stylus" scoped>
@import "../styles/default.styl"

.job
  display flex
  justify-content center
  align-items flex-start
  position relative
  gap 30px

  .header
    width 30%
    display flex
    flex-direction column
    align-items flex-end
    justify-content flex-end

  ul
    display flex
    flex-direction column
    font-size 20px

    li
      list-style none
      padding-bottom 20px

      ul
        margin-top 20px

      li
        list-style none
        padding-bottom 10px
        font-size 16px
        opacity 0.8

      li::before
        content '-> '
        FiraCode()
        color light-pink

.jobDescription
  width 40%
  display flex
  position relative
  padding 2px 40px

.jobDescription::after
.jobDescription::before
  content ''
  width 12px
  background-color light-pink
  display block
  position absolute
  border-radius 30px
  left 0px

.jobDescription::before
  top 12px
  height 12px !important

.jobDescription::after
  top 45px
  height calc(100% - 55px)

.title
  FiraSans()
  text-align right
  font-size 26px
  color green
</style>
