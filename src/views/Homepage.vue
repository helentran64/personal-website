<template>
  <v-row>
    <v-col cols="2"></v-col>
    <v-col cols="9">
      <section ref="welcomeRef" class="tw-w-[80%] tw-mx-auto tw-my-[50px] tw-mt-[100px]">
        <WelcomeMessage />
      </section>

      <section ref="aboutRef" class="tw-w-[80%] tw-mx-auto tw-my-[50px]">
        <AboutMe />
      </section>

      <section ref="projectsRef" class="tw-w-[80%] tw-mx-auto tw-my-[50px]">
        <Projects />
      </section>
    </v-col>
  </v-row>
</template>

<script setup>
import WelcomeMessage from "@/components/WelcomeMessage.vue";
import AboutMe from "@/components/AboutMe.vue";
import Projects from "@/components/Projects.vue";
import { useFadeUp } from "@/composables/useFadeUp";

const welcomeRef = useFadeUp();
const aboutRef = useFadeUp();
const projectsRef = useFadeUp();
</script>

