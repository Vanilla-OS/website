import { createRouter, createWebHistory } from 'vue-router'
import { useHead } from 'unhead'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () =>// @ts-ignore
        import(/* webpackChunkName: "NotLogged" */ "@/layouts/Main.vue"),
      children: [
        {
          path: "",
          name: "home",
          component: () =>// @ts-ignore
            import(/* webpackChunkName: "Login" */ "@/views/Home.vue"),
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
      ]
    },
    {
      path: '/',
      component: () =>// @ts-ignore
        import(/* webpackChunkName: "NotLogged" */ "@/layouts/Page.vue"),
      children: [
        {
          path: "/blog",
          name: "blog",
          component: () =>// @ts-ignore
            import(/* webpackChunkName: "Login" */ "@/views/Blog.vue"),
          meta: {
            title: "Blog",
            description: "Check out what's happening in Vanilla OS world.",
          },
        },
        {
          path: "/privacy-policy",
          name: "privacy-policy",
          component: () =>// @ts-ignore
            import(/* webpackChunkName: "Login" */ "@/views/PrivacyPolicy.vue"),
          meta: {
            title: "Privacy Policy",
            description: "Check out our Privacy Policy.",
          },
        },
        {
          path: "/cookies-policy",
          name: "cookies-policy",
          component: () =>// @ts-ignore
            import(/* webpackChunkName: "Login" */ "@/views/CookiesPolicy.vue"),
          meta: {
            title: "Cookies Policy",
            description: "Check out our Cookies Policy.",
          },
        },
        {
          path: "/licenses",
          name: "licenses",
          component: () =>// @ts-ignore
            import(/* webpackChunkName: "Login" */ "@/views/Licenses.vue"),
          meta: {
            title: "Licenses",
            description: "Vanilla OS is built on top of many technologies. Check out the licenses.",
          },
        },
        {
          path: "/help",
          name: "help",
          component: () =>// @ts-ignore
            import(/* webpackChunkName: "Login" */ "@/views/Help.vue"),
          meta: {
            title: "Help",
            description: "Have a problem or need information about Vanilla OS?",
          },
        },
        {
          path: "/team",
          name: "team",
          component: () =>// @ts-ignore
            import(/* webpackChunkName: "Login" */ "@/views/Team.vue"),
          meta: {
            title: "Team",
            description: "Meet the people behind Vanilla OS.",
          },
        },
        {
          path: "/team/contributors",
          name: "team-contributors",
          component: () =>// @ts-ignore
            import(/* webpackChunkName: "Login" */ "@/views/get-involved/Contributors.vue"),
          meta: {
            title: "Contributors",
            description: "Meet the people who contributed to Vanilla OS.",
            parent: "team",
          },
        },
        {
          path: "/brand",
          name: "brand",
          component: () =>// @ts-ignore
            import(/* webpackChunkName: "Login" */ "@/views/Brand.vue"),
          meta: {
            title: "Brand",
            description: "Official Vanilla OS brand assets and values.",
          },
        },
        {
          path: "/developers-program",
          name: "developers-program",
          component: () =>// @ts-ignore
            import(/* webpackChunkName: "Login" */ "@/views/DevelopersProgram.vue"),
          meta: {
            title: "Developers Program",
            description: "Join our Developers Program and get access to exclusive content.",
          },
        },
        {
          path: "/code-of-conduct",
          name: "code-of-conduct",
          component: () =>// @ts-ignore
            import(/* webpackChunkName: "Login" */ "@/views/CodeOfConduct.vue"),
          meta: {
            title: "Code of Conduct",
            description: "Everyone must follow our Code of Conduct to be part of Vanilla OS.",
          },
        },
        {
          path: "/enterprise-support",
          name: "enterprise-support",
          component: () =>// @ts-ignore
            import(/* webpackChunkName: "Login" */ "@/views/EnterpriseSupport.vue"),
          meta: {
            title: "Enterprise Support",
            description: "Get enterprise support for Vanilla OS.",
          },
        },
        {
          path: "/roadmap",
          name: "roadmap",
          component: () =>// @ts-ignore
            import(/* webpackChunkName: "Login" */ "@/views/Roadmap.vue"),
          meta: {
            title: "Roadmap",
            description: "Follow our roadmap to see what's coming next.",
          },
        },
        {
          path: "/technologies-and-credits",
          name: "technologies-and-credits",
          component: () =>// @ts-ignore
            import(/* webpackChunkName: "Login" */ "@/views/TechnologiesAndCredits.vue"),
          meta: {
            title: "Technologies and Credits",
            description: "Vanilla OS is built on top of many technologies.",
          },
        },
        {
          path: "/community",
          name: "community",
          component: () =>// @ts-ignore
            import(/* webpackChunkName: "Login" */ "@/views/Community.vue"),
          meta: {
            title: "Community",
            description: "Join our community of users and developers.",
          },
        },
        {
          path: "/help/faq",
          name: "help-faq",
          component: () =>// @ts-ignore
            import(/* webpackChunkName: "Login" */ "@/views/help/Faq.vue"),
          meta: {
            title: "Frequently Asked Questions",
            description: "The most common questions about Vanilla OS.",
            parent: "help",
          },
        },
        {
          path: "/get-involved",
          name: "get-involved",
          component: () =>// @ts-ignore
            import(/* webpackChunkName: "Login" */ "@/views/GetInvolved.vue"),
          meta: {
            title: "Get Involved",
            description: "Everything we do is Open Source. You can contribute in many way.",
          },
        },
        {
          path: "/get-involved/translate",
          name: "get-involved-translate",
          component: () =>// @ts-ignore
            import(/* webpackChunkName: "Login" */ "@/views/get-involved/Translate.vue"),
          meta: {
            title: "Translate",
            description: "Translate Vanilla OS into your language.",
            parent: "get-involved",
          },
        },
        {
          path: "/get-involved/funding",
          name: "get-involved-funding",
          component: () =>// @ts-ignore
            import(/* webpackChunkName: "Login" */ "@/views/get-involved/Funding.vue"),
          meta: {
            title: "Funding",
            description: "We need your help to keep Vanilla OS alive.",
            parent: "get-involved",
          },
        },
        {
          path: "/get-involved/spread",
          name: "get-involved-spread",
          component: () =>// @ts-ignore
            import(/* webpackChunkName: "Login" */ "@/views/get-involved/Spread.vue"),
          meta: {
            title: "Spread the Word",
            description: "Help us spread the word about Vanilla OS.",
            parent: "get-involved",
          },
        },
        {
          path: "/download",
          name: "download",
          component: () =>// @ts-ignore
            import(/* webpackChunkName: "Login" */ "@/views/Download.vue"),
          meta: {
            title: "Get Vanilla OS",
            description: "Get the latest version.",
          },
        },
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})


router.beforeEach((to, from, next) => {
  if(to === undefined) {
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
        content: "https://vanillaos.org/assets/images/brand/vanillaos-logo.svg",
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
        content: 'https://vanillaos.org/assets/images/brand/vanillaos-logo.svg',
      },
      {
        name: 'twitter:url',
        content: 'https://vanillaos.org' + to.path,
      },
    ],
  });

  next();
});

export default router
