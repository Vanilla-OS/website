<template>
    <div class="flexList">
        <div class="text text--rich">
            <p>Contributing to Vanilla OS is easy and fun, you don't have to be a developer to help. Whatever you are, an
                influencer, a journalist, a blogger, or just a Vanilla OS user, you can help us spread the word about
                Vanilla OS and increase its recognition.</p>
            <p>The following assets are available to help you better understand Vanilla OS and spread the word about it.</p>
        </div>
        <div class="text text--rich">
            <h3>Official Assets</h3>
        </div>
        <div class="flexGrid flexGrid--2 anim--fadeIn">
            <card v-for="(item, index) in officialAssets" :key="index" :item="item">
                <badges v-if="item.badges" :items="item.badges" />
            </card>
        </div>
        <div class="spacer"></div>
        <div class="text text--rich">
            <h3>Press Coverage</h3>
        </div>
        <div class="flexGrid flexGrid--2 anim--fadeIn">
            <card v-for="(item, index) in pressAssets" :key="index" :item="item" />
        </div>
        <div class="spacer"></div>
        <div class="text text--rich">
            <h3>Podcasts and Live Streams</h3>
        </div>
        <div class="flexGrid flexGrid--2 anim--fadeIn">
            <card v-for="(item, index) in liveAssets" :key="index" :item="item">
                <badges v-if="item.badges" :items="item.badges" />
            </card>
        </div>
        <div class="spacer"></div>
        <div class="text text--rich">
            <h3>Videos from the Web</h3>
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
                    title: 'Vanilla OS @ GUADEC 2023 - Riga, Latvia',
                    description: 'Vanilla OS 2 Orchid was announced at GUADEC 2023 in Riga, Latvia. Watch the video to learn more about the new features and improvements.',
                },
                {
                    to: { name: 'roadmap' },
                    type: 'clickable',
                    icon: 'show_chart',
                    iconPack: 'mdi',
                    title: 'Roadmap',
                    description: 'Our roadmap is kept up to date with the latest information about Vanilla OS development. You can use it to learn about the upcoming features and improvements.',
                },
                {
                    to: "https://www.youtube.com/watch?v=aDvIJ_Hu90Y&ab_channel=VanillaOS",
                    extLink: true,
                    type: 'clickable',
                    icon: 'smart_display',
                    iconPack: 'mdi',
                    title: 'Vanilla OS 22.10 - Product Video',
                    description: 'Vanilla OS 22.10 is the first stable release of Vanilla OS. Watch the product video we published at the release date.',
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
                    title: 'Vanilla OS 22.10 - FAQ Video',
                    description: 'Vanilla OS 22.10 is the first stable release of Vanilla OS. Watch the FAQ video we published to answer the most common questions that we received.',
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
                    title: 'Vanilla OS offers a new take on security for the Linux desktop - ZDNnet',
                    description: "If you're looking for a new operating system that takes security seriously… Vanilla OS might be just the ticket.",
                },
                {
                    to: "https://www.theregister.com/2023/01/03/vanilla_os_2210/",
                    extLink: true,
                    type: 'clickable',
                    icon: 'newspaper',
                    iconPack: 'mdi',
                    title: 'Vanilla OS 22.10: An Arch and Fedora-compatible Ubuntu - TheRegister',
                    description: "Vanilla OS is going for bigger, bolder improvement to the Linux desktop… it could prove transformative to the Linux industry… ",
                },
                {
                    to: "https://www.techrepublic.com/article/vanilla-os-linux-desktop/",
                    extLink: true,
                    type: 'clickable',
                    icon: 'newspaper',
                    iconPack: 'mdi',
                    title: 'Vanilla OS is a brilliant take on the Linux desktop - TechRepublic',
                    description: "This will be a project you’ll want to keep a close watch on… I think Vanilla OS could be a real game-changer.",
                },
                {
                    to: "https://www.omglinux.com/vanilla-os-first-release-download/",
                    extLink: true,
                    type: 'clickable',
                    icon: 'newspaper',
                    iconPack: 'mdi',
                    title: 'First Version of Vanilla OS is Available to Download - OMG! Linux!',
                    description: "Far more than “just another” Ubuntu fork, this distro takes a bold new approach to desktop computing using an immutable file system.",
                },
                {
                    to: "https://news.itsfoss.com/vanilla-os-release/",
                    extLink: true,
                    type: 'clickable',
                    icon: 'newspaper',
                    iconPack: 'mdi',
                    title: 'Vanilla OS Stable Release Has Landed! - It\'s FOSS',
                    description: "Being a new distro, Vanilla OS has a well-equipped feature set that you might like.",
                },
                {
                    to: 'https://www.phoronix.com/news/Vanilla-OS-2.0-Debian',
                    extLink: true,
                    type: "clickable",
                    icon: 'newspaper',
                    iconPack: 'mdi',
                    title: "Vanilla OS 2.0 Shifting From Ubuntu Base To Debian Sid - Phoronix",
                    imageClasses: ['img--white-on-dark'],
                    description: 'Vanilla OS is an immutable and atomic version of Ubuntu Linux that aims to provide a pleasant Linux desktop experience.',
                },
                {
                    to: 'https://www.makeuseof.com/vanilla-os-immutable-linux-distro/',
                    extLink: true,
                    type: "clickable",
                    icon: 'newspaper',
                    iconPack: 'mdi',
                    title: "Vanilla OS: The Ubuntu-Based Immutable Linux Distribution - MakeUseOf",
                    imageClasses: ['img--white-on-dark'],
                    description: 'Vanilla OS takes Ubuntu and turns it into an immutable desktop Linux distro, free from all of Canonical\'s recent changes to the OS.',
                },
                {
                    to: "https://www.hostingadvice.com/blog/vanillaos-immutable-linux-distribution/",
                    extLink: true,
                    type: 'clickable',
                    icon: 'newspaper',
                    iconPack: 'mdi',
                    title: 'Meet Vanilla OS, a Clean and Immutable Linux Distribution Operating - Hosting Advice',
                    description: "For those who want a simple, immutable, and customizable experience, Vanilla OS steps into the spotlight.",
                },
            ],
            liveAssets: [
                {
                    to: "https://twit.tv/shows/floss-weekly/episodes/725?autostart=false",
                    extLink: true,
                    type: 'clickable',
                    icon: 'live_tv',
                    iconPack: 'mdi',
                    title: 'Vanilla OS on a Stick - Pietro di Caprio, Vanilla OS - FLOSS Weekly',
                    description: "One of the founders of Vanilla OS, Pietro di Caprio, has talked about Vanilla OS during the FLOSS Weekly podcast.",
                    badges: [
                        {
                            text: 'Multiple Platforms',
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
                    title: 'Vanilla OS Team Interview! - Nicco Loves Linux',
                    description: "The whole Vanilla OS team was interviewed by the Linux influencer niccolove. Watch the video to learn more about Vanilla OS 2 Orchid.",
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
                    title: 'Vanilla OS on a Stick - Pietro di Caprio, Vanilla OS - FLOSS Weekly',
                    description: "One of the founders of Vanilla OS, Pietro di Caprio, has talked about Vanilla OS during the FLOSS Weekly podcast.",
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
                    title: 'Vanilla OS Team Interview! - Nicco Loves Linux',
                    description: "The whole Vanilla OS team was interviewed by the Linux influencer niccolove. Watch the video to learn more about Vanilla OS 2 Orchid.",
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
                    title: 'The most exciting Linux distro - Nicco Loves Linux',
                    description: "The Linux influencer niccolove has given a glowing talk about Vanilla OS 2 Orchid, showcasing the main features",
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
                    title: 'The END of DISTRO HOPPING? - The Linux Experiment',
                    description: "The Linux influencer The Linux Experiment has given a glowing review of Vanilla OS 22.10 showcasing the main features.",
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
                    title: 'Vanilla OS - Ubuntu, Fedora and Arch Linux all in one Linux distribution! - TechHut',
                    description: "The Linux influencer TechHut has given a glowing review of Vanilla OS 22.10 showcasing the main features.",
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
                    title: 'The Vanilla OS package manager is not real - Brodie Robertson',
                    description: "The Linux influencer Brodie Robertson has given a review of Apx, our unconventional package manager.",
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
                    title: 'Desse jeito vou precisar aprender Linux de novo - Diolinux',
                    description: "The portuguese Linux influencer DioLinux talked about Vanilla OS 2 Orchid, the upcoming release of Vanilla OS.",
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
                    title: 'Consigo me ver usando isso! | Vanilla OS 22.10 Review - Diolinux',
                    description: "The portuguese Linux influencer DioLinux reviewed Vanilla OS 22.10 and he liked it a lot.",
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
                    title: 'Vanilla OS is not your ordinary Linux distro - DistroTube',
                    description: "The Linux influencer DistroTube has given a review of Vanilla OS 22.10, describing it as a unique concept.",
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
                    title: 'Vanilla OS is the new Ubuntu - Ksk Royal',
                    description: "The Linux influencer Ksk Royal has given a review of Vanilla OS 22.10, describing it as the new Ubuntu.",
                    badges: [
                        {
                            text: 'YouTube',
                            color: 'red',
                        }
                    ]
                },
            ],
            moreAssets: [
                {
                    to: { name: 'help' },
                    type: 'clickable',
                    icon: 'fa-brands fa-discord',
                    iconPack: 'fa',
                    title: 'Chat with our Community',
                    description: "Join our Discord server and ask our community for more details about Vanilla OS.",
                    extraClasses: ['flexGrid-item--2', 'card--purple'],
                },
            ]
        };
    },
});
</script>
