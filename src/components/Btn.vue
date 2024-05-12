<template>
    <conditional-link :link="props" class="btn btn--primary">
        <slot name="start" />
        <span>
            <slot />
        </span>
        <slot name="end" />
    </conditional-link>
</template>

<script setup lang="ts">
import type { LinkProps } from "./ConditionalLink.vue";

const props = defineProps<LinkProps>();
</script>
