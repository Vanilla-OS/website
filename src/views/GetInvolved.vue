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
                    title: 'Funding',
                    description: 'Like other projects, Vanilla OS has some costs to cover. You can help us with a donation or by becoming a sponsor.',
                },
                {
                    to: { name: 'get-involved-translate' },
                    type: 'clickable',
                    icon: 'translate',
                    title: 'Translate',
                    description: 'Translate Vanilla OS into your language or improve existing translations to make it more accessible to everyone.',
                },
                {
                    to: 'https://github.com/vanilla-os',
                    extLink: true,
                    type: 'clickable',
                    icon: 'code',
                    title: 'Develop',
                    description: 'Contribute to the development of Vanilla OS by suggesting new features, reporting bugs or contributing code.',
                },
                {
                    to: "https://github.com/Vanilla-OS/handbook",
                    extLink: true,
                    type: 'clickable',
                    icon: 'class',
                    title: 'Handbook',
                    description: 'Contribute guides and tutorials to help others get the most out of their Vanilla OS installation.',
                },
                {
                    to: "https://github.com/Vanilla-OS/documentation",
                    extLink: true,
                    type: 'clickable',
                    icon: 'library_books',
                    title: 'Documentation',
                    description: 'Good documentation is essential for users and developers to understand how to use Vanilla OS. Help us improve it.',
                },
                {
                    to: { name: 'developers-program' },
                    type: 'adv',
                    icon: 'how_to_reg',
                    title: ['Join the', 'Developers Program'],
                    description: 'Get access to latest experimental builds.',
                    btn: 'Apply Now',
                    extraClasses: ['card--type-dev']
                },
                {
                    to: { name: 'community' },
                    type: 'clickable',
                    icon: 'support',
                    title: 'Support',
                    description: 'Help other users to get the most out of Vanilla OS. Answer questions on our Discord server, help with bug reports and more.',
                },
                {
                    to: 'https://github.com/vanilla-os',
                    extLink: true,
                    type: 'clickable',
                    icon: 'bug_report',
                    title: 'Report a Bug',
                    description: 'Your question may already be answered. Check the Frequently Asked Questions.',
                },
                {
                    to: { name: 'get-involved-spread' },
                    type: 'clickable',
                    icon: 'campaign',
                    title: 'Spread the Word',
                    description: 'Spread the word about Vanilla OS to help the project grow.',
                },
                {
                    to: { name: 'nerd-info' },
                    type: 'clickable',
                    icon: 'science',
                    title: 'Information for Nerds',
                    description: 'Learn more about how Vanilla OS works from a technical point of view.',
                },
            ],
        };
    },
});
</script>
  