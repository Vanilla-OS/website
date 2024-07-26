<template>
    <div class="Bento-card" :style="{ backgroundImage: `url(${background})`, backgroundColor: bgcolor }"
        :class="`Bento-card--${theme}`">
        <div class="Bento-card-content" :style="{ margin: margin }">
            <div class="Bento-card-title" :class="{ 'Bento-card-title--hz': imageLocation === 'right' }">
                <img :src="image" v-if="image" :style="{ width: imageSize }" />
                <h2>
                    <slot name="title" />
                </h2>
            </div>
            <p>
                <slot name="content" />
            </p>
            <span class="Bento-card-badge" v-if="badge">
                {{ badge }}
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BentoCard',
    props: {
        theme: {
            type: String,
            default: 'dark',
        },
        background: {
            type: String,
            required: true,
        },
        bgcolor: {
            type: String,
            default: 'transparent',
        },
        margin: {
            type: String,
            default: '0',
        },
        image: {
            type: String,
            default: '',
        },
        imageLocation: {
            type: String,
            default: '',
        },
        imageSize: {
            type: String,
            default: 'initial',
        },
        badge: {
            type: String,
            default: '',
        },
    },
});
</script>