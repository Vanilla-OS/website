<template>
    <dynamic-panel :cards="cards" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "dynamic-panel-orchid-release",
    data() {
        return {
            cards: [
                {
                    title: 'Reliable',
                    content: 'Count on consistent performance with updates that are always carefully tested, ensuring your system remains stable and reliable. Focus on what matters most without interruptions. Whether managing work projects, enjoying entertainment, or creating new content, you can count on Orchid.',
                    color: 'blue'
                },
                {
                    title: 'Safe',
                    content: 'Your security is our priority. Orchid protects critical components from unauthorized access, ensuring a secure environment. Your activities take place in an isolated space, keeping them separate and secure. Additionally, your data is encrypted, and the boot process is verified against tampering.',
                    color: 'green'
                },
                {
                    title: 'Cool',
                    content: 'Experience a fresh, modern interface that’s as visually appealing as functional. Quickly access your favorite apps and tools with a streamlined design that makes navigation truly intuitive. Enjoy smooth transitions, stunning visuals and an overall user experience that feels effortless and enjoyable.',
                    color: 'pink'
                }
            ]
        };
    }
});
</script>
