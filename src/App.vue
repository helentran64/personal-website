<template>
  <v-app>
    <div>
      <Navbar />
    </div>
    <div>
      <Homepage />
    </div>
  </v-app>
</template>
<script setup>
import Homepage from "@/views/Homepage.vue";
import Navbar from "@/components/Navbar.vue";
</script>
<style scoped></style>
