import Vue from 'vue';
import axios from 'axios';
import store from '../store';

axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response) {
      const values = error.response.data.errors;
      console.log(values);
      // values.forEach(item => console.log(item[0]));
      // console.log(error.response.data.errors);
      store.commit('SET_ERRORS', values);
    }
  },
);

Vue.use(axios);
