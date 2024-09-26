<template>
    <div v-if="isOpen" class="modal modal--large-height anim--fadeIn">
        <div class="overlay" @click="closeModal"></div>
        <div class="modal-wrapper">
            <div class="imageSlider">
                <div v-for="(image, index) in articleImages" :key="index" class="imageSlider-item" :style="{
                    transform: `translateX(${index === currentIndex ? -index * 100 : 0}%)`,
                    visibility: index === currentIndex ? 'visible' : 'hidden',
                }">
                    <img :src="image" @click="navigate(index)" />
                </div>
            </div>
            <div class="imageSlider-nav" v-if="articleImages.length > 1">
                <div class="btn btn--secondary btn--circle" @click="prevImage" :disabled="currentIndex === 0">
                    <span class="material-symbols-outlined">arrow_back</span>
                </div>
                <div class="btn btn--secondary btn--circle" @click="nextImage"
                    :disabled="currentIndex === articleImages.length - 1">
                    <span class="material-symbols-outlined">arrow_forward</span>
                </div>
            </div>
        </div>
        <div class="btn btn--link btn--circle btn--close" @click="closeModal">
            <span class="material-symbols-outlined">close</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";

export default defineComponent({
    name: "ImageShowcase",
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
        articleImages: {
            type: Array as () => string[],
            required: true,
        },
        currentImageIndex: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            currentIndex: this.currentImageIndex,
            touchStartX: 0,
            touchMoveX: 0,
        };
    },
    watch: {
        currentImageIndex(newIndex) {
            this.currentIndex = newIndex;
        },
    },
    methods: {
        closeModal() {
            this.$emit("close");
        },
        navigate(index: number) {
            this.$emit("navigate", index);
        },
        prevImage() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
        },
        nextImage() {
            if (this.currentIndex < this.articleImages.length - 1) {
                this.currentIndex++;
            }
        },
        handleKeyboardEvent(event: KeyboardEvent) {
            if (event.key === "ArrowLeft") {
                this.prevImage();
            } else if (event.key === "ArrowRight") {
                this.nextImage();
            } else if (event.key === "Escape") {
                this.closeModal();
            }
        },
        addSwipeListeners() {
            window.addEventListener("touchstart", this.handleTouchStart);
            window.addEventListener("touchmove", this.handleTouchMove);
            window.addEventListener("touchend", this.handleTouchEnd);
        },
        removeSwipeListeners() {
            window.removeEventListener("touchstart", this.handleTouchStart);
            window.removeEventListener("touchmove", this.handleTouchMove);
            window.removeEventListener("touchend", this.handleTouchEnd);
        },
        handleTouchStart(event: TouchEvent) {
            this.touchStartX = event.touches[0].clientX;
        },
        handleTouchMove(event: TouchEvent) {
            this.touchMoveX = event.touches[0].clientX;
        },
        handleTouchEnd() {
            const touchDistance = this.touchMoveX - this.touchStartX;
            if (touchDistance > 0) {
                this.prevImage();
            } else if (touchDistance < 0) {
                this.nextImage();
            }
        },
    },
    computed: {
        isPrevDisabled(): boolean {
            return this.currentIndex === 0;
        },
        isNextDisabled(): boolean {
            return this.currentIndex === this.articleImages.length - 1;
        },
    },
    mounted() {
        window.addEventListener("keydown", this.handleKeyboardEvent);
        this.addSwipeListeners();
    },
    beforeUnmount() {
        window.removeEventListener("keydown", this.handleKeyboardEvent);
        this.removeSwipeListeners();
    },
});
</script>
