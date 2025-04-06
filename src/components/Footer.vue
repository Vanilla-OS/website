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
                        <li><router-link :to="{ name: 'blog' }">{{$t('footer.blog')}}</router-link></li>
                        <li><router-link :to="{ name: 'help' }">{{$t('footer.help')}}</router-link></li>
                        <li><router-link :to="{ name: 'get-involved' }">{{$t('footer.getInvolved')}}</router-link></li>
                        <li><router-link :to="{ name: 'download' }">{{$t('footer.download')}}</router-link></li>
                    </ul>
                </nav>
            </article>
            <nav class="siteFooter-sitemap" aria-label="sitemap">
                <ul>
                    <li><b>{{$t('footer.legal')}}</b></li>
                    <li><a href="//fabricators.ltd/">fabricators Ltd.</a></li>
                    <li><router-link :to="{ name: 'privacy-policy' }">{{$t('footer.privacy')}}</router-link></li>
                    <li><router-link :to="{ name: 'os-privacy-policy' }">{{$t('footer.osPrivacy')}}</router-link></li>
                    <li><router-link :to="{ name: 'cookies-policy' }">{{$t('footer.cookies')}}</router-link></li>
                    <li><router-link :to="{ name: 'brand' }">{{$t('footer.brand')}}</router-link></li>
                    <li><router-link :to="{ name: 'get-involved-funding' }">{{$t('footer.funding')}}</router-link></li>
                    <li><router-link :to="{ name: 'licenses' }">{{$t('footer.licenses')}}</router-link></li>
                    <li><a href="//fabricators.ltd/en/contacts">{{$t('footer.complaint')}}</a></li>
                    <li><a href="//status.vanillaos.org/">{{$t('footer.status')}}</a></li>
                </ul>
                <ul>
                    <li><b>{{$t('footer.community')}}</b></li>
                    <li><router-link :to="{ name: 'team' }">{{$t('footer.team')}}</router-link></li>
                    <li><router-link :to="{ name: 'community' }">{{$t('footer.community')}}</router-link></li>
                    <li><router-link :to="{ name: 'get-involved' }">{{$t('footer.getInvolved')}}</router-link></li>
                    <li><router-link :to="{ name: 'code-of-conduct' }">{{$t('footer.conduct')}}</router-link></li>
                    <li><a href="/feed.xml">{{$t('footer.rss')}}</a></li>
                    <li><a href="//info.vanillaos.org/updates-feed.xml">{{$t('footer.updates')}}</a></li>
                    <li class="spacer"></li>
                    <li><b>{{$t('footer.support')}}</b></li>
                    <li><a href="//documentation.vanillaos.org/">{{$t('footer.documentation')}}</a></li>
                    <li><a href="//handbook.vanillaos.org/">{{$t('footer.handbook')}}</a></li>
                    <li><router-link :to="{ name: 'enterprise-support' }">{{$t('footer.enterprise')}}</router-link></li>
                    <li><router-link :to="{ name: 'community' }">{{$t('footer.support')}}</router-link></li>
                </ul>
                <ul>
                    <li><b>{{$t('footer.developers')}}</b></li>
                    <li><router-link :to="{ name: 'developers-program' }">{{$t('footer.developersProgram')}}</router-link></li>
                    <li><a href="https://github.com/vanilla-os" target="_blank">{{$t('footer.source')}}</a></li>
                    <li><a href="https://github.com/vanilla-os" target="_blank">{{$t('footer.report')}}</a></li>
                    <li><router-link :to="{ name: 'technologies-and-credits' }">{{$t('footer.technologies')}}</router-link>
                    </li>
                    <li><router-link :to="{ name: 'roadmap' }">{{$t('footer.roadmap')}}</router-link></li>
                    <li><router-link :to="{ name: 'components-lifecycle' }">{{$t('footer.components')}}</router-link></li>
                    <li><router-link :to="{ name: 'nerd-info' }">{{$t('footer.information')}}</router-link></li>
                    <li class="spacer"></li>
                    <li><b>{{$t('footer.getVanillaOs')}}</b></li>
                    <li><router-link :to="{ name: 'download' }">{{$t('footer.download')}}</router-link></li>
                    <li><router-link :to="{ name: 'download' }">{{$t('footer.requirements')}}</router-link></li>
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
