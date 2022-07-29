import axios from 'axios'

export default {
  state: {
    items: [],
  },

  mutations: {
    SET_SCHEDULE(state, payload) {
      console.log(state, payload)
    },
  },

  actions: {
    FETCH_SCHEDULE({ commit }) {
      console.log(commit, axios)
      // https://api.tvmaze.com/schedule/web?date=2022-07-29&country=
      // axios.get()
    },
  },
}
