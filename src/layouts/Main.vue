<template>
    <topbar />
    <main>
        <router-view />
    </main>
    <site-footer />
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "layout-main",
});
</script>