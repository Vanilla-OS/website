<template>
  <section class="hero hero--big hero--no-margin">
    <div class="hero-wrapper container">
      <img class="hero-image onFocus no-dark" data-focus-class="fadeInLeft"
        src="/assets/images/backgrounds/vos-orchid-laptop-frame.svg" alt="Vanilla OS 2 Orchid" />
      <img class="hero-image onFocus on-dark" data-focus-class="fadeInLeft"
        src="/assets/images/backgrounds/vos-orchid-laptop-frame-dark.svg" alt="Vanilla OS 2 Orchid" />
      <article class="hero-content">
        <header class="hero-heading">
          <h2>Vanilla OS <span>{{$t('home.hero.heading')}}</span></h2>
        </header>
        <div class="hero-footer">
          <div class="flexList">
            <router-link :to="{ name: 'download-orchid-stable' }" class="btn btn--primary btn--big">
              <span class="material-symbols-outlined">file_download</span>
              <span>{{$t('components.downloadButton')}}</span>
            </router-link>
            <div class="text text--dimmed">
              <small>{{$t('home.hero.installationInfo')}}
                <a href="https://docs.vanillaos.org/handbook/en/installation" target="_blank">
                  {{$t('home.hero.installationLink')}}
                </a>
              </small>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>

  <nav class="navigationBar" aria-label="go to sections">
    <h2 class="text text--dimmed" aria-labelledby="">{{$t('home.navigation.title')}}</h2>
    <ul>
      <li :class="{ 'active': activeSection === 'work' }">
        <button @click="scrollTo('#work')">{{$t('home.navigation.work')}}</button>  
      </li>
      <li :class="{ 'active': activeSection === 'play' }">
        <button @click="scrollTo('#play')">{{$t('home.navigation.play')}}</button>
      </li>
      <li :class="{ 'active': activeSection === 'develop' }">
        <button @click="scrollTo('#develop')">{{$t('home.navigation.develop')}}</button>
      </li>
      <li :class="{ 'active': activeSection === 'access' }">
        <button @click="scrollTo('#access')">{{$t('home.navigation.access')}}</button>
      </li>
    </ul>
    <h2 class="text text--dimmed" aria-labelledby="">{{$t('home.navigation.isTitle')}}</h2>
    <ul>
      <li :class="{ 'active': activeSection === 'solid' }">
        <button @click="scrollTo('#solid')">{{$t('home.navigation.solid')}}</button>
      </li>
      <li :class="{ 'active': activeSection === 'versatile' }">
        <button @click="scrollTo('#versatile')">{{$t('home.navigation.versatile')}}</button>
      </li>
    </ul>
  </nav>

  <section class="hero hero--inverted hero--big" id="work">
    <div class="hero-wrapper container">
      <img class="hero-image onFocus" data-focus-class="fadeInRight" src="/assets/images/backgrounds/rnote.svg"
        alt="Work in an efficient workspace." />
      <article class="hero-content">
        <header class="hero-heading">
          <h2 class="color--work-1">{{$t('home.work.title')}}</h2>
          <b class="color--work-2">{{$t('home.work.subtitle')}}</b>
        </header>
        <div class="flexList">
          <div class="text text--spaced">
            <p>{{$t('home.work.description1')}}</p>            
            <p>{{$t('home.work.description2')}}</p>
            <p>{{$t('home.work.description3')}}</p>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="hero hero--big hero--gn-purple hero--clipped" id="play">
    <div class="hero-back">
      <video autoplay muted loop playsinline>
        <source src="/assets/videos/ron-lach-friends-playing-on-computer.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="hero-wrapper container">
      <img class="hero-image onFocus" data-focus-class="fadeInZoom" src="/assets/images/backgrounds/popular-games.svg"
        alt="Play your favorite video games." />
      <article class="hero-content">
        <header class="hero-heading">
          <h2 class="color--play-1">{{$t('home.play.title')}}</h2>
          <b class="color--play-2">{{$t('home.play.subtitle')}}</b>
        </header>
        <div class="flexList">
          <div class="text text--spaced">
            <p>{{$t('home.play.description1')}}</p>
            <p>{{$t('home.play.description2')}}</p>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="hero hero--inverted hero--big" id="develop">
    <div class="hero-wrapper container">
      <img class="hero-image onFocus" data-focus-class="fadeInRight" src="/assets/images/backgrounds/apx-console.svg"
        alt="Develop with maximum flexibility." />
      <article class="hero-content">
        <header class="hero-heading">
          <h2 class="color--develop-1">{{$t('components.develop')}}</h2>
          <b class="color--develop-2">{{$t('home.develop.subtitle')}}</b>
        </header>
        <div class="flexList">
          <div class="text text--spaced">
            <p>{{$t('home.develop.description1')}}</p>
            <p>{{$t('home.develop.description2')}}</p>
            <p>{{$t('home.develop.description3')}}</p>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="hero hero--big hero--bg-center hero--extra-margin" id="access">
    <article class="hero-wrapper container">
      <img class="hero-image onFocus" data-focus-class="fadeIn" src="/assets/images/backgrounds/apps-overview.png"
        alt="Access the largest set of applications." />
      <div class="hero-content">
        <header class="hero-heading">
          <h2 class="color--access-1">{{$t('home.access.title')}}</h2>
          <b class="color--access-2">{{$t('home.access.subtitle')}}</b>
        </header>
      </div>
    </article>
  </section>

  <section class="hero hero--big" id="solid">
    <div class="hero-wrapper container">
      <img class="hero-image onFocus" data-focus-class="fadeInLeft" src="/assets/images/backgrounds/solid-circuit.svg"
        alt="Solid as a rock." />
      <article class="hero-content">
        <header class="hero-heading">
          <h2 class="color--solid-1">{{$t('home.solid.title')}}</h2>
          <b class="color--solid-2">{{$t('home.solid.subtitle')}}</b>
        </header>
        <div class="flexList">
          <div class="text text--spaced">
            <p>{{$t('home.solid.description1')}}</p>
            <p>{{$t('home.solid.description2')}}</p>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="hero hero--inverted hero--big" id="versatile">
    <div class="hero-wrapper container">
      <img class="hero-image onFocus no-dark" data-focus-class="fadeInRight"
        src="/assets/images/backgrounds/vib-recipe.svg" alt="Solid as a rock." />
      <img class="hero-image onFocus on-dark" data-focus-class="fadeInRight"
        src="/assets/images/backgrounds/vib-recipe-dark.svg" alt="Solid as a rock." />
      <article class="hero-content">
        <header class="hero-heading">
          <h2 class="color--versatile-1">{{$t('home.versatile.title')}}</h2>
          <b class="color--versatile-2">{{$t('home.versatile.subtitle')}}</b>
        </header>
        <div class="flexList">
          <div class="text text--spaced">
            <p>{{$t('home.versatile.description1')}}</p>
            <p>{{$t('home.versatile.description2')}}</p>
            <p>{{$t('home.versatile.description3')}}</p>
            <router-link :to="{ name: 'roadmap' }" class="btn btn--link btn--link-2 btn--inline">
              <span>{{$t('home.versatile.link')}}</span>
              <span class="material-symbols-outlined">open_in_new</span>
            </router-link>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="container">
    <div class="hero hero--vertical hero--allow-scroll">
      <div class="text text--rich">
        <h2>{{$t('home.knowMore.title')}}</h2>
      </div>
      <button @click="toggleInfo" class="btn btn--primary">
        <span class="material-symbols-outlined" v-if="!showInfo">keyboard_arrow_up</span>
        <span class="material-symbols-outlined" v-else>keyboard_arrow_up</span>
        <span v-if="!showInfo && !showSorry">{{$t('home.knowMore.message1')}}</span>
        <span v-if="showInfo && !showSorry">{{$t('home.knowMore.message2')}} 😡</span>
        <span v-if="showSorry">{{$t('home.knowMore.message3')}} 😒</span>
      </button>
      <div class="spacer"></div>
      <div class="flexList" v-if="showInfo">
        <div class="flexGrid flexGrid--2">
          <card v-for="(item, index) in info" :key="index" :item="item" />
        </div>
        <router-link :to="{ name: 'nerd-info' }" class="btn btn--link btn--link-2 btn--inline">
          <span>{{$t('home.stillNotEnough')}}</span>
          <span class="material-symbols-outlined">arrow_forward</span>
        </router-link>
      </div>
      <div class="spacer"></div>
    </div>
  </section>


  <section class="container">
    <header class="text text--rich">
      <h2>{{$t('home.featuredOn.title')}}</h2>
    </header>
    <div class="spacer"></div>
    <div class="flexGrid flexGrid--3">
      <card v-for="(item, index) in medias" :key="index" :item="item" :class="item.extraClasses">
        <btn-adv v-if="item.type === 'adv'" :icon="item" :link="item">{{ item.btn }}</btn-adv>
      </card>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';

export default defineComponent({
  name: 'home',
  data() {
    return {
      showInfo: false,
      showSorry: false,
      info: [
          {
              icon: 'security',
              title: this.$t('home.knowMore.immutableButCustomizable.title'),
              description: this.$t('home.knowMore.immutableButCustomizable.description'),
          },
          {
              icon: 'hotel_class',
              title: this.$t('home.knowMore.stableBeyondBelief.title'),
              description: this.$t('home.knowMore.stableBeyondBelief.description'),
          },
          {
              icon: 'update',
              title: this.$t('home.knowMore.smartBackgroundUpdates.title'),
              description: this.$t('home.knowMore.smartBackgroundUpdates.description'),
          },
          {
              icon: 'verified',
              title: this.$t('components.startupVerified'),
              description: this.$t('home.knowMore.startupVerified.description'),
          },
          {
              icon: 'home',
              title: this.$t('home.knowMore.compatibleWithYou.title'),
              description: this.$t('home.knowMore.compatibleWithYou.description'),
          },
          {
              icon: 'lock',
              title: this.$t('home.knowMore.privacyFirst.title'),
              description: this.$t('home.knowMore.privacyFirst.description'),
          },
          {
              icon: 'accessibility_new',
              title: this.$t('home.knowMore.accessibleToEveryone.title'),
              description: this.$t('home.knowMore.accessibleToEveryone.description'),
          },
          {
              icon: 'school',
              title: this.$t('home.knowMore.understandable.title'),
              description: this.$t('home.knowMore.understandable.description'),
          }
      ],
      medias: [
        {
          icon: '/assets/images/media/zdnet.svg',
          iconAsImage: true,
          imageClasses: ['img--white-on-dark'],
          to: 'https://www.zdnet.com/article/vanilla-os-offers-a-new-take-on-security-for-the-linux-desktop/',
          extLink: true,
          type: "clickable",
          description: this.$t('home.featuredOn.articles.description1'),
        },
        {
          icon: '/assets/images/media/the_register.svg',
          iconAsImage: true,
          imageClasses: ['img--white-on-dark'],
          to: 'https://www.theregister.com/2023/01/03/vanilla_os_2210/',
          extLink: true,
          type: "clickable",
          description: this.$t('home.featuredOn.articles.description2'),
        },
        {
          icon: '/assets/images/media/techrepublic-logo.svg',
          iconAsImage: true,
          imageClasses: ['img--white-on-dark'],
          to: 'https://www.techrepublic.com/article/vanilla-os-linux-desktop/',
          extLink: true,
          type: "clickable",
          description: this.$t('home.featuredOn.articles.description3'),
        },
        {
          icon: '/assets/images/media/omg-linux.png',
          iconAsImage: true,
          imageClasses: ['img--white-on-dark'],
          to: 'https://www.omglinux.com/vanilla-os-first-release-download/',
          extLink: true,
          type: "clickable",
          description: this.$t('home.featuredOn.articles.description4'),
        },
        {
          icon: '/assets/images/media/phoronix.png',
          iconAsImage: true,
          imageClasses: ['img--white-on-dark'],
          to: 'https://www.phoronix.com/news/Vanilla-OS-2.0-Debian',
          extLink: true,
          type: "clickable",
          description: this.$t('home.featuredOn.articles.description5'),
        },
        {
          icon: '/assets/images/media/itsfoss-logo.webp',
          iconAsImage: true,
          imageClasses: ['img--white-on-dark'],
          to: 'https://news.itsfoss.com/vanilla-os-beta/',
          extLink: true,
          type: "clickable",
          description: this.$t('home.featuredOn.articles.description6'),
        },
        {
          icon: '/assets/images/media/muo-logo-full-colored-light.svg',
          iconAsImage: true,
          imageClasses: ['img--white-on-dark'],
          to: 'https://www.makeuseof.com/vanilla-os-immutable-linux-distro/',
          extLink: true,
          type: "clickable",
          description: this.$t('home.featuredOn.articles.description7'),
        },
        {
          icon: '/assets/images/media/ha-logo-2x.png',
          iconAsImage: true,
          imageClasses: ['img--white-on-dark'],
          to: 'https://www.hostingadvice.com/blog/vanillaos-immutable-linux-distribution/',
          extLink: true,
          type: "clickable",
          description: this.$t('home.featuredOn.articles.description8'),
        },
        {
          to: { name: 'get-involved-spread' },
          type: 'adv',
          icon: 'how_to_reg',
          title: this.$t('home.wantToKnowMore'),
          description: this.$t('home.spreadTheWord'),
          btn: this.$t('home.readMore'),
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
                  el.style.filter = 'blur(0)';
                  break;
                case 'fadeInZoom':
                  el.style.opacity = '1';
                  el.style.transform = 'scale(1)';
                  el.style.filter = 'blur(0)';
                  break;
                case 'fadeInLeft':
                  el.style.opacity = '1';
                  el.style.transform = 'translateX(0)';
                  el.style.filter = 'blur(0)';
                  break;
                case 'fadeInRight':
                  el.style.opacity = '1';
                  el.style.transform = 'translateX(0)';
                  el.style.filter = 'blur(0)';
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
                  el.style.filter = 'blur(10px)';
                  break;
                case 'fadeInZoom':
                  el.style.opacity = '0';
                  el.style.transform = 'scale(0.95)';
                  el.style.filter = 'blur(10px)';
                  break;
                case 'fadeInLeft':
                  el.style.opacity = '0';
                  el.style.transform = 'translateX(-40px)';
                  el.style.filter = 'blur(10px)';
                  break;
                case 'fadeInRight':
                  el.style.opacity = '0';
                  el.style.transform = 'translateX(40px)';
                  el.style.filter = 'blur(10px)';
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

    const animate = (ctx: CanvasRenderingContext2D, snowflakes: any[], canvas: HTMLCanvasElement, maxFlakes: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (snowflakes.length < maxFlakes && Math.random() < 0.05) {
        snowflakes.push({
          x: Math.random() * canvas.width,
          y: 0,
          radius: Math.random() * 7 + 3,
          speed: Math.random() * 0.5 + 0.3,
          opacity: Math.random() * 0.6 + 0.4
        });
      }
      snowflakes.forEach(flake => {
        ctx.save();
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          ctx.moveTo(flake.x, flake.y);
          ctx.lineTo(
            flake.x + Math.cos(Math.PI * 2 * i / 6) * flake.radius,
            flake.y + Math.sin(Math.PI * 2 * i / 6) * flake.radius
          );
        }
        ctx.strokeStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
        flake.x += Math.sin(flake.y / 50) * 0.3;
        flake.y += flake.speed * 0.5;
        if (flake.y > canvas.height) {
          flake.y = 0;
          flake.x = Math.random() * canvas.width;
        }
      });
      requestAnimationFrame(() => animate(ctx, snowflakes, canvas, maxFlakes));
    };

    onMounted(() => {
      handleScrollAnimations();
      handleActiveSection();
      window.addEventListener('scroll', handleScrollAnimations);

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }
      if (new Date().getMonth() === 11 && new Date().getDate() >= 23 && new Date().getDate() <= 31) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('snow');
        wrapper.style.position = 'fixed';
        wrapper.style.top = '0';
        wrapper.style.left = '0';
        wrapper.style.width = '100%';
        wrapper.style.height = '100px';
        wrapper.style.pointerEvents = 'none';
        wrapper.style.zIndex = '9999';
        wrapper.style.maskImage = 'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 35px)';
        wrapper.style.transition = 'opacity 0.3s ease-in-out';
        const canvas = document.createElement('canvas');
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.width = window.innerWidth * 2;
        canvas.height = 200;
        wrapper.appendChild(canvas);
        document.body.appendChild(wrapper);
        const ctx = canvas.getContext('2d');
        const snowflakes: any[] = [];
        const getMaxFlakes = () => {
          return window.innerWidth <= 800 ? 25 : 50;
        };
        let maxFlakes = getMaxFlakes();
        if (ctx) {
          animate(ctx, snowflakes, canvas, maxFlakes);
        }
        window.addEventListener('resize', () => {
          canvas.width = window.innerWidth * 2;
          canvas.height = 200;
          maxFlakes = getMaxFlakes();
          if (snowflakes.length > maxFlakes) {
            snowflakes.length = maxFlakes;
          }
        });
        window.addEventListener('scroll', () => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          if (scrollTop > 100) {
            wrapper.style.opacity = Math.max(0, 1 - (scrollTop - 100) / 200).toString();
          } else {
            wrapper.style.opacity = '1';
          }
        });
      }
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
    toggleInfo() {
      if (this.showInfo) {
        this.showSorry = true;
        this.showInfo = false;
        setTimeout(() => {
          this.showSorry = false;
        }, 1500);
      } else {
        this.showInfo = true;
      }
    },
  },
});
</script>