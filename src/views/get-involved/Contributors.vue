<template>
  <div class="flexList anim--fadeIn">
    <div class="text text--rich">
      <p>
        Thanks ❤️ to the {{ contributors.length }} people who have contributed.
      </p>
    </div>
  </div>
  <div class="contributors anim--fadeIn">
    <a v-for="contributor in contributors" :key="contributor.id" :href="'https://github.com/' + contributor.login">
      <div class="contributors-card">
        <img :src="'https://avatars.githubusercontent.com/u/' + contributor.id + '?v=4'
          " :alt="contributor.login" class="contributors-card-image" />
        <div class="contributors-card-info">
          <h1 class="contributors-card-name">{{ contributor.name }}</h1>
          <p class="contributors-card-login">@{{ contributor.login }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface Contributor {
  id: number;
  name: string;
  login: string;
}

export default defineComponent({
  name: "contributors",
  setup() {
    const contributors = ref<Contributor[]>([]);

    const fetchContributorsData = async () => {
      try {
        const cachedData = localStorage.getItem("contributorsData");
        if (cachedData) {
          contributors.value = JSON.parse(cachedData);
          return;
        }

        const contributorsResponse = await fetch(
          "https://raw.githubusercontent.com/Vanilla-OS/.github/main/contributors.json"
        );
        const contributorsData = await contributorsResponse.json();

        contributorsData.sort((a: Contributor, b: Contributor) =>
          a.name.localeCompare(b.name)
        );

        contributors.value = contributorsData.filter(
          (contributor: Contributor) =>
            contributor.id !== 1607653 && contributor.id !== 49699333
        );
        localStorage.setItem(
          "contributorsData",
          JSON.stringify(contributors.value)
        );
      } catch (error) {
        console.error("Error fetching contributors:", error);
      }
    };

    fetchContributorsData();

    return {
      contributors,
    };
  },
});
</script>
