<template>
    <div class="floatNotice" :class="{ 'anim--askFocus': !expanded }">
        <div class="floatNotice-wrapper card" :class="classes">
            <div class="floatNotice-header clickable" @click="toggleExpanded()">
                <h3>🎉 Vanilla OS 2 (Orchid) Beta is here!</h3>
                <span class="floatNotice-heaer-icon mdi material-icons" v-if="!expanded">expand_less</span>
                <span class="floatNotice-heaer-icon mdi material-icons" v-if="expanded">expand_more</span>
            </div>
            <div class="floatNotice-content" v-if="expanded">
                <div class="flexList">
                    <div class="text text--rich">
                        <p>The wait is over! We are proud to announce that Vanilla OS 2 (Orchid)
                            Beta is now available for download.</p>
                        <p>Vanilla OS 2 (Orchid) is a complete rewrite of the Vanilla OS operating
                            system, introduces new paradigms and technologies aimed at improving
                            the user experience, the security and the overall stability of the system.</p>
                    </div>
                    <div class="flexGrid flexGrid--2">
                        <router-link
                            :to="{ name: 'article', params: { date: '2024-01-30', slug: 'vanilla-os-2-orchid-beta-is-here' } }"
                            class="btn btn--link btn--link-2 btn--inline">
                            <span>Release Post</span>
                            <span class=" mdi material-icons-outlined">open_in_new</span>
                        </router-link>
                        <button class="btn btn--primary" @click="goToDownload()">
                            <span class="mdi material-icons-outlined">save_alt</span>
                            <span>Try the Beta</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'FloatNotice',
    data() {
        return {
            expanded: false,
            classes: "anim--backCardGlow"
        }
    },
    methods: {
        toggleExpanded() {
            if (this.expanded) {
                this.classes = "anim--swipeDown";
                this.expanded = false;
                setTimeout(() => {
                    this.classes = "anim--backCardGlow";
                }, 200);
            } else {
                this.classes = "anim--swipeUp";
                this.expanded = true;
                setTimeout(() => {
                    this.classes = "";
                }, 200);
            }
        },
        goToDownload() {
            this.$router.push({ name: 'download-orchid-beta' });
            this.toggleExpanded();
        }
    }
});
</script>