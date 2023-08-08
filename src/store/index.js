import { createStore } from 'vuex';

const store = createStore({
  state: {
    isLoggedIn: false,
    userId: null,
    loggedInStatus: !!localStorage.getItem("jwt"),
  },
  mutations: {
    updateLoggedInStatus(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    updateUserId(state, userId) {
      state.userId = userId;
    },
  },
});

export default store;