<template>
    <div class="flexGrid flexGrid--2 anim--fadeIn">
        <card v-for="(item, index) in helpItems" :key="index" :item="item" :class="item.extraClasses">
            <badges :items="item.badges" />
        </card>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'help',
    data() {
        return {
            helpItems: [
                {
                    to: { name: 'help-faq' },
                    type: 'clickable',
                    icon: 'help_center',
                    title: this.$t('help.sections.faq.title'),
                    description: this.$t('help.sections.faq.description'),
                    extraClasses: ['flexGrid-item--2']
                },
                {
                    to: "https://handbook.vanillaos.org",
                    extLink: true,
                    type: 'clickable',
                    icon: 'class',
                    title: this.$t('help.sections.handbook.title'), 
                    description: this.$t('help.sections.handbook.description'), 
                },
                {
                    to: "https://documentation.vanillaos.org/",
                    extLink: true,
                    type: 'clickable',
                    icon: 'library_books',
                    title: this.$t('help.sections.documentation.title'), 
                    description: this.$t('help.sections.documentation.description'), 
                },
                {
                    icon: 'forum',
                    title: this.$t('help.sections.forums.title'),
                    description: this.$t('help.sections.forums.description'),
                    badges: [
                        {
                            text: this.$t('help.sections.forums.comingSoon'), 
                        }
                    ]
                },
                {
                    to: 'community',
                    type: 'clickable',
                    icon: 'record_voice_over',
                    title: this.$t('help.sections.discord.title'),
                    description: this.$t('help.sections.discord.description'),
                },
                {
                    to: 'https://github.com/vanilla-os',
                    extLink: true,
                    type: 'clickable',
                    icon: 'bug_report',
                    title: this.$t('help.sections.reportBug.title'),
                    description: this.$t('help.sections.reportBug.description'), 
                },
                {
                    to: 'enterprise-support',
                    type: 'clickable',
                    icon: 'support',
                    title: this.$t('help.sections.enterpriseSupport.title'),
                    description: this.$t('help.sections.enterpriseSupport.description'),
                    extraClasses: ['card--green']
                },
            ],
        };
    },
});
</script>
  