<template>
  <div class="index-page">
    <button>
      <nuxt-link :to="{ name: 'schedule' }">開始使用</nuxt-link>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  layout: 'default',
})
</script>
