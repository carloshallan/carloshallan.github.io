<template>
  <Transition name="pop">
    <button
      v-show="visible"
      type="button"
      class="backToDev"
      :aria-label="$t('writer.backToDev')"
      :title="$t('writer.backToDev')"
      @click="switchFromTop"
    >
      <creative-logo class="logo" />
    </button>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CreativeLogo from '@/components/icons/creative-logo.vue'
import { switchFromTop } from '@/composables/writerMode'

// No modo escritor, depois que a seção do topo sai da tela, a logo de dev
// flutua no canto para voltar ao currículo de desenvolvedor
export default defineComponent({
  name: 'BackToDevButton',
  components: { CreativeLogo },
  setup() {
    return { switchFromTop }
  },
  data: () => ({ visible: false }),
  methods: {
    update() {
      this.visible = window.scrollY > window.innerHeight * 0.6
    }
  },
  mounted() {
    this.update()
    window.addEventListener('scroll', this.update, { passive: true })
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.update)
  }
})
</script>

<style lang="stylus" scoped>
@import '../styles/default'

// Os mesmos anéis verde, lilás e rosa da foto de dev
.backToDev
  position fixed
  right 30px
  bottom 30px
  z-index 20
  width 68px
  height 68px
  display flex
  align-items center
  justify-content center
  padding 0
  border none
  border-radius 50%
  background #220C3A
  box-shadow 0 0 0 3px #FF79D1, 0 0 0 5px #B57DED, 0 0 0 8px #1AEBC3, 0 8px 24px rgba(0, 0, 0, 0.5)
  cursor pointer
  transition transform 0.3s

  &:hover
    transform scale(1.08) rotate(-6deg)

  &:focus-visible
    outline 2px solid #1AEBC3
    outline-offset 12px

  .logo
    width 28px
    height auto
    position relative
    top 2px

  @media screen and ({ScreenCondition}: ScreenConditionMobilePortrait)
    right 20px
    bottom 20px
    width 56px
    height 56px

    .logo
      width 24px

.pop-enter-active, .pop-leave-active
  transition opacity 0.3s, transform 0.3s

.pop-enter-from, .pop-leave-to
  opacity 0
  transform scale(0.6)

@media (prefers-reduced-motion: reduce)
  .backToDev, .pop-enter-active, .pop-leave-active
    transition opacity 0.2s
</style>
