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
            :key="day.getTime()"
            class="py-3 px-6 text-left"
          >
            {{ day | dayDisplay }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="schedule.duties.length === 0">
          <tr>
            <td class="text-center" colspan="8">
              <p class="m-0 text-gray-700 mt-4 mb-4">
                <font-awesome-icon icon="exclamation" size="3x" />
              </p>
              <p class="text-sm m-0 text-gray-500 mb-4">目前沒有任何排班。</p>
            </td>
          </tr>
        </template>

        <template v-for="duty in schedule.duties" v-else>
          <tr :key="duty.id" class="border-b">
            <td class="py-3 text-center">
              <employee name="abc" />
            </td>

            <td
              v-for="day in days"
              :key="`row-${day.getTime()}`"
              class="py-4 px-6 text-left whitespace-nowrap"
            >
              <duty class="">早班</duty>
            </td>
          </tr>
        </template>
      </tbody>
    </template>
  </table>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue'
import moment from 'moment'
import Employee from './Employee.vue'
import Duty from './Duty.vue'
import { Schedule } from '@/interfaces/schedule'

export default Vue.extend({
  name: 'ScheduleTable',
  props: {
    period: {
      type: Array,
      default() {
        return []
      },
    } as PropOptions<Date[]>,
    schedule: {
      type: Object,
      default() {
        return {}
      },
    } as PropOptions<Schedule>,
  },
  components: {
    Employee,
    Duty,
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
