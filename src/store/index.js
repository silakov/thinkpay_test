import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// const url = 'https://test-app.viktor.ws/api/products/';
// const url = 'https://fathomless-escarpment-66749.herokuapp.com/products';
// const url = 'http://localhost:3001/products/';
const url = 'https://thinkpay-test-backend-1.vercel.app/products/';

export default new Vuex.Store({
  state: {
    products: [],
    product: {},
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products;
    },
    SET_PRODUCT: (state, product) => {
      state.product = product;
    },
    DELETE_PRODUCT: (state, removedProductId) => {
      const index = state.products.findIndex(x => x.id === removedProductId);
      state.products.splice(index, 1);
    },
    ADD_PRODUCT: (state, newProduct) => {
      state.products.push(newProduct);
    },
    EDIT_PRODUCT: (state, editedProduct) => {
      const index = state.products.findIndex(x => x.id === editedProduct.id);
      Object.assign(state.products[index], editedProduct);
    },
  },
  actions: {
    GET_PRODUCTS: async ({ commit }) => {
      const { data } = await axios.get(url);
      commit('SET_PRODUCTS', data);
    },
    GET_PRODUCT: async ({ commit }, product) => {
      const { data } = await axios.get(url + product);
      commit('SET_PRODUCT', data);
    },
    DELETE_PRODUCT: async ({ commit }, removedProductId) => {
      await axios.delete(url + removedProductId);
      commit('DELETE_PRODUCT', removedProductId);
    },
    ADD_PRODUCT: async ({ commit }, newProduct) => {
      await axios.post(url, newProduct);
      commit('ADD_PRODUCT', newProduct);
    },
    EDIT_PRODUCT: async ({ commit }, editedProduct) => {
      await axios.put(url + editedProduct.id, editedProduct.product);
      commit('EDIT_PRODUCT', editedProduct.product);
    },
  },
});
