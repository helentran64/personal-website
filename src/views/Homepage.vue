<template>
  <header>
    <div class="navBarSection tw-my-0 tw-mx-6">
      <nav class="navbar navbar-expand-sm navbar-dark">
        <a class="navbar-brand" href="#home">
          <img
            src="../assets/images/programming.png"
            alt="laptop icon"
            width="50"
            height="50"
            class="d-inline-block align-top"
          />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#toggleMobileMenu"
          aria-controls="toggleMobileMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="toggleMobileMenu">
          <ul class="navbar-nav ms-auto text-center">
            <li><a class="nav-link" href="#about">About Me</a></li>
            <li><a class="nav-link" href="#experiences">Experiences</a></li>
            <li><a class="nav-link" href="#projects">Projects</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>

  <section
    id="home"
    ref="welcomeRef"
    class="tw-h-screen tw-flex tw-justify-center tw-items-center"
  >
    <WelcomeMessage />
  </section>

  <section
    id="about"
    ref="aboutRef"
    class="tw-min-h-screen tw-flex tw-justify-center tw-items-center"
  >
    <AboutMe />
  </section>

  <section
    id="experiences"
    ref="workRef"
    class="tw-min-h-screen tw-flex tw-justify-center tw-items-center"
  >
    <WorkExperiences />
  </section>

  <section
    id="projects"
    ref="projectsRef"
    class="tw-min-h-screen tw-flex tw-justify-center tw-items-center"
  >
    <Projects />
  </section>
</template>

<script setup>
import WelcomeMessage from "@/components/WelcomeMessage.vue";
import AboutMe from "@/components/AboutMe.vue";
import WorkExperiences from "@/components/WorkExperiences.vue";
import Projects from "@/components/Projects.vue";

import { useFadeUp } from "@/composables/useFadeUp";

// Apply fade-up animation to each section
const welcomeRef = useFadeUp();
const aboutRef = useFadeUp();
const workRef = useFadeUp();
const projectsRef = useFadeUp();
</script>

<style>
html {
  scroll-behavior: smooth;
}

.navBarSection {
  position: sticky;
  top: 0;
  z-index: 50;
}

.nav-link {
  color: white;
  transition: color 0.2s ease-in-out;
}

.nav-link:hover {
  color: #00bcd4;
}
</style>
