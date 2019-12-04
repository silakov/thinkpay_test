import Vue from 'vue';
import axios from 'axios';

axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response) {
      const values = error.response.data.errors;
      console.log(values);
    }
  },
);

Vue.use(axios);
