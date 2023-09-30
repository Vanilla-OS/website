<template>
  <div class="hero hero--big hero--no-margin">
    <div class="hero-wrapper container">
      <img class="hero-image onFocus no-dark" data-focus-class="fadeInLeft"
        src="/assets/images/backgrounds/vos-laptop-frame.svg" alt="Vanilla OS 2 Orchid" />
      <img class="hero-image onFocus on-dark" data-focus-class="fadeInLeft"
        src="/assets/images/backgrounds/vos-laptop-frame-dark.svg" alt="Vanilla OS 2 Orchid" />
      <div class="hero-content">
        <div class="hero-heading">
          <h2>Vanilla OS <span>{{ $t('home.hero.mainTitle') }}</span></h2>
        </div>
        <div class="hero-footer">
          <div class="flexList">
            <router-link :to="{ name: 'download' }" class="btn btn--primary btn--big">
              <span class="mdi material-icons-outlined">file_download</span>
              <span>{{ $t('home.hero.download') }}</span>
            </router-link>
            <div class="text text--dimmed">
              <small>Vanilla OS {{ $t('home.hero.description') }}
                <a href="https://handbook.vanillaos.org/2022/11/05/installation.html" target="_blank">{{ $t('home.hero.howInstall') }}</a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="navigationBar">
    <ul>
      <li>
        <span class="text text--dimmed">Vanilla OS is</span>
      </li>
      <li :class="{ 'active': activeSection === 'work' }">
        <span @click="scrollTo('#work')">{{ $t('home.hero.work.title') }}</span>
      </li>
      <li :class="{ 'active': activeSection === 'play' }">
        <span @click="scrollTo('#play')">{{ $t('home.hero.play.title') }}</span>
      </li>
      <li :class="{ 'active': activeSection === 'develop' }">
        <span @click="scrollTo('#develop')">{{ $t('home.hero.dev.title') }}</span>
      </li>
      <li :class="{ 'active': activeSection === 'access' }">
        <span @click="scrollTo('#access')">{{ $t('home.hero.access.title') }}</span>
      </li>
      <li :class="{ 'active': activeSection === 'solid' }">
        <span @click="scrollTo('#solid')">{{ $t('home.hero.solid.title') }}</span>
      </li>
      <li :class="{ 'active': activeSection === 'versatile' }">
        <span @click="scrollTo('#versatile')">{{ $t('home.hero.versatile.title') }}</span>
      </li>
    </ul>
  </div>

  <div class="hero hero--inverted hero--big" id="work">
    <div class="hero-wrapper container">
      <img class="hero-image onFocus" data-focus-class="fadeInRight" src="/assets/images/backgrounds/rnote.svg"
        alt="Work in an efficient workspace." />
      <div class="hero-content">
        <div class="hero-heading">
          <h2 class="color--work-1">{{ $t('home.hero.work.title') }}</h2>
          <b class="color--work-2">{{ $t('home.hero.work.subTitle') }}</b>
        </div>
        <div class="flexList">
          <div class="text text--spaced">
            <p>{{ $t('home.hero.work.p1') }}</p>
            <p>{{ $t('home.hero.work.p2') }}</p>
            <p>{{ $t('home.hero.work.p3') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="hero hero--big hero--gn-purple" id="play">
    <div class="hero-back">
      <video autoplay muted loop playsinline>
        <source src="/assets/videos/ron-lach-friends-playing-on-computer.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="hero-wrapper container">
      <img class="hero-image onFocus" data-focus-class="fadeInLeft" src="/assets/images/backgrounds/popular-games.svg"
        alt="Play your favorite video games." />
      <div class="hero-content">
        <div class="hero-heading">
          <h2 class="color--play-1">{{ $t('home.hero.play.title') }}</h2>
          <b class="color--play-2">{{ $t('home.hero.play.subTitle') }}</b>
        </div>
        <div class="flexList">
          <div class="text text--spaced">
            <p>{{ $t('home.hero.play.p1') }}</p>
            <p>{{ $t('home.hero.play.p2') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="hero hero--inverted hero--big" id="develop">
    <div class="hero-wrapper container">
      <img class="hero-image onFocus" data-focus-class="fadeInRight" src="/assets/images/backgrounds/apx-console.svg"
        alt="Develop with maximum flexibility." />
      <div class="hero-content">
        <div class="hero-heading">
          <h2 class="color--develop-1">{{ $t('home.hero.dev.title') }}</h2>
          <b class="color--develop-2">{{ $t('home.hero.dev.subTitle') }}</b>
        </div>
        <div class="flexList">
          <div class="text text--spaced">
            <p>{{ $t('home.hero.dev.p1') }}</p>
            <p>{{ $t('home.hero.dev.p2') }}</p>
            <p>{{ $t('home.hero.dev.p3') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="hero hero--big hero--bg-center hero--extra-margin" id="access">
    <div class="hero-wrapper container">
      <img class="hero-image onFocus" data-focus-class="fadeIn" src="/assets/images/backgrounds/apps-overview.png"
        alt="Access the largest set of applications." />
      <div class="hero-content">
        <div class="hero-heading">
          <h2 class="color--access-1">{{ $t('home.hero.access.title') }}</h2>
          <b class="color--access-2">{{ $t('home.hero.access.subTitle') }}</b>
        </div>
      </div>
    </div>
  </div>

  <div class="hero hero--big" id="solid">
    <div class="hero-wrapper container">
      <img class="hero-image onFocus" data-focus-class="fadeInRight" src="/assets/images/backgrounds/solid-circuit.svg"
        alt="Solid as a rock." />
      <div class="hero-content">
        <div class="hero-heading">
          <h2 class="color--solid-1">{{ $t('home.hero.solid.title') }}</h2>
          <b class="color--solid-2">{{ $t('home.hero.solid.subTitle') }}</b>
        </div>
        <div class="flexList">
          <div class="text text--spaced">
            <p>{{ $t('home.hero.solid.p1') }}</p>
            <p>{{ $t('home.hero.solid.p2') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="hero hero--inverted hero--big" id="versatile">
    <div class="hero-wrapper container">
      <img class="hero-image onFocus no-dark" data-focus-class="fadeInRight"
        src="/assets/images/backgrounds/vib-recipe.svg" alt="Solid as a rock." />
      <img class="hero-image onFocus on-dark" data-focus-class="fadeInRight"
        src="/assets/images/backgrounds/vib-recipe-dark.svg" alt="Solid as a rock." />
      <div class="hero-content">
        <div class="hero-heading">
          <h2 class="color--versatile-1">{{ $t('home.hero.versatile.title') }}</h2>
          <b class="color--versatile-2">{{ $t('home.hero.versatile.subTitle') }}</b>
        </div>
        <div class="flexList">
          <div class="text text--spaced">
            <p>{{ $t('home.hero.versatile.p1') }}</p>
            <p>{{ $t('home.hero.versatile.p2') }}</p>
            <p>{{ $t('home.hero.versatile.p3') }}</p>
            <router-link :to="{ name: 'roadmap' }" class="btn btn--link btn--link-2 btn--inline">
              <span>Starting from Orchid</span>
              <span class="mdi material-icons-outlined">open_in_new</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="text text--rich">
      <h2>{{ $t('home.hero.featured') }}</h2>
    </div>
    <div class="spacer"></div>
    <div class="flexGrid flexGrid--3">
      <card v-for="(item, index) in medias" :key="index" :item="item" />
    </div>
    <div class="spacer"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';

export default defineComponent({
  name: 'home',
  data() {
    return {
      medias: [
        {
          icon: '/assets/images/media/zdnet.svg',
          imageAsIcon: true,
          imageClasses: ['img--white-on-dark'],
          to: 'https://www.zdnet.com/article/vanilla-os-offers-a-new-take-on-security-for-the-linux-desktop/',
          extLink: true,
          type: "clickable",
          description: 'If you\'re looking for a new operating system that takes security seriously… Vanilla OS might be just the ticket.',
        },
        {
          icon: '/assets/images/media/the_register.svg',
          imageAsIcon: true,
          imageClasses: ['img--white-on-dark'],
          to: 'https://www.theregister.com/2023/01/03/vanilla_os_2210/',
          extLink: true,
          type: "clickable",
          description: 'Vanilla OS is going for bigger, bolder improvement to the Linux desktop… it could prove transformative to the Linux industry… ',
        },
        {
          icon: '/assets/images/media/techrepublic-logo.svg',
          imageAsIcon: true,
          imageClasses: ['img--white-on-dark'],
          to: 'https://www.techrepublic.com/article/vanilla-os-linux-desktop/',
          extLink: true,
          type: "clickable",
          description: 'This will be a project you’ll want to keep a close watch on… I think Vanilla OS could be a real game-changer.',
        },
        {
          icon: '/assets/images/media/omg-linux.png',
          imageAsIcon: true,
          imageClasses: ['img--white-on-dark'],
          to: 'https://www.omglinux.com/vanilla-os-first-release-download/',
          extLink: true,
          type: "clickable",
          description: 'Far more than “just another” Ubuntu fork, this distro takes a bold new approach to desktop computing using an immutable file system.',
        },
        {
          icon: '/assets/images/media/itsfoss-logo.webp',
          imageAsIcon: true,
          imageClasses: ['img--white-on-dark'],
          to: 'https://news.itsfoss.com/vanilla-os-beta/',
          extLink: true,
          type: "clickable",
          description: 'Being a new distro, Vanilla OS has a well-equipped feature set that you might like.',
        },
        {
          to: { name: 'get-involved-spread' },
          type: 'adv',
          icon: 'how_to_reg',
          title2: 'Spread the word',
          description: 'Help us spread the word about Vanilla OS and its features.',
          btn: 'Read more',
          extraClasses: [
            'card--yellow'
          ]
        },
      ],
    };
  },
  setup() {
    const activeSection = ref<string>('');

    const handleScrollAnimations = () => {
      const onFocusElements = document.querySelectorAll('.onFocus');

      const observerOptions = {
        threshold: 0.2,
      };

      const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const focusClass = el.getAttribute('data-focus-class');

            if (focusClass) {
              switch (focusClass) {
                case 'fadeIn':
                  el.style.opacity = '1';
                  break;
                case 'fadeInLeft':
                  el.style.opacity = '1';
                  el.style.transform = 'translateX(0)';
                  break;
                case 'fadeInRight':
                  el.style.opacity = '1';
                  el.style.transform = 'translateX(0)';
                  break;
                default:
                  break;
              }
            }
          } else {
            const el = entry.target as HTMLElement;
            const focusClass = el.getAttribute('data-focus-class');

            if (focusClass) {
              switch (focusClass) {
                case 'fadeIn':
                  el.style.opacity = '0';
                  break;
                case 'fadeInLeft':
                  el.style.opacity = '0';
                  el.style.transform = 'translateX(-40px)';
                  break;
                case 'fadeInRight':
                  el.style.opacity = '0';
                  el.style.transform = 'translateX(40px)';
                  break;
                default:
                  break;
              }
            }
          }
        });
      }, observerOptions);

      onFocusElements.forEach((el) => {
        intersectionObserver.observe(el);
      });
    };

    const handleActiveSection = () => {
      const sections = document.querySelectorAll('.hero');
      const observerOptions = {
        threshold: 0.5,
      };

      const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) {
              activeSection.value = id;
            }
          }
        });
      }, observerOptions);

      sections.forEach((section) => {
        intersectionObserver.observe(section);
      });
    };

    onMounted(() => {
      handleScrollAnimations();
      handleActiveSection();
      window.addEventListener('scroll', handleScrollAnimations);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScrollAnimations);
    });

    return {
      activeSection,
    };
  },
  methods: {
    scrollTo(id: string) {
      const el = document.querySelector(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
});
</script>
