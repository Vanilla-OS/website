<template>
    <div class="hero hero--big hero--no-margin anim--fadeIn">
        <div class="hero-wrapper container">
            <img class="hero-image no-dark" src="/assets/images/backgrounds/vos-orchid-laptop-frame.svg"
                alt="Vanilla OS 2 Orchid" />
            <img class="hero-image on-dark" src="/assets/images/backgrounds/vos-orchid-laptop-frame-dark.svg"
                alt="Vanilla OS 2 Orchid" />
            <div class="hero-content">
                <div class="hero-imageText">
                    <img src="/assets/images/components/beta-headline.svg" alt="Vanilla OS 2 Beta" />
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="flexList">
            <div class="flexGrid flexGrid--3 anim--fadeIn">
                <div class="flexGrid-item flexGrid-item--2 card card--type-adv card--type-dev card--has-pattern-work">
                    <div class="card-header">
                        <h4>{{$t('beta.disclaimer.title')}}</h4>
                        <h2>{{$t('beta.disclaimer.read_before_downloading')}}</h2>
                    </div>
                    <div class="card-content">
                        <div class="flexList">
                            <div class="text text--rich">
                                <p>{{$t('beta.disclaimer.description1')}}</p>
                                <p>{{$t('beta.disclaimer.description2')}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flexGrid-item card">
                    <div class="card-header">
                        <h4>{{$t('beta.changelog.title')}}</h4>
                        <h2>{{$t('beta.changelog.discover_new')}}</h2>
                    </div>
                    <div class="card-content">
                        <div class="flexList">
                            <div class="text text--rich">
                                <p>{{$t('beta.changelog.description')}}</p>
                            </div>
                            <router-link
                                :to="{ name: 'article', params: { date: '2024-01-30', slug: 'vanilla-os-2-orchid-beta-is-here' } }"
                                class="btn btn--primary">
                                <span>{{$t('beta.changelog.learn_more')}}</span>
                                <span class=" material-symbols-outlined">arrow_forward</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="spacer"></div>
            <div class="text text--rich">
                <h3>{{$t('beta.beta_builds.title')}}</h3>
                <p>{{$t('beta.beta_builds.description')}}</p>
            </div>
            <div class="table">
                <table class="table-content">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>{{$t('download.download_table.headers[1]')}}</th>
                            <th>{{$t('download.download_table.headers[2]')}}</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-row" v-for="release in releases" :key="release.Id"
                            :class="release.IsLatest ? 'table-row--highlight' : ''">
                            <td>{{ release.Id }}</td>
                            <td>{{ release.Date.toLocaleDateString() }}</td>
                            <td>{{ release.Arch }}</td>
                            <td>
                                <div class="table-row--actions">
                                    <div class="badges" v-if="release.IsLatest">
                                        <span class="badges-item badges-item--green">{{$t('download.download_table.latest')}}</span>
                                    </div>
                                    <a class="btn--link btn--inline" target="_blank" :href="release.Url">
                                        <span class="material-symbols-outlined">file_download</span>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="spacer"></div>
            <div class="flexGrid flexGrid--3">
                <div
                    class="flexGrid-item flexGrid-item--2 card card--hz card--type-adv card--type-adv--hz card--type-funnyletter">
                    <div class="card-header">
                        <h4>{{$t('components.newsletter.title')}}</h4>
                        <h2>{{$t('components.newsletter.subscribe')}}</h2>
                        <div class="btn btn--primary" @click="isNotMailNotChimpOpen = true">
                            <span class="material-symbols-outlined">email</span>
                            <span>{{$t('components.newsletter.subscribe_email')}}</span>
                        </div>
                        <a class="btn btn--primary" href="//vanillaos.org/feed.xml">
                            <span class="material-symbols-outlined">newspaper</span>
                            <span>{{$t('components.newsletter.subscribe_rss')}}</span>
                        </a>
                    </div>
                    <div class="card-content">
                        <div class="flexList">
                            <div class="card-image">
                                <img src="/assets/images/components/funnyletter.svg" alt="Subscribe to the Newsletter" />
                            </div>
                        </div>
                    </div>
                </div>
                <card :item="{
                    title: this.$t('components.community_chat.title'),
                    description: this.$t('components.community_chat.description'),
                    type: 'clickable',
                    icon: 'record_voice_over',
                    iconPack: 'mdi',
                    to: '/community',
                }" />
            </div>
            <notmail-not-chimp :is-open="isNotMailNotChimpOpen" @close="closeNotMailNotChimp" tagsId="12812945" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

class Release {
    Id!: string;
    Date!: string;
    Arch!: string;
    Url!: string;
    IsLatest?: boolean;
}

export default defineComponent({
    name: 'download-orchid-beta',
    data() {
        return {
            isNotMailNotChimpOpen: false,
            releases: [] as Release[],
        };
    },
    methods: {
        closeNotMailNotChimp() {
            this.isNotMailNotChimpOpen = false;
        },
    },
    mounted() {
        fetch('https://raw.githubusercontent.com/Vanilla-OS/info/main/betaBuilds.json')
            .then((response) => response.json())
            .then((data) => {
                const _releases = data.map((release: Release) => ({
                    Id: release.Id,
                    Date: new Date(release.Date),
                    Arch: release.Arch,
                    Url: release.Url,
                }));

                _releases.sort((a, b) => b.Date.getTime() - a.Date.getTime());
                _releases[0].IsLatest = true;
                this.releases = _releases;
            });
    },
});
</script>
