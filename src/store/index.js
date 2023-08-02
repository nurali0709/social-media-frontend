import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    isLoggedIn: false,
    userId: null
  },
  mutations: {
    updateLoggedInStatus(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    updateUserId(state, userId) {
      state.userId = userId;
    },
  },
  actions: {
    // An action to perform logout and update isLoggedIn state
    async logout({ commit }) {
      try {
        await axios.post("http://127.0.0.1:8000/auth/logout");
        commit("updateLoggedInStatus", false); // Update isLoggedIn to false in the store
      } catch (error) {
        console.error(error);
        // Handle logout failure (e.g., show an error message)
      }
    },
  },
});

export default store;