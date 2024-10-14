<template>
    <div class="flexList anim--fadeIn">
        <div class="text text--rich">
            <p>Vanilla OS is made possible by a number of open source projects and organizations. We would like to thank the
                developers of these projects for their hard work and dedication.</p>
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
                    description: 'The kernel of the operating system.',
                },
                {
                    icon: '/assets/images/orgs/debian.svg',
                    iconAsImage: true,
                    to: 'https://debian.org',
                    extLink: true,
                    type: "clickable",
                    title: 'Debian',
                    description: 'The Universal Operating System.',
                },
                {
                    icon: '/assets/images/orgs/gnome.svg',
                    iconAsImage: true,
                    to: 'https://gnome.org',
                    extLink: true,
                    type: "clickable",
                    title: 'GNOME',
                    description: 'An easy and elegant desktop environment.',
                },
                {
                    icon: '/assets/images/orgs/distrobox.svg',
                    iconAsImage: true,
                    to: 'https://distrobox.privatedns.org/',
                    extLink: true,
                    type: "clickable",
                    title: 'Distrobox',
                    description: 'Use any Linux distribution inside your terminal.',
                },
                {
                    icon: '/assets/images/orgs/flatpak.svg',
                    iconAsImage: true,
                    to: 'https://flatpak.org/',
                    extLink: true,
                    type: "clickable",
                    title: 'Flatpak',
                    description: 'The universal packaging format for Linux.',
                },
                {
                    icon: '/assets/images/orgs/oci.svg',
                    iconAsImage: true,
                    to: 'https://opencontainers.org/',
                    extLink: true,
                    type: "clickable",
                    title: 'Open Containers Initiative',
                    description: 'An open governance structure for creating open industry standards on container formats and runtimes.',
                },
                {
                    icon: '/assets/images/orgs/lit.png',
                    iconAsImage: true,
                    to: 'https://github.com/linux-immutability-tools',
                    extLink: true,
                    type: "clickable",
                    title: 'Linux Immutability Tools',
                    description: 'An alliance between several Linux distributions to provide tools for immutable distributions.',
                },
                {
                    icon: '/assets/images/orgs/gtk.svg',
                    iconAsImage: true,
                    to: 'https://gtk.org/',
                    extLink: true,
                    type: "clickable",
                    title: 'GTK',
                    description: 'A free and open-source cross-platform widget toolkit for creating graphical user interfaces.',
                },
                {
                    icon: '/assets/images/orgs/go.svg',
                    iconAsImage: true,
                    to: 'https://go.dev/',
                    extLink: true,
                    type: "clickable",
                    title: 'Go',
                    description: 'An open source programming language that makes it easy to build simple, reliable, and efficient software.',
                },
                {
                    icon: '/assets/images/orgs/vuejs.svg',
                    iconAsImage: true,
                    to: 'https://vuejs.org/',
                    extLink: true,
                    type: "clickable",
                    title: 'Vue.js',
                    description: 'The Progressive JavaScript Framework.',
                },
                {
                    icon: '/assets/images/orgs/deno.svg',
                    iconAsImage: true,
                    to: 'https://deno.com/',
                    extLink: true,
                    type: "clickable",
                    title: 'Deno',
                    description: 'A modern runtime for JavaScript and TypeScript. ',
                },
            ],
        };
    },
    methods: {
        closeNotMailNotChimp() {
            this.isNotMailNotChimpOpen = false;
        },
    },
});
</script>
