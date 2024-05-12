<template>
    <div class="card-content">
        <div class="flexList">
            <div v-if="item.description" class="text">
                <p>{{ item.description }}</p>
            </div>
            <div v-if="item.html" class="text text--rich" v-html="item.html"></div>
            <div v-if="item.image" class="img img--fit card card--plain card--no-padding" :class="item.imageClasses">
                <img :src="item.image" :alt="altText" />
            </div>
            <div v-if="item.badges" class="badges">
                <div v-for="(badge, index) in item.badges" :key="index" :class="[
                    'badges-item',
                    { [`badges-item--${badge.color}`]: badge.color },
                ]">
                    {{ badge.text }}
                </div>
            </div>
            <btn v-if="item.type === 'adv' && item.btn" :icon="item.icon" :iconPack="item.iconPack"
                :iconAsImage="item.iconAsImage" :imageClasses="item.imageClasses" :altText="altText" :btn="item.btn"
                :to="item.to" :extLink="item.extLink" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CardItem } from "./Card.vue";

defineProps<{ item: CardItem; altText?: string }>();
</script>
