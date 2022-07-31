import { createStore } from 'vuex'
import ScheduleModule from './schedule.module.js'
import SearchModule from './search.module.js'

export default createStore({
  modules: {
    schedule: ScheduleModule,
    search: SearchModule,
  },
})
