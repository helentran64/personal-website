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
  <div>Technologies</div>
  <div>Projects</div>
  <div>Contact</div>
  <!-- <div class="tw-bg-blue-500 tw-text-black tw-text-center tw-p-4">
    Tailwind CSS is working!
  </div> -->
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
