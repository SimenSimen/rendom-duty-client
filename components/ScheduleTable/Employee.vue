<template>
  <div class="employee-column">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ScheduleTableEmployeeColumn',
})
</script>
