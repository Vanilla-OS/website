import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import { useHead } from 'unhead'
import { i18n } from '../localization/index';

export default function createRouterInstance(clientType: string) {
  console.log('creating new router instance')

  const history = clientType === 'server'
    ? createMemoryHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL);

  const router = createRouter({
    history,
    routes: [
      {
        path: '/',
        component: () =>// @ts-ignore
          import(/* webpackChunkName: "Main" */ "@/layouts/Main.vue"),
        children: [
          {
            path: "",
            name: "home",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Home" */ "@/views/Home.vue"),
            meta: {
              description: "Vanilla OS is an operating system built with simplicity in mind. It's fast, lightweight, beautiful and ready for all your daily tasks.",
            },
          },
          {
            path: "/blog/article/:date/:slug",
            name: "article",
            component: () =>
              import(/* webpackChunkName: "Article" */ "@/views/Article.vue"),
            meta: {
              title: "", // The title and description will be set dynamically in the component
              description: "",
              parent: "blog",
            },
          },
          {
            path: "/download/orchid/alpha",
            name: "download-orchid-alpha",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Download" */ "@/views/download/DownloadOrchidAlpha.vue"),
            meta: {
              title: "Vanilla OS 2 Orchid Alpha",
              description: "Try the latest development version of Vanilla OS.",
              parent: "download",
              freePageLayout: true,
            },
          },
          {
            path: "/download/orchid/beta",
            name: "download-orchid-beta",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Download" */ "@/views/download/DownloadOrchidBeta.vue"),
            meta: {
              title: "Vanilla OS 2 Orchid Beta",
              description: "Try the latest development version of Vanilla OS.",
              parent: "download",
              freePageLayout: true,
            },
          },
          {
            path: "/download/orchid/stable",
            name: "download-orchid-stable",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Download" */ "@/views/download/DownloadOrchidStable.vue"),
            meta: {
              title: "Vanilla OS 2 Orchid Stable",
              description: "Try the latest development version of Vanilla OS.",
              parent: "download",
              freePageLayout: true,
            },
          },
        ]
      },
      {
        path: '/',
        component: () =>// @ts-ignore
          import(/* webpackChunkName: "Pages" */ "@/layouts/Page.vue"),
        children: [
          {
            path: "/blog",
            name: "blog",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Blog" */ "@/views/Blog.vue"),
            meta: {
              title: "Blog",
              description: "Check out what's happening in Vanilla OS world.",
            },
          },
          {
            path: "/privacy-policy",
            name: "privacy-policy",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "PrivacyPolicy" */ "@/views/PrivacyPolicy.vue"),
            meta: {
              title: i18n.global.t('privacy-policy.title'),
              description: i18n.global.t('privacy-policy.description'),
            },
          },
          {
            path: "/os-privacy-policy",
            name: "os-privacy-policy",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "PrivacyPolicy" */ "@/views/OSPrivacyPolicy.vue"),
            meta: {
              title: i18n.global.t('os-privacy-policy.title'),
              description: i18n.global.t('os-privacy-policy.description'),
            },
          },
          {
            path: "/cookies-policy",
            name: "cookies-policy",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "CookiesPolicy" */ "@/views/CookiesPolicy.vue"),
            meta: {
              title: i18n.global.t('cookies-policy.title'),
              description: i18n.global.t('cookies-policy.description'),
            },
          },
          {
            path: "/licenses",
            name: "licenses",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Licenses" */ "@/views/Licenses.vue"),
            meta: {
              title: i18n.global.t('licenses.title'),
              description: i18n.global.t('licenses.description'),
            },
          },
          {
            path: "/help",
            name: "help",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Help" */ "@/views/Help.vue"),
            meta: {
              title: i18n.global.t('help.title'),
              description: i18n.global.t('help.description'),
            },
          },
          {
            path: "/team",
            name: "team",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Team" */ "@/views/Team.vue"),
            meta: {
              title: i18n.global.t('team.title'),
              description: i18n.global.t('team.description'),
            },
          },
          {
            path: "/team/contributors",
            name: "team-contributors",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Contributors" */ "@/views/get-involved/Contributors.vue"),
            meta: {
              title: i18n.global.t('contributors.title'),
              description: i18n.global.t('contributors.description'),
              parent: "team",
            },
          },
          {
            path: "/brand",
            name: "brand",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Brand" */ "@/views/Brand.vue"),
            meta: {
              title: i18n.global.t('brand.title'),
              description: i18n.global.t('brand.description'),
            },
          },
          {
            path: "/developers-program",
            name: "developers-program",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "DevelopersProgram" */ "@/views/DevelopersProgram.vue"),
            meta: {
              title: i18n.global.t('developers-program.title'),
              description: i18n.global.t('developers-program.description'),
            },
          },
          {
            path: "/code-of-conduct",
            name: "code-of-conduct",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "CodeOfConduct" */ "@/views/CodeOfConduct.vue"),
            meta: {
              title: i18n.global.t('code-of-conduct.title'),
              description: i18n.global.t('code-of-conduct.description'),
            },
          },
          {
            path: "/enterprise-support",
            name: "enterprise-support",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "EnterpriseSupport" */ "@/views/EnterpriseSupport.vue"),
            meta: {
              title: i18n.global.t('enterprise-support.title'),
              description: i18n.global.t('enterprise-support.description'),
            },
          },
          {
            path: "/roadmap",
            name: "roadmap",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Roadmap" */ "@/views/Roadmap.vue"),
            meta: {
              title: i18n.global.t('roadmap.title'),
              description: i18n.global.t('roadmap.description'),
            },
          },
          {
            path: "/components-lifecycle",
            name: "components-lifecycle",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Roadmap" */ "@/views/ComponentsLifeCycle.vue"),
            meta: {
              title: i18n.global.t('components-lifecycle.title'),
              description: i18n.global.t('components-lifecycle.description'),
            },
          },
          {
            path: "/technologies-and-credits",
            name: "technologies-and-credits",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "TechnologiesAndCredits" */ "@/views/TechnologiesAndCredits.vue"),
            meta: {
              title: i18n.global.t('technologies-and-credits.title'),
              description: i18n.global.t('technologies-and-credits.description'),
            },
          },
          {
            path: "/community",
            name: "community",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Community" */ "@/views/Community.vue"),
            meta: {
              title: i18n.global.t('community.title'),
              description: i18n.global.t('community.description'),
            },
          },
          {
            path: "/help/faq",
            name: "help-faq",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Faq" */ "@/views/help/Faq.vue"),
            meta: {
              title: i18n.global.t('faq.title'),
              description: i18n.global.t('faq.description'),
              parent: "help",
            },
          },
          {
            path: "/get-involved",
            name: "get-involved",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "GetInvolved" */ "@/views/GetInvolved.vue"),
            meta: {
              title: i18n.global.t('get-involved.title'),
              description: i18n.global.t('get-involved.description'),
            },
          },
          {
            path: "/get-involved/translate",
            name: "get-involved-translate",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Translate" */ "@/views/get-involved/Translate.vue"),
            meta: {
              title: i18n.global.t('translate.title'),
              description: i18n.global.t('translate.description'),
              parent: "get-involved",
            },
          },
          {
            path: "/get-involved/funding",
            name: "get-involved-funding",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Funding" */ "@/views/get-involved/Funding.vue"),
            meta: {
              title: i18n.global.t('funding.title'),
              description: i18n.global.t('funding.description'),
              parent: "get-involved",
            },
          },
          {
            path: "/get-involved/spread",
            name: "get-involved-spread",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Spread" */ "@/views/get-involved/Spread.vue"),
            meta: {
              title: i18n.global.t('spread.title'),
              description: i18n.global.t('spread.description'),
              parent: "get-involved",
            },
          },
          {
            path: "/updates",
            name: "updates",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Updates" */ "@/views/Updates.vue"),
            meta: {
              title: i18n.global.t('updates.title'),
              description: i18n.global.t('updates.description'),
            },
          },
          {
            path: "/download",
            name: "download",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Download" */ "@/views/Download.vue"),
            meta: {
              title: i18n.global.t('download.title'),
              description: i18n.global.t('download.description')              
            },
          },
          {
            path: "/nerd-info",
            name: "nerd-info",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Download" */ "@/views/NerdInfo.vue"),
            meta: {
              title: i18n.global.t('nerd-info.title'),
              description: i18n.global.t('nerd-info.description'),
            },
          },
          {
            path: "/testing-components",
            name: "testing-components",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "Download" */ "@/views/TestingComponents.vue"),
            meta: {
              title: i18n.global.t('testing-components.title'),
              description: i18n.global.t('testing-components.description'),
            },
          },
        ]
      },
      {
        path: '/:notFound',
        name: 'not-found',
        component: () =>// @ts-ignore
          import(/* webpackChunkName: "Errors" */ "@/layouts/Page.vue"),
        children: [
          {
            path: "",
            name: "404",
            component: () =>// @ts-ignore
              import(/* webpackChunkName: "404" */ "@/views/404.vue"),
            meta: {
              title: i18n.global.t('not-found.title'),
              description: i18n.global.t('not-found.description'),
            },
          },
        ]
      },
    ],
    scrollBehavior(to, from, savedPosition) {
      return { top: 0 }
    },
  })


  router.beforeEach((to, from, next) => {
    if (to === undefined) {
      next();
      return;
    }    

    useHead({// @ts-ignore
      title: to.meta.title ? to.meta.title + " - Vanilla OS" : "Vanilla OS",
      meta: [
        {
          name: "description",// @ts-ignore
          content: to.meta.description,
        },
        {
          name: "og:title",// @ts-ignore
          content: to.meta.title,
        },
        {
          name: "og:description",// @ts-ignore
          content: to.meta.description,
        },
        {
          name: "og:image",
          content: "https://vanillaos.org/assets/images/brand/vanillaos-cover.png",
        },
        {
          name: "og:url",
          content: "https://vanillaos.org" + to.path,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: 'Vanilla OS - Your next Operating System',
        },
        {
          name: 'twitter:description',// @ts-ignore
          content: to.meta.description,
        },
        {
          name: 'twitter:image',
          content: 'https://vanillaos.org/assets/images/brand/vanillaos-cover.png',
        },
        {
          name: 'twitter:url',
          content: 'https://vanillaos.org' + to.path,
        },
      ],
    });

    next();
  });

  return router;
}
