<template>
    <div class="flexGrid anim--fadeIn">
        <card v-for="(item, index) in getInvolvedItems" :key="index" :item="item" :class="item.extraClasses">
            <btn-adv v-if="item.btn" :icon="item" :link="item">{{ item.btn }}</btn-adv>
        </card>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'get-involved',
    data() {
        return {
            getInvolvedItems: [
                {
                    to: { name: 'get-involved-funding' },
                    type: 'clickable',
                    icon: 'savings',
                    title: this.$t('get-involved.funding.title'),
                    description: this.$t('get-involved.funding.description'),
                },
                {
                    to: { name: 'get-involved-translate' },
                    type: 'clickable',
                    icon: 'translate',
                    title: this.$t('get-involved.translate.title'),
                    description: this.$t('get-involved.translate.description'),
                },
                {
                    to: 'https://github.com/vanilla-os',
                    extLink: true,
                    type: 'clickable',
                    icon: 'code',
                    title: this.$t('components.develop'),
                    description: this.$t('get-involved.develop.description'),
                },
                {
                    to: "https://github.com/Vanilla-OS/handbook",
                    extLink: true,
                    type: 'clickable',
                    icon: 'class',
                    title: this.$t('get-involved.handbook.title'),
                    description: this.$t('get-involved.handbook.description'),
                },
                {
                    to: "https://github.com/Vanilla-OS/documentation",
                    extLink: true,
                    type: 'clickable',
                    icon: 'library_books',
                    title: this.$t('get-involved.documentation.title'),
                    description: this.$t('get-involved.documentation.description'),
                },
                {
                    to: { name: 'developers-program' },
                    type: 'adv',
                    icon: 'how_to_reg',
                    title: this.$t('get-involved.developers_program.title'),
                    description: this.$t('get-involved.developers_program.description'),
                    btn: this.$t('components.apply_now'),
                    extraClasses: ['card--type-dev']
                },
                {
                    to: { name: 'community' },
                    type: 'clickable',
                    icon: 'support',
                    title: this.$t('get-involved.support.title'),
                    description: this.$t('get-involved.support.description'),
                },
                {
                    to: 'https://github.com/vanilla-os',
                    extLink: true,
                    type: 'clickable',
                    icon: 'bug_report',
                    title: this.$t('get-involved.reportBug.title'),
                    description: this.$t('get-involved.reportBug.description'),
                },
                {
                    to: { name: 'get-involved-spread' },
                    type: 'clickable',
                    icon: 'campaign',
                    title: this.$t('get-involved.spread_word.title'),
                    description: this.$t('get-involved.spread_word.description'),
                },
                {
                    to: { name: 'nerd-info' },
                    type: 'clickable',
                    icon: 'science',
                    title: this.$t('get-involved.information_for_nerds.title'),
                    description: this.$t('get-involved.information_for_nerds.description'),
                },
            ],
        };
    },
});
</script>
  