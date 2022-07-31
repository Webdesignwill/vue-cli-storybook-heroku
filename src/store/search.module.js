export default {
  namespaced: true,

  state: {
    query: '',
  },

  mutations: {
    SET_QUERY(state, query) {
      state.query = query
    },
  },
}
