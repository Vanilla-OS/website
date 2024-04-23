<template>
    <div class="card-header">
        <h3>
            <template v-if="item.icon">
                <img v-if="item.imageAsIcon" :src="item.icon" :alt="item.title" class="img img--24"
                    :class="item.imageClasses" />
                <span v-else-if="!item.iconPack || item.iconPack === 'mdi'" class="mdi material-icons">{{ item.icon }}
                </span>
                <span v-else-if="item.iconPack === 'fa'">
                    <i :class="item.icon"></i>
                </span>
            </template>
            {{ item.title }}
        </h3>
        <div class="card-actions">
            <div class="btn btn--link btn--inline btn--med">
                <span class="mdi material-icons">arrow_forward</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    item: {
        title: string;
        icon?: string;
        iconPack?: "mdi" | "fa";
        imageAsIcon?: boolean;
        imageClasses?: [];
    };
}>();
</script>
