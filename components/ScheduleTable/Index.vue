<template>
  <table class="min-w-max w-full table-auto">
    <template v-if="days.length > 7">
      <tbody>
        <tr>
          <td class="text-red-400">不合法的日期區間。</td>
        </tr>
      </tbody>
    </template>

    <template v-else>
      <thead>
        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th class="py-3">
            <small>名字/日期</small>
          </th>

          <th
            v-for="day in days"
            class="py-3 px-6 text-left"
            :key="day.getTime()"
          >
            {{ day | dayDisplay }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 13" class="border-b">
          <td class="py-3 text-center">佳怡</td>

          <td
            v-for="day in days"
            class="py-4 px-6 text-left whitespace-nowrap"
            :key="`row-${day.getTime()}`"
          >
            早班
          </td>
        </tr>

        <!-- <tr>
          <td></td>
          <td>Intro to CSS</td>
          <td>Adam</td>
          <td>858</td>
        </tr>
        <tr class="bg-emerald-200">
          <td>
            A Long and Winding Tour of the History of UI Frameworks and Tools
            and the Impact on Design
          </td>
          <td>Adam</td>
          <td>112</td>
        </tr>
        <tr>
          <td>Intro to JavaScript</td>
          <td>Chris</td>
          <td>1,280</td>
        </tr> -->
      </tbody>
    </template>
  </table>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue'
import moment from 'moment'
export default Vue.extend({
  name: 'ScheduleTable',
  props: {
    period: {
      type: Array,
      default() {
        return []
      },
    } as PropOptions<Date[]>,
  },
  filters: {
    dayDisplay(value: Date) {
      return moment(value).format('MM/DD')
    },
  },
  computed: {
    days(): Date[] {
      const [start, end] = this.period
      const diff = moment(end).diff(start, 'days')
      const result: Date[] = []

      for (let i = 0, length = diff; i <= length; i++) {
        const date = new Date()
        const dateNumber = start.getDate()
        date.setDate(dateNumber + i)

        result.push(date)
      }

      return result
    },
  },
})
</script>
