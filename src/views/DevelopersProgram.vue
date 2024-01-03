<template>
    <div class="flexList anim--fadeIn">
        <div class="text text--rich">
            <p>Our developers program provides a way for developers to get access to exclusive features and support
                while supporting the development of Vanilla OS.</p>
            <h3>What's included</h3>
        </div>
        <div class="flexGrid flexGrid--2">
            <card v-for="(item, index) in helpItems" :key="index" :item="item" />
        </div>
        <div class="spacer"></div>
        <div class="text text--rich">
            <h3>Join the program</h3>
            <p>The developers program will be available soon. If you are interested in joining the program, please
                subscribe to our funnyletter to be notified when the program is available.</p>
            <div class="card card--hz card--type-adv card--type-adv--hz card--type-funnyletter">
                <div class="card-header">
                    <h4>Don't miss the news</h4>
                    <h2>Subscribe to the Newsletter</h2>
                    <div class="btn btn--primary" @click="isNotMailNotChimpOpen = true">
                        <span class="mdi material-icons">email</span>
                        <span>Subscribe Now</span>
                    </div>
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
                    title: 'Pre-release builds',
                    description: 'Get access to pre-release builds of Vanilla OS before they are released to the public.',
                },
                {
                    icon: 'email',
                    title: 'Weekly funnyletter',
                    description: 'Get a weekly funnyletter with updates about the development of Vanilla OS.',
                },
                {
                    icon: 'bug_report',
                    title: 'Testing programs',
                    description: 'Get access to testing programs for new features and products.',
                },
                {
                    icon: 'bug_report',
                    title: 'Updates Priority',
                    description: 'Get proposed updates before they are released to the public.',
                },
                {
                    icon: 'support_agent',
                    title: 'Dedicated Discord channel',
                    description: 'Get access to a dedicated Discord channel and chat with the developers.',
                },
                {
                    icon: 'verified',
                    title: 'Dedicated badge',
                    description: 'Show your support with a dedicated badge in the Vanilla OS community.',
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