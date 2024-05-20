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
                    title: 'Frequently Asked Questions',
                    description: 'Your question may already be answered. Check the Frequently Asked Questions.',
                    extraClasses: ['flexGrid-item--2']
                },
                {
                    to: "https://handbook.vanillaos.org",
                    extLink: true,
                    type: 'clickable',
                    icon: 'class',
                    title: 'Handbook',
                    description: 'Our handbook covers the most requested topics and is a great place to start.',
                },
                {
                    to: "https://documentation.vanillaos.org/",
                    extLink: true,
                    type: 'clickable',
                    icon: 'library_books',
                    title: 'Documentation',
                    description: 'The documentation is where technical users can find detailed information about Vanilla OS.',
                },
                {
                    // to: 'help',
                    // type: 'clickable',
                    icon: 'forum',
                    title: 'Forums',
                    description: 'Our forums provide a place for users to discuss Vanilla OS and get help.',
                    badges: [
                        {
                            text: 'Coming Soon',
                        }
                    ]
                },
                {
                    to: 'community',
                    type: 'clickable',
                    icon: 'record_voice_over',
                    title: 'Discord Server',
                    description: 'Join our Discord server to chat with other users and developers, participate to the events and get some spoilers.',
                },
                {
                    to: 'https://github.com/vanilla-os',
                    extLink: true,
                    type: 'clickable',
                    icon: 'bug_report',
                    title: 'Report a Bug',
                    description: 'If you find a bug in Vanilla OS, please report it so we can fix it.',
                },
                {
                    to: 'enterprise-support',
                    type: 'clickable',
                    icon: 'support',
                    title: 'Enterprise Support',
                    description: 'Get enterprise support for Vanilla OS from fabricatorsltd.',
                    extraClasses: ['card--green']
                },
            ],
        };
    },
});
</script>
  