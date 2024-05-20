<template>
    <conditional-link :link="item.type === 'clickable' ? item : {}" :class="cardClasses">
        <card-header :item :icon="{ altText: altText, ...item }" />
        <div class="card-content">
            <div class="flexList">
                <div v-if="item.description" class="text">
                    <p>{{ item.description }}</p>
                </div>
                <slot />
            </div>
        </div>
        <card-footer v-if="item.footerActions" :actions="item.footerActions" />
    </conditional-link>
</template>

<script setup lang="ts">
import type { AnIconProps } from "./AnIcon.vue";
import type { CardFooterAction } from "./CardFooter.vue";
import type { LinkProps } from "./ConditionalLink.vue";

interface CardItemI {
    title?: string | [string, string];
    description?: string;
    type?: "clickable" | "adv";
    imageClasses?: string[];
    footerActions?: CardFooterAction[];
}

export type CardItem = CardItemI & LinkProps & Partial<AnIconProps>;

const props = defineProps<{ item: CardItem }>();

let altText: string;
if (props.item?.title) {
    altText =
        typeof props.item.title === "string"
            ? props.item.title
            : props.item.title.join(" ");
}

const cardClasses = ["card"];

if (props.item.type === "adv") cardClasses.push("card--type-adv");
else cardClasses.push("card--min", "flexGrid-item");

if (props.item.type === "clickable") cardClasses.push("card--clickable");
</script>
