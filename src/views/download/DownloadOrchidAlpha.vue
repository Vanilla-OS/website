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
                        <h4>Disclaimer</h4>
                        <h2>Read before downloading</h2>
                    </div>
                    <div class="card-content">
                        <div class="flexList">
                            <div class="text text--rich">
                                <p>These alpha builds are intended for testing and development purposes. Please be aware
                                    that
                                    aspects of these alpha builds may be incomplete or not representative of the final
                                    product.
                                </p>
                                <p>By downloading and using these alpha builds, you acknowledge the possibility of
                                    unfinished
                                    features and deviations from the eventual release. Your feedback is valuable as we work
                                    to
                                    refine and enhance the software.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flexGrid-item card">
                    <div class="card-header">
                        <h4>Changelog</h4>
                        <h2>Discover what's new in Vanilla OS 2 Orchid</h2>
                    </div>
                    <div class="card-content">
                        <div class="flexList">
                            <div class="text text--rich">
                                <p>Orchid is the next generation of Vanilla OS. It is built on top of new
                                    technologies and features to provide you with a more secure and stable system.</p>
                            </div>
                            <a href="/developers-program" class="btn btn--primary">
                                <span>Learn More</span>
                                <span class="mdi material-icons">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="spacer"></div>
            <div class="text text--rich">
                <h3>Vanilla OS 2 Orchid - Alpha builds</h3>
                <p>You must be logged on GitHub to download the alpha builds. Once logged in, you will be able to
                    download the chosen build from the artifacts section.</p>
            </div>
            <div class="table">
                <table class="table-content">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Release Date</th>
                            <th>Arch</th>
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
                                        <span class="badges-item badges-item--green">Latest</span>
                                    </div>
                                    <a class="btn--link btn--inline" target="_blank" :href="release.Url">
                                        <span class="mdi material-icons-outlined">file_download</span>
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
                        <h4>Be the first to know when stable release is out</h4>
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
                <router-link class="flexGrid-item card card--clickable card--min card--has-actions flexGrid-item"
                    to="/community">
                    <div class="card-header">
                        <h3><span class="mdi material-icons">record_voice_over</span> Discord Server</h3>
                        <div class="card-actions">
                            <div class="btn btn--link btn--inline btn--med"><span
                                    class="mdi material-icons">arrow_forward</span></div>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="flexList">
                            <div class="text">
                                <p>Join our Discord server to chat with other users and developers, participate to the
                                    events and get some spoilers.</p>
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