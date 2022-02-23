<template>
  <div class="employee-column">
    <p class="m-0 font-semibold">
      {{ name }}
    </p>

    <p class="text-xs m-0">
      <span class="text-xs font-semibold text-red-500">
        {{ shiftAmount }}
      </span>
      天班
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ScheduleTableEmployeeColumn',
  props: {
    name: {
      type: String,
      default: '',
    },

    shiftAmount: {
      type: Number,
      default: 0,
    },
  },
})
</script>
