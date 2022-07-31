import axios from 'axios'

export default {
  namespaced: true,

  state: {
    groups: {},
    featured: null,
    error: null,
    fetching: false,
  },

  mutations: {
    SET_GROUPS(state, data) {
      const newThing = data.reduce((accumulator, current) => {
        const show = current.show || current._embedded.show

        const { type } = show
        const formattedType = type.replace(/\s/g, '-').toLowerCase()

        if (accumulator[formattedType]) {
          return {
            ...accumulator,
            [formattedType]: {
              ...accumulator[formattedType],
              shows: [...accumulator[formattedType].shows, show],
            },
          }
        } else {
          return {
            ...accumulator,
            [formattedType]: {
              shows: [show],
              title: type,
            },
          }
        }
      }, {})

      state.groups = newThing
    },

    SET_FEATURED(state) {
      const { shows } = state.groups.scripted
      state.featured = shows[Math.floor(Math.random() * shows.length)]
    },

    SET_FETCHING_STATE(state, boolean) {
      state.fetching = boolean
    },

    SET_ERROR_STATE(state, boolean) {
      state.error = boolean
    },
  },

  actions: {
    SEARCH({ commit }, query) {
      commit('SET_ERROR_STATE', false)
      commit('SET_FETCHING_STATE', true)

      axios
        .get(`/search/shows?q=${query}`)
        .then((res) => {
          commit('SET_GROUPS', res.data)
          commit('SET_FEATURED')
          commit('SET_FETCHING_STATE', false)
        })
        .catch(() => {
          commit('SET_FETCHING_STATE', false)
          commit('SET_ERROR_STATE', true)
        })
    },
    FETCH({ commit }) {
      commit('SET_ERROR_STATE', false)
      commit('SET_FETCHING_STATE', true)

      axios
        .get('/schedule/web?date=2022-07-29&country=')
        .then((res) => {
          commit('SET_GROUPS', res.data)
          commit('SET_FEATURED')
          commit('SET_FETCHING_STATE', false)
        })
        .catch(() => {
          commit('SET_FETCHING_STATE', false)
          commit('SET_ERROR_STATE', true)
        })
    },
  },
}
