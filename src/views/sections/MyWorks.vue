<template>
  <Section color="dark-pink">
    <div class="row">
      <div class="column">
        <img
          src="../../assets/momo-themes-showcase.png"
          class="figure"
          :alt="$t('journey.imageAlt')"
        />
      </div>
      <div class="column">
        <h1>
          <span class="light-pink">!=</span>
          {{ $t('journey.title') }}
          <span class="green">{{ $t('journey.titleHighlight') }}</span>
        </h1>
        <p>
          {{ $t('journey.introBefore') }}
          <strong>{{ $t('journey.introRole') }}</strong>
          {{ $t('journey.introAfter') }}
        </p>
        <p>{{ $t('journey.highlightsTitle') }}</p>
        <ul>
          <li v-for="key in highlights" :key="key">
            <span class="strong">{{
              $t(`journey.highlights.${key}.label`)
            }}</span>
            {{ $t(`journey.highlights.${key}.text`) }}
          </li>
        </ul>
        <!-- <p>My expertise spans a wide range of technologies, including:</p>
        <ul class="horizontalList">
          <li v-for="(value, index) in techStack" :key="index">
            {{ value }}
          </li>
        </ul> -->
        <br />
        <router-link to="/work">
          <Button> {{ $t('journey.cta') }} </Button>
        </router-link>
      </div>
    </div>
  </Section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/layouts/SectionLayout.vue'
import Button from '@/components/Button.vue'

export default defineComponent({
  name: 'MyWorks',
  components: { Section, Button },
  data() {
    return {
      highlights: ['momo', 'pipelines', 'business', 'desktop'],
      techStack: [
        'Python (Flask, Django, PySide6, SQLAlchemy)',
        'JavaScript/TypeScript (React, Vue, Nuxt, Electron/Rust (Tauri), Node.js)',
        'UI/UX Tools (Figma, Adobe XD, Sketch)',
        'Database (PostgreSQL, MySQL, Firebase)',
        'DevOps (Docker, CI/CD Pipelines, Alembic)',
        '3D and VFX Tools (Autodesk Maya, Houdini, Blender)',
        'CRM and SaaS Development',
        'Cloud Integrations (Google Drive API, Firebase Realtime Database)'
      ]
    }
  }
})
</script>

<style lang="stylus" scoped>
@import "../../styles/default";

ul
  display: flex;
  flex-direction: column;
  gap 10px

ul li
  font-size 20px;

li
  list-style none
  padding-bottom 10px
  font-size 16px
  opacity 0.8

li span.strong
  font-weight bold
  color white

li::before
  content '-> '
  FiraCode()
  color yellow

.row
  justify-content space-between
  align-content center !important

  .column:first-child
    width 90%
    align-self: center

  .column
    width 100%

    .figure
      width 100%

h1
  position relative
  text-align right
  padding-bottom 35px
  margin-bottom 25px

h1::before
  titleBorderBottom()
  width: 100px
  background-color pink
  top -25px
  right 0

h1::after
  titleBorderBottom()
  width: 100%
  background-color pink
  right 0
  bottom 0
  z-index 6

.horizontalList
  margin: 0;
  padding: 10px 0;
  display: flex;
  flex-direction: column
  // flex-wrap: wrap;
  gap 5px

.horizontalList li
  padding: 0 !important;
  margin: 0;
  font-style italic
  color: white
  font-size: 18px;

  &:last-child
    margin-right: unset

  &::before
    content '-> '
    FiraCode()
    color yellow

  &::after
    content: '.'
    color: white

  &:last-child::after
    content: '.'

  @media screen and ({ScreenCondition}: ScreenConditionValue)
    padding 50px 10%

    .horizontalList span
      font-size 18px

    h1::after
      width 100%
</style>
