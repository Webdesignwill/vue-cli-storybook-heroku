import { createStore } from 'vuex'
import ShowsModule from './shows.module.js'
import ShowModule from './show.module.js'
import SearchModule from './search.module.js'

export default createStore({
  modules: {
    shows: ShowsModule,
    show: ShowModule,
    search: SearchModule,
  },
})
