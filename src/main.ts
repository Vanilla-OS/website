import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import ComponentLoader from '@/components/loader'

import { en, pt_BR } from '../src/locales'
// import './assets/css/index.css'

const languages = {
    en,
    pt_BR,
}

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: languages,
})

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.use(ComponentLoader)
app.use(i18n)

app.mount('#app')
