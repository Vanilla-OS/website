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
                    title: this.$t('faq.questions[0].question'), 
                    description: this.$t('faq.questions[0].answer'),
                    extraClasses: ['flexGrid-item--4'],
                },
                {
                    to: { name: 'help' },
                    icon: '',
                    title: this.$t('faq.questions[1].question'),
                    description: this.$t('faq.questions[1].answer'), 
                    extraClasses: ['flexGrid-item--4'],
                },
                {
                    to: { name: 'help' },
                    icon: '',
                    title: this.$t('faq.questions[2].question'), 
                    description: this.$t('faq.questions[2].answer'),
                    extraClasses: ['flexGrid-item--4'],
                },
                {
                    to: { name: 'help' },
                    icon: '',
                    title: this.$t('faq.questions[3].question'),
                    description: this.$t('faq.questions[3].answer'),
                    extraClasses: ['flexGrid-item--4'],
                },
                {
                    to: { name: 'help' },
                    icon: '',
                    title: this.$t('faq.questions[4].question'), 
                    description: this.$t('faq.questions[4].answer'),
                    extraClasses: ['flexGrid-item--4'],
                },
                {
                    to: { name: 'help' },
                    icon: '',
                    title: this.$t('faq.questions[5].question'),
                    description: this.$t('faq.questions[5].answer'),
                    extraClasses: ['flexGrid-item--4'],
                },
                {
                    to: { name: 'help' },
                    icon: '',
                    title: this.$t('faq.questions[6].question'), 
                    description: this.$t('faq.questions[6].answer'),
                    extraClasses: ['flexGrid-item--4'],
                },
                {
                    to: { name: 'help' },
                    icon: '',
                    title: this.$t('faq.stillHaveQuestions.title'),
                    description: this.$t('faq.stillHaveQuestions.description'),
                    extraClasses: ['flexGrid-item--2', 'card--purple'],
                },
                {
                    to: { name: 'help' },
                    type: 'clickable',
                    icon: 'support',
                    iconPack: 'mdi',
                    title: this.$t('faq.enterpriseSupport.title'),
                    description: this.$t('faq.enterpriseSupport.description'), 
                    extraClasses: ['flexGrid-item--2', 'card--green'],
                },
            ],
        };
    },
});
</script>
