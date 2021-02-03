import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from 'axios';
import Vuelidate from 'vuelidate'
// import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(Vuelidate)
// Vue.use(VueSweetalert2)

api.defaults.timeout = 10000;
api.interceptors.request.use(
  config => {
    const token = 'Bearer '+localStorage.getItem('id_token')
    if (token) {
      config.headers.common["Authorization"] = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => {
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
error => {
    if (error.response.status) {

      switch (error.response.status) {
        case 400:
         
         //do something
          break;
      
        case 401:
          //alert("session expired");
          router.replace({
            path: "/login",
            query: { redirect: router.currentRoute.fullPath }
          });

          break;
        case 403:
          router.replace({
            path: "/login",
            query: { redirect: router.currentRoute.fullPath }
          });
           break;
        case 404:
          alert('page not exist');
          break;
        case 502:
         setTimeout(() => {
            router.replace({
              path: "/login",
              query: {
                redirect: router.currentRoute.fullPath
              }
            });
          }, 1000);
      }
      return Promise.reject(error.response);
    }
  }
);

Vue.prototype.$hostname = 'https://pokeapi.co'

Vue.config.productionTip = false
// Vue.use(api)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
