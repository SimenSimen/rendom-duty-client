<template>
  <div class="schedule-index-page">
    <div class="w-12/12 lg:w-10/12 xl:w-8/12 mx-auto my-4">
      已選擇店：
      <span>豐原道</span>
    </div>

    <div class="w-12/12 lg:w-10/12 xl:w-8/12 mx-auto my-4 flex items-center">
      <date-picker v-model="queryData.period"></date-picker>

      <button class="bg-blue-500 py-2 px-4 text-white rounded ml-4">
        開始排班
      </button>

      <div class="actinos ml-auto"></div>
    </div>

    <div class="w-12/12 lg:w-10/12 xl:w-8/12 mx-auto shadow-md">
      <schedule-table :period="queryData.period"> </schedule-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ScheduleTable from '@/components/ScheduleTable/Index.vue'
import DatePicker from '@/components/DatePicker/Index.vue'

type Period = [Date, Date]
export default Vue.extend({
  name: 'ScheduleIndexPage',
  components: {
    ScheduleTable,
    DatePicker,
  },
  data() {
    return {
      queryData: {
        period: [] as Period | [],
      },
    }
  },
  created() {
    this.initData()
  },
  computed: {},

  methods: {
    initData(): void {
      this.initialDays()
    },
    getNextWeekDays(): Period {
      const today = new Date()
      const todayNumber = today.getDay()
      const todayDate = today.getDate()
      const diffToNextMonday = 7 - todayNumber + 1

      const startDate = new Date()
      startDate.setDate(todayDate + diffToNextMonday)
      const endDate = new Date()
      endDate.setDate(todayDate + diffToNextMonday + 6)

      return [startDate, endDate]
    },
    initialDays(): void {
      this.queryData.period = this.getNextWeekDays()
    },
  },
})
</script>
