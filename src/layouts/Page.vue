<template>
    <div>
        <topbar />
        <div class="page">
            <div class="page-wrapper container">
                <div class="page-header">
                    <div class="page-nav" v-if="parentRoute?.name">
                        <router-link :to="{ name: parentRoute.name }" class="btn btn--link btn--inline">
                            <span class="mdi material-icons">arrow_back</span>
                            <span v-if="parentRoute?.meta?.title">Back to {{ parentRoute.meta.title }}</span>
                        </router-link>
                    </div>
                    <h1>{{ $route.meta.title }}</h1>
                    <p>{{ $route.meta.description }}</p>
                </div>
                <div class="page-content">
                    <router-view />
                </div>
            </div>
        </div>
        <site-footer />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "layout-page",
    computed: {
        parentRoute() {
            if (!this.$route.meta.parent) return null;

            const parentRoute = this.$router.getRoutes().find(
                (route) => route.name === this.$route.meta.parent
            );

            return parentRoute || null;
        },
    },
});
</script>
