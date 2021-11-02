<template>
    <nav>
        <router-link to="#"> test </router-link>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Navigator',
})
</script>

<style lang="stylus" scoped>

nav
	background-color red
</style>
