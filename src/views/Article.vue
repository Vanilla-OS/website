<template>
    <div class="page page--article">
        <div class="page-wrapper container">
            <div class="page-header">
                <div class="page-nav" v-if="parentRoute?.name">
                    <router-link :to="{ name: parentRoute.name }" class="btn btn--link btn--inline">
                        <span class="mdi material-icons">arrow_back</span>
                        <span v-if="parentRoute?.meta?.title">Back to {{ parentRoute.meta.title }}</span>
                    </router-link>
                </div>
                <h1>{{ article?.title }}</h1>
                <p>{{ article?.description }}</p>
            </div>
            <div class="page-content anim--fadeIn">
                <div class="text text--rich" v-html="parsedHTML" @click="handleClick"></div>
            </div>
            <div class="card card--hz card--type-adv card--type-adv--hz card--type-funnyletter">
                <div class="card-header">
                    <h4>Don't miss the news</h4>
                    <h2>Subscribe to the Newsletter</h2>
                    <div class="btn btn--primary" @click="isNotMailNotChimpOpen = true">
                        <span class="mdi material-icons">email</span>
                        <span>Subscribe Now</span>
                    </div>
                </div>
                <div class="card-content">
                    <div class="flexList">
                        <div class="card-image">
                            <img src="/assets/images/components/funnyletter.svg" alt="Subscribe to the Newsletter" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="toolBox">
            <div class="toolBox-panels">
                <div class="toolBox-panels-item" ref="panelToc" :class="{ 'active': panelTocOpen }">
                    <div class="toolBox-panels-item-wrapper container">
                        <div class="toolBox-panels-item-header">
                            <h4>Table of Contents</h4>
                        </div>

                        <div class="toolBox-panels-item-content">
                            <div class="toc">
                                <ul class="toc-list">
                                    <li v-for="(heading, index) in tableOfContents" :key="index" class="toc-item">
                                        <span :class="`clickable toc-item-level-${heading.level}`"
                                            @click="handleTocItemClick(heading.anchor)" :hash="heading.anchor">
                                            {{ heading.title }}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="toolBox-wrapper container">
                <div class="toolBox-item toolBox-item--grow">
                    <span class="toolBox-item-icon mdi material-icons">access_time</span>
                    <span class="toolBox-item-text">{{ readingTime }}</span>
                </div>
                <div class="toolBox-item btn btn--link btn--inline" @click="shareModalOpen = true">
                    <span class="toolBox-item-icon mdi material-icons">share</span>
                    <span class="toolBox-item-label">Share</span>
                </div>
                <div class="toolBox-item btn btn--link btn--inline" @click="printArticle">
                    <span class="toolBox-item-icon mdi material-icons">print</span>
                    <span class="toolBox-item-label">Print</span>
                </div>
                <div class="toolBox-item btn btn--link btn--inline" @click="panelTocOpen = !panelTocOpen">
                    <span class="toolBox-item-icon mdi material-icons">format_list_bulleted</span>
                    <span class="toolBox-item-label">Table of Contents</span>
                </div>
            </div>
        </div>
    </div>

    <share-modal :isOpen="shareModalOpen" @close="shareModalOpen = false" />
    <image-showcase :isOpen="imageShowcaseOpen" :articleImages="articleImages" :currentImageIndex="currentImageIndex"
        @close="closeImageShowcase" @navigate="navigateImage" />
    <notmail-not-chimp :is-open="isNotMailNotChimpOpen" @close="closeNotMailNotChimp" />
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { loadArticle } from '@/articlesLoader';
import type { Article } from '@/articlesLoader';
import { useHead } from 'unhead'

export default defineComponent({
    name: 'article',
    data() {
        return {
            article: null as Article | null,
            parsedHTML: '',
            shareModalOpen: false,
            imageShowcaseOpen: false,
            articleImages: [] as string[],
            currentImageIndex: 0,
            panelTocOpen: false,
            isNotMailNotChimpOpen: false,
            articleLoaded: false,
        };
    },
    methods: {
        handleTocItemClick(anchor: string) {
            const currentPath = this.$router.currentRoute.value.path;
            const newHash = `#${anchor}`;
            const newPath = `${currentPath}${newHash}`;
            window.history.replaceState({}, document.title, newPath);
            this.scrollToAnchor(anchor);
            this.panelTocOpen = false;
        },
        scrollToAnchor(anchor: string) {
            const element = document.getElementById(anchor);
            console.log(element);
            if (element) {
                window.scrollTo(0, 0);
                element.scrollIntoView({ behavior: 'smooth' });
            }
        },
        printArticle() {
            window.print();
        },
        openImageShowcase(images: string[], index: number) {
            this.articleImages = images;
            this.currentImageIndex = index;
            this.imageShowcaseOpen = true;
        },
        closeImageShowcase() {
            this.imageShowcaseOpen = false;
        },
        closeNotMailNotChimp() {
            this.isNotMailNotChimpOpen = false;
        },
        navigateImage(index: number) {
            this.currentImageIndex = index;
        },
        extractArticleImages(content: string) {
            const imgRegex = /<img[^>]+src="([^">]+)/g;
            const matches = [];
            let match;
            while ((match = imgRegex.exec(content))) {
                matches.push(match[1]);
            }
            return matches;
        },
        handleClick(event: MouseEvent) {
            const target = event.target as HTMLElement;
            if (target.tagName === 'IMG') {
                const src = target.getAttribute('src');
                if (src) {
                    const index = this.articleImages.indexOf(src);
                    if (index !== -1) {
                        this.openImageShowcase(this.articleImages, index);
                    }
                }
            }
        },
    },
    async mounted() {
        const route = useRoute();
        const { date, slug } = route.params;

        try {
            this.article = await loadArticle(date as string, slug as string);
            this.parsedHTML = this.article?.content || '';
            this.articleLoaded = true;
            useHead({
                title: `${this.article!.title} - ${document.title}`,
                meta: [
                    {
                        name: 'description',
                        content: this.article!.description,
                    },
                    {
                        name: 'keywords',
                        content: this.article!.keywords.join(', ') || this.article!.description.split(' ').join(', '),
                    },
                    {
                        name: 'og:title',
                        content: `${this.article!.title} - ${document.title}`,
                    },
                    {
                        name: 'og:description',
                        content: this.article!.description,
                    },
                    {
                        name: 'og:url',
                        content: `${window.location.origin}${route.fullPath}`
                    },
                    {
                        name: 'twitter:card',
                        content: 'summary_large_image',
                    },
                    {
                        name: 'twitter:title',
                        content: `${this.article!.title} - ${document.title}`,
                    },
                    {
                        name: 'twitter:description',
                        content: this.article!.description,
                    },
                ],
            })
        } catch (error) {
            console.error(error);
            // this.$router.push({ name: '404' });
        }

        if (this.article?.content) {
            this.articleImages = this.extractArticleImages(this.article?.content);
        }
    },
    computed: {
        getArticleLink() {
            const { fullPath } = useRoute();
            return window.location.origin + fullPath;
        },
        parentRoute() {
            if (!this.$route.meta.parent) return null;

            const parentRoute = this.$router.getRoutes().find(
                (route) => route.name === this.$route.meta.parent
            );

            return parentRoute || null;
        },
        tableOfContents() {
            if (!this.article || !this.article.content) return [];

            const headingRegex = /<h([1-6])[^>]*>([^<]+)<\/h[1-6]>/g;
            const matches = [];
            let match;

            while ((match = headingRegex.exec(this.article.content))) {
                const title = decodeURIComponent(match[2].replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'"));
                const anchor = title.replace(/['",]/g, '').replace(/\s+/g, '-').toLowerCase();
                matches.push({
                    anchor: anchor,
                    title: title,
                    level: parseInt(match[1]),
                });
            }

            return matches;
        },
        readingTime() {
            if (!this.article || !this.article.content) return '0m 0s';

            const wordCount = this.article.content.split(/\s+/).length;

            // assuming an average reading speed of 200 words per minute
            const readingSpeed = 200;
            const minutes = Math.floor(wordCount / readingSpeed);
            const seconds = Math.round((wordCount / readingSpeed - minutes) * 60);

            return `${minutes}m ${seconds}s`;
        },
    },
    watch: {
        $route() {
            this.articleLoaded = false;
        },
        articleLoaded() {
            if (this.articleLoaded) {
                this.$nextTick(() => {
                    const { hash } = window.location;
                    if (hash) {
                        this.scrollToAnchor(hash.replace('#', ''));
                    }
                });
            }
        },
    },
});
</script>
