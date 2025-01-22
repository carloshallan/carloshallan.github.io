<template>
  <Section color="dark-pink">
    <div class="row">
      <div class="column">
        <img
          src="../../assets/work-image-bg.png"
          class="figure"
          alt="My work showcase"
        />
      </div>
      <div class="column">
        <h1>
          <span class="light-pink">!=</span>
          My Journey <span class="green">as a Developer</span>
        </h1>
        <p>
          I am an accomplished <strong>Full Stack Developer</strong> and
          <strong>UI/UX Designer</strong> with over a decade of diverse
          experience leading impactful projects across industries such as VFX,
          gaming, and creative studios. My focus has always been on creating
          scalable, user-centric solutions that enhance workflows, optimize
          processes, and deliver exceptional user experiences.
        </p>
        <p>Some of my notable achievements include:</p>
        <ul>
          <li>
            <span class="strong">Pipeline Development:</span> Spearheaded the
            creation of advanced 3D production pipelines integrating tools like
            Autodesk ShotGrid and custom Python-based applications.
          </li>
          <li>
            <span class="strong">CRM Systems:</span> Designed and deployed
            robust CRM solutions tailored to VFX studio needs, enhancing team
            productivity and communication.
          </li>
          <li>
            <span class="strong">Training Platforms:</span> Developed and
            integrated training platforms with real-time data synchronization,
            enabling seamless collaboration and learning.
          </li>
          <li>
            <span class="strong">Cross-Platform Applications:</span> Delivered
            hybrid desktop applications using ElectronJS, Python, and VueJS,
            ensuring compatibility across Windows, macOS, and Linux.
          </li>
        </ul>
        <!-- <p>My expertise spans a wide range of technologies, including:</p>
        <ul class="horizontalList">
          <li v-for="(value, index) in techStack" :key="index">
            {{ value }}
          </li>
        </ul> -->
        <p>
          With every project, I bring a blend of technical acumen, creative
          vision, and a dedication to delivering solutions that empower teams
          and businesses to excel in their domains.
        </p>
        <br />
        <router-link to="/work">
          <Button> See My Portfolio </Button>
        </router-link>
      </div>
    </div>
  </Section>
</template>

<script lang="ts">
import Vue from 'vue'
import Section from '@/layouts/SectionLayout.vue'
import Button from '@/components/Button.vue'

export default Vue.extend({
  name: 'MyWorks',
  components: { Section, Button },
  data() {
    return {
      techStack: [
        'Python (Flask, Django, PySide6, SQLAlchemy)',
        'JavaScript/TypeScript (React, Vue, Nuxt, Electron, Node.js)',
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
  padding 120px

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
