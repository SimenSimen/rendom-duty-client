<template>
  <div class="store-index-page">
    <block-layout class="my-4 mt-8"> infopage </block-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import layoutMixin from '@/mixins/layout'

export default (Vue as ComponentMixinsHelper<LayoutMixin>).extend({
  name: 'StoreInfoPage',
  mixins: [layoutMixin],
})
</script>
