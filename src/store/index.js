import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    url: "http://127.0.0.1:8000/",
    user: null,
    error: null
  },
  getters: {
  },
  mutations: {
    change_user(state, user){
      state.user = user
      console.log(user);
    },
    change_error(state, error){
      state.error = error
    }

  },
  actions: {
    async user_register({ state, commit }, info) {
      try {
        const response = await axios.post(state.url + "sign_up/", info);
        console.log(response);
        
      } catch (err) {
        commit("change_error", err.response.data.massage)
        console.log(err.response.data.massage);
      }
    },
    async user_login({ state, commit }, info) {
      try {
        const response = await axios.post(state.url + "sign_in/", info);
        console.log("token", response.data);
        localStorage.setItem('token', response.data.token);
        const token = localStorage.getItem('token');
        console.log("Retrieved Token:", token);
      } catch (err) {
        commit("change_error", err.response.data.massage)
        
        throw err;
      }
    },
    async get_user({ state, commit }) {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Token is missing');
        }
    
        const config = {
          headers: {
            Authorization: `Token ${token}` 
          }
        };
        console.log('Request config:', config);
        
        const response = await axios.get(`${state.url}user/`, config);
        console.log('User response:', response);
        commit("change_user", response.data.user);
      } catch (err) {
        console.error('Axios Error:', err.response ? err.response.data : err.message);
        const errorMessage = err.response?.data?.message || 'Failed to fetch user';
        commit("change_error", errorMessage);
        throw err;
      }
    }
    
    
  },
  modules: {
  }
})
