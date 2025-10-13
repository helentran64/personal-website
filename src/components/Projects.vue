<template>
  <div>
    <h1 class="subHeadings">Projects</h1>
    <br />
    <v-row>
      <v-col v-for="project in projects" :key="project.title" cols="12" lg="6">
        <v-card class="tw-overflow-hidden" color="#4527A0" variant="elevated">
          <template #title>
            <div class="tw-whitespace-normal tw-break-words">
              {{ project.title }}
            </div>
          </template>

          <template #subtitle>
            <div class="tw-whitespace-normal tw-break-words">
              {{ project.subtitle }}
            </div>

          </template>

          <template #text>
            <div class="tw-whitespace-normal tw-break-words">
              {{ project.description }}
            </div>
          </template>

          <template #append>
            <v-btn :href="project.link" target="_blank" variant="text" icon>
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const projects = [
  {
    title: "Food Tracker",
    subtitle: "Vue.js, Vuetify, TypeScript, HTML/CSS",
    description: "Tracks your food intake and provides nutritional information",
    link: "https://github.com/helentran64/myWellness",
  },
  {
    title: "Flash Cards",
    subtitle: "Vue.js, Vuetify, JavaScript, HTML/CSS",
    description: "Help you study and memorize information for an upcoming test",
    link: "https://github.com/helentran64/flash-cards",
  },
  {
    title: "Finding Unfollowers",
    subtitle: "JavaScript, HTML/CSS",
    description: "App that finds who is not following you back on Instagram",
    link: "https://github.com/helentran64/myFollowers",
  },
  {
    title: "Movie Store",
    subtitle: "Java",
    description: "Online movie store system that allows users to browse and purchase movies",
    link: "https://github.com/helentran64/movie-store",
  },
];
</script>
