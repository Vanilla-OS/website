<template>
    <div class="flexList anim--fadeIn">
        <div class="text text--rich">
            <h3>Our Values</h3>
            <p>Vanilla OS is an operating system that puts user experience and comfort first, and revolves around core
                values: simplicity, cleanliness, freedom, and obstruction-free.</p>
        </div>
        <div class="flexGrid flexGrid--4">
            <card v-for="(item, index) in values" :key="index" :item="item" />
        </div>
        <div class="spacer"></div>
        <div class="text text--rich">
            <p>Our vision stems from the belief that user experience should be accessible to all without complications. We
                have translated this principle into a brand that fully embodies this philosophy. The name "Vanilla OS"
                evokes the purity and simplicity we aim to offer our users, while the vanilla flower, featured in our
                logo, represents the sweetness and elegance of our operating system.</p>
        </div>
        <div class="text text--rich">
            <h3>Brand Assets</h3>
        </div>
        <div class="flexGrid flexGrid--2">
            <card v-for="(item, index) in brandAssets" :key="index" :item="item" :class="item.extraClasses">
                <image-card :class="item.imageClasses">
                    <img :src="item.image" :alt="item.title" />
                </image-card>
            </card>
        </div>
        <div class="spacer"></div>
        <div class="text text--rich">
            <h3>Primary Colors</h3>
        </div>
        <div class="flexGrid flexGrid--2">
            <card v-for="(item, index) in primaryColors" :key="index" :item="item">
                <image-card :class="item.imageClasses">
                    <img :src="item.image" :alt="item.title" />
                </image-card>
            </card>
        </div>
        <div class="spacer"></div>
        <div class="text text--rich">
            <h3>Secondary Colors</h3>
        </div>
        <div class="flexGrid flexGrid--2">
            <card v-for="(item, index) in secondaryColors" :key="index" :item="item">
                <image-card :class="item.imageClasses">
                    <img :src="item.image" :alt="item.title" />
                </image-card>
            </card>
        </div>
        <div class="spacer"></div>
        <div class="text text--rich">
            <h3>Fonts</h3>
        </div>
        <div class="flexGrid flexGrid--2">
            <card v-for="(item, index) in fonts" :key="index" :item="item">
                <div class="text text--rich">
                    <span :class="['font', item.class]">{{ item.name }}</span>
                </div>
            </card>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'brand',
    data() {
        return {
            values: [
                {
                    icon: 'favorite',
                    title: 'Simplicity',
                    description: 'Vanilla OS is simple and easy to use. It is designed to be intuitive and accessible.',
                },
                {
                    icon: 'local_florist',
                    title: 'Cleanliness',
                    description: 'Vanilla OS offers a clean and distraction-free user experience.',
                },
                {
                    icon: 'lock_open',
                    title: 'Freedom',
                    description: 'Vanilla OS loves freedom. Freedom of choice, to customize, to contribute.',
                },
                {
                    icon: 'close',
                    title: 'Obstruction-free',
                    description: 'Vanilla OS removes the clutter and obstruction from your workflow.',
                },
            ],
            brandAssets: [
                {
                    title: 'Standard',
                    image: '/assets/images/brand/vanillaos-logo.svg',
                    imageClasses: [
                        'img--no-bg',
                    ],
                    extraClasses: [
                        'card--light',
                    ],
                    footerActions: [
                        {
                            title: 'PNG',
                            icon: 'download',
                            iconPack: 'mdi',
                            onClick: () => {
                                window.open('/assets/images/brand/vanillaos-logo.png', '_blank');
                            },
                        },
                        {
                            title: 'SVG',
                            icon: 'download',
                            iconPack: 'mdi',
                            onClick: () => {
                                window.open('/assets/images/brand/vanillaos-logo.svg', '_blank');
                            },
                        },
                    ],
                },
                {
                    title: 'Dark Variant',
                    image: '/assets/images/brand/vanillaos-logo-dark.svg',
                    imageClasses: [
                        'img--no-bg',
                    ],
                    extraClasses: [
                        'card--dark',
                    ],
                    footerActions: [
                        {
                            title: 'PNG',
                            icon: 'download',
                            iconPack: 'mdi',
                            onClick: () => {
                                window.open('/assets/images/brand/vanillaos-logo-dark.png', '_blank');
                            },
                        },
                        {
                            title: 'SVG',
                            icon: 'download',
                            iconPack: 'mdi',
                            onClick: () => {
                                window.open('/assets/images/brand/vanillaos-logo-dark.svg', '_blank');
                            },
                        },
                    ],
                },
            ],
            primaryColors: [
                {
                    title: 'Yellow Orange',
                    image: '/assets/images/brand/vanillaos-color-yellow-orange.svg',
                    imageClasses: [
                        'img--no-bg',
                    ],
                    footerActions: [
                        {
                            title: 'HEX #FFBF48',
                            icon: 'content_copy',
                            iconPack: 'mdi',
                            onClick: () => {
                                navigator.clipboard.writeText('#FFBF48');
                            },
                        },
                        {
                            title: 'CMYK C:0 M:25 Y:72 K:0',
                            icon: 'content_copy',
                            iconPack: 'mdi',
                            onClick: () => {
                                navigator.clipboard.writeText('C:0 M:25 Y:72 K:0');
                            },
                        },
                    ],
                },
                {
                    title: 'Mine Shaft',
                    image: '/assets/images/brand/vanillaos-color-mine-shaft.svg',
                    imageClasses: [
                        'img--no-bg',
                    ],
                    footerActions: [
                        {
                            title: 'HEX #333333',
                            icon: 'content_copy',
                            iconPack: 'mdi',
                            onClick: () => {
                                navigator.clipboard.writeText('#333333');
                            },
                        },
                        {
                            title: 'CMYK C:0 M:0 Y:0 K:80',
                            icon: 'content_copy',
                            iconPack: 'mdi',
                            onClick: () => {
                                navigator.clipboard.writeText('C:0 M:0 Y:0 K:80');
                            },
                        },
                    ],
                },
            ],
            secondaryColors: [
                {
                    title: 'Cararra',
                    image: '/assets/images/brand/vanillaos-color-cararra.svg',
                    imageClasses: [
                        'img--no-bg',
                    ],
                    footerActions: [
                        {
                            title: 'HEX #F2F1ED',
                            icon: 'content_copy',
                            iconPack: 'mdi',
                            onClick: () => {
                                navigator.clipboard.writeText('#F2F1ED');
                            },
                        },
                        {
                            title: 'CMYK C:0 M:0 Y:2 K:5',
                            icon: 'content_copy',
                            iconPack: 'mdi',
                            onClick: () => {
                                navigator.clipboard.writeText('C:0 M:0 Y:2 K:5');
                            },
                        },
                    ],
                },
                {
                    title: 'Westar',
                    image: '/assets/images/brand/vanillaos-color-westar.svg',
                    imageClasses: [
                        'img--no-bg',
                    ],
                    footerActions: [
                        {
                            title: 'HEX #E4E3DF',
                            icon: 'content_copy',
                            iconPack: 'mdi',
                            onClick: () => {
                                navigator.clipboard.writeText('#E4E3DF');
                            },
                        },
                        {
                            title: 'CMYK C:0 M:0 Y:2 K:11',
                            icon: 'content_copy',
                            iconPack: 'mdi',
                            onClick: () => {
                                navigator.clipboard.writeText('C:0 M:0 Y:2 K:11');
                            },
                        },
                    ],
                },
            ],
            fonts: [
                {
                    name: 'Outfit',
                    class: 'font--outfit',
                    footerActions: [
                        {
                            title: 'Download',
                            icon: 'download',
                            iconPack: 'mdi',
                            onClick: () => {
                                window.open('https://fonts.google.com/specimen/Outfit', '_blank');
                            },
                        },
                    ],
                },
                {
                    name: 'Pacifico',
                    class: 'font--pacifico',
                    footerActions: [
                        {
                            title: 'Download',
                            icon: 'download',
                            iconPack: 'mdi',
                            onClick: () => {
                                window.open('https://fonts.google.com/specimen/Pacifico', '_blank');
                            },
                        },
                    ],
                },
            ],
        };
    },
});
</script>
  