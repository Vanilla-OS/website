<template>
    <div class="Bento-card Bento-card--carousel">
        <div class="Bento-card-carousel">
            <div class="Bento-card-carousel-pages">
                <div class="Bento-card-carousel-page" v-for="(page, index) in pages" :key="page.logo"
                    v-show="index === currentPage" :style="{ backgroundColor: page.bgcolor }">
                    <div class="Bento-card-carousel-page-title">
                        <h2>{{ page.title }}</h2>
                        <img :src="page.logo" />
                    </div>
                    <img :src="page.image" class="Bento-card-carousel-page-image" />
                </div>
            </div>
            <div class="Bento-card-carousel-dots">
                <span class="Bento-card-carousel-dot" v-for="(page, index) in pages" :key="index"
                    :class="{ active: index === currentPage }" @click="setCurrentPage(index)"></span>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

interface Page {
    title: string;
    logo: string;
    image: string;
    bgcolor: string;
}

export default defineComponent({
    name: 'BentoCard',
    props: {
        pages: {
            type: Array as () => Page[],
            required: true,
        },
    },
    data() {
        return {
            currentPage: 0,
            interval: null as unknown as number,
        };
    },
    mounted() {
        this.startAutoSwitch();
    },
    beforeUnmount() {
        this.stopAutoSwitch();
    },
    methods: {
        nextPage() {
            this.currentPage = (this.currentPage + 1) % this.pages.length;
        },
        setCurrentPage(index: number) {
            this.currentPage = index;
            this.resetAutoSwitch();
        },
        startAutoSwitch() {
            // @ts-ignore
            this.interval = setInterval(this.nextPage, 5000);
        },
        stopAutoSwitch() {
            clearInterval(this.interval);
        },
        resetAutoSwitch() {
            this.stopAutoSwitch();
            this.startAutoSwitch();
        },
    },
});
</script>