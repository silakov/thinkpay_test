import Vue from 'vue';
import VueRouter from 'vue-router';
import Products from '../views/Products.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'products',
    component: Products,
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/Product.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
