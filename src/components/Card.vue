<template>
    <div v-if="item.type === 'adv'" class="card card--type-adv">
        <div class="card-header">
            <h4>{{ item.title[0] }}</h4>
            <h2>{{ item.title[1] }}</h2>
        </div>
        <card-content :item :altText />
    </div>
    <conditional-link v-else :link="item.type === 'clickable' ? item : {}" :class="[
        'card',
        { 'card--clickable': item.type === 'clickable' },
        'card--min',
        'card--has-actions',
        'flexGrid-item',
    ]">
        <card-header :item :altText />
        <card-content :item :altText />
        <card-footer :item />
    </conditional-link>
</template>

<script setup lang="ts">
import type { LinkProps } from "./ConditionalLink.vue";

interface CardItemI {
    title?: string | [string, string];
    description?: string;
    type?: "clickable" | "adv";
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

export type CardItem = CardItemI & LinkProps;

const props = defineProps<{ item: CardItem }>();

let altText: string;
if (props.item?.title) {
    altText =
        typeof props.item.title === "string"
            ? props.item.title
            : props.item.title.join(" ");
}
</script>
