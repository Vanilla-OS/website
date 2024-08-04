<template>
    <footer class="siteFooter siteFooter--has-floatNotice">
        <section class="siteFooter-wrapper container">
            <article class="siteFooter-header">
                <div class="siteFooter-logo">
                    <router-link :to="{ name: 'home' }">
                        <img src="/assets/images/brand/vanillaos-logo-icon.svg" alt="Vanilla OS" />
                    </router-link>
                </div>
                <nav class="siteFooter-navigation">
                    <ul>
                        <li><router-link :to="{ name: 'blog' }">Blog</router-link></li>
                        <li><router-link :to="{ name: 'help' }">Help</router-link></li>
                        <li><router-link :to="{ name: 'get-involved' }">Get Involved</router-link></li>
                        <li><router-link :to="{ name: 'download' }">Download</router-link></li>
                    </ul>
                </nav>
            </article>
            <nav class="siteFooter-sitemap" aria-label="sitemap">
                <ul>
                    <li><b>Legal and More</b></li>
                    <li><a href="//fabricators.ltd/">fabricators Ltd.</a></li>
                    <li><router-link :to="{ name: 'privacy-policy' }">Privacy Policy</router-link></li>
                    <li><router-link :to="{ name: 'os-privacy-policy' }">OS Privacy Policy</router-link></li>
                    <li><router-link :to="{ name: 'cookies-policy' }">Use of Cookies</router-link></li>
                    <li><router-link :to="{ name: 'brand' }">Our Brand</router-link></li>
                    <li><router-link :to="{ name: 'get-involved-funding' }">Funding</router-link></li>
                    <li><router-link :to="{ name: 'licenses' }">Licenses</router-link></li>
                    <li><a href="//fabricators.ltd/en/contact.html">File a Complaint</a></li>
                    <li><a href="//status.vanillaos.org/">System Status</a></li>
                </ul>
                <ul>
                    <li><b>Community</b></li>
                    <li><router-link :to="{ name: 'team' }">Our Team</router-link></li>
                    <li><router-link :to="{ name: 'community' }">Community</router-link></li>
                    <li><router-link :to="{ name: 'get-involved' }">Get Involved</router-link></li>
                    <li><router-link :to="{ name: 'code-of-conduct' }">Code of Conduct</router-link></li>
                    <li><a href="/feed.xml">RSS/Atom Feed</a></li>
                    <li><a href="//info.vanillaos.org/updates-feed.xml">Updates Feed</a></li>
                    <li class="spacer"></li>
                    <li><b>Support</b></li>
                    <li><a href="//documentation.vanillaos.org/">Documentation</a></li>
                    <li><a href="//handbook.vanillaos.org/">Handbook</a></li>
                    <li><router-link :to="{ name: 'enterprise-support' }">Enterprise Support</router-link></li>
                    <li><router-link :to="{ name: 'community' }">Community Support</router-link></li>
                </ul>
                <ul>
                    <li><b>Developers</b></li>
                    <li><router-link :to="{ name: 'developers-program' }">Join the Developers Program</router-link></li>
                    <li><a href="https://github.com/vanilla-os" target="_blank">Source Code</a></li>
                    <li><a href="https://github.com/vanilla-os" target="_blank">Report a Bug</a></li>
                    <li><router-link :to="{ name: 'technologies-and-credits' }">Technologies and Credits</router-link>
                    </li>
                    <li><router-link :to="{ name: 'roadmap' }">Roadmap</router-link></li>
                    <li><router-link :to="{ name: 'components-lifecycle' }">Components Lifecycle</router-link></li>
                    <li><router-link :to="{ name: 'nerd-info' }">Information for Nerds</router-link></li>
                    <li class="spacer"></li>
                    <li><b>Get Vanilla OS</b></li>
                    <li><router-link :to="{ name: 'download' }">Download</router-link></li>
                    <li><router-link :to="{ name: 'download' }">System Requirements</router-link></li>
                    <!--<li><router-link :to="{ name: 'download' }">Release Notes</router-link></li>-->
                </ul>
            </nav>
        </section>
    </footer>

    <float-notice v-if="showFloatNotice" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'SiteFooter',
    computed: {
        showFloatNotice() {
            return this.$route.name !== 'article' && this.$route.name !== 'download-orchid-stable';
        }
    }
});
</script>
