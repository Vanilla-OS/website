<template>
    <div class="flexList anim--fadeIn">
      <div class="text text--rich">
        <p>Thanks ❤️ to the over 130 people who have contributed. </p>
      </div>
    </div>
    <div class="contributors anim--fadeIn">
    <a v-for="contributor in contributors" :key="contributor.id" :href="contributor.profile_url">
      <div class="contributor-card">
        <img :src="contributor.avatar_url" :alt="contributor.login" />
        <div class="contributor-info">
          <h1 ref="nameElement">{{ contributor.name }}</h1>
          <p>@{{ contributor.login }}</p>
        </div>
      </div>
    </a>
  </div>
  </template>
  
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';


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
    const orgReposResponse = await axios.get('https://api.github.com/orgs/Vanilla-OS/repos');

    for (const repo of orgReposResponse.data) {
      const contributorsResponse = await axios.get(repo.contributors_url);
      const contributorsData = contributorsResponse.data;

      for (const contributor of contributorsData) {
        if (!contributors.value.some((c: Contributor) => c.login === contributor.login)) {
          const userDetailsResponse = await axios.get(`https://api.github.com/users/${contributor.login}`);
          const userDetails = userDetailsResponse.data;

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
  } catch (error: any) {
  console.error('Error fetching contributors:', error.message);
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
