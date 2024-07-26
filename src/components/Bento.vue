<template>
    <div class="Bento Bento--6">
        <slot name="content"></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Bento',
});
</script>