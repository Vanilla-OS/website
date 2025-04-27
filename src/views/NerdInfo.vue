<template>
    <div class="flexList anim--fadeIn">
        <div class="text text--rich">
            <p>{{$t('nerd-info.overview')}}</p>
        </div>
        <card v-for="(item, index) in info" :key="index" :item="item" />
    </div>
    <div class="hero hero--vertical hero--allow-scroll">
        <div class="text text--rich">
            <h2>{{$t('nerd-info.call_to_action.title')}}</h2>
            <p>{{$t('nerd-info.call_to_action.message')}}</p>
        </div>
        <div class="flexGrid flexGrid--fluid flexGrid--2">
            <a href="https://docs.vanillaos.org/" class="btn btn--link btn--link-2 btn--inline">
                <span>{{$t('nerd-info.call_to_action.docs')}}</span>
                <span class=" material-symbols-outlined">open_in_new</span>
            </a>
            <router-link to="/community" class="btn btn--primary">
                <span>{{$t('nerd-info.call_to_action.community')}}</span>
                <span class="material-symbols-outlined">record_voice_over</span>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'technologies-and-credits',
    data() {
        return {
            info: [
                {
                    icon: 'extension',
                    title: this.$t('nerd-info.sections[0].title'),
                    description: this.$t('nerd-info.sections[0].description'),
                    to: 'https://images.vanillaos.org/#/',
                    extLink: true,
                    type: 'clickable',
                },
                {
                    icon: 'lock',
                    title: this.$t('nerd-info.sections[1].title'),
                    description: this.$t('nerd-info.sections[1].description'),
                    to: 'https://github.com/Vanilla-OS/ABRoot?tab=readme-ov-file',
                    extLink: true,
                    type: 'clickable',
                },
                {
                    icon: 'update',
                    title: this.$t('nerd-info.sections[2].title'),
                    description: this.$t('nerd-info.sections[2].description'),
                },
                {
                    icon: 'lightbulb',
                    title: this.$t('nerd-info.sections[3].title'),
                    description: this.$t('nerd-info.sections[3].description'),
                },
                {
                    icon: 'storage',
                    title: this.$t('nerd-info.sections[4].title'),
                    description: this.$t('nerd-info.sections[4].description'),
                },
                {
                    icon: 'layers',
                    title: this.$t('nerd-info.sections[5].title'),
                    description: this.$t('nerd-info.sections[5].description'),
                },
                {
                    icon: 'memory',
                    title: this.$t('nerd-info.sections[6].title'),
                    description: this.$t('nerd-info.sections[6].description'),
                    to: { name: 'article', params: { date: '2023-11-22', slug: 'vanilla-os-orchid---devlog-22-nov' } },
                    type: 'clickable',
                },
                {
                    icon: 'android',
                    title: this.$t('nerd-info.sections[7].title'),
                    description: this.$t('nerd-info.sections[7].description'),
                },
                {
                    icon: 'key',
                    title: this.$t('nerd-info.sections[8].title'),
                    description: this.$t('nerd-info.sections[8].description'),
                },
                {
                    icon: 'verified',
                    title: this.$t('components.startupVerified'),
                    description: this.$t('nerd-info.sections[9].description'),
                },
                {
                    icon: 'share',
                    title: this.$t('nerd-info.sections[10].title'),
                    description: this.$t('nerd-info.sections[10].description'),
                }
            ],
        };
    },
});
</script>
