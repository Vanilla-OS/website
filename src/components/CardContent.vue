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
        </div>
    </div>
</template>

<script setup lang="ts">
interface Badge {
    text: string;
    color?: string;
}

defineProps<{
    item: {
        title: string;
        description?: string;
        image?: string;
        imageClasses?: string[];
        badges?: Badge[];
        html?: string;
    };
}>();
</script>
