<template>
    <router-link v-if="item.type === 'clickable' && !item.extLink" :to="item.to"
        class="card card--clickable card--min card--has-actions flexGrid-item" :class="item.extraClasses">
        <div class="card-header">
            <h3>
                <img :src="item.icon" :alt="item.title" v-if="item.icon && item.imageAsIcon" class="img img--24"
                    :class="item.imageClasses" />
                <span v-else-if="item.icon && !item.iconPack || item.icon && item.iconPack === 'mdi'"
                    class="mdi material-icons">{{
                        item.icon }}
                </span>
                <span v-else-if="item.iconPack === 'fa'">
                    <i :class="item.icon"></i>
                </span>
                {{ item.title }}
            </h3>
            <div class="card-actions">
                <div class="btn btn--link btn--inline btn--med">
                    <span class="mdi material-icons">arrow_forward</span>
                </div>
            </div>
        </div>
        <div class="card-content">
            <div class="flexList">
                <div class="text" v-if="item.description">
                    <p>{{ item.description }}</p>
                </div>
                <div class="img img--fit card card--plain card--no-padding" v-if="item.image" :class="item.imageClasses">
                    <img :src="item.image" :alt="item.title" />
                </div>
                <div v-if="item.badges" class="badges">
                    <div v-for="(badge, index) in item.badges" :key="index"
                        :class="`badges-item badges-item--${badge.color}`">
                        {{ badge.text }}
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer" v-if="item.footerActions">
            <div class="btn btn--link btn--inline btn--med" v-for="(action, index) in item.footerActions" :key="index"
                @click="action.onClick">
                <span v-if="action.iconPack === 'mdi'" class="mdi material-icons">{{ action.icon }}</span>
                <span v-else-if="action.iconPack === 'fa'">
                    <i :class="action.icon"></i>
                </span>
                <span>{{ action.title }}</span>
            </div>
        </div>
    </router-link>
    <a v-else-if="item.type === 'clickable' && item.extLink" :href="item.to" target="_blank"
        class="card card--clickable card--min card--has-actions flexGrid-item" :class="item.extraClasses">
        <div class="card-header">
            <h3>
                <img :src="item.icon" :alt="item.title" v-if="item.icon && item.imageAsIcon" class="img img--24"
                    :class="item.imageClasses" />
                <span v-else-if="item.icon && !item.iconPack || item.icon && item.iconPack === 'mdi'"
                    class="mdi material-icons">{{
                        item.icon }}
                </span>
                <span v-else-if="item.iconPack === 'fa' && item.icon">
                    <i :class="item.icon"></i>
                </span>
                {{ item.title }}
            </h3>
            <div class="card-actions">
                <div class="btn btn--link btn--inline btn--med">
                    <span class="mdi material-icons">arrow_forward</span>
                </div>
            </div>
        </div>
        <div class="card-content">
            <div class="flexList">
                <div class="text" v-if="item.description">
                    <p>{{ item.description }}</p>
                </div>
                <div class="text text--rich" v-if="item.html" v-html="item.html"></div>
                <div class="img img--fit card card--plain card--no-padding" v-if="item.image" :class="item.imageClasses">
                    <img :src="item.image" :alt="item.title" />
                </div>
                <div v-if="item.badges" class="badges">
                    <div v-for="(badge, index) in item.badges" :key="index"
                        :class="`badges-item badges-item--${badge.color}`">
                        {{ badge.text }}
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer" v-if="item.footerActions">
            <div class="btn btn--link btn--inline btn--med" v-for="(action, index) in item.footerActions" :key="index"
                @click="action.onClick">
                <span class="mdi material-icons">{{ action.icon }}</span>
                <span>{{ action.title }}</span>
            </div>
        </div>
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
        <div class="card-header">
            <h3>
                <img :src="item.icon" :alt="item.title" v-if="item.icon && item.imageAsIcon" class="img img--24"
                    :class="item.imageClasses" />
                <span v-else-if="item.icon && !item.iconPack || item.icon && item.iconPack === 'mdi'"
                    class="mdi material-icons">{{
                        item.icon }}
                </span>
                <span v-else-if="item.iconPack === 'fa' && item.icon">
                    <i :class="item.icon"></i>
                </span>
                {{ item.title }}
            </h3>
            <div class="card-actions" v-if="item.actions">
                <div class="btn btn--link btn--inline btn--med">
                    <span class="mdi material-icons">arrow_forward</span>
                </div>
            </div>
        </div>
        <div class="card-content">
            <div class="flexList">
                <div class="text" v-if="item.description">
                    <p>{{ item.description }}</p>
                </div>
                <div class="text text--rich" v-if="item.html" v-html="item.html"></div>
                <div class="img img--fit card card--plain card--no-padding" v-if="item.image" :class="item.imageClasses">
                    <img :src="item.image" :alt="item.title" />
                </div>
                <div v-if="item.badges" class="badges">
                    <div v-for="(badge, index) in item.badges" :key="index"
                        :class="`badges-item badges-item--${badge.color}`">
                        {{ badge.text }}
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer" v-if="item.footerActions">
            <div class="btn btn--link btn--inline btn--med" v-for="(action, index) in item.footerActions" :key="index"
                @click="action.onClick">
                <span v-if="action.iconPack === 'mdi'" class="mdi material-icons">{{ action.icon }}</span>
                <span v-else-if="action.iconPack === 'fa'">
                    <i :class="action.icon"></i>
                </span>
                <span>{{ action.title }}</span>
            </div>
        </div>
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
  