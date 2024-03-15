<template>
    <header class="topBar">
        <div class="topBar-wrapper container">
            <div class="topBar-logo">
                <router-link :to="{ name: 'home' }">
                    <img src="/assets/images/brand/vanillaos-logo.svg" alt="Vanilla OS" class="no-dark" />
                    <img src="/assets/images/brand/vanillaos-logo-dark.svg" alt="Vanilla OS" class="on-dark" />
                </router-link>
            </div>
            <div v-if="currentRoute.name === 'blog' || currentRoute.name === 'article'" class="topBar-search">
                <div class="searchBar" :class="{ active: isSearchActive }">
                    <div class="overlay" @click="closeSearch" v-if="isSearchActive"></div>
                    <div class="searchBar-wrapper">
                        <transition name="fade">
                            <div class="searchBar-field">
                                <div class="searchBar-icon" @click="toggleSearch">
                                    <span class="mdi material-icons">
                                        {{ isSearchActive ? 'close' : 'search' }}
                                    </span>
                                </div>
                                <div class="searchBar-shortcut" @click="toggleSearch" v-if="!isSearchActive">
                                    <span>/</span>
                                </div>
                                <input type="text" class="searchBar-input" placeholder="Search" v-model="searchQuery" />
                            </div>
                        </transition>
                        <transition name="fade">
                            <div class="searchBar-results card card--min card--min-padding" v-if="results.length > 0">
                                <div class="searchBar-result card card--clickable card--plain  card--allow-scroll"
                                    v-for="result in results" :key="result.slug"
                                    @click="navigateToResult(result.slug, result.date)">
                                    <div class="card-header">
                                        <h5>{{ result.title }}</h5>
                                        <p>{{ result.date }}</p>
                                    </div>
                                    <div class="card-content">
                                        <div class="text">
                                            <p>{{ result.description }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
            <div class="overlay" v-if="isMenuToggled" @click="toggleMenu"></div>
            <nav>
                <ul class="topBar-navigation" :class="{ active: isMenuToggled }">
                    <li><router-link :to="{ name: 'blog' }">Blog</router-link></li>
                    <li><router-link :to="{ name: 'help' }">Help</router-link></li>
                    <li><router-link :to="{ name: 'get-involved' }">Get Involved</router-link></li>
                    <li><router-link :to="{ name: 'download' }">Download</router-link></li>
                </ul>
            </nav>
            <button class="topBar-hamburger topBar-hamburger--collapse topBar-hamburger--squeeze"
                :class="{ 'is-active': isMenuToggled }" @click="toggleMenu" type="button">
                <span class="topBar-hamburger-box">
                    <span class="topBar-hamburger-inner"></span>
                </span>
            </button>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { searchArticle } from '@/articlesLoader';
import type { Article } from '@/articlesLoader';

export default defineComponent({
    name: "Topbar",
    data() {
        return {
            isSearchActive: false,
            searchQuery: "",
            results: [] as Article[],
            isMenuToggled: false,
        };
    },
    methods: {
        toggleSearch() {
            this.isSearchActive = !this.isSearchActive;
            this.$nextTick(() => {
                if (this.isSearchActive) {
                    this.$el.querySelector(".searchBar-input").value = "";
                    this.$el.querySelector(".searchBar-input").focus();
                }
            });
        },
        closeSearch() {
            this.isSearchActive = false;
            this.$nextTick(() => {
                this.$el.querySelector(".searchBar-input").value = "";
                this.results = [];
            });
        },
        navigateToResult(slug: string, date: string) {
            this.closeSearch();
            this.$router.push({ name: "article", params: { slug, date } });
        },
        toggleMenu() {
            this.isMenuToggled = !this.isMenuToggled;
        },
    },
    computed: {
        currentRoute() {
            return useRoute();
        },
    },
    mounted() {
        document.addEventListener("keydown", (e) => {
            if (e.key === "/") {
                e.preventDefault();
                this.toggleSearch();
            }
            if (e.key === "Escape") {
                e.preventDefault();
                this.closeSearch();
            }
        });
    },
    watch: {
        searchQuery: async function (newQuery) {
            if (newQuery.length > 2) {
                this.results = await searchArticle(newQuery);
            } else {
                this.results = [];
            }
        },
    },
});
</script>
