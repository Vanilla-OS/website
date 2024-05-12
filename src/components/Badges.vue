<template>
    <div class="badges">
        <div v-for="(badge, index) in items" :key="index" :class="[
            'badges-item',
            { [`badges-item--${badge.color}`]: badge.color },
        ]">
            {{ badge.text }}
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    items: {
        text: string;
        color: string;
    }[];
}>();
</script>
