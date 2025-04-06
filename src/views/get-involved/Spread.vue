<template>
    <div class="flexList">
        <div class="text text--rich">
            <p>{{this.$t('spread.contribution_message')}}</p>
            <p>{{this.$t('spread.assets_message')}}</p>
        </div>
        <div class="text text--rich">
            <h3>{{this.$t('spread.official_assets.title')}}</h3>
        </div>
        <div class="flexGrid flexGrid--2 anim--fadeIn">
            <card v-for="(item, index) in officialAssets" :key="index" :item="item">
                <badges v-if="item.badges" :items="item.badges" />
            </card>
        </div>
        <div class="spacer"></div>
        <div class="text text--rich">
            <h3>{{this.$t('spread.press_coverage.title')}}</h3>
        </div>
        <div class="flexGrid flexGrid--2 anim--fadeIn">
            <card v-for="(item, index) in pressAssets" :key="index" :item="item" />
        </div>
        <div class="spacer"></div>
        <div class="text text--rich">
            <h3>{{this.$t('spread.podcasts_and_live_streams.title')}}</h3>
        </div>
        <div class="flexGrid flexGrid--2 anim--fadeIn">
            <card v-for="(item, index) in liveAssets" :key="index" :item="item">
                <badges v-if="item.badges" :items="item.badges" />
            </card>
        </div>
        <div class="spacer"></div>
        <div class="text text--rich">
            <h3>{{this.$t('spread.videos_from_the_web.title')}}</h3>
        </div>
        <div class="flexGrid flexGrid--2 anim--fadeIn">
            <card v-for="(item, index) in webAssets" :key="index" :item="item">
                <badges v-if="item.badges" :items="item.badges" />
            </card>
        </div>
        <div class="spacer"></div>
        <div class="flexGrid flexGrid--2 anim--fadeIn">
            <card v-for="(item, index) in moreAssets" :key="index" :item="item" :class="item.extraClasses" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'get-involved-spread',
    data() {
        return {
            officialAssets: [
                {
                    to: "https://www.youtube.com/live/hv-bkYpHSbQ&t=621",
                    extLink: true,
                    type: 'clickable',
                    icon: 'co_present',
                    iconPack: 'mdi',
                    title: this.$t('spread.official_assets.items[0].title'),
                    description: this.$t('spread.official_assets.items[0].description'),
                },
                {
                    to: { name: 'roadmap' },
                    type: 'clickable',
                    icon: 'show_chart',
                    iconPack: 'mdi',
                    title: this.$t('spread.official_assets.items[1].title'),
                    description: this.$t('spread.official_assets.items[1].description'),
                },
                {
                    to: "https://www.youtube.com/watch?v=aDvIJ_Hu90Y&ab_channel=VanillaOS",
                    extLink: true,
                    type: 'clickable',
                    icon: 'smart_display',
                    iconPack: 'mdi',
                    title: this.$t('spread.official_assets.items[2].title'),
                    description: this.$t('spread.official_assets.items[2].description'),
                    badges: [
                        {
                            text: 'YouTube',
                            color: 'red',
                        }
                    ]
                },
                {
                    to: "https://www.youtube.com/watch?v=PU_NDCYTwCU&ab_channel=VanillaOS",
                    extLink: true,
                    type: 'clickable',
                    icon: 'smart_display',
                    iconPack: 'mdi',
                    title: this.$t('spread.official_assets.items[3].title'),
                    description: this.$t('spread.official_assets.items[3].description'),
                    badges: [
                        {
                            text: 'YouTube',
                            color: 'red',
                        }
                    ]
                },
            ],
            pressAssets: [
                {
                    to: "https://www.zdnet.com/article/vanilla-os-offers-a-new-take-on-security-for-the-linux-desktop/",
                    extLink: true,
                    type: 'clickable',
                    icon: 'newspaper',
                    iconPack: 'mdi',
                    title: this.$t('spread.press_coverage.items[0].title'),
                    description: this.$t('spread.press_coverage.items[0].description'),
                },
                {
                    to: "https://www.theregister.com/2023/01/03/vanilla_os_2210/",
                    extLink: true,
                    type: 'clickable',
                    icon: 'newspaper',
                    iconPack: 'mdi',
                    title: this.$t('spread.press_coverage.items[1].title'),
                    description: this.$t('spread.press_coverage.items[1].description'),
                },
                {
                    to: "https://www.techrepublic.com/article/vanilla-os-linux-desktop/",
                    extLink: true,
                    type: 'clickable',
                    icon: 'newspaper',
                    iconPack: 'mdi',
                    title: this.$t('spread.press_coverage.items[2].title'),
                    description: this.$t('spread.press_coverage.items[2].description'),
                },
                {
                    to: "https://www.omglinux.com/vanilla-os-first-release-download/",
                    extLink: true,
                    type: 'clickable',
                    icon: 'newspaper',
                    iconPack: 'mdi',
                    title: this.$t('spread.press_coverage.items[3].title'),
                    description: this.$t('spread.press_coverage.items[3].description'),
                },
                {
                    to: "https://news.itsfoss.com/vanilla-os-release/",
                    extLink: true,
                    type: 'clickable',
                    icon: 'newspaper',
                    iconPack: 'mdi',
                    title: this.$t('spread.press_coverage.items[4].title'),
                    description: this.$t('spread.press_coverage.items[4].description'),
                },
                {
                    to: 'https://www.phoronix.com/news/Vanilla-OS-2.0-Debian',
                    extLink: true,
                    type: "clickable",
                    icon: 'newspaper',
                    iconPack: 'mdi',
                    title: this.$t('spread.press_coverage.items[5].title'),
                    imageClasses: ['img--white-on-dark'],
                    description: this.$t('spread.press_coverage.items[5].description'),
                },
                {
                    to: 'https://www.makeuseof.com/vanilla-os-immutable-linux-distro/',
                    extLink: true,
                    type: "clickable",
                    icon: 'newspaper',
                    iconPack: 'mdi',
                    title: this.$t('spread.press_coverage.items[6].title'),
                    imageClasses: ['img--white-on-dark'],
                    description: this.$t('spread.press_coverage.items[6].description'),
                },
                {
                    to: "https://www.hostingadvice.com/blog/vanillaos-immutable-linux-distribution/",
                    extLink: true,
                    type: 'clickable',
                    icon: 'newspaper',
                    iconPack: 'mdi',
                    title: this.$t('spread.press_coverage.items[7].title'),
                    description: this.$t('spread.press_coverage.items[7].title'),
                },
            ],
            liveAssets: [
                {
                    to: "https://twit.tv/shows/floss-weekly/episodes/725?autostart=false",
                    extLink: true,
                    type: 'clickable',
                    icon: 'live_tv',
                    iconPack: 'mdi',
                    title: this.$t('spread.podcasts_and_live_streams.items[0].title'),
                    description: this.$t('spread.podcasts_and_live_streams.items[0].description'),
                    badges: [
                        {
                            text: this.$t('spread.podcasts_and_live_streams.items[0].badge'),
                            color: 'blue',
                        }
                    ]
                },
                {
                    to: "https://www.youtube.com/watch?v=pR5ZEbyv0ZM",
                    extLink: true,
                    type: 'clickable',
                    icon: 'live_tv',
                    iconPack: 'mdi',
                    title: this.$t('spread.podcasts_and_live_streams.items[1].title'),
                    description: this.$t('spread.podcasts_and_live_streams.items[1].description'),
                    badges: [
                        {
                            text: 'YouTube',
                            color: 'red',
                        }
                    ]
                },
            ],
            webAssets: [
                {
                    to: "https://www.youtube.com/watch?v=0LPZxcM5AMs",
                    extLink: true,
                    type: 'clickable',
                    icon: 'live_tv',
                    iconPack: 'mdi',
                    title: this.$t('spread.videos_from_the_web.items[0].title'),
                    description: this.$t('spread.videos_from_the_web.items[0].description'),
                    badges: [
                        {
                            text: 'YouTube',
                            color: 'red',
                        }
                    ]
                },
                {
                    to: "https://www.youtube.com/watch?v=pR5ZEbyv0ZM",
                    extLink: true,
                    type: 'clickable',
                    icon: 'live_tv',
                    iconPack: 'mdi',
                    title: this.$t('spread.videos_from_the_web.items[1].title'),
                    description: this.$t('spread.videos_from_the_web.items[1].description'),
                    badges: [
                        {
                            text: 'YouTube',
                            color: 'red',
                        }
                    ]
                },
                {
                    to: "https://www.youtube.com/watch?v=GkjBMy5ZdG0",
                    extLink: true,
                    type: 'clickable',
                    icon: 'smart_display',
                    iconPack: 'mdi',
                    title: this.$t('spread.videos_from_the_web.items[2].title'),
                    description: this.$t('spread.videos_from_the_web.items[2].description'),
                    badges: [
                        {
                            text: 'YouTube',
                            color: 'red',
                        }
                    ]
                },
                {
                    to: "https://www.youtube.com/watch?v=tOm_zATjgqU",
                    extLink: true,
                    type: 'clickable',
                    icon: 'smart_display',
                    iconPack: 'mdi',
                    title: this.$t('spread.videos_from_the_web.items[3].title'),
                    description: this.$t('spread.videos_from_the_web.items[3].description'),
                    badges: [
                        {
                            text: 'YouTube',
                            color: 'red',
                        }
                    ]
                },
                {
                    to: "https://www.youtube.com/watch?v=tOm_zATjgqU",
                    extLink: true,
                    type: 'clickable',
                    icon: 'smart_display',
                    iconPack: 'mdi',
                    title: this.$t('spread.videos_from_the_web.items[4].title'),
                    description: this.$t('spread.videos_from_the_web.items[4].description'),
                    badges: [
                        {
                            text: 'YouTube',
                            color: 'red',
                        }
                    ]
                },
                {
                    to: "https://www.youtube.com/watch?v=E1z_Ex7XyLw",
                    extLink: true,
                    type: 'clickable',
                    icon: 'smart_display',
                    iconPack: 'mdi',
                    title: this.$t('spread.videos_from_the_web.items[5].title'),
                    description: this.$t('spread.videos_from_the_web.items[5].description'),
                    badges: [
                        {
                            text: 'YouTube',
                            color: 'red',
                        }
                    ]
                },
                {
                    to: "https://www.youtube.com/watch?v=OLLbkBdUpfA",
                    extLink: true,
                    type: 'clickable',
                    icon: 'smart_display',
                    iconPack: 'mdi',
                    title: this.$t('spread.videos_from_the_web.items[6].title'),
                    description: this.$t('spread.videos_from_the_web.items[6].description'),
                    badges: [
                        {
                            text: 'Portuguese',
                        },
                        {
                            text: 'YouTube',
                            color: 'red',
                        }
                    ]
                },
                {
                    to: "https://www.youtube.com/watch?v=Wsef1XbbAkg",
                    extLink: true,
                    type: 'clickable',
                    icon: 'smart_display',
                    iconPack: 'mdi',
                    title: this.$t('spread.videos_from_the_web.items[7].title'),
                    description: this.$t('spread.videos_from_the_web.items[7].description'),
                    badges: [
                        {
                            text: 'Portuguese',
                        },
                        {
                            text: 'YouTube',
                            color: 'red',
                        }
                    ]
                },
                {
                    to: "https://www.youtube.com/watch?v=yajUbh0H6-s",
                    extLink: true,
                    type: 'clickable',
                    icon: 'smart_display',
                    iconPack: 'mdi',
                    title: this.$t('spread.videos_from_the_web.items[8].title'),
                    description: this.$t('spread.videos_from_the_web.items[8].description'),
                    badges: [
                        {
                            text: 'YouTube',
                            color: 'red',
                        }
                    ]
                },
                {
                    to: "https://www.youtube.com/watch?v=gYghCe1uAYs",
                    extLink: true,
                    type: 'clickable',
                    icon: 'smart_display',
                    iconPack: 'mdi',
                    title: this.$t('spread.videos_from_the_web.items[9].title'),
                    description: this.$t('spread.videos_from_the_web.items[9].description'),
                    badges: [
                        {
                            text: 'YouTube',
                            color: 'red',
                        }
                    ]
                }
            ],
            moreAssets: [
                {
                    to: { name: 'help' },
                    type: 'clickable',
                    icon: 'fa-brands fa-discord',
                    iconPack: 'fa',
                    title: this.$t('spread.community_chat.title'),
                    description: this.$t('spread.community_chat.description'),
                    extraClasses: ['flexGrid-item--2', 'card--purple'],
                },
            ]
        };
    },
});
</script>