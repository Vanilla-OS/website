<template>
  <section class="hero hero--big hero--no-margin">
    <div class="hero-wrapper container">
      <img class="hero-image onFocus no-dark" data-focus-class="fadeInLeft"
        src="/assets/images/backgrounds/vos-orchid-laptop-frame.svg" alt="Vanilla OS 2 Orchid" />
      <img class="hero-image onFocus on-dark" data-focus-class="fadeInLeft"
        src="/assets/images/backgrounds/vos-orchid-laptop-frame-dark.svg" alt="Vanilla OS 2 Orchid" />
      <article class="hero-content">
        <header class="hero-heading">
          <h2>Vanilla OS <span>is your next Operating System.</span></h2>
        </header>
        <div class="hero-footer">
          <div class="flexList">
            <router-link :to="{ name: 'download' }" class="btn btn--primary btn--big">
              <span class="mdi material-icons-outlined">file_download</span>
              <span>Download Now</span>
            </router-link>
            <div class="text text--dimmed">
              <small>Vanilla OS works out of the box on a large set of devices,
                <a href="https://docs.vanillaos.org/handbook/en/installation" target="_blank">
                  learn how to install it.
                </a>
              </small>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>

  <nav class="navigationBar" aria-label="go to sections">
    <h2 class="text text--dimmed" aria-labelledby=""> Vanilla OS is</h2>
    <ul>
      <li :class="{ 'active': activeSection === 'work' }">
        <button @click="scrollTo('#work')">Work</button>
      </li>
      <li :class="{ 'active': activeSection === 'play' }">
        <button @click="scrollTo('#play')">Play</button>
      </li>
      <li :class="{ 'active': activeSection === 'develop' }">
        <button @click="scrollTo('#develop')">Develop</button>
      </li>
      <li :class="{ 'active': activeSection === 'access' }">
        <button @click="scrollTo('#access')">Access</button>
      </li>
      <li :class="{ 'active': activeSection === 'solid' }">
        <button @click="scrollTo('#solid')">Solid</button>
      </li>
      <li :class="{ 'active': activeSection === 'versatile' }">
        <button @click="scrollTo('#versatile')">Versatile</button>
      </li>
    </ul>
  </nav>

  <section class="hero hero--inverted hero--big" id="work">
    <div class="hero-wrapper container">
      <img class="hero-image onFocus" data-focus-class="fadeInRight" src="/assets/images/backgrounds/rnote.svg"
        alt="Work in an efficient workspace." />
      <article class="hero-content">
        <header class="hero-heading">
          <h2 class="color--work-1">Work</h2>
          <b class="color--work-2">in an efficient workspace.</b>
        </header>
        <div class="flexList">
          <div class="text text--spaced">
            <p>Vanilla OS is designed to be a reliable and productive operating system for your daily work. </p>
            <p>The desktop environment is perfect for your daily tasks, thanks to its clean and intuitive interface.
              Everything is setup so that you can start working, and focus on what matters.</p>
            <p>Vanilla OS is ready to meet your needs whether you are a developer, designer, or student, thanks to a wide
              range of applications.</p>
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
          <h2 class="color--play-1">Play</h2>
          <b class="color--play-2">your favorite video games.</b>
        </header>
        <div class="flexList">
          <div class="text text--spaced">
            <p>We all need some fun time after a long week.
              From the most niche of indie titles to the largest e-sports games in the market, Vanilla OS is your gaming
              partner with support for the industry's most popular game launchers and peripherals.</p>
            <p>Embark on new adventures, discover new worlds, or simply relax in your favorite games with zero effort.
              Just install your favorite games, and we handle the rest.</p>
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
          <h2 class="color--develop-1">Develop</h2>
          <b class="color--develop-2">with maximum flexibility.</b>
        </header>
        <div class="flexList">
          <div class="text text--spaced">
            <p>No matter what your development needs are, Vanilla OS is the optimal choice because it provides access to
              the widest range of tooling options.</p>
            <p>Apx is a tool that allows you to generate work environments based on any Linux distribution and seamlessly
              integrates them with the system in a convenient way, enabling you to leverage the full potential of all
              distributions directly on Vanilla OS.</p>
            <p>Depending on your needs, you can create your own work environments and share them with colleagues and
              friends. </p>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="hero hero--big hero--bg-center hero--extra-margin" id="access">
    <article class="hero-wrapper container">
      <img class="hero-image onFocus" data-focus-class="fadeInZoom" src="/assets/images/backgrounds/apps-overview.png"
        alt="Access the largest set of applications." />
      <div class="hero-content">
        <header class="hero-heading">
          <h2 class="color--access-1">Access</h2>
          <b class="color--access-2">the largest set of applications.</b>
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
          <h2 class="color--solid-1">Solid</h2>
          <b class="color--solid-2">as a rock.</b>
        </header>
        <div class="flexList">
          <div class="text text--spaced">
            <p>Vanilla OS is an extremely solid and reliable operating system. This is all thanks to our tool called
              ABRoot, which guarantees immutability and atomicity on your system in a seamless way.</p>
            <p>ABRoot allows you to add additional packages to your system in a safe manner, always providing you with a
              working and bootable environment.</p>
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
          <h2 class="color--versatile-1">Versatile</h2>
          <b class="color--versatile-2">on every occasion.</b>
        </header>
        <div class="flexList">
          <div class="text text--spaced">
            <p>Vanilla OS is extremely versatile thanks to its utilization of OCI images. OCI images allow you to
              configure your system to your specific needs, while still having a stable environment.</p>
            <p>Vib is a tool to create OCI images for Vanilla OS. It allows you to build upon our core image, giving you
              the option to add a variety of customization options, packages, and modules.</p>
            <p>It is not only limited to our image however, you can utilize an image based on any other Linux distribution
              instead, providing more versatility.</p>
            <router-link :to="{ name: 'roadmap' }" class="btn btn--link btn--link-2 btn--inline">
              <span>Starting from Orchid</span>
              <span class="mdi material-icons-outlined">open_in_new</span>
            </router-link>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="container">
    <div class="hero hero--vertical hero--allow-scroll">
      <div class="text text--rich">
        <h2>Want to know more?</h2>
      </div>
      <button @click="toggleInfo" class="btn btn--primary">
        <span class="mdi material-icons-outlined" v-if="!showInfo">expand_more</span>
        <span class="mdi material-icons-outlined" v-else>expand_less</span>
        <span v-if="!showInfo && !showSorry">Show me more</span>
        <span v-if="showInfo && !showSorry">Stop showing more 😡</span>
        <span v-if="showSorry">Ok, sorry 😒</span>
      </button>
      <div class="spacer"></div>
      <div class="flexList" v-if="showInfo">
        <div class="flexGrid flexGrid--2">
          <card v-for="(item, index) in info" :key="index" :item="item" />
        </div>
        <router-link :to="{ name: 'nerd-info' }" class="btn btn--link btn--link-2 btn--inline">
          <span>Still not enough?</span>
          <span class="mdi material-icons-outlined">arrow_forward</span>
        </router-link>
      </div>
      <div class="spacer"></div>
    </div>
  </section>


  <section class="container">
    <header class="text text--rich">
      <h2>Featured on</h2>
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
          title: 'Immutable but Customizable',
          description: 'Vanilla OS is an immutable operating system, meaning that its core components are resistant\
          to changes, keeping the system stable and reliable.\
          However, you\'ll probably never notice that, because Vanilla OS is also highly customizable, you can\
          still install extra software with Flatpak, VSO, or even building it by yourself like you would\
          do on any normal operating system. You can also install software from any Linux distribution.',
        },
        {
          icon: 'hotel_class',
          title: 'Stable Beyond Belief',
          description: 'Vanilla OS develops and uses many technologies to ensure that your system is always stable and reliable\
          in any situation, whatever your needs are.\
          You don\'t have to worry about your system breaking after an update, or your system not booting\
          when you need it the most. Vanilla OS performs atomic updates, meaning that changes are applied all at once\
          or not at all, without leaving your system in a broken state.',
        },
        {
          icon: 'update',
          title: 'Smart Background Updates',
          description: 'Vanilla OS performs background updates in a smart way by detecting whether your device is idle.\
          That way, you don\'t have to worry about your system being slow or\
          unresponsive during your routine. You\'ll get all the new features and bug fixes without even noticing it\
          until you reboot your system.',
        },
        {
          icon: 'verified',
          title: 'Startup Verified',
          description: 'Vanilla OS is verified at startup, meaning that that your system is guaranteed\
          to be in a good state before you start using it.\
          This is done by checking the integrity of the system and its components at startup, and by\
          ensuring that nothing has been tampered with. If something is wrong, the system will\
          discourage you from using it, suggesting you to revert to a previous working state.',
        },
        {
          icon: 'home',
          title: 'Compatible With You',
          description: 'Vanilla OS is compatible with all your favorite apps, whether you want to listen to\
          music with Spotify, play your favorite games on Steam, or surf the web with Google Chrome,\
          you can do it all on Vanilla OS as you would do on any other operating system.\
          Vanilla OS is also compatible with all your favorite peripherals like printers, scanners, and more.',
        },
        {
          icon: 'lock',
          title: 'Privacy First',
          description: 'Vanilla OS is designed with privacy in mind, it doesn\'t collect any data about you,\
          and it doesn\'t send any data to third parties.\
          We take your privacy very seriously, and we believe that you should be in control of your data,\
          not us or anyone else. Everything we do is open source, so you can verify that we\'re not doing\
          anything malicious.',
        },
        {
          icon: 'accessibility_new',
          title: 'Accessible to Everyone',
          description: 'Vanilla OS is designed to be easy and accessible to everyone. Accessibility is\
          a first class citizen in Vanilla OS, and we\'re constantly working to improve it.\
          We believe that everyone should be able to use a computer, no matter your abilities, you\
          will find yourself at home on Vanilla OS.',
        },
        {
          icon: 'school',
          title: 'Understandable',
          description: 'Vanilla OS is designed to be easy to understand, you don\'t need to be a\
          computer expert to use it, but of course, if you are, you\'ll find yourself at home.\
          We write all our documentation in a way that is easy to understand, and our community\
          is always ready to help you. We also provide enterprise support for\
          special needs.',
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
          description: 'If you\'re looking for a new operating system that takes security seriously… Vanilla OS might be just the ticket.',
        },
        {
          icon: '/assets/images/media/the_register.svg',
          iconAsImage: true,
          imageClasses: ['img--white-on-dark'],
          to: 'https://www.theregister.com/2023/01/03/vanilla_os_2210/',
          extLink: true,
          type: "clickable",
          description: 'Vanilla OS is going for bigger, bolder improvement to the Linux desktop… it could prove transformative to the Linux industry… ',
        },
        {
          icon: '/assets/images/media/techrepublic-logo.svg',
          iconAsImage: true,
          imageClasses: ['img--white-on-dark'],
          to: 'https://www.techrepublic.com/article/vanilla-os-linux-desktop/',
          extLink: true,
          type: "clickable",
          description: 'This will be a project you’ll want to keep a close watch on… I think Vanilla OS could be a real game-changer.',
        },
        {
          icon: '/assets/images/media/omg-linux.png',
          iconAsImage: true,
          imageClasses: ['img--white-on-dark'],
          to: 'https://www.omglinux.com/vanilla-os-first-release-download/',
          extLink: true,
          type: "clickable",
          description: 'Far more than “just another” Ubuntu fork, this distro takes a bold new approach to desktop computing using an immutable file system.',
        },
        {
          icon: '/assets/images/media/phoronix.png',
          iconAsImage: true,
          imageClasses: ['img--white-on-dark'],
          to: 'https://www.phoronix.com/news/Vanilla-OS-2.0-Debian',
          extLink: true,
          type: "clickable",
          description: 'Vanilla OS is an immutable and atomic version of Ubuntu Linux that aims to provide a pleasant Linux desktop experience.',
        },
        {
          icon: '/assets/images/media/itsfoss-logo.webp',
          iconAsImage: true,
          imageClasses: ['img--white-on-dark'],
          to: 'https://news.itsfoss.com/vanilla-os-beta/',
          extLink: true,
          type: "clickable",
          description: 'Being a new distro, Vanilla OS has a well-equipped feature set that you might like.',
        },
        {
          icon: '/assets/images/media/muo-logo-full-colored-light.svg',
          iconAsImage: true,
          imageClasses: ['img--white-on-dark'],
          to: 'https://www.makeuseof.com/vanilla-os-immutable-linux-distro/',
          extLink: true,
          type: "clickable",
          description: 'Vanilla OS takes Ubuntu and turns it into an immutable desktop Linux distro, free from all of Canonical\'s recent changes to the OS.',
        },
        {
          icon: '/assets/images/media/ha-logo-2x.png',
          iconAsImage: true,
          imageClasses: ['img--white-on-dark'],
          to: 'https://www.hostingadvice.com/blog/vanillaos-immutable-linux-distribution/',
          extLink: true,
          type: "clickable",
          description: 'For those who want a simple, immutable, and customizable experience, Vanilla OS steps into the spotlight.',
        },
        {
          to: { name: 'get-involved-spread' },
          type: 'adv',
          icon: 'how_to_reg',
          title: 'Spread the word',
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
