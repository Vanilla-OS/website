import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import ComponentLoader from "@/components/loader";

// import './assets/css/index.css'

const app = createApp(App)

app.use(router)
app.use(ComponentLoader)

app.mount('#app')
