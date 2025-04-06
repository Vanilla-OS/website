<template>
    <div class="flexList anim--fadeIn">
        <div class="text text--rich">
            <a href="https://www.iubenda.com/privacy-policy/64799216/cookie-policy"
                class="iubenda-white no-brand iubenda-noiframe iubenda-embed iub-no-markup iubenda-noiframe iub-body-embed"
                title="Cookie Policy">{{$t('cookies-policy.linkText')}}</a>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'cookies-policy',

    mounted() {
        const script = document.createElement('script');
        script.src = 'https://cdn.iubenda.com/iubenda.js';
        document.getElementsByTagName('head')[0].appendChild(script);
    },
});
</script>