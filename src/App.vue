<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useHead } from 'unhead'

export default defineComponent({
  name: "App",
  data() {
    return {
      title: "",
    };
  },
});
</script>