<template>
  <div class="flexList anim--fadeIn">
    <div class="text text--rich">
      <p>
        Vanilla OS is an Open Source project that is maintained by
        <a href="//fabricators.ltd">fabricators.ltd</a> and a team of
        volunteers. We are a diverse group of people from all over the world,
        with a wide range of skills and backgrounds. We are passionate about
        making Vanilla OS the best it can be.
      </p>
    </div>
    <div class="flexGrid">
      <card v-for="(item, index) in teamItems" :key="index" :item="item">
        <image-card>
          <img :src="item.image" :alt="item.title" />
        </image-card>
        <badges :items="item.badges" />
      </card>
    </div>
    <div class="spacer"></div>
    <div class="text text--rich">
      <p>
        There are many more people who have contributed to Vanilla OS. A full
        list of contributors can be
        <router-link :to="{ name: 'team-contributors' }">found here</router-link
        >.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "team",
  computed: {
    teamItems() {
      const team = [
        {
          name: "Mirko Brombin",
          description: "Founder, Head of UI/UX Design and Core Developer",
          lit: true,
          fabricators: true,
          image: "/assets/images/pics/mirkobrombin.jpeg",
          links: {
            githubUsername: "mirkobrombin",
            twitterUsername: "brombinmirko",
            githubSponsors: true,
            mastodonLink: "https://mastodon.social/@mirkobrombin",
            website: "https://mirko.pm/",
            externalSponsors: [
              {
                link: "https://patreon.com/mirkobrombin",
                text: "Patreon",
              },
            ],
          },
        },
        {
          name: "Pietro Di Caprio",
          description: "Co-Founder and Public Relations Manager",
          fabricators: true,
          image: "/assets/images/pics/pietrodicaprio.jpeg",
          links: {
            githubUsername: "pietrodicaprio",
            githubSponsors: true,
            twitterUsername: "pietrodc0",
            mastodonLink: "https://mastodon.social/@pietrodc0",
          },
        },
        {
          name: "Luca di Maio",
          description: "Co-Founder and Software Engineer",
          image: "/assets/images/pics/89luca89.jpeg",
          links: {
            githubUsername: "89luca89",
            twitterUsername: "LucaDiMaio11",
            mastodonLink: "https://fosstodon.org/@89luca89",
          },
        },
        {
          name: "Mateus B. Melchiades",
          description:
            "Software Engineer, Core Developer and Contributors Leader",
          lit: true,
          image: "/assets/images/pics/matbme.jpeg",
          links: {
            githubUsername: "matbme",
            mastodonLink: "https://fosstodon.org/@matbme",
          },
        },
        {
          name: "axtlos",
          description: "Software Engineer and Core Developer",
          lit: true,
          image: "/assets/images/pics/axtloss.jpeg",
          links: {
            githubUsername: "axtloss",
            mastodonLink: "https://fosstodon.org/@axtlos",
            website: "https://axtlos.neocities.org/",
          },
        },
        {
          name: "Hari Rana",
          description: "Community Manager and UX Researcher",
          fabricators: true,
          image: "/assets/images/pics/theevilskeleton.png",
          links: {
            githubUsername: "TheEvilSkeleton",
            githubSponsors: true,
            twitterUsername: "JaakunaGaikotsu",
            mastodonLink: "https://social.treehouse.systems/@TheEvilSkeleton",
            website: "https://tesk.page/",
            externalSponsors: [
              {
                link: "https://ko-fi.com/theevilskeleton",
                text: "Ko-fi",
              },
              {
                link: "https://liberapay.com/TheEvilSkeleton",
                text: "Liberapay",
              },
            ],
          },
        },
        {
          name: "Muqtadir",
          description: "Software Engineer and UI Designer",
          image: "/assets/images/pics/muqtxdir.jpeg",
          links: {
            githubUsername: "Muqtxdir",
            twitterUsername: "muqtxdir",
          },
        },
        {
          name: "K.B.Dharun Krishna",
          description: "Documentation and Localization Team Lead",
          image: "/assets/images/pics/kbdharun.jpeg",
          links: {
            githubUsername: "kbdharun",
            twitterUsername: "kbdharun",
            mastodonLink: "https://mastodon.social/@kbdharunkrishna",
            githubSponsors: true,
            website: "https://kbdharun.dev/",
          },
        },
        {
          name: "Dallas Strouse",
          description: "Website Accessibility",
          image: "/assets/images/pics/orowith2os.png",
          links: {
            githubUsername: "orowith2os",
            mastodonLink: "https://tech.lgbt/@orowith2os",
            website: "https://orowith2os.gitlab.io/",
          },
        },
        {
          name: "Tau",
          description: "Bugfixes and User Support",
          image: "/assets/images/pics/taukakao.jpg",
          links: {
            githubUsername: "taukakao",
          },
        },
        {
          name: "Jarred Wilson",
          description: "Software Engineer and Maintainer",
          image: "/assets/images/pics/jardon.jpg",
          links: {
            githubUsername: "jardon",
          },
        },
        {
          name: "nellfs",
          description: "Software Engineer",
          image: "/assets/images/pics/nellfs.png",
          links: {
            githubUsername: "nellfs",
            mastodonLink: "https://fosstodon.org/@nellfs",
            githubSponsors: true,
            externalSponsors: [
              {
                link: "https://ko-fi.com/nellfs",
                text: "Ko-fi",
              },
            ],
          },
        },
        {
          name: "Muhammad Salman",
          description: "Software Engineer and UI Designer",
          image: "/assets/images/pics/muhdsalm.png",
          links: {
            githubUsername: "muhdsalm",
          },
        },
        {
          name: "Gabriel Cozma",
          description: "Front-End Engineer",
          image: "/assets/images/pics/gabs.webp",
          fabricators: true,
          links: {
            githubUsername: "GabsEdits",
            website: "https://gxbs.dev",
            githubSponsors: true,
            mastodonLink: "https://vmst.io/@gabs",
            externalSponsors: [
              {
                link: "https://ko-fi.com/gxbsdev",
                text: "Ko-fi",
              },
            ],
          },
        },
      ];

      const createFooterAction = (icon: string, url: string) => ({
        title: "",
        icon,
        iconPack: "fa",
        onClick: () => window.open(url, "_blank"),
      });

      const createDropdownItem = (
        href: string,
        iconClass: string,
        text: string,
      ) => {
        const link = document.createElement("a");
        link.href = href;
        link.target = "_blank";
        link.className = "dropdown-item";
        link.innerHTML = `<i class="${iconClass}" style="margin-right: 5px;"></i>${text}`;
        return link;
      };

      const createDropdown = (member: any, event: MouseEvent) => {
        const dropdown = document.createElement("div");
        dropdown.className = "dropdown";
        dropdown.id = "support-dropdown";
        dropdown.style.position = "absolute";
        dropdown.style.bottom = "4rem";
        dropdown.style.right = "1rem";
        dropdown.style.display = "none";

        const githubLink = createDropdownItem(
          `https://github.com/sponsors/${member.links.githubUsername}`,
          "fa-brands fa-github",
          "GitHub Sponsors",
        );

        dropdown.appendChild(githubLink);

        member.links.externalSponsors?.forEach((sponsor: any) => {
          const externalLink = createDropdownItem(
            sponsor.link,
            "fa-solid fa-heart",
            sponsor.text,
          );
          dropdown.appendChild(externalLink);
        });

        const container = (event.target as HTMLElement).closest(".card") as HTMLElement;
        container.style.position = "relative";
        const existingDropdown = container.querySelector("#support-dropdown");
        if (existingDropdown) {
          existingDropdown.remove();
        } else {
          container.appendChild(dropdown);
          dropdown.style.display = "flex";
        }
      };

      const teamItems = team.map((member) => {
        const item = {
          to: { name: "get-involved-funding" },
          image: member.image,
          title: member.name,
          description: member.description,
          footerActions: [] as {
            title: string;
            icon: string;
            iconPack: string;
            onClick: () => void;
          }[],
          badges: [] as { text: string; color?: string }[],
        };

        if (member.links.githubUsername) {
          item.footerActions.push(createFooterAction("fa-brands fa-github", `https://github.com/${member.links.githubUsername}`));
        }
        if (member.links.twitterUsername) {
          item.footerActions.push(createFooterAction("fa-brands fa-twitter", `https://twitter.com/${member.links.twitterUsername}`));
        }
        if (member.links.mastodonLink) {
          item.footerActions.push(createFooterAction("fa-brands fa-mastodon", member.links.mastodonLink));
        }
        if (member.links.website) {
          item.footerActions.push(createFooterAction("fa-solid fa-link", member.links.website));
        }

        if (member.links.githubSponsors && member.links.externalSponsors) {
          item.footerActions.push({
            title: "Donate",
            icon: "fa-solid fa-heart",
            iconPack: "fa",
            onClick: (event: MouseEvent) => createDropdown(member, event),
          });
        } else if (member.links.githubSponsors) {
          item.footerActions.push({
            title: "Donate",
            icon: "fa-solid fa-heart",
            iconPack: "fa",
            onClick: () => {
              window.open(
                `https://github.com/sponsors/${member.links.githubUsername}`,
                "_blank",
              );
            },
          });
        } else if (member.links.externalSponsors) {
          if (member.links.externalSponsors.length === 1) {
            item.footerActions.push({
              title: "Donate",
              icon: "fa-solid fa-heart",
              iconPack: "fa",
              onClick: () => {
                window.open(
                  member.links.externalSponsors?.[0]?.link,
                  "_blank",
                );
              },
            });
          } else {
            item.footerActions.push({
              title: "Donate",
              icon: "fa-solid fa-heart",
              iconPack: "fa",
              onClick: () => {
                const event = new MouseEvent("click");
                createDropdown(member, event);
              },
            });
          }
        }

        if (member.fabricators) {
          item.badges.push({
            text: "works @ fabricators.ltd",
            color: "brown",
          });
        }
        if (member.lit) {
          item.badges.push({
            text: "Lit Contributor",
          });
        }

        return item;
      });

      return teamItems;
    },
  },
});
</script>
