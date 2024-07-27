<template>
    <div class="BeforeAfterSlider-slider" @mousedown.prevent="startDrag" @touchstart.prevent="startDrag">
        <div class="BeforeAfterSlider-slider-container" ref="slider">
            <img :src="beforeImage" class="BeforeAfterSlider-image" />
            <img :src="afterImage" class="BeforeAfterSlider-image BeforeAfterSlider-image--after"
                :style="{ clipPath: clipPathStyle }" />
            <div class="BeforeAfterSlider-handle" ref="handle" :style="{ left: handleLeftPosition }">
                <div class="BeforeAfterSlider-handle-pill"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BeforeAfterSliderSlider',
    props: {
        beforeImage: {
            type: String,
            required: true,
        },
        afterImage: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            clipPathStyle: 'inset(0 50% 0 0)',
            handleLeftPosition: '50%',
            isDragging: false,
        };
    },
    methods: {
        startDrag(event: MouseEvent | TouchEvent) {
            this.isDragging = true;
            document.addEventListener('mousemove', this.onDrag);
            document.addEventListener('mouseup', this.stopDrag);
            document.addEventListener('touchmove', this.onDrag);
            document.addEventListener('touchend', this.stopDrag);
        },
        onDrag(event: MouseEvent | TouchEvent) {
            if (!this.isDragging) return;

            const slider = this.$refs.slider as HTMLElement;
            const rect = slider.getBoundingClientRect();
            const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
            let offsetX = clientX - rect.left;
            offsetX = Math.max(0, Math.min(offsetX, rect.width));

            this.clipPathStyle = `inset(0 ${rect.width - offsetX}px 0 0)`;
            this.handleLeftPosition = `${offsetX}px`;
        },
        stopDrag() {
            this.isDragging = false;
            document.removeEventListener('mousemove', this.onDrag);
            document.removeEventListener('mouseup', this.stopDrag);
            document.removeEventListener('touchmove', this.onDrag);
            document.removeEventListener('touchend', this.stopDrag);
        },
    },
});
</script>