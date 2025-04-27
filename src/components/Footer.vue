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
                        <li><router-link :to="{ name: 'blog' }">{{$t('links.blog')}}</router-link></li>
                        <li><router-link :to="{ name: 'help' }">{{$t('links.help')}}</router-link></li>
                        <li><router-link :to="{ name: 'get-involved' }">{{$t('links.getInvolved')}}</router-link></li>
                        <li><router-link :to="{ name: 'download' }">{{$t('links.download')}}</router-link></li>
                    </ul>
                </nav>
            </article>
            <nav class="siteFooter-sitemap" aria-label="sitemap">
                <ul>
                    <li><b>{{$t('links.legal')}}</b></li>
                    <li><a href="//fabricators.ltd/">fabricators Ltd.</a></li>
                    <li><router-link :to="{ name: 'privacy-policy' }">{{$t('links.privacy')}}</router-link></li>
                    <li><router-link :to="{ name: 'os-privacy-policy' }">{{$t('links.osPrivacy')}}</router-link></li>
                    <li><router-link :to="{ name: 'cookies-policy' }">{{$t('links.cookies')}}</router-link></li>
                    <li><router-link :to="{ name: 'brand' }">{{$t('links.brand')}}</router-link></li>
                    <li><router-link :to="{ name: 'get-involved-funding' }">{{$t('links.funding')}}</router-link></li>
                    <li><router-link :to="{ name: 'licenses' }">{{$t('links.licenses')}}</router-link></li>
                    <li><a href="//fabricators.ltd/en/contacts">{{$t('links.complaint')}}</a></li>
                    <li><a href="//status.vanillaos.org/">{{$t('links.status')}}</a></li>
                </ul>
                <ul>
                    <li><b>{{$t('links.community')}}</b></li>
                    <li><router-link :to="{ name: 'team' }">{{$t('links.team')}}</router-link></li>
                    <li><router-link :to="{ name: 'community' }">{{$t('links.community')}}</router-link></li>
                    <li><router-link :to="{ name: 'get-involved' }">{{$t('links.getInvolved')}}</router-link></li>
                    <li><router-link :to="{ name: 'code-of-conduct' }">{{$t('links.conduct')}}</router-link></li>
                    <li><a href="/feed.xml">{{$t('links.rss')}}</a></li>
                    <li><a href="//info.vanillaos.org/updates-feed.xml">{{$t('links.updates')}}</a></li>
                    <li class="spacer"></li>
                    <li><b>{{$t('links.support')}}</b></li>
                    <li><a href="//documentation.vanillaos.org/">{{$t('links.documentation')}}</a></li>
                    <li><a href="//handbook.vanillaos.org/">{{$t('links.handbook')}}</a></li>
                    <li><router-link :to="{ name: 'enterprise-support' }">{{$t('links.enterprise')}}</router-link></li>
                    <li><router-link :to="{ name: 'community' }">{{$t('links.support')}}</router-link></li>
                </ul>
                <ul>
                    <li><b>{{$t('links.developers')}}</b></li>
                    <li><router-link :to="{ name: 'developers-program' }">{{$t('links.developersProgram')}}</router-link></li>
                    <li><a href="https://github.com/vanilla-os" target="_blank">{{$t('links.source')}}</a></li>
                    <li><a href="https://github.com/vanilla-os" target="_blank">{{$t('links.report')}}</a></li>
                    <li><router-link :to="{ name: 'technologies-and-credits' }">{{$t('links.technologies')}}</router-link>
                    </li>
                    <li><router-link :to="{ name: 'roadmap' }">{{$t('links.roadmap')}}</router-link></li>
                    <li><router-link :to="{ name: 'components-lifecycle' }">{{$t('links.components')}}</router-link></li>
                    <li><router-link :to="{ name: 'nerd-info' }">{{$t('links.information')}}</router-link></li>
                    <li class="spacer"></li>
                    <li><b>{{$t('links.getVanillaOs')}}</b></li>
                    <li><router-link :to="{ name: 'download' }">{{$t('links.download')}}</router-link></li>
                    <li><router-link :to="{ name: 'download' }">{{$t('links.requirements')}}</router-link></li>
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
            // return this.$route.name !== 'article' && this.$route.name !== 'download-orchid-stable';
            return false;
        }
    }
});
</script>
