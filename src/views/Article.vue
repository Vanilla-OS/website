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
            <div class="card card--hz card--type-adv card--type-adv--hz card--type-newsletter">
                <div class="card-header">
                    <h4>Don't miss the news</h4>
                    <h2>Subscribe to the Newsletter</h2>
                    <div class="btn btn--primary" @click="isMailChimpOpen = true">
                        <span class="mdi material-icons">email</span>
                        <span>Subscribe Now</span>
                    </div>
                </div>
                <div class="card-content">
                    <div class="flexList">
                        <div class="card-image">
                            <img src="/assets/images/components/newsletter.svg" alt="Subscribe to the Newsletter" />
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
                                        <a :href="`#${heading.anchor}`" :class="`toc-item-level-${heading.level}`"
                                            @click="handleTocItemClick">
                                            {{ heading.title }}
                                        </a>
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
    <mail-chimp :is-open="isMailChimpOpen" @close="closeMailChimp" />
</template>
  
<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { loadArticle } from '@/articlesLoader';
import type { Article } from '@/articlesLoader';

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
            isMailChimpOpen: false,
        };
    },
    methods: {
        handleTocItemClick() {
            this.panelTocOpen = false;
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
        closeMailChimp() {
            this.isMailChimpOpen = false;
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
        setStructuredData() {
            // JSON-LD schema for the article
            const schema = {
                '@context': 'https://schema.org',
                '@type': 'Article',
                mainEntityOfPage: {
                    '@type': 'WebPage',
                    '@id': this.$route.fullPath,
                },
                headline: this.$route.meta.title,
                description: this.$route.meta.description,
                datePublished: this.$route.meta.date,
                dateModified: this.$route.meta.date,
                author: {
                    '@type': 'Organization',
                    name: 'Vanilla OS Team',
                },
                publisher: {
                    '@type': 'Organization',
                    name: 'Vanilla OS',
                    logo: {
                        '@type': 'ImageObject',
                        url: `${window.location.origin}/assets/images/brand/vanillaos-logo.svg`,
                    },
                },
                image: {
                    '@type': 'ImageObject',
                    url: `${window.location.origin}/assets/images/backgrounds/vos-laptop-frame.svg`,
                    width: '732',
                    height: '388'
                },
            };

            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.innerHTML = JSON.stringify(schema);
            document.head.appendChild(script);
        },
    },
    async mounted() {
        const route = useRoute();
        const { date, slug } = route.params;

        try {
            this.article = await loadArticle(date as string, slug as string);
            this.parsedHTML = this.article?.content || '';
            document.title = `${this.article!.title} - ${document.title}`;
            document.querySelector('meta[name="description"]')!.setAttribute('content', this.article!.description);
        } catch (error) {
            document.title = `404 Not Found - ${document.title}`;
            console.error('Error loading article:', error);
        }

        if (this.article?.content) {
            this.articleImages = this.extractArticleImages(this.article?.content);
        }

        this.setStructuredData();
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
                matches.push({
                    anchor: match[2].toLowerCase().replace(/\s+/g, '-'),
                    title: match[2],
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
});
</script>
