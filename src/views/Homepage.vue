<template>
  <div>
    <Navbar />
  </div>
  <div>
    <AboutMe />
  </div>
  <div>
    <WorkExperiences />
  </div>
  <div>Welcome</div>
  <div>About Me</div>
  <div>Experiences</div>
  <div>Technologies</div>
  <div>Projects</div>
  <div>Contact</div>
</template>
<script setup>
import Navbar from "@/components/Navbar.vue";
import AboutMe from "@/components/AboutMe.vue";
import WorkExperiences from "@/components/WorkExperiences.vue";
</script>
<style scoped>
nav {
  display: flex;
  background-color: red;
}
</style>
