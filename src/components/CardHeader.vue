<template>
    <div :class="['card-header', { 'card-header--multiline': isMultiline }]">
        <h3>
            <an-icon v-if="icon && item.type !== 'adv'" :icon="icon.icon" :iconPack="icon.iconPack"
                :iconAsImage="icon.iconAsImage" :class="item.imageClasses" :altText="icon.altText" />
            <template v-if="isMultiline">{{ item.title![0] }}<br />{{ item.title![1] }}</template>
            <template v-else>{{ item.title ? " " + item.title : "" }}</template>
        </h3>
        <div v-if="item.type === 'clickable'">
            <div class="btn btn--link btn--inline btn--med">
                <an-icon icon="arrow_forward" iconPack="mdi" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { AnIconProps } from "./AnIcon.vue";
import type { CardItem } from "./Card.vue";

const props = defineProps<
    { item: Pick<CardItem, "imageClasses" | "title" | "type">, icon: Partial<AnIconProps> }
>();

const isMultiline = Array.isArray(props.item.title);
</script>
