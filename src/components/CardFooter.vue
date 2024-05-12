<template>
    <div class="card-footer">
        <div class="btn btn--link btn--inline btn--med" v-for="(action, index) in actions" :key="index"
            @click="action.onClick">
            <an-icon :icon="action.icon" :iconPack="action.iconPack" :iconAsImage="action.iconAsImage"
                :altText="action.altText" />
            <span v-if="action.title">{{ action.title }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { AnIconProps } from "./AnIcon.vue";

export interface CardFooterAction {
    title?: string;
    onClick: (event: MouseEvent) => void;
}

defineProps<{ actions: (CardFooterAction & AnIconProps)[] }>();
</script>
