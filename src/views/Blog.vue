<template>
    <div class="flexGrid anim--fadeIn">
        <div v-for="(article, index) in articles.slice(0, 4)" :key="article.title"
            :class="['card', 'article', 'flexGrid-item', { 'article--big': index === 0, 'flexGrid-item--2': index === 0 }]">
            <div class="card-header">
                <h2>{{ article.title }}</h2>
                <span class="text text--dimmed">{{ formatDate(article.date) }}</span>
            </div>
            <div class="card-content">
                <div class="splitter">
                    <div class="flexList">
                        <div class="text text--spaced">
                            <p>{{ article.description }}</p>
                        </div>
                        <router-link v-if="article"
                            :to="{ name: 'article', params: { date: article.date, slug: article.slug } }"
                            class="btn btn--primary">
                            <span>Read More</span>
                            <span class="material-symbols-outlined">arrow_forward</span>
                        </router-link>
                    </div>
                    <div v-if="index === 0" class="card-image card-image--right">
                        <img src="/assets/images/backgrounds/vos-orchid-laptop-frame.svg" alt="Vanilla OS 2 Orchid" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Newsletter -->
        <div class="card card--type-adv card--type-funnyletter">
            <div class="card-header">
                <h4>Don't miss the news</h4>
                <h2>Subscribe to the Newsletter</h2>
            </div>
            <div class="card-content">
                <div class="flexList">
                    <div class="card-image">
                        <img src="/assets/images/components/funnyletter.svg" alt="Subscribe to the Newsletter" />
                    </div>
                    <div class="btn btn--primary" @click="isNotMailNotChimpOpen = true">
                        <span class="material-symbols-outlined">email</span>
                        <span>Subscribe via Email</span>
                    </div>
                    <a class="btn btn--primary" href="https://vanillaos.org/feed.xml">
                        <span class="material-symbols-outlined">newspaper</span>
                        <span>Subscribe via the RSS Feed</span>
                    </a>
                </div>
            </div>
        </div>

        <div v-for="(article, index) in articles.slice(4)" :key="article.title" class="card article flexGrid-item">
            <div class="card-header">
                <h2>{{ article.title }}</h2>
                <span class="text text--dimmed">{{ formatDate(article.date) }}</span>
            </div>
            <div class="card-content">
                <div class="splitter">
                    <div class="flexList">
                        <div class="text text--spaced">
                            <p>{{ article.description }}</p>
                        </div>
                        <router-link v-if="article"
                            :to="{ name: 'article', params: { date: article.date, slug: article.slug } }"
                            class="btn btn--primary">
                            <span>Read More</span>
                            <span class="material-symbols-outlined">arrow_forward</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <notmail-not-chimp :is-open="isNotMailNotChimpOpen" @close="closeNotMailNotChimp" />
    </div>
</template>

<script lang="ts">
import { loadArticles } from '@/articlesLoader';
import type { Article } from '@/articlesLoader';

export default {
    name: 'blog',
    data() {
        return {
            articles: [] as Article[],
            isNotMailNotChimpOpen: false,
        };
    },
    methods: {
        async loadArticlesData() {
            this.articles = await loadArticles();
        },
        formatDate(dateString: string): string {
            const date = new Date(dateString);
            if (typeof Intl !== 'undefined' && Intl.DateTimeFormat) {
                return new Intl.DateTimeFormat(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                }).format(date);
            } else {
                return `${date.getDate()} ${this.getMonthName(date.getMonth())} ${date.getFullYear()}`;
            }
        },
        getMonthName(monthIndex: number): string {
            const monthNames = [
                'January', 'February', 'March', 'April',
                'May', 'June', 'July', 'August',
                'September', 'October', 'November', 'December',
            ];
            return monthNames[monthIndex];
        },
        closeNotMailNotChimp() {
            this.isNotMailNotChimpOpen = false;
        },
    },
    async mounted() {
        await this.loadArticlesData();
    },
};
</script>
