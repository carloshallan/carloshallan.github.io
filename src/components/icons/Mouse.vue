<template>
  <svg
    width="22"
    height="100"
    viewBox="0 0 22 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="1"
      width="20"
      height="36"
      rx="10"
      stroke="#1AEBC3"
      stroke-width="2"
    />
    <path
      d="M15.904 52.92L10.952 57.352L5.99999 52.92L6.93599 51.816L9.23999 53.912C9.44266 54.0933 9.63199 54.2773 9.80799 54.464C9.98933 54.656 10.1493 54.8613 10.288 55.08V42H11.616V55.08C11.7707 54.8347 11.9173 54.6373 12.056 54.488C12.2 54.3387 12.4027 54.1467 12.664 53.912L14.968 51.816L15.904 52.92Z"
      fill="#1AEBC3"
      class="arrow"
    />
    <rect
      class="scroll"
      x="9"
      y="23"
      width="4"
      height="8"
      rx="2"
      fill="#1AEBC3"
    />
  </svg>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Mouse',
})
</script>
<style lang="stylus">
@keyframes shakeScroll
  0%
    transform translate(0, 8%)
  100%
    transform translate(0, 0)

.scroll, .arrow
  animation-name shakeScroll
  animation-timing-function easy-in-out
  animation-duration 0.2s
  animation-iteration-count infinite
  animation-direction alternate
  position relative
</style>
