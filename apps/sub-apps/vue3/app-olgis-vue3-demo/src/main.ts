import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'


// @ts-ignore
if (window.__POWERED_BY_WUJIE__) {
    let instance: any;
    // @ts-ignore
    window.__WUJIE_MOUNT = () => {
        instance = createApp(App)

        instance.use(createPinia())
        instance.use(router)

        instance.mount('#app')
    };
    // @ts-ignore
    window.__WUJIE_UNMOUNT = () => {
        instance.unmount();
    };
} else {
    const app = createApp(App)

    app.use(createPinia())
    app.use(router)

    app.mount('#app')
}
