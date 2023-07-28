<template>
    <div class="flexGrid flexGrid--2 anim--fadeIn">
        <card v-for="(item, index) in pageItems" :key="index" :item="item" />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'get-involved-translate',
    data() {
        return {
            pageItems: [
                {
                    icon: '/assets/images/icons/first-setup.svg',
                    imageAsIcon: true,
                    title: 'First Setup',
                    description: 'The First Setup is the first thing you see when you boot up Vanilla OS for the first time.',
                    extraClasses: [],
                    footerActions: [
                        {
                            title: 'Source Code',
                            icon: 'code',
                            onClick: () => {
                                this.$router.push({ name: 'faq' });
                            },
                        },
                        {
                            title: 'Translate',
                            icon: 'translate',
                            onClick: () => {
                                this.$router.push({ name: 'faq' });
                            },
                        },
                    ],
                },
                {
                    icon: '/assets/images/icons/installer.svg',
                    imageAsIcon: true,
                    title: 'Installer',
                    description: 'The Installer is what you use to install Vanilla OS on your device.',
                    extraClasses: [],
                    footerActions: [
                        {
                            title: 'Source Code',
                            icon: 'code',
                            onClick: () => {
                                this.$router.push({ name: 'faq' });
                            },
                        },
                        {
                            title: 'Translate',
                            icon: 'translate',
                            onClick: () => {
                                this.$router.push({ name: 'faq' });
                            },
                        },
                    ],
                },
                {
                    icon: '/assets/images/icons/drivers-utility.svg',
                    imageAsIcon: true,
                    title: 'Drivers Utility',
                    description: 'The Drivers Utility is what you use to install drivers on your device.',
                    extraClasses: [],
                    footerActions: [
                        {
                            title: 'Source Code',
                            icon: 'code',
                            onClick: () => {
                                this.$router.push({ name: 'faq' });
                            },
                        },
                        {
                            title: 'Translate',
                            icon: 'translate',
                            onClick: () => {
                                this.$router.push({ name: 'faq' });
                            },
                        },
                    ],
                },
                {
                    icon: '/assets/images/icons/prime-utility.svg',
                    imageAsIcon: true,
                    title: 'PRIME Utility',
                    description: 'The PRIME Utility is what you use to switch between your integrated and dedicated graphics cards.',
                    extraClasses: [],
                    footerActions: [
                        {
                            title: 'Source Code',
                            icon: 'code',
                            onClick: () => {
                                this.$router.push({ name: 'faq' });
                            },
                        },
                        {
                            title: 'Translate',
                            icon: 'translate',
                            onClick: () => {
                                this.$router.push({ name: 'faq' });
                            },
                        },
                    ],
                },
                {
                    icon: '/assets/images/icons/apx.png',
                    imageAsIcon: true,
                    title: 'Apx',
                    description: 'Apx is what developers use to work with different Linux distributions in a containerized environment.',
                    extraClasses: [],
                    footerActions: [
                        {
                            title: 'Source Code',
                            icon: 'code',
                            onClick: () => {
                                this.$router.push({ name: 'faq' });
                            },
                        },
                        {
                            title: 'Translate',
                            icon: 'translate',
                            onClick: () => {
                                this.$router.push({ name: 'faq' });
                            },
                        },
                    ],
                },
                {
                    icon: '/assets/images/icons/apx-gui.svg',
                    imageAsIcon: true,
                    title: 'Apx GUI',
                    description: 'Apx GUI is a graphical user interface for Apx, if allows a friendlier way to work with your Linux containers.',
                    extraClasses: [],
                    footerActions: [
                        {
                            title: 'Source Code',
                            icon: 'code',
                            onClick: () => {
                                this.$router.push({ name: 'faq' });
                            },
                        },
                        {
                            title: 'Translate',
                            icon: 'translate',
                            onClick: () => {
                                this.$router.push({ name: 'faq' });
                            },
                        },
                    ],
                },
                {
                    icon: '/assets/images/icons/abroot.svg',
                    imageAsIcon: true,
                    title: 'ABRoot',
                    description: 'ABRoot is what manages the A/B partitions on your device and allows you to perform changes to them.',
                    extraClasses: [],
                    footerActions: [
                        {
                            title: 'Source Code',
                            icon: 'code',
                            onClick: () => {
                                this.$router.push({ name: 'faq' });
                            },
                        },
                        {
                            title: 'Translate',
                            icon: 'translate',
                            onClick: () => {
                                this.$router.push({ name: 'faq' });
                            },
                        },
                    ],
                },
                {
                    icon: '/assets/images/icons/vso.svg',
                    imageAsIcon: true,
                    title: 'VSO',
                    description: 'VSO is what allows you to install and manage software and perform system updates on your device.',
                    extraClasses: [],
                    footerActions: [
                        {
                            title: 'Source Code',
                            icon: 'code',
                            onClick: () => {
                                this.$router.push({ name: 'faq' });
                            },
                        },
                        {
                            title: 'Translate',
                            icon: 'translate',
                            onClick: () => {
                                this.$router.push({ name: 'faq' });
                            },
                        },
                    ],
                },
                {
                    icon: 'extension',
                    title: 'Ikaros',
                    description: 'Ikaros is the drivers backend for the Drivers Utility, it allows you to install drivers on your device using a CLI.',
                    extraClasses: [],
                    footerActions: [
                        {
                            title: 'Source Code',
                            icon: 'code',
                            onClick: () => {
                                this.$router.push({ name: 'faq' });
                            },
                        },
                        {
                            title: 'Translate',
                            icon: 'translate',
                            onClick: () => {
                                this.$router.push({ name: 'faq' });
                            },
                        },
                    ],
                },
            ],
        };
    },
});
</script>
  