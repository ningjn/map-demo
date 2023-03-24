import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

Vue.use(PiniaVuePlugin)

// @ts-ignore
if (window.__POWERED_BY_WUJIE__) {
  let instance: any;
  // @ts-ignore
  window.__WUJIE_MOUNT = () => {
    instance = new Vue({
      router,
      pinia: createPinia(),
      render: (h) => h(App)
    }).$mount('#app')
  };
  // @ts-ignore
  window.__WUJIE_UNMOUNT = () => {
    instance.$destroy();
  };
} else {
  new Vue({
    router,
    pinia: createPinia(),
    render: (h) => h(App)
  }).$mount('#app')
}

