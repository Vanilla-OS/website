<template>
    <img v-if="iconAsImage" :src="icon" :alt="altText" class="img img--24" />
    <span v-else-if="iconPack === 'mdi' || !iconPack" class="material-symbols-outlined">{{ icon }}
    </span>
    <span v-else-if="iconPack === 'fa'">
        <i :class="icon"></i>
    </span>
</template>

<script setup lang="ts">
export interface AnIconProps {
    icon: string;
    iconPack?: "mdi" | "fa";
    iconAsImage?: boolean;
    altText?: string;
}

defineProps<AnIconProps>();
</script>
