<template>
  <div id="navBarSection">
    <Navbar />
  </div>
  <div>
    <WelcomeMessage />
  </div>
  <div>
    <AboutMe />
  </div>
  <div>
    <WorkExperiences />
  </div>
  <div>
    <Projects />
  </div>
  <div>
    <ContactMe />
  </div>
</template>
<script setup>
import Navbar from "@/components/Navbar.vue";
import WelcomeMessage from "@/components/WelcomeMessage.vue";
import AboutMe from "@/components/AboutMe.vue";
import WorkExperiences from "@/components/WorkExperiences.vue";
import Projects from "@/components/Projects.vue";
import ContactMe from "@/components/ContactMe.vue";
</script>
<style scoped>
#navBarSection{
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}
</style>
