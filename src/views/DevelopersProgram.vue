<template>
    <div class="flexList anim--fadeIn">
        <div class="text text--rich">
            <p>{{$t('developers-program.program_overview')}}</p>
            <h3>{{$t('developers-program.whats_included.title')}}</h3>
        </div>
        <div class="flexGrid flexGrid--2">
            <card v-for="(item, index) in helpItems" :key="index" :item="item" />
        </div>
        <div class="spacer"></div>
        <div class="text text--rich">
            <h3>{{$t('developers-program.join_program.title')}}</h3>
            <p>{{$t('developers-program.join_program.description')}}</p>
            <div class="card card--hz card--type-adv card--type-adv--hz card--type-funnyletter">
                <div class="card-header">
                    <h4>{{$t('developers-program.join_program.subscribe.title')}}</h4>
                    <h2>{{$t('developers-program.join_program.subscribe.newsletter')}}</h2>
                    <div class="btn btn--primary" @click="isNotMailNotChimpOpen = true">
                        <span class="material-symbols-outlined">email</span>
                        <span>{{$t('developers-program.join_program.subscribe.subscribe_email')}}</span>
                    </div>
                    <button class="btn btn--primary" @click="openRSSFeed">
                        <span class="material-symbols-outlined">newspaper</span>
                        <span>{{$t('developers-program.join_program.subscribe.subscribe_rss')}}</span>
                    </button>
                </div>
                <div class="card-content">
                    <div class="flexList">
                        <div class="card-image">
                            <img src="/assets/images/components/funnyletter.svg" alt="Subscribe to the Newsletter" />
                        </div>
                    </div>
                </div>
            </div>
            <notmail-not-chimp :is-open="isNotMailNotChimpOpen" @close="closeNotMailNotChimp" tagsId="12812945" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'developers-program',
    data() {
        return {
            isNotMailNotChimpOpen: false,
            helpItems: [
                {
                    icon: 'build',
                    title: this.$t('developers-program.whats_included.features[0].title'),
                    description: this.$t('developers-program.whats_included.features[0].description'),
                },
                {
                    icon: 'email',
                    title: this.$t('developers-program.whats_included.features[1].title'),
                    description: this.$t('developers-program.whats_included.features[1].description'),
                },
                {
                    icon: 'bug_report',
                    title: this.$t('developers-program.whats_included.features[2].title'),
                    description: this.$t('developers-program.whats_included.features[2].description'),
                },
                {
                    icon: 'bug_report',
                    title: this.$t('developers-program.whats_included.features[3].title'),
                    description: this.$t('developers-program.whats_included.features[3].description'),
                },
                {
                    icon: 'support_agent',
                    title: this.$t('developers-program.whats_included.features[4].title'),
                    description: this.$t('developers-program.whats_included.features[4].description'),
                },
                {
                    icon: 'verified',
                    title: this.$t('developers-program.whats_included.features[5].title'),
                    description: this.$t('developers-program.whats_included.features[5].description'),
                },
                ],
        };
    },
    methods: {
        closeNotMailNotChimp() {
            this.isNotMailNotChimpOpen = false;
        },
        openRSSFeed() {
            window.open('https://vanillaos.org/feed.xml', '_blank');
        },
    },
});
</script>
