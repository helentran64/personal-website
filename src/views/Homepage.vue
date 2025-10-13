<template>
  <v-row>
    <v-col cols="2" class="tw-relative">
      <div
        ref="line"
        class="tw-absolute tw-top-0 tw-left-full tw-h-[100%] tw-border-r tw-border-gray-700"
      ></div>

      <div
        ref="sidebar"
        class="tw-fixed tw-top-1/2 -tw-translate-y-1/2 tw-flex tw-flex-col tw-justify-center"
        :style="{ left: `${sidebarLeft}px` }"
      >
        <ul class="text-right">
          <li>
            <a class="nav-link" href="#about"
              ><v-icon>mdi-information-outline</v-icon></a
            >
          </li>
          <li>
            <a class="nav-link" href="#experiences"
              ><v-icon>mdi-briefcase-outline</v-icon></a
            >
          </li>
          <li>
            <a class="nav-link" href="#projects"><v-icon>mdi-laptop</v-icon></a>
          </li>
        </ul>
      </div>
    </v-col>

    <v-col cols="9">
      <section id="home" ref="welcomeRef" class="tw-w-[80%] tw-mx-auto tw-my-[50px] tw-mt-[100px]">
        <WelcomeMessage />
      </section>

      <section id="about" ref="aboutRef" class="tw-w-[80%] tw-mx-auto tw-my-[50px]">
        <AboutMe />
      </section>

      <section id="experiences" ref="workRef" class="tw-w-[80%] tw-mx-auto tw-my-[50px]">
        <WorkExperiences />
      </section>

      <section id="projects" ref="projectsRef" class="tw-w-[80%] tw-mx-auto tw-my-[50px]">
        <Projects />
      </section>
      <footer class="tw-text-center tw-pt-20 tw-pb-10 tw-text-gray-500 tw-mt-[50px]">
        &copy; 2025 Helen Tran. All rights reserved.
      </footer>
    </v-col>
  </v-row>
  <ActionButton />
</template>

<script setup>
import { ref, onMounted } from "vue";
import WelcomeMessage from "@/components/WelcomeMessage.vue";
import AboutMe from "@/components/AboutMe.vue";
import WorkExperiences from "@/components/WorkExperiences.vue";
import Projects from "@/components/Projects.vue";
import ActionButton from "@/components/ActionButton.vue";
import { useFadeUp } from "@/composables/useFadeUp";

const welcomeRef = useFadeUp();
const aboutRef = useFadeUp();
const workRef = useFadeUp();
const projectsRef = useFadeUp();

const line = ref(null);
const sidebar = ref(null);
const sidebarLeft = ref(0);

// Update sidebar position dynamically 10px to the left of the line
function updateSidebarPosition() {
  if (line.value && sidebar.value) {
    const lineRect = line.value.getBoundingClientRect();
    sidebarLeft.value = lineRect.left - 10 - sidebar.value.offsetWidth;
  }
}

onMounted(() => {
  updateSidebarPosition();
  window.addEventListener("resize", updateSidebarPosition);
});
</script>

<style>
html {
  scroll-behavior: smooth;
}

.nav-link {
  color: white;
  transition: color 0.2s ease-in-out;
}

.nav-link:hover {
  color: #1e88e5;
}
</style>
