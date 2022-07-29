import { createStore } from 'vuex'
import ScheduleModule from './schedule.module.js'

export default createStore({
  modules: {
    schedule: ScheduleModule,
  },
})
