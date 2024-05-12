<template>
    <conditional-link :link="props" class="btn btn--primary">
        <img v-if="icon && iconAsImage" :src="icon" :alt="altText" class="img img--24" :class="imageClasses" />
        <span v-else-if="(icon && !iconPack) || (icon && iconPack === 'mdi')" class="mdi material-icons">{{ icon }}
        </span>
        <span v-else-if="iconPack === 'fa' && icon">
            <i :class="icon"></i>
        </span>
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
