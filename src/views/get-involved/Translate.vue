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
                    title: this.$t('translate.first_setup.title'),
                    description: this.$t('translate.first_setup.description'),
                    footerActions: [
                        {
                            title: this.$t('translate.source_code'),
                            icon: 'code',
                            onClick: () => {
                                window.location.href = 'https://github.com/vanilla-os/first-setup/';
                            },
                        },
                        {
                            title: this.$t('translate.translate'),
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
                    title: this.$t('translate.installer.title'),
                    description: this.$t('translate.installer.description'),
                    footerActions: [
                        {
                            title: this.$t('translate.source_code'),
                            icon: 'code',
                            onClick: () => {
                                window.location.href = 'https://github.com/Vanilla-OS/vanilla-installer/';
                            },
                        },
                        {
                            title: this.$t('translate.translate'),
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
                    title: this.$t('translate.drivers_utility.title'),
                    description: this.$t('translate.drivers_utility.description'),
                    footerActions: [
                        {
                            title: this.$t('translate.source_code'),
                            icon: 'code',
                            onClick: () => {
                                window.location.href = 'https://github.com/Vanilla-OS/vanilla-drivers-utility';
                            },
                        },
                        {
                            title: this.$t('translate.translate'),
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
                    title: this.$t('translate.prime_utility.title'),
                    description: this.$t('translate.prime_utility.description'),
                    footerActions: [
                        {
                            title: this.$t('translate.source_code'),
                            icon: 'code',
                            onClick: () => {
                                window.location.href = 'https://github.com/Vanilla-OS/vanilla-prime-utility';
                            },
                        },
                        {
                            title: this.$t('translate.translate'),
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
                    title: this.$t('translate.apx.title'),
                    description: this.$t('translate.apx.description'),
                    footerActions: [
                        {
                            title: this.$t('translate.source_code'),
                            icon: 'code',
                            onClick: () => {
                                window.location.href = 'https://github.com/vanilla-os/apx/';
                            },
                        },
                        {
                            title: this.$t('translate.translate'),
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
                    title: this.$t('translate.apx_gui.title'),
                    description: this.$t('translate.apx_gui.description'),
                    footerActions: [
                        {
                            title: this.$t('translate.source_code'),
                            icon: 'code',
                            onClick: () => {
                                window.location.href = 'https://github.com/Vanilla-OS/apx-gui/';
                            },
                        },
                        {
                            title: this.$t('translate.translate'),
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
                    title: this.$t('translate.abroot.title'),
                    description: this.$t('translate.abroot.description'),
                    footerActions: [
                        {
                            title: this.$t('translate.source_code'),
                            icon: 'code',
                            onClick: () => {
                                window.location.href = 'https://github.com/Vanilla-OS/ABRoot/';
                            },
                        },
                        {
                            title: this.$t('translate.translate'),
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
                    title: this.$t('translate.vso.title'),
                    description: this.$t('translate.vso.description'),
                    footerActions: [
                        {
                            title: this.$t('translate.source_code'),
                            icon: 'code',
                            onClick: () => {
                                window.location.href = 'https://github.com/Vanilla-OS/vanilla-system-operator';
                            },
                        },
                        {
                            title: this.$t('translate.translate'),
                            icon: 'translate',
                            onClick: () => {
                                window.location.href = 'https://hosted.weblate.org/projects/vanilla-os/vanilla-system-operator/';
                            },
                        },
                    ],
                },
                {
                    icon: 'extension',
                    title: this.$t('translate.ikaros.title'),
                    description: this.$t('translate.ikaros.description'),
                    footerActions: [
                        {
                            title: this.$t('translate.source_code'),
                            icon: 'code',
                            onClick: () => {
                                window.location.href = 'https://github.com/Vanilla-OS/Ikaros/';
                            },
                        },
                        {
                            title: this.$t('translate.translate'),
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
  
