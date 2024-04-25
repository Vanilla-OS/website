<template>
    <router-link v-if="item.type === 'clickable' && !item.extLink" :to="item.to!"
        class="card card--clickable card--min card--has-actions flexGrid-item">
        <card-header :item :altText />
        <card-content :item :altText />
        <card-footer :item />
    </router-link>
    <a v-else-if="item.type === 'clickable' && item.extLink" :href="item.to as string" target="_blank"
        class="card card--clickable card--min card--has-actions flexGrid-item">
        <card-header :item :altText />
        <card-content :item :altText />
        <card-footer :item />
    </a>
    <div v-else-if="item.type === 'adv'" class="card card--type-adv">
        <div class="card-header">
            <h4>{{ item.title[0] }}</h4>
            <h2>{{ item.title[1] }}</h2>
        </div>
        <card-content :item :altText />
    </div>
    <div v-else class="card card--min card--has-actions flexGrid-item">
        <card-header :item :altText />
        <card-content :item :altText />
        <card-footer :item />
    </div>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

interface CardItemI {
    title?: string | [string, string];
    description?: string;
    type?: "clickable" | "adv";
    to?: RouteLocationRaw;
    extLink?: boolean;
    icon?: string;
    iconPack?: "mdi" | "fa";
    iconAsImage?: boolean;
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

const props = defineProps<{ item: CardItem }>();

let altText: string;
if (props.item?.title) {
    altText =
        typeof props.item.title === "string"
            ? props.item.title
            : props.item.title.join(" ");
}
</script>
