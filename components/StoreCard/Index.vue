<template>
  <div
    class="
      store-info-card
      flex
      border-solid border border-gray-200
      rounded-md
      shadow-sm
      relative
    "
  >
    <span class="absolute top-0 right-0 mr-3 mt-4 text-red-300 cursor-pointer">
      移除!
    </span>
    <div class="p-4">
      <h3 class="text-xl font-bold">{{ name }}</h3>
      <h4 class="text-sm text-gray-400">{{ description || ' ' }}</h4>
      <br />

      <nuxt-link
        class="text-blue-500"
        :to="{ name: 'stores-id', params: { id } }"
      >
        詳細
      </nuxt-link>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'StoreCard',
  props: {
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
})
</script>
