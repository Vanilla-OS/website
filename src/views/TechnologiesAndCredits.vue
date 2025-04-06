<template>
    <div class="flexList anim--fadeIn">
        <div class="text text--rich">
            <p>{{$t('technologies-and-credits.acknowledgment.message')}}</p>            
        </div>
        <div class="flexGrid flexGrid--2">
            <card v-for="(item, index) in credits" :key="index" :item="item" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'technologies-and-credits',
    data() {
        return {
            isNotMailNotChimpOpen: false,
            credits: [
                {
                    icon: '/assets/images/orgs/linux.svg',
                    iconAsImage: true,
                    to: 'https://kernel.org/',
                    extLink: true,
                    type: "clickable",
                    title: 'Linux',
                    description: this.$t('technologies-and-credits.technologies[0].description'),
                },
                {
                    icon: '/assets/images/orgs/debian.svg',
                    iconAsImage: true,
                    to: 'https://debian.org',
                    extLink: true,
                    type: "clickable",
                    title: 'Debian',
                    description: this.$t('technologies-and-credits.technologies[1].description'),
                },
                {
                    icon: '/assets/images/orgs/gnome.svg',
                    iconAsImage: true,
                    to: 'https://gnome.org',
                    extLink: true,
                    type: "clickable",
                    title: 'GNOME',
                    description: this.$t('technologies-and-credits.technologies[2].description'),
                },
                {
                    icon: '/assets/images/orgs/distrobox.svg',
                    iconAsImage: true,
                    to: 'https://distrobox.privatedns.org/',
                    extLink: true,
                    type: "clickable",
                    title: 'Distrobox',
                    description: this.$t('technologies-and-credits.technologies[3].description'),
                },
                {
                    icon: '/assets/images/orgs/flatpak.svg',
                    iconAsImage: true,
                    to: 'https://flatpak.org/',
                    extLink: true,
                    type: "clickable",
                    title: 'Flatpak',
                    description: this.$t('technologies-and-credits.technologies[4].description'),
                },
                {
                    icon: '/assets/images/orgs/oci.svg',
                    iconAsImage: true,
                    to: 'https://opencontainers.org/',
                    extLink: true,
                    type: "clickable",
                    title: 'Open Containers Initiative',
                    description: this.$t('technologies-and-credits.technologies[5].description'),
                },
                {
                    icon: '/assets/images/orgs/lit.png',
                    iconAsImage: true,
                    to: 'https://github.com/linux-immutability-tools',
                    extLink: true,
                    type: "clickable",
                    title: 'Linux Immutability Tools',
                    description: this.$t('technologies-and-credits.technologies[6].description'),
                },
                {
                    icon: '/assets/images/orgs/gtk.svg',
                    iconAsImage: true,
                    to: 'https://gtk.org/',
                    extLink: true,
                    type: "clickable",
                    title: 'GTK',
                    description: this.$t('technologies-and-credits.technologies[7].description'),
                },
                {
                    icon: '/assets/images/orgs/go.svg',
                    iconAsImage: true,
                    to: 'https://go.dev/',
                    extLink: true,
                    type: "clickable",
                    title: 'Go',
                    description: this.$t('technologies-and-credits.technologies[8].description'),
                },
                {
                    icon: '/assets/images/orgs/vuejs.svg',
                    iconAsImage: true,
                    to: 'https://vuejs.org/',
                    extLink: true,
                    type: "clickable",
                    title: 'Vue.js',
                    description: this.$t('technologies-and-credits.technologies[9].description'),
                },
                {
                    icon: '/assets/images/orgs/deno.svg',
                    iconAsImage: true,
                    to: 'https://deno.com/',
                    extLink: true,
                    type: "clickable",
                    title: 'Deno',
                    description: this.$t('technologies-and-credits.technologies[10].description'),
                },
            ]
        };
    },
    methods: {
        closeNotMailNotChimp() {
            this.isNotMailNotChimpOpen = false;
        },
    },
});
</script>
