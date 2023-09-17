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
                                window.location.href = 'https://github.com/vanilla-os/first-setup/';
                            },
                        },
                        {
                            title: 'Translate',
                            icon: 'translate',
                            onClick: () => {
                                window.location.href = 'https://hosted.weblate.org/projects/vanilla-os/first-setup/';
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
                                window.location.href = 'https://github.com/Vanilla-OS/vanilla-installer/';
                            },
                        },
                        {
                            title: 'Translate',
                            icon: 'translate',
                            onClick: () => {
                                window.location.href = 'https://hosted.weblate.org/projects/vanilla-os/installer/';
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
                                window.location.href = 'https://github.com/Vanilla-OS/vanilla-drivers-utility';
                            },
                        },
                        {
                            title: 'Translate',
                            icon: 'translate',
                            onClick: () => {
                                window.location.href = 'https://hosted.weblate.org/projects/vanilla-os/vanilla-drivers-utility/';
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
                                window.location.href = 'https://github.com/Vanilla-OS/vanilla-prime-utility';
                            },
                        },
                        {
                            title: 'Translate',
                            icon: 'translate',
                            onClick: () => {
                                window.location.href = 'https://hosted.weblate.org/projects/vanilla-os/vanilla-prime-utility/';
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
                                window.location.href = 'https://github.com/vanilla-os/apx/';
                            },
                        },
                        {
                            title: 'Translate',
                            icon: 'translate',
                            onClick: () => {
                                window.location.href = 'https://hosted.weblate.org/projects/vanilla-os/apx/';
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
                                window.location.href = 'https://github.com/Vanilla-OS/apx-gui/';
                            },
                        },
                        {
                            title: 'Translate',
                            icon: 'translate',
                            onClick: () => {
                                window.location.href = 'https://hosted.weblate.org/projects/vanilla-os/apx-gui/';
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
                                window.location.href = 'https://github.com/Vanilla-OS/ABRoot/';
                            },
                        },
                        {
                            title: 'Translate',
                            icon: 'translate',
                            onClick: () => {
                                window.location.href = 'https://hosted.weblate.org/projects/vanilla-os/abroot/';
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
                                window.location.href = 'https://github.com/Vanilla-OS/vanilla-system-operator';
                            },
                        },
                        {
                            title: 'Translate',
                            icon: 'translate',
                            onClick: () => {
                                window.location.href = 'https://hosted.weblate.org/projects/vanilla-os/vanilla-system-operator/';
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
                                window.location.href = 'https://github.com/Vanilla-OS/Ikaros/';
                            },
                        },
                        {
                            title: 'Translate',
                            icon: 'translate',
                            onClick: () => {
                                window.location.href = 'https://hosted.weblate.org/projects/vanilla-os/Ikaros/';
                            },
                        },
                    ],
                },
            ],
        };
    },
});
</script>
  
