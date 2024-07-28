<template>
    <bento>
        <template #content>
            <bento-card class="Bento-card Bento-card--2" background="/assets/images/bento/bento-1/top-left.svg"
                theme="light" margin="140px 0px 0px !important" bgcolor="#FFFB64">
                <template #title>Compatible, with <u style="color: #FFFB64">Everything</u></template>
            </bento-card>
            <bento-card class="Bento-card Bento-card--5" background="/assets/images/bento/bento-1/top-right.svg"
                image="/assets/images/3rd-party/logo-android.svg" imageSize="140px" margin="0 100px 0px 0px"
                bgcolor="#F2FFF8" badge="Experimental">
                <template #content>Vanilla OS 2 Orchid comes with support for Android via Waydroid in VSO, enabling
                    seamless integration and use of Android apps on your system with ease.</template>
            </bento-card>
            <bento-card class="Bento-card Bento-card--3" background="/assets/images/bento/bento-1/bottom-left.svg"
                bgcolor="#FEEED1" image="/assets/images/3rd-party/logo-linux.svg" imageSize="40px"
                imageLocation="right">
                <template #title>Linux</template>
                <template #content>Thanks to the APX utility you can install applications from every Linux distribution
                    out there, whether they are CLI or GUI applications.</template>
            </bento-card>
            <bento-card-carousel class="Bento-card Bento-card--4" :pages="pages" />
        </template>
    </bento>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "bento-orchid-release",
    data() {
        return {
            pages: [
                {
                    title: 'The Apps You Already Know',
                    logo: '/assets/images/3rd-party/logo-spotify.svg',
                    image: '/assets/images/bento/bento-1/apps/spotify.png',
                    bgcolor: '#1ED760'
                },
                {
                    title: 'The Apps You Already Know',
                    logo: '/assets/images/3rd-party/logo-steam.svg',
                    image: '/assets/images/bento/bento-1/apps/steam.png',
                    bgcolor: '#171D25'
                },
                {
                    title: 'The Apps You Already Know',
                    logo: '/assets/images/3rd-party/logo-davinci.svg',
                    image: '/assets/images/bento/bento-1/apps/davinci.png',
                    bgcolor: '#F60A41'
                },
                {
                    title: 'The Apps You Already Know',
                    logo: '/assets/images/3rd-party/logo-firefox.svg',
                    image: '/assets/images/bento/bento-1/apps/firefox.png',
                    bgcolor: '#2B1141'
                },
                {
                    title: 'The Apps You Already Know',
                    logo: '/assets/images/3rd-party/logo-vscode.svg',
                    image: '/assets/images/bento/bento-1/apps/vscode.png',
                    bgcolor: '#0065A9'
                },
                {
                    title: 'The Apps You Already Know',
                    logo: '/assets/images/3rd-party/logo-zoom.svg',
                    image: '/assets/images/bento/bento-1/apps/zoom.png',
                    bgcolor: '#0B5CFF'
                },
                {
                    title: 'The Apps You Already Know',
                    logo: '/assets/images/3rd-party/logo-telegram.svg',
                    image: '/assets/images/bento/bento-1/apps/telegram.png',
                    bgcolor: '#146F9B'
                }
            ]
        };
    }
});
</script>
