<template>
    <div class="flexList">
        <div class="flexGrid anim--fadeIn">
            <card v-for="(item, index) in getInvolvedItems" :key="index" :item="item" :class="item.extraClasses">
                <div v-if="item.bankTransferDetails" class="text text--rich">
                    <pre><code>{{ item.bankTransferDetails.join('\n') }}</code></pre>
                </div>
                <badges :items="item.badges" />
            </card>
        </div>
        <div class="spacer"></div>
        <div class="text text--rich">
            <p>{{this.$t('funding.additional_info.note')}}</p>            
            <p>{{this.$t('funding.additional_info.contact1')}}<a href="https://fabricators.ltd/en/contacts" target="_blank">{{this.$t('funding.additional_info.contact2')}}</a>{{this.$t('funding.additional_info.contact3')}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'get-involved-funding',
    data() {
        return {
            getInvolvedItems: [
                {
                    icon: 'account_balance',
                    iconPack: 'mdi',
                    title: this.$t('funding.bank_transfer.title'),
                    description: this.$t('funding.bank_transfer.description'),
                    bankTransferDetails: [
                        'Account Name: FABRICATORS S.R.L.',
                        'IBAN: IT30S0326811200052945656640',
                        'BIC/SWIFT: SELBIT2BXXX',
                    ],
                    extraClasses: ['flexGrid-item--2'],
                    badges: [
                        {
                            text: this.$t('funding.recommended'),
                            color: 'green',
                        }
                    ]
                },
                {
                    to: "https://commerce.coinbase.com/checkout/298fbe03-5b48-4202-8371-5345463c7963",
                    extLink: true,
                    type: 'clickable',
                    icon: 'fa-solid fa-bitcoin-sign',
                    iconPack: 'fa',
                    title: this.$t('funding.cryptocurrencies.title'),
                    description: this.$t('funding.cryptocurrencies.description'),
                    badges: [
                        {
                            text: this.$t('components.badges.anonymous'),
                        }
                    ]
                },
                {
                    to: "https://liberapay.com/fabricators",
                    extLink: true,
                    type: 'clickable',
                    icon: 'fa-solid fa-coins',
                    iconPack: 'fa',
                    title: this.$t('funding.liberapay.title'),
                    description: this.$t('funding.liberapay.description'),
                    badges: [
                        {
                            text: this.$t('funding.recommended'),
                            color: 'green',
                        },
                        {
                            text: this.$t('components.badges.anonymous'),
                        }
                    ]
                },
                {
                    to: "https://github.com/sponsors/Vanilla-OS",
                    extLink: true,
                    type: 'clickable',
                    icon: 'fa-brands fa-github',
                    iconPack: 'fa',
                    title: this.$t('funding.github_sponsors.title'),
                    description: this.$t('funding.github_sponsors.description'),
                    badges: [
                        {
                            text: this.$t('components.badges.anonymous'),
                        }
                    ]
                },
                {
                    to: "https://fabricators.ltd/en/contacts",
                    extLink: true,
                    type: 'clickable',
                    icon: 'handshake',
                    iconPack: 'mdi',
                    title: this.$t('funding.custom.title'),
                    description: this.$t('funding.custom.description'),
                },
            ],
        };
    },
});
</script>
