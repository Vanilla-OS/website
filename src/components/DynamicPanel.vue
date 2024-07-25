<template>
    <div class="DynamicPanel">
        <div v-for="(DynamicPanel, index) in cards" :key="index"
            :class="['DynamicPanel-card', `DynamicPanel-card--${DynamicPanel.color}`, { 'DynamicPanel-card--active': activeDynamicPanel === index }]"
            @click="toggleActiveDynamicPanel(index)">
            <div class="DynamicPanel-card-header">
                <h2>{{ DynamicPanel.title }}</h2>
                <span class="mdi material-icons">
                    {{ activeDynamicPanel === index ? '' : 'arrow_forward' }}
                </span>
            </div>
            <p v-if="activeDynamicPanel === index">{{ DynamicPanel.content }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DynamicPanel',
    props: {
        cards: Array as () => Array<{
            title: string;
            content: string;
            color: string;
        }>
    },
    data() {
        return {
            activeDynamicPanel: 0 as number
        }
    },
    methods: {
        toggleActiveDynamicPanel(index: number) {
            if (this.activeDynamicPanel === index) {
                return;
            }
            this.activeDynamicPanel = index;
        }
    }
});
</script>
