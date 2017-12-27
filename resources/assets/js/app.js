//
// /**
//  * First we will load all of this project's JavaScript dependencies which
//  * includes Vue and other libraries. It is a great starting point when
//  * building robust, powerful web applications using Vue and Laravel.
//  */
//
// require('./bootstrap');
//
// window.Vue = require('vue');
//
// /**
//  * Next, we will create a fresh Vue application instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */
//
// Vue.component('example-component', require('./components/ExampleComponent.vue'));
//
// const app = new Vue({
//     el: '#app'
// });

import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

// const router = new VueRouter({ mode: 'history'});
// new Vue(Vue.util.extend({ router })).$mount('#app');
// import Example from './components/ExampleComponent.vue';
// const routes = [
//   {
//       name: 'Example',
//       path: '/',
//       component: Example
//   }
// ];

import CreateItem from './components/CreateItem.vue';
import DisplayItem from './components/DisplayItem.vue';
import EditItem from './components/EditItem.vue';

const routes = [
  {
    name: 'CreateItem',
    path: '/items/create',
    component: CreateItem
  },
  {
        name: 'DisplayItem',
        path: '/',
        component: DisplayItem
  },
  {
      name: 'EditItem',
      path: '/edit/:id',
      component: EditItem
   }
];
const router = new VueRouter({ mode: 'history', routes: routes});

import App from './App.vue';

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
