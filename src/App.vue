<template>
  <v-app>
    <div>
      <Navbar />
    </div>
    <div>
      <Homepage />
    </div>
    <footer>
      <div class="tw-text-center tw-pt-20 tw-pb-10 tw-text-gray-500">
        &copy; 2025 Helen Tran. All rights reserved.
      </div>
    </footer>
  </v-app>
</template>
<script setup>
import Homepage from "@/views/Homepage.vue";
import Navbar from "@/components/Navbar.vue";
</script>
<style scoped></style>
