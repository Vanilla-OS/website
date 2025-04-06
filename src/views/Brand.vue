<template>
    <div class="flexList anim--fadeIn">
        <div class="text text--rich">
            <h3>{{$t('brand.our_values.title')}}</h3>
            <p>{{$t('brand.our_values.description')}}</p>
        </div>
        <div class="flexGrid flexGrid--4">
            <card v-for="(item, index) in values" :key="index" :item="item" />
        </div>
        <div class="spacer"></div>
        <div class="text text--rich">
            <p>{{$t('brand.vision.description')}}</p>
        </div>
        <div class="text text--rich">
            <h3>{{$t('brand.brand_assets.title')}}</h3>
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
            <h3>{{$t('brand.primary_colors.title')}}</h3>
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
            <h3>{{$t('brand.secondary_colors.title')}}</h3>
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
            <h3>{{$t('brand.fonts.title')}}</h3>
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
                title: this.$t('brand.values.simplicity.title'),
                description: this.$t('brand.values.simplicity.description'),
            },
            {
                icon: 'local_florist',
                title: this.$t('brand.values.cleanliness.title'),
                description: this.$t('brand.values.cleanliness.description'),
            },
            {
                icon: 'lock_open',
                title: this.$t('brand.values.freedom.title'),
                description: this.$t('brand.values.freedom.description'),
            },
            {
                icon: 'close',
                title: this.$t('brand.values.obstruction_free.title'),
                description: this.$t('brand.values.obstruction_free.description'),
            },
            ],
            brandAssets: [
              {
                  title: this.$t('brand.brand_assets.icon.title'),
                  image: '/assets/images/brand/vanillaos-logo-icon.svg',
                  imageClasses: [
                      'img--no-bg',
                      'img--128',
                  ],
                  footerActions: [
                      {
                          title: 'PNG',
                          icon: 'download',
                          iconPack: 'mdi',
                          onClick: () => {
                              window.open('/assets/images/brand/vanillaos-logo-icon.png', '_blank');
                          },
                      },
                      {
                          title: 'SVG',
                          icon: 'download',
                          iconPack: 'mdi',
                          onClick: () => {
                              window.open('/assets/images/brand/vanillaos-logo-icon.svg', '_blank');
                          },
                      },
                  ],
              },
                {
                    title: this.$t('brand.brand_assets.standard.title'),
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
                    title: this.$t('brand.brand_assets.dark_variant.title'),
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
                    title: this.$t('brand.primary_colors.yellow_orange'),
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
                    title: this.$t('brand.primary_colors.laser_lemon'),
                    image: '/assets/images/brand/vanillaos-color-laser-lemon.svg',
                    imageClasses: [
                        'img--no-bg',
                    ],
                    footerActions: [
                        {
                            title: 'HEX #FFFB64',
                            icon: 'content_copy',
                            iconPack: 'mdi',
                            onClick: () => {
                                navigator.clipboard.writeText('#FFFB64');
                            },
                        },
                        {
                            title: 'CMYK C:0 M:2 Y:61 K:0',
                            icon: 'content_copy',
                            iconPack: 'mdi',
                            onClick: () => {
                                navigator.clipboard.writeText('C:0 M:2 Y:61 K:0');
                            },
                        },
                    ],
                },
                {
                    title: this.$t('brand.primary_colors.mine_shaft'),
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
                    title: this.$t('brand.secondary_colors.carrara'),
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
                    title: this.$t('brand.secondary_colors.westar'),
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
