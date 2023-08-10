<template>
    <div class="text text--rich">
        <h1>{{ $t('salutation.hello') }}</h1>
        <img class="img" src="/assets/images/components/404.jpg" alt="404" />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: '404',
});
</script>