<template>
  <nav>
    <ul>
      <router-link
        v-for="(option, index) in options"
        :key="index"
        :to="option.to"
      >
        {{ option.text }}
      </router-link>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { CustomRouterLink } from '@/types/'

export default defineComponent({
  name: 'Navigator',
  props: {
    options: {
      type: Array as PropType<Array<CustomRouterLink>>,
      default: () => [
        {
          text: 'Home',
          to: '#',
        },
      ],
    },
  },
})
</script>
<style lang="stylus" scoped>
nav
	background-color red
</style>
