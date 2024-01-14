<template>
    <div class="flexList anim--fadeIn">
        <div class="text text--rich">
            <p>This document refers to the privacy policy of the operating
                system. If you are looking for the privacy policy of the
                website, please refer to the <router-link to="/privacy-policy">privacy policy</router-link> page.</p>
            <p>When you use the operating system, you agree to the terms of
                this privacy policy. If you do not agree with the terms of
                this privacy policy, please do not use the operating system.</p>
            <h2>What information do we collect?</h2>
            <p>No information is collected by the operating system, in any
                way, shape or form.</p>
            <h2>How do we use the information we collect?</h2>
            <p>Since no information is collected, no information is used.</p>
            <h2>How do we protect your information?</h2>
            <p>Since no information is collected, no information is
                protected.</p>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'os-privacy-policy',
});
</script>