<template>
    <div class="hero hero--big hero--no-margin">
        <div class="hero-wrapper container">
            <img class="hero-image no-dark" src="/assets/images/backgrounds/vos-orchid-laptop-frame.svg"
                alt="Vanilla OS 2 Orchid" />
            <img class="hero-image on-dark" src="/assets/images/backgrounds/vos-orchid-laptop-frame-dark.svg"
                alt="Vanilla OS 2 Orchid" />
            <div class="hero-content">
                <div class="hero-imageText">
                    <img src="/assets/images/components/stable-headline.svg" alt="Vanilla OS 2 Orchid" />
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="flexList flexList--center">
            <div class="spacer"></div>
            <div class="text text--rich">
                <center>
                    <p>Vanilla OS 2 Orchid is the next generation of Vanilla OS. It is built on top of new technologies
                        and
                        features to provide you with the most secure, stable and stunning system experience.</p>
                </center>
            </div>
            <a href="https://download.vanillaos.org/latest.zip" class="btn btn--primary btn--big">
                <span class="mdi material-icons-outlined">file_download</span>
                <span>Download Now</span>
            </a>
            <div class="text text--dimmed">
                <small>Vanilla OS works out of the box on a large set of devices,
                    <a href="https://docs.vanillaos.org/handbook/en/installation" target="_blank">
                        learn how to install it.
                    </a>
                </small>
            </div>
            <div class="text text--dimmed">
                <small>Download is not working? Try downloading from
                    <a href="https://github.com/vanilla-os/live-iso/releases/latest" target="_blank">
                        GitHub.
                    </a>
                </small>
            </div>
            <div class="text text--rich">
                <center>
                    <p>Do you enjoy Vanilla OS? Consider <router-link
                            to="/get-involved/funding">supporting</router-link>
                        the project.</p>
                </center>
            </div>
            <div class="spacer"></div>
        </div>
        <div class="flexList">
            <div class="spacer"></div>
            <div class="flexGrid flexGrid--3">
                <div
                    class="flexGrid-item flexGrid-item--2 card card--hz card--type-adv card--type-adv--hz card--type-funnyletter">
                    <div class="card-header">
                        <h4>Keep in Touch</h4>
                        <h2>Subscribe to the Newsletter</h2>
                        <div class="btn btn--primary" @click="isNotMailNotChimpOpen = true">
                            <span class="mdi material-icons">email</span>
                            <span>Subscribe Now via Email</span>
                        </div>
                        <a class="btn btn--primary" href="//vanillaos.org/feed.xml">
                            <span class="mdi material-icons">newspaper</span>
                            <span>Subscribe via the RSS Feed</span>
                        </a>
                    </div>
                    <div class="card-content">
                        <div class="flexList">
                            <div class="card-image">
                                <img src="/assets/images/components/funnyletter.svg"
                                    alt="Subscribe to the Newsletter" />
                            </div>
                        </div>
                    </div>
                </div>
                <router-link class="flexGrid-item card card--clickable card--min flexGrid-item" to="/community">
                    <div class="card-header">
                        <h3><span class="mdi material-icons">record_voice_over</span> Discord Server</h3>
                        <div>
                            <div class="btn btn--link btn--inline btn--med"><span
                                    class="mdi material-icons">arrow_forward</span></div>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="flexList">
                            <div class="text">
                                <p>Join our Discord server to chat with other users and developers, participate to
                                    the
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
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'download-orchid-stable',
    data() {
        return {
            isNotMailNotChimpOpen: false,
        };
    },
    methods: {
        closeNotMailNotChimp() {
            this.isNotMailNotChimpOpen = false;
        },
    }
});
</script>
