<template>
    <div class="flexList anim--fadeIn">
      <div class="text text--rich">
        <p>Thanks ❤️ to the over 130 people who have contributed. </p>
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

    const fetchContributorsData = async () => {
      try {
        const orgReposResponse = await fetch('https://api.github.com/orgs/Vanilla-OS/repos');
        const orgReposData = await orgReposResponse.json();

        for (const repo of orgReposData) {
          const contributorsResponse = await fetch(repo.contributors_url);
          const contributorsData = await contributorsResponse.json();

          for (const contributor of contributorsData) {
            if (!contributors.value.some((c: Contributor) => c.login === contributor.login)) {
              const userDetailsResponse = await fetch(`https://api.github.com/users/${contributor.login}`);
              const userDetails = await userDetailsResponse.json();

              contributors.value.push({
                id: contributor.id,
                name: userDetails.name || contributor.login,
                login: contributor.login,
                avatar_url: contributor.avatar_url,
                profile_url: contributor.html_url,
              });
            }
          }
        }
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
