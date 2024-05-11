<template>
    <div :class="['card-header', { 'card-header--multiline': isMultiline }]">
        <h3>
            <template v-if="item.icon && item.type !== 'adv'">
                <img v-if="item.iconAsImage" :src="item.icon" :alt="altText" class="img img--24"
                    :class="item.imageClasses" />
                <span v-else-if="!item.iconPack || item.iconPack === 'mdi'" class="mdi material-icons">{{ item.icon }}
                </span>
                <span v-else-if="item.iconPack === 'fa'">
                    <i :class="item.icon"></i>
                </span>
            </template>
            <template v-if="isMultiline">{{ item.title[0] }}<br />{{ item.title[1] }}</template>
            <template v-else>{{ item.title ? " " + item.title : "" }}</template>
        </h3>
        <div v-if="item?.type === 'clickable'">
            <div class="btn btn--link btn--inline btn--med">
                <span class="mdi material-icons">arrow_forward</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CardItem } from "./Card.vue";

const props = defineProps<{ item: CardItem; altText?: string }>();

const isMultiline = Array.isArray(props.item.title);
</script>
