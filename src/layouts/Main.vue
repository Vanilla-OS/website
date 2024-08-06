<template>
    <a href="#content" class="skip-link" target="_top" @click.prevent="scrollToContent">Skip to main content</a>
    <topbar />
    <main id="content" ref="content">
        <router-view />
    </main>
    <site-footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "layout-main",

    methods: {
        scrollToContent() {
          const element = this.$refs.content as HTMLElement;
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        },
    },
});
</script>
