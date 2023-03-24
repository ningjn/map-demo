import {createApp} from 'vue'

// -----for element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import {useWujie} from "@/wujie";
import {setupStore} from "@/stores";

const app = createApp(App)

setupStore(app);
app.use(router)
app.use(ElementPlus)

app.mount('#app')

// 使用无界
useWujie(app)

