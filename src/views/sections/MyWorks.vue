<template>
  <Section color="dark-pink">
    <div class="row">
      <div class="column">
        <img
          src="../../assets/work-image-bg.png"
          class="figure"
          alt="My work"
        />
        <!-- <slider :slides="slides" /> -->
      </div>
      <div class="column">
        <h1>
          <span class="light-pink">!=</span>
          What <span class="green">I</span> can <span class="green">do</span>?
        </h1>
        <p class="horizontalList">
          I embarked on my career as a Front End Developer and UI/UX Designer,
          honing my skills in web applications and websites. My creative nature
          allowed me to broaden my expertise, leading me to develop desktop
          solutions for Windows, macOS, and Linux, and integrate various
          applications including:
          <span v-for="(value, index) in appsWorked" :key="index">
            {{ value }}
          </span>
        </p>
        <p class="horizontalList">
          Not confined to specific languages, I’ve embraced challenges and
          crafted effective solutions using:
          <span v-for="(value, index) in languagesWorked" :key="index">
            {{ value }}
          </span>
        </p>
        <p>
          Each language and project has been a stepping stone in my diverse
          journey of problem-solving and technological innovation, positioning
          me as a multifaceted developer equipped to tackle complex challenges.
        </p>
        <br />
        <br />
        <Button href="https://carloshallancf68.myportfolio.com/works"
          >See some works</Button
        >
      </div>
    </div>
  </Section>
</template>
<script lang="ts">
import Vue from 'vue'
import Section from '@/components/Section.vue'
import Button from '@/components/Button.vue'

export default Vue.extend({
  name: 'MyWorks',
  components: { Section, Button },
  data() {
    return {
      appsWorked: [
        'Google Workspace',
        'Adobe Suite: Photoshop, After Effects, XD',
        'Blender',
        'Autodesk Maya',
        'Shotgrid',
        'Perforce',
        'Houdini',
        'Trello',
        'Asana'
      ],
      languagesWorked: [
        'Javascript or Typescript (including frameworks like Node.js, VueJs, Nuxt, React Js, Next JS, Electron JS, Tauri)',
        'Python (with frameworks such as Django, Flask, PyQt5, PyQt4, PySide2, PySide6, etc.)',
        'Rust',
        'C# (specifically within the Unity environment)',
        'Java (exclusive to mobile development)',
        'Kotlin (also exclusive to mobile development) '
      ],
      slides: [
        {
          order: 3,
          title: 'Product manager',
          description: 'test',
          image: 'test',
          path: require('@/assets/venue-select-scene.png')
        },
        {
          order: 2,
          title: 'Task manager',
          description: 'description 2'
        },
        {
          order: 1,
          title: 'Version Control',
          description: 'description 2'
        }
      ]
    }
  }
})
</script>

<style lang="stylus" scoped>
@import "../../styles/default"

.slides
  display block

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


.horizontalList span
  font-style italic
  margin-right: 10px;
  color: yellow

  &:last-child
    margin-right: unset

  &::after
    content: ';'
    color: white

  &:last-child::after
    content: '.'


.row
  //flex-wrap wrap
  justify-content space-between
  align-content center !important
  padding 120px

  .column:first-child
    width 90%
    align-self: center

  .column
    width 100%

    .figure
      width 100%

  @media screen and ({ScreenCondition}: ScreenConditionValue)
    padding 50px 10%

    .horizontalList span
      font-size 18px

    h1::after
      width 100%

  @media screen and ({ScreenCondition}: ScreenConditionMobilePortrait)
    padding 50px 5%
</style>
