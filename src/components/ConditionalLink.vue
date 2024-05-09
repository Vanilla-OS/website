<template>
    <a v-if="link?.extLink" :href="link.to" target="_blank"><slot></slot></a>
    <router-link v-else-if="link?.to" :to="link.to"><slot></slot></router-link>
    <div v-else><slot></slot></div>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

interface LinkInternal {
    to: RouteLocationRaw;
    extLink?: false;
}

interface LinkExternal {
    to: string;
    extLink: true;
}

interface LinkOptional {
    to?: never;
    extLink?: never;
}

export type LinkProps = LinkInternal | LinkExternal | LinkOptional;

defineProps<{ link: LinkProps }>();
</script>
