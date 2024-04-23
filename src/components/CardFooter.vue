<template>
    <div class="card-footer" v-if="item.footerActions">
        <div class="btn btn--link btn--inline btn--med" v-for="(action, index) in item.footerActions" :key="index"
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
defineProps<{
    item: {
        footerActions: {
            title?: string;
            onClick: (event: MouseEvent) => void;
            icon: string;
            iconPack: "mdi" | "fa";
        }[];
    };
}>();
</script>
