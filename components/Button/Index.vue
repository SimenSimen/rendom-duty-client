<template>
  <button class="app-button bg-blue-500 py-2 px-4 text-white rounded ml-4">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppButton',
})
</script>
