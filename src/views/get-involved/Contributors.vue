<template>
    <div class="flexList anim--fadeIn">
      <div class="text text--rich">
        <p>Thanks ❤️ to the {{ contributors.length }} people who have contributed. </p>
      </div>
    </div>
    <div class="contributors anim--fadeIn">
    <a v-for="contributor in contributors" :key="contributor.id" :href="contributor.profile_url">
      <div class="contributors-card">
        <img :src="contributor.avatar_url" :alt="contributor.login" class="contributors-card-image"/>
        <div class="contributors-card-info">
          <h1 ref="nameElement" class="contributors-card-name">{{ contributor.name }}</h1>
          <p class="contributors-card-login">@{{ contributor.login }}</p>
        </div>
      </div>
    </a>
  </div>
  </template>
  
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

interface Contributor {
  id: number;
  name: string;
  login: string;
  avatar_url: string;
  profile_url: string;
}

export default defineComponent({
  name: 'contributors',
  setup() {
    const contributors = ref<Contributor[]>([]);

    const filterIds = [1607653, 49699333];

    const fetchContributorsData = async () => {
      try {
        const cachedData = localStorage.getItem('contributorsData');
        if (cachedData) {
          contributors.value = JSON.parse(cachedData);
          return;
        }

        const contributorsResponse = await fetch('https://raw.githubusercontent.com/Vanilla-OS/.github/main/contributors.json');
        const contributorsData = await contributorsResponse.json();

        contributorsData.sort((a: Contributor, b: Contributor) => a.name.localeCompare(b.name));

        for (const contributor of contributorsData) {
          if (!filterIds.includes(contributor.id) && !contributors.value.some((c: Contributor) => c.login === contributor.login)) {
            contributors.value.push({
              id: contributor.id,
              name: contributor.name,
              login: contributor.login,
              avatar_url: contributor.avatar_url,
              profile_url: contributor.profile_url,
            });
          }
        }

        localStorage.setItem('contributorsData', JSON.stringify(contributors.value));
      } catch (error) {
        console.error('Error fetching contributors:', error);
      }
    };

    onMounted(() => {
      fetchContributorsData();
    });

    return {
      contributors,
    };
  },
});
</script>
