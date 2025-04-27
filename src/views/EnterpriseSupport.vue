<template>
    <div class="flexList anim--fadeIn">
        <div class="text text--rich">
            <p>{{$t('enterprise-support.offering.message')}}</p>
            <h3>{{$t('components.whats_included')}}</h3>
        </div>
        <div class="flexGrid flexGrid--3">
            <card v-for="(item, index) in helpItems" :key="index" :item="item" :class="item.extraClasses" />
        </div>
        <div class="spacer"></div>
        <div class="text text--rich">
            <h3>{{$t('components.join_program')}}</h3>
            <p>{{$t('enterprise-support.join_program.message')}}</p>
            <div class="card card--hz card--type-adv card--type-adv--hz card--type-funnyletter">
                <div class="card-header">
                    <h4>{{$t('components.newsletter.dont_miss')}}</h4>
                    <h2>{{$t('components.newsletter.subscribe')}}</h2>
                    <div class="btn btn--primary" @click="isNotMailNotChimpOpen = true">
                        <span class="material-symbols-outlined">email</span>
                        <span>{{$t('components.newsletter.subscribe_email')}}</span>
                    </div>
                    <a class="btn btn--primary" href="//vanillaos.org/feed.xml">
                        <span class="material-symbols-outlined">newspaper</span>
                        <span>{{$t('components.newsletter.subscribe_rss')}}</span>
                    </a>
                </div>
                <div class="card-content">
                    <div class="flexList">
                        <div class="card-image">
                            <img src="/assets/images/components/funnyletter.svg" alt="Subscribe to the Newsletter" />
                        </div>
                    </div>
                </div>
            </div>
            <notmail-not-chimp :is-open="isNotMailNotChimpOpen" @close="closeNotMailNotChimp" tagsId="12813009" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'enterprise-support',
    data() {
        return {
            isNotMailNotChimpOpen: false,
            helpItems: [
                {
                    icon: 'settings',
                    title: this.$t('components.whats_included'),
                    description: this.$t('enterprise-support.whats_included.services[0].description'),
                },
                {
                    icon: 'support_agent',
                    title: this.$t('enterprise-support.whats_included.services[1].title'),
                    description: this.$t('enterprise-support.whats_included.services[1].description'),
                },
                {
                    icon: 'class',
                    title: this.$t('enterprise-support.whats_included.services[2].title'),
                    description: this.$t('enterprise-support.whats_included.services[2].description'),
                },
                {
                    icon: 'record_voice_over',
                    title: this.$t('enterprise-support.whats_included.services[3].title'),
                    description: this.$t('enterprise-support.whats_included.services[3].description'),
                },
                {
                    icon: 'lightbulb',
                    title: this.$t('enterprise-support.whats_included.services[4].title'),
                    description: this.$t('enterprise-support.whats_included.services[4].description'),
                },
                {
                    icon: 'update',
                    title: this.$t('enterprise-support.whats_included.services[5].title'),
                    description: this.$t('enterprise-support.whats_included.services[5].description'),
                },
                {
                    icon: 'code',
                    title: this.$t('enterprise-support.whats_included.services[6].title'),
                    description: this.$t('enterprise-support.whats_included.services[6].description'),
                },
                {
                    icon: 'shield',
                    title: this.$t('enterprise-support.whats_included.services[7].title'),
                    description: this.$t('enterprise-support.whats_included.services[7].description'),
                },
                {
                    icon: 'trending_up',
                    title: this.$t('enterprise-support.whats_included.services[8].title'),
                    description: this.$t('enterprise-support.whats_included.services[8].description'),
                },
                {
                    icon: 'developer_board',
                    title: this.$t('enterprise-support.whats_included.services[9].title'),
                    description: this.$t('enterprise-support.whats_included.services[9].description'),
                },
                {
                    icon: 'palette',
                    title: this.$t('enterprise-support.whats_included.services[10].title'),
                    description: this.$t('enterprise-support.whats_included.services[10].description'),
                },
                {
                    to: 'https://fabricators.ltd/en/contact.html',
                    extLink: true,
                    type: "clickable",
                    icon: 'contact_support',
                    title: this.$t('enterprise-support.contact.title'),
                    description: this.$t('enterprise-support.contact.message'),
                    extraClasses: ['card--green'],
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
