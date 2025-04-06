<template>
    <div class="flexGrid anim--fadeIn">
        <div class="card flexGrid-item flexGrid-item--3">
            <div class="card-header">
                <h2>{{$t('download.title')}}</h2>
            </div>
            <div class="card-content">
                <div class="splitter">
                    <div class="splitter-item flexList">
                        <div class="text text--rich">
                            <p>{{$t('download.vanilla_os_2_orchid.description')}}</p>
                        </div>
                        <router-link
                            :to="{ name: 'article', params: { date: '2024-07-28', slug: 'vanilla-os-2-orchid---stable-release' } }"
                            class="btn btn--link btn--link-2 btn--inline">
                            <span>{{$t('download.vanilla_os_2_orchid.release_post')}}</span>
                            <span class=" material-symbols-outlined">open_in_new</span>
                        </router-link>
                        <router-link class="btn btn--link btn--link-2 btn--inline" :to="{ name: 'roadmap' }">
                            <span>{{$t('download.vanilla_os_2_orchid.roadmap')}}</span>
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
                            <span>{{$t('download.vanilla_os_2_orchid.download_now')}}</span>
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
                <h2>{{$t('download.vanilla_os_22_10_kinetic.title')}}</h2>
            </div>
            <div class="card-content">
                <div class="splitter">
                    <div class="flexList">
                        <div class="text text--rich">
                            <p>{{$t('download.vanilla_os_22_10_kinetic.description')}}</p>                                
                        </div>
                        <router-link class="btn btn--link btn--link-2 btn--inline"
                            :to="{ name: 'article', params: { date: '2022-12-29', slug: 'vanilla-os-2210-kinetic-is-out' } }">
                            <span>{{$t('download.vanilla_os_22_10_kinetic.release_post')}}</span>
                            <span class="material-symbols-outlined">open_in_new</span>
                        </router-link>
                        <a href="https://github.com/Vanilla-OS/os/releases/latest"
                            class="btn btn--link btn--link-2 btn--inline" target="_blank">
                            <span>{{$t('download.vanilla_os_22_10_kinetic.changelog')}}</span>
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
                <h2>{{$t('download.developer_builds.title')}}</h2>
            </div>
            <div class="card-content">
                <div class="flexList">
                    <div class="text text--rich">
                        <p>{{$t('download.developer_builds.description1')}}</p>
                        <p>{{$t('download.developer_builds.description2')}}</p>                            
                    </div>
                    <router-link to="developers-program" class="btn btn--primary">
                        <span class="material-symbols-outlined">how_to_reg</span>
                        <span>{{$t('download.developer_builds.apply_now')}}</span>
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
