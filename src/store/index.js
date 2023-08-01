import { createStore } from 'vuex';

const store = createStore({
  state: {
    isLoggedIn: false, // Initialize isLoggedIn as false by default
  },
  mutations: {
    // A mutation to update the isLoggedIn state
    updateLoggedInStatus(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
  },
});

export default store;
