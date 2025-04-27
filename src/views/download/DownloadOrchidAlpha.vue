<template>
    <div class="hero hero--big hero--no-margin">
        <div class="hero-wrapper container">
            <img class="hero-image no-dark" src="/assets/images/backgrounds/vos-laptop-frame.svg"
                alt="Vanilla OS 2 Orchid" />
            <img class="hero-image on-dark" src="/assets/images/backgrounds/vos-laptop-frame-dark.svg"
                alt="Vanilla OS 2 Orchid" />
            <div class="hero-content">
                <div class="hero-imageText">
                    <img src="/assets/images/components/alpha-headline.svg" alt="Vanilla OS 2 Orchid" />
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="flexList">
            <div class="flexGrid flexGrid--3 anim--fadeIn">
                <div class="flexGrid-item flexGrid-item--2 card card--type-adv card--type-dev card--has-pattern-work">
                    <div class="card-header">
                        <h4>{{$t('download.developmentVersion.title')}}</h4>
                        <h2>{{$t('download.developmentVersion.read_before_downloading')}}</h2>
                    </div>
                    <div class="card-content">
                        <div class="flexList">
                            <div class="text text--rich">
                                <p>{{$t('download.alpha.disclaimer.description1')}}</p>
                                <p>{{$t('download.alpha.disclaimer.description2')}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flexGrid-item card">
                    <div class="card-header">
                        <h4>{{$t('download.changelog.title')}}</h4>
                        <h2>{{$t('download.changelog.discover_new')}}</h2>
                    </div>
                    <div class="card-content">
                        <div class="flexList">
                            <div class="text text--rich">
                                <p>{{$t('download.changelog.description')}}</p>
                            </div>
                            <a href="/developers-program" class="btn btn--primary">
                                <span>{{$t('download.changelog.learn_more')}}</span>
                                <span class="material-symbols-outlined">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="spacer"></div>
            <div class="text text--rich">
                <h3>{{$t('download.alpha.alpha_builds.title')}}</h3>                
                <p>{{$t('download.alpha.alpha_builds.description')}}</p>
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
                            <td>{{ release.Date }}</td>
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
                <router-link class="flexGrid-item card card--clickable card--min flexGrid-item"
                    to="/community">
                    <div class="card-header">
                        <h3><span class="material-symbols-outlined">record_voice_over</span> {{$t('components.community_chat.title')}}</h3>
                        <div>
                            <div class="btn btn--link btn--inline btn--med"><span
                                    class="material-symbols-outlined">arrow_forward</span></div>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="flexList">
                            <div class="text">
                                <p>{{$t('components.community_chat.description')}}</p>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
            <notmail-not-chimp :is-open="isNotMailNotChimpOpen" @close="closeNotMailNotChimp" tagsId="12812945" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';

class Release {
    Id!: string;
    Date!: string;
    Arch!: string;
    Url!: string;
    IsLatest?: boolean;
}

export default defineComponent({
    name: 'download-orchid-alpha',
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
        fetch('https://raw.githubusercontent.com/Vanilla-OS/info/main/devBuilds.json')
            .then((response) => response.json())
            .then((data) => {
                const _releases = data.map((release: Release) => ({
                    id: release.Id,
                    date: new Date(release.Date).toLocaleDateString(),
                    arch: release.Arch,
                    url: release.Url,
                }));

                _releases.sort((a: { date: string | number | Date; }, b: { date: string | number | Date; }) => new Date(b.date).getTime() - new Date(a.date).getTime());
                _releases[0].IsLatest = true;
                this.releases = _releases;
            });
    },
});
</script>
