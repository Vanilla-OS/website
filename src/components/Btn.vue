<template>
    <conditional-link :link="props" :class="classes">
        <slot name="start" />
        <span>
            <slot />
        </span>
        <slot name="end" />
    </conditional-link>
</template>

<script setup lang="ts">
import type { LinkProps } from "./ConditionalLink.vue";

interface BtnPropsI {
    type?: "primary" | "link"
}

export type BtnProps = BtnPropsI & LinkProps;

const props = defineProps<BtnProps>();

const classes = ["btn"];
if (props.type === "link") classes.push("btn--link")
else classes.push("btn--primary")
</script>
