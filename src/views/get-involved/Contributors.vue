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
  name: 'Contributors',
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
  
  <style>
  .contributors {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 10px 25px;
    margin: 5px;
  }
  
  .contributor-card {
    display: flex;
    align-items: center;
    height: 70px;
    border-radius: 10px;
    background-color: var(--card-bg-color);
    box-shadow: var(--base-shadow);
    text-align: center;
    padding: 12px;
    cursor: pointer;
    transition: all 500ms;
  }

  .contributor-card:hover {
    background-color: var(--secondary-bg-color);
  }
  
  .contributor-info {
    flex-grow: 1;
    margin-left: 10px;
    max-width: 70%;
    text-align: left;
    font-family: 'Outfit';
    text-decoration: none;
  }
  
  .contributor-card img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  
  .contributor-info h1 {
    color: var(--text-color);
    font-size: 18px;
    font-weight: 600;
    max-width: 100%;
    margin-bottom: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: font-size 200ms, white-space 200ms, text-overflow 200ms;
  }

  .contributor-info h1:hover {
    font-size: 15px;
    white-space: initial;
    overflow: visible;
}
  
  .contributor-info p {
    color: var(--text-color-dimmed);
    font-weight: 500;
    font-size: 14px;
    margin: 0;
  }
  
  .contributor-link {
    text-decoration: none;
  }

  .contributors a {
  text-decoration: none;
}

  @media (max-width: 768px) {
    .contributors {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
    }

    .contributor-card h1{
      font-size: 16px;
    }
  }
  </style>
  