<template>
    <div class="card-content">
        <div class="flexList">
            <div v-if="item.html" class="text text--rich" v-html="item.html"></div>
            <badges :items="item.badges" />
            <btn v-if="item.type === 'adv' && item.btn" :to="item.to" :extLink="item.extLink">
                <template #start>
                    <an-icon v-if="item.icon" :icon="item.icon" :iconPack="item.iconPack"
                        :iconAsImage="item.iconAsImage" :altText :class="item.imageClasses" />
                </template>
                {{ item.btn }}
            </btn>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CardItem } from "./Card.vue";

defineProps<{ item: CardItem; altText?: string }>();
</script>
