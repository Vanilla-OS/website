<template>
    <router-link v-if="item.type === 'clickable' && !item.extLink" :to="item.to"
        class="card card--clickable card--min card--has-actions flexGrid-item" :class="item.extraClasses">
        <card-header :item />
        <card-content :item />
        <card-footer :item />
    </router-link>
    <a v-else-if="item.type === 'clickable' && item.extLink" :href="item.to" target="_blank"
        class="card card--clickable card--min card--has-actions flexGrid-item" :class="item.extraClasses">
        <card-header :item />
        <card-content :item />
        <card-footer :item />
    </a>
    <div v-else-if="item.type === 'adv'" class="card card--type-adv" :class="item.extraClasses">
        <div class="card-header">
            <h4>{{ item.title }}</h4>
            <h2>{{ item.title2 }}</h2>
        </div>
        <card-content :item />
    </div>
    <div v-else class="card card--min card--has-actions flexGrid-item" :class="item.extraClasses">
        <card-header :item />
        <card-content :item />
        <card-footer :item />
    </div>
</template>

<script lang="ts">
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
};
</script>
