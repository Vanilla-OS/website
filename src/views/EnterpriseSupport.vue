<template>
    <div class="flexList anim--fadeIn">
        <div class="text text--rich">
            <p>Starting from Vanilla OS Orchid, we are offering enterprise support for companies and organizations
                that want to use Vanilla OS in their business.</p>
            <h3>What's included</h3>
        </div>
        <div class="flexGrid flexGrid--3">
            <card v-for="(item, index) in helpItems" :key="index" :item="item" :class="item.extraClasses" />
        </div>
        <div class="spacer"></div>
        <div class="text text--rich">
            <h3>Join the program</h3>
            <p>The enterprise support program will be available starting from Vanilla OS Orchid. If you are interested
                in joining the program, please subscribe to our funnyletter to be notified when the program is
                available.</p>
            <div class="card card--hz card--type-adv card--type-adv--hz card--type-funnyletter">
                <div class="card-header">
                    <h4>Don't miss the news</h4>
                    <h2>Subscribe to the Newsletter</h2>
                    <div class="btn btn--primary" @click="isNotMailNotChimpOpen = true">
                        <span class="material-symbols-outlined">email</span>
                        <span>Subscribe via Email</span>
                    </div>
                    <a class="btn btn--primary" href="//vanillaos.org/feed.xml">
                        <span class="material-symbols-outlined">newspaper</span>
                        <span>Subscribe via the RSS Feed</span>
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
                    title: 'Setup and Configuration',
                    description: 'We will help you setup and configure Vanilla OS for your business.',
                },
                {
                    icon: 'support_agent',
                    title: 'High Priority Support',
                    description: 'Get high priority support for your business.',
                },
                {
                    icon: 'class',
                    title: 'Training',
                    description: 'Get training and documentation for your employees to learn how to use Vanilla OS.',
                },
                {
                    icon: 'record_voice_over',
                    title: 'Support',
                    description: 'Get support for your employees and your IT department.',
                },
                {
                    icon: 'lightbulb',
                    title: 'Custom Features',
                    description: 'Get custom features to better fit your business needs.',
                },
                {
                    icon: 'update',
                    title: 'IT Managed Updates',
                    description: 'We will enable your IT department to manage updates for your Vanilla OS devices.',
                },
                {
                    icon: 'code',
                    title: 'Custom Apx Images',
                    description: 'Get custom Apx images which are tailored to your business needs.',
                },
                {
                    icon: 'shield',
                    title: 'Custom Security Policies',
                    description: 'We will help you setup custom security policies for your Vanilla OS devices.',
                },
                {
                    icon: 'trending_up',
                    title: 'Optional Analytics',
                    description: 'Get optional analytics for your devices usage.',
                },
                {
                    icon: 'developer_board',
                    title: 'Development assistance',
                    description: 'We will help you develop custom products (e.g. embedded devices) using Vanilla OS.',
                },
                {
                    icon: 'palette',
                    title: 'Customization',
                    description: 'Get custom branding and customization for your Vanilla OS devices.',
                },
                {
                    to: 'https://fabricators.ltd/en/contact.html',
                    extLink: true,
                    type: "clickable",
                    icon: 'contact_support',
                    title: 'Need more?',
                    description: 'Contact fabricators.ltd to get a custom offer for your business.',
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
