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
                    title: this.$t('testing-components.cards[0].title'),
                    content: this.$t('testing-components.cards[0].description'),
                    color: 'blue'
                },
                {
                    title: this.$t('testing-components.cards[1].title'),
                    content: this.$t('testing-components.cards[1].description'),
                    color: 'green'
                },
                {
                    title: this.$t('testing-components.cards[2].title'),
                    content: this.$t('testing-components.cards[2].description'),
                    color: 'pink'
                }
            ]
        };
    }
});
</script>
