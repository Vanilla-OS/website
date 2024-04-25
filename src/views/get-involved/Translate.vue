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
                    iconAsImage: true,
                    title: 'First Setup',
                    description: 'The First Setup is the first thing you see when you boot up Vanilla OS for the first time.',
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
                    iconAsImage: true,
                    title: 'Installer',
                    description: 'The Installer is what you use to install Vanilla OS on your device.',
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
                    iconAsImage: true,
                    title: 'Drivers Utility',
                    description: 'The Drivers Utility is what you use to install drivers on your device.',
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
                    iconAsImage: true,
                    title: 'PRIME Utility',
                    description: 'The PRIME Utility is what you use to switch between your integrated and dedicated graphics cards.',
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
                    iconAsImage: true,
                    title: 'Apx',
                    description: 'Apx is what developers use to work with different Linux distributions in a containerized environment.',
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
                    iconAsImage: true,
                    title: 'Apx GUI',
                    description: 'Apx GUI is a graphical user interface for Apx, if allows a friendlier way to work with your Linux containers.',
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
                    iconAsImage: true,
                    title: 'ABRoot',
                    description: 'ABRoot is what manages the A/B partitions on your device and allows you to perform changes to them.',
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
                    iconAsImage: true,
                    title: 'VSO',
                    description: 'VSO is what allows you to install and manage software and perform system updates on your device.',
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
  
