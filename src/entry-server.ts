import { renderToString } from 'vue/server-renderer'
import { createApp } from './main'

export async function render() {
    const { app } = createApp("server")
    const ctx = {}
    const html = await renderToString(app, ctx)

    return { html }
}