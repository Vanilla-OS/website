<template>
    <div class="card-footer">
        <btn v-for="(action, index) in actions" :key="index" type="link" class="btn--inline btn--med"
            @click="action.onClick">
            <template #start>
                <an-icon :icon="action.icon" :iconPack="action.iconPack" />
            </template>
            {{ action.title }}
        </btn>
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
