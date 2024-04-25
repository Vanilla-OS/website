<template>
    <router-link v-if="item.type === 'clickable' && !item.extLink" :to="item.to!"
        class="card card--clickable card--min card--has-actions flexGrid-item">
        <card-header :item />
        <card-content :item />
        <card-footer :item />
    </router-link>
    <a v-else-if="item.type === 'clickable' && item.extLink" :href="item.to as string" target="_blank"
        class="card card--clickable card--min card--has-actions flexGrid-item">
        <card-header :item />
        <card-content :item />
        <card-footer :item />
    </a>
    <div v-else-if="item.type === 'adv'" class="card card--type-adv">
        <div class="card-header">
            <h4>{{ item.title }}</h4>
            <h2>{{ item.title2 }}</h2>
        </div>
        <card-content :item />
    </div>
    <div v-else class="card card--min card--has-actions flexGrid-item">
        <card-header :item />
        <card-content :item />
        <card-footer :item />
    </div>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

export interface CardItem {
    title?: string;
    title2?: string;
    description?: string;
    type?: "clickable" | "adv";
    to?: RouteLocationRaw;
    extLink?: boolean;
    icon?: string;
    iconPack?: "mdi" | "fa";
    imageAsIcon?: boolean;
    image?: string;
    imageClasses?: string[];
    badges?: {
        text: string;
        color?: string;
    }[];
    btn?: string;
    html?: string;
    actions?: [];
    footerActions?: {
        title?: string;
        onClick: (event: MouseEvent) => void;
        icon: string;
        iconPack: "mdi" | "fa";
    }[];
}

defineProps<{ item: CardItem }>();
</script>
