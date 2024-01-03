import { createSSRApp } from 'vue'
import { createHead } from "@vueuse/head"

import App from './App.vue'
import createRouterInstance from './router'
import ComponentLoader from "@/components/loader";

export function createApp(clientType: string) {
    console.log('creating new app instance')
    const app = createSSRApp(App)
    const head = createHead()
    const router = createRouterInstance(clientType)

    app.use(router)
    app.use(head)
    app.use(ComponentLoader)

    return { app, router }
}