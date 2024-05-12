<template>
    <conditional-link :link="props" class="btn btn--primary">
        <an-icon v-if="icon" :icon :iconPack :iconAsImage :altText :class="imageClasses" />
        <span>{{ btn }}</span>
    </conditional-link>
</template>

<script setup lang="ts">
import type { LinkProps } from "./ConditionalLink.vue";

const props = defineProps<
    {
        icon: string;
        iconPack?: "mdi" | "fa";
        iconAsImage?: boolean;
        imageClasses?: string[];
        altText: string;
        btn: string;
    } & LinkProps
>();
</script>
