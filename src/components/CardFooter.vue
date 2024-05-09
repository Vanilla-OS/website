<template>
    <div class="card-footer">
        <div class="btn btn--link btn--inline btn--med" v-for="(action, index) in actions" :key="index"
            @click="action.onClick">
            <span v-if="action.iconPack === 'mdi'" class="mdi material-icons">{{
                action.icon
            }}</span>
            <span v-else-if="action.iconPack === 'fa'">
                <i :class="action.icon"></i>
            </span>
            <span v-if="action.title">{{ action.title }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
export interface CardFooterAction {
    title?: string;
    onClick: (event: MouseEvent) => void;
    icon: string;
    iconPack: "mdi" | "fa";
}

defineProps<{ actions: CardFooterAction[] }>();
</script>
