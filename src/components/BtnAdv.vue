<template>
    <btn :to="props.link.to" :extLink="props.link.extLink">
        <template #start>
            <an-icon :icon="props.icon.icon" />
        </template>
        <slot />
    </btn>
</template>

<script setup lang="ts">
import type { LinkProps } from "./ConditionalLink.vue";
import type { AnIconProps } from "./AnIcon.vue";

const props = defineProps<{ icon: AnIconProps, link: LinkProps }>();
</script>