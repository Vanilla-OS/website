import { createSSRApp } from 'vue'
import { createHead } from "@vueuse/head"
import { i18n } from './localization/index';
import { loadAndSetLocale } from './localization/index';

import App from './App.vue'
import createRouterInstance from './router'
import ComponentLoader from "@/components/loader";

const lang = typeof window !== "undefined" 
    ? localStorage.getItem("websiteLanguage") || "en" 
    : "en"; 

loadAndSetLocale(lang);

export function createApp(clientType: string) {
    console.log('creating new app instance')
    const app = createSSRApp(App)
    const head = createHead()
    app.use(i18n);
    const router = createRouterInstance(clientType)

    app.use(router)
    app.use(head)
    app.use(ComponentLoader)

    return { app, router }
}