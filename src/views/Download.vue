<template>
    <div class="flexGrid anim--fadeIn">
        <div class="card flexGrid-item flexGrid-item--3">
            <div class="card-header">
                <h2>Vanilla OS 2 Orchid</h2>
            </div>
            <div class="card-content">
                <div class="splitter">
                    <div class="splitter-item flexList">
                        <div class="text text--rich">
                            <p>Vanilla OS 2 Orchid is the next generation of Vanilla OS. It is built on top of new
                                technologies and features to provide you with the most secure, stable and stunning
                                system
                                experience.
                            </p>
                        </div>
                        <router-link
                            :to="{ name: 'article', params: { date: '2024-07-28', slug: 'vanilla-os-2-orchid---stable-release' } }"
                            class="btn btn--link btn--link-2 btn--inline">
                            <span>Release Post</span>
                            <span class=" material-symbols-outlined">open_in_new</span>
                        </router-link>
                        <router-link class="btn btn--link btn--link-2 btn--inline" :to="{ name: 'roadmap' }">
                            <span>Roadmap</span>
                            <span class="material-symbols-outlined">open_in_new</span>
                        </router-link>
                        <!-- <a href="#" class="btn btn--link btn--link-2 btn--inline btn--block" disabled="true">
                            <span>Full Changelog</span>
                            <span class="material-symbols-outlined">open_in_new</span>
                        </a> -->
                        <div class="spacer"></div>
                        <!-- <a href="#" class="btn btn--primary">
                            <span class="material-symbols-outlined">download</span>
                            <span>Download Now</span>
                        </a> -->
                        <router-link to="/download/orchid/stable" class="btn btn--primary">
                            <span class="material-symbols-outlined">download</span>
                            <span>Download Now</span>
                        </router-link>
                    </div>
                    <div class="splitter-item card-image">
                        <img src="/assets/images/backgrounds/vos-orchid-laptop-frame.svg" alt="Vanilla OS 2 Orchid"
                            class="no-dark">
                        <img src="/assets/images/backgrounds/vos-orchid-laptop-frame-dark.svg" alt="Vanilla OS 2 Orchid"
                            class="on-dark">
                    </div>
                </div>
            </div>
        </div>
        <div class="card download flexGrid-item article--big flexGrid-item--2">
            <div class="card-header">
                <h2>Vanilla OS 22.10 Kinetic (Deprecated)</h2>
            </div>
            <div class="card-content">
                <div class="splitter">
                    <div class="flexList">
                        <div class="text text--rich">
                            <p>Vanilla OS 22.10 Kinetic is the old version of Vanilla OS. It has been deprecated and may have security issues. It is not recommended for use, and is only present for archiving purposes.</p>
                        </div>
                        <router-link class="btn btn--link btn--link-2 btn--inline"
                            :to="{ name: 'article', params: { date: '2022-12-29', slug: 'vanilla-os-2210-kinetic-is-out' } }">
                            <span>Release Post</span>
                            <span class="material-symbols-outlined">open_in_new</span>
                        </router-link>
                        <a href="https://github.com/Vanilla-OS/os/releases/latest"
                            class="btn btn--link btn--link-2 btn--inline" target="_blank">
                            <span>Changelog</span>
                            <span class="material-symbols-outlined">open_in_new</span>
                        </a>
                        <div class="spacer"></div>
                    </div>
                    <div class="card-image card-image--right">
                        <img src="/assets/images/backgrounds/vos-kinetic-laptop-frame.svg"
                            alt="Vanilla OS 22.10 Kinetic" class="no-dark">
                        <img src="/assets/images/backgrounds/vos-kinetic-laptop-frame-dark.svg"
                            alt="Vanilla OS 22.10 Kinetic" class="on-dark">
                    </div>
                </div>
            </div>
        </div>
        <div class="card card--type-adv card--type-dev">
            <div class="card-header">
                <h4>Vanilla OS</h4>
                <h2>Developer Builds</h2>
            </div>
            <div class="card-content">
                <div class="flexList">
                    <div class="text text--rich">
                        <p>Interested in the future versions of Vanilla OS?</p>
                        <p>Join the developer program to get access to experimental builds of Vanilla OS. You will also
                            have
                            access to a direct channel with the developers.</p>
                    </div>
                    <router-link to="developers-program" class="btn btn--primary">
                        <span class="material-symbols-outlined">how_to_reg</span>
                        <span>Apply Now</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';

export default defineComponent({
    name: 'download',
    data() {
        return {
            isNotMailNotChimpOpen: false,
        };
    },
    methods: {
        closeNotMailNotChimp() {
            this.isNotMailNotChimpOpen = false;
        },
    },
});
</script>
