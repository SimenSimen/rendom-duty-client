<template>
  <div class="duty-column">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ScheduleTableDutyColumn',
  props: {
    store: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
})
</script>
