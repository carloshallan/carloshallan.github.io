<template>
  <div>
    <div>
      <main-logo id="main-logo" />
      Coming soon...
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainLogo from "@/components/icons/logo.vue";

export default defineComponent({
  name: "Home",
  components: {
    MainLogo,
  },
});
</script>

<style lang="stylus" scoped>
div
  background-color #220C3A
  position absolute
  width 100vw
  height 100vh
  display flex
  align-items center
  justify-content center
  flex-direction column
  color white

#main-logo
  margin-bottom 20px
</style>
