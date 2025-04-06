<template>
	<div class="language-selector">
	  <button class="dropdown-toggle" @click="isOpen = !isOpen" aria-expanded="isOpen" aria-label="Select language">
		<svg viewBox="0 0 16 16" class="icon">
		  <path d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z M13.9,7H12c-0.1-1.5-0.4-2.9-0.8-4.1 C12.6,3.8,13.6,5.3,13.9,7z M8,14c-0.6,0-1.8-1.9-2-5H10C9.8,12.1,8.6,14,8,14z M6,7c0.2-3.1,1.3-5,2-5s1.8,1.9,2,5H6z M4.9,2.9 C4.4,4.1,4.1,5.5,4,7H2.1C2.4,5.3,3.4,3.8,4.9,2.9z M2.1,9H4c0.1,1.5,0.4,2.9,0.8,4.1C3.4,12.2,2.4,10.7,2.1,9z M11.1,13.1 c0.5-1.2,0.7-2.6,0.8-4.1h1.9C13.6,10.7,12.6,12.2,11.1,13.1z"/>
		</svg>
		<span class="current-language">{{ currentLanguage }}</span>
	  </button>
  
	  <ul v-show="isOpen" class="dropdown-menu">
		<li v-for="lang in languages" :key="lang.code">
		  <button class="language-option" @click="selectLanguage(lang.code)" :aria-label="`Select ${lang.name}`">
			<img :src="lang.flag" :alt="`${lang.name} flag`" width="24" height="16" loading="lazy">
			<span>{{ lang.name }}</span>
		  </button>
		</li>
	  </ul>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  setup() {
	const isOpen = ref(false);
	const languages = [
	  { code: 'en', name: 'English', flag: '/assets/images/locales/us-flag.png' },    
	  { code: 'pt', name: 'Português', flag: '/assets/images/locales/brazil-flag.png' },        
	];

	const currentLanguage = computed(() => {
	  const langCode = localStorage.getItem('websiteLanguage') || 'en';
	  return languages.find(lang => lang.code === langCode)?.name || 'English';
	});

	const selectLanguage = async (locale: string) => {
	  localStorage.setItem('websiteLanguage', locale);
	  isOpen.value = false;
	  window.location.reload();
	};

	return { isOpen, languages, currentLanguage, selectLanguage	};
  }
});
</script>