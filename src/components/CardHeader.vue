<template>
    <div :class="['card-header', { 'card-header--multiline': isMultiline }]">
        <h3>
            <an-icon v-if="item.icon && item.type !== 'adv'" :icon="item.icon" :iconPack="item.iconPack"
                :iconAsImage="item.iconAsImage" :class="item.imageClasses" :altText />
            <template v-if="isMultiline">{{ item.title[0] }}<br />{{ item.title[1] }}</template>
            <template v-else>{{ item.title ? " " + item.title : "" }}</template>
        </h3>
        <div v-if="item?.type === 'clickable'">
            <div class="btn btn--link btn--inline btn--med">
                <an-icon icon="arrow_forward" iconPack="mdi" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CardItem } from "./Card.vue";

const props = defineProps<{ item: CardItem; altText?: string }>();

const isMultiline = Array.isArray(props.item.title);
</script>
