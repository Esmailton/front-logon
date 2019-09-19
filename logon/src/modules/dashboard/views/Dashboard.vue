<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<script>
import AppLayout from "./../components/AppLayout.vue";

import http from "@/http";

export default {
  name: 'Dashboard',
  components: {
    AppLayout
  }
};
</script>
