<template>
  <div :class="layoutClass">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BlockLayout',
  props: {
    test: String,
  },
  computed: {
    layoutClass(): string {
      const classes = ['w-12/12 lg:w-10/12 xl:w-8/12 mx-auto']
      return classes.join(' ')
    },
  },
})
</script>
