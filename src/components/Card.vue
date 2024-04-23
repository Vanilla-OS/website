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
        <div class="card-content">
            <div class="flexList">
                <div class="text" v-if="item.description">
                    <p>{{ item.description }}</p>
                </div>
                <div class="text text--rich" v-if="item.html" v-html="item.html"></div>
                <div class="img img--fit card card--plain card--no-padding" v-if="item.image">
                    <img :src="item.image" :alt="item.title" />
                </div>
                <router-link v-if="item.btn" :to="item.to" class="btn btn--primary">
                    <img :src="item.icon" :alt="item.title" v-if="item.icon && item.imageAsIcon" class="img img--24"
                        :class="item.imageClasses" />
                    <span v-else-if="item.icon && !item.iconPack || item.icon && item.iconPack === 'mdi'"
                        class="mdi material-icons">{{
                            item.icon }}
                    </span>
                    <span v-else-if="item.iconPack === 'fa' && item.icon">
                        <i :class="item.icon"></i>
                    </span>
                    <span>{{ item.btn }}</span>
                </router-link>
            </div>
        </div>
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
