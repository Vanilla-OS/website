<template>
    <div class="flexGrid flexGrid--4 anim--fadeIn">
        <card v-for="(item, index) in getInvolvedItems" :key="index" :item="item" :class="item.extraClasses"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'help-faq',
    data() {
        return {
            getInvolvedItems: [
                {
                    to: { name: 'help' },
                    icon: '',
                    title: 'Is there any telemetry?',
                    description: "No, we don't care about your data. Ours is better.",
                    extraClasses: ['flexGrid-item--4'],
                },
                {
                    to: { name: 'help' },
                    icon: '',
                    title: 'Is Nvidia supported?',
                    description: "Yes, if you have an Nvidia card, you'll be prompted to install proprietary Nvidia drivers during the first setup. This includes support for Optimus laptops.",
                    extraClasses: ['flexGrid-item--4'],
                },
                {
                    to: { name: 'help' },
                    icon: '',
                    title: 'Can I switch to the discrete GPU on my laptop?',
                    description: "Yes, you can use the PRIME Utility accessible from the GNOME Settings > Display menu to switch between the integrated, the discrete or the hybrid profile.",
                    extraClasses: ['flexGrid-item--4'],
                },
                {
                    to: { name: 'help' },
                    icon: '',
                    title: 'How can I install software?',
                    description: "Vanilla OS provides optional support for Flatpak, AppImage, and soon Snap. We recommend you use any of these three for regular application installation. We also have our own package manager, apx. You can use it from the terminal to install Ubuntu, Fedora, or Arch Linux packages inside containers.",
                    extraClasses: ['flexGrid-item--4'],
                },
                {
                    to: { name: 'help' },
                    icon: '',
                    title: 'How can I install other drivers?',
                    description: "The recommended way to install drivers is through the Drivers utility accessible from the GNOME Settings > About menu. You can also install drivers from the terminal using the ikaros command line utility.",
                    extraClasses: ['flexGrid-item--4'],
                },
                {
                    to: { name: 'help' },
                    icon: '',
                    title: 'Can I install it alongside another OS (dual boot)?',
                    description: "We discourage dual booting since Vanilla OS is not meant to be installed alongside other operating systems. However, if you know what you're doing, you can make your own partitioning scheme during the installation process.",
                    extraClasses: ['flexGrid-item--4'],
                },
                {
                    to: { name: 'help' },
                    icon: '',
                    title: 'Is it suitable for beginners and non-technical users?',
                    description: "Yes, Vanilla OS is designed to be easy to use for everyone, whether you're a beginner or an advanced user.",
                    extraClasses: ['flexGrid-item--4'],
                },
                {
                    to: { name: 'help' },
                    type: 'clickable',
                    icon: 'fa-brands fa-discord',
                    iconPack: 'fa',
                    title: 'Still have questions?',
                    description: "Join our community on Discord and ask away! There are many people willing to help you.",
                    extraClasses: ['flexGrid-item--2', 'card--purple'],
                },
                {
                    to: { name: 'help' },
                    type: 'clickable',
                    icon: 'support',
                    iconPack: 'mdi',
                    title: 'Enterprise Support',
                    description: "Our Enterprise Support is available to answer your questions and doubts.",
                    extraClasses: ['flexGrid-item--2', 'card--green'],
                },
            ],
        };
    },
});
</script>
