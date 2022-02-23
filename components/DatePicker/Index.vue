<template>
  <div class="date-picker inline-block">
    <v-date-picker v-model="date" class="flex items-center" is-range>
      <template #default="{ inputValue, inputEvents }">
        <input
          :value="inputValue.start"
          class="
            border
            px-2
            py-1
            w-32
            rounded
            focus:outline-none focus:border-indigo-300
          "
          v-on="inputEvents.start"
        />
        <svg
          class="w-4 h-4 mx-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
        <input
          :value="inputValue.end"
          class="
            border
            px-2
            py-1
            w-32
            rounded
            focus:outline-none focus:border-indigo-300
          "
          v-on="inputEvents.end"
        />
      </template>
    </v-date-picker>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

type PickerDate = {
  start: Date
  end: Date
}
export default Vue.extend({
  name: 'DatePicker',
  props: {
    value: {
      type: Array,
    } as PropOptions<Date[]>,
  },
  data() {
    return {
      errorMessage: '',
    }
  },
  computed: {
    date: {
      set(value: PickerDate): void {
        console.log(value)
        this.$emit('input', [value.start, value.end])
      },
      get(): PickerDate {
        return {
          start: this.value[0],
          end: this.value[1],
        }
      },
    },
    displayText() {
      return 'period text'
    },
  },
})
</script>
