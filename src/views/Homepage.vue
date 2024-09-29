<template>
  <div>
    <Navbar />
  </div>
  <div>
    <AboutMe />
  </div>
  <div>Experiences</div>
  <div>Technologies</div>
  <div>Projects</div>
  <div>Contact</div>
</template>
<script setup>
import Navbar from "@/components/Navbar.vue";
import AboutMe from "@/components/AboutMe.vue";
</script>
<style scoped>
nav {
  display: flex;
  background-color: red;
}
</style>
