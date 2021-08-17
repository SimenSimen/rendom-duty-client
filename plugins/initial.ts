import Vue from 'vue'
import VCalendar from 'v-calendar'
import { Context } from '@nuxt/types/app'

export default (_context: Context) => {
  Vue.use(VCalendar)
}
