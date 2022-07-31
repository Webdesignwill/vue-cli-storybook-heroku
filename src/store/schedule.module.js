import axios from 'axios'

export default {
  namespaced: true,

  state: {
    groups: {},
    featured: null,
    error: null,
    fetching: false,
    noResults: false,
  },

  mutations: {
    SET_NO_RESULTS(state, result) {
      state.noResults = result
    },

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
      const keys = Object.keys(state.groups)
      const randomlySelectedGroup =
        keys[Math.floor(Math.random() * keys.length)]

      const { shows } = state.groups[randomlySelectedGroup]

      state.featured = shows[0]
    },

    SET_FETCHING_STATE(state, boolean) {
      state.fetching = boolean
    },

    SET_ERROR_STATE(state, boolean) {
      state.error = boolean
    },
  },

  actions: {
    SEARCH({ commit, rootState }) {
      commit('SET_ERROR_STATE', false)
      commit('SET_FETCHING_STATE', true)

      axios
        .get(`/search/shows?q=${rootState.search.query}`)
        .then((res) => {
          if (res.data.length) {
            commit('SET_GROUPS', res.data)
            commit('SET_FEATURED')
            commit('SET_NO_RESULTS', false)
          } else {
            commit('SET_NO_RESULTS', true)
          }

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
          if (res.data.length) {
            commit('SET_GROUPS', res.data)
            commit('SET_FEATURED')
            commit('SET_NO_RESULTS', false)
          } else {
            commit('SET_NO_RESULTS', true)
          }

          commit('SET_FETCHING_STATE', false)
        })
        .catch(() => {
          commit('SET_FETCHING_STATE', false)
          commit('SET_ERROR_STATE', true)
        })
    },
  },
}
