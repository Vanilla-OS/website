<template>
    <div class="card-content">
        <div class="flexList">
            <div v-if="item.description" class="text">
                <p>{{ item.description }}</p>
            </div>
            <div v-if="item.html" class="text text--rich" v-html="item.html"></div>
            <div v-if="item.image" class="img img--fit card card--plain card--no-padding" :class="item.imageClasses">
                <img :src="item.image" :alt="item.title" />
            </div>
            <div v-if="item.badges" class="badges">
                <div v-for="(badge, index) in item.badges" :key="index" :class="[
                    'badges-item',
                    { [`badges-item--${badge.color}`]: badge.color },
                ]">
                    {{ badge.text }}
                </div>
            </div>
            <router-link
                v-if="item.type === 'adv' && item.btn"
                :to="item.to!"
                class="btn btn--primary"
            >
                <img
                    v-if="item.icon && item.iconAsImage"
                    :src="item.icon"
                    :alt="item.title"
                    class="img img--24"
                    :class="item.imageClasses"
                />
                <span
                    v-else-if="
                        (item.icon && !item.iconPack) ||
                        (item.icon && item.iconPack === 'mdi')
                    "
                    class="mdi material-icons"
                    >{{ item.icon }}
                </span>
                <span v-else-if="item.iconPack === 'fa' && item.icon">
                    <i :class="item.icon"></i>
                </span>
                <span>{{ item.btn }}</span>
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CardItem } from "./Card.vue";

defineProps<{ item: CardItem }>();
</script>
