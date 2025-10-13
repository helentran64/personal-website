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
    description: "This is the project description",
    link: "https://github.com/helentran64/myWellness",
  },
  {
    title: "Flash Cards",
    description: "This is the project description",
    link: "https://github.com/helentran64/flash-cards",
  },
  {
    title: "Finding Unfollowers",
    description: "This is the project description",
    link: "https://github.com/helentran64/myFollowers",
  },
  {
    title: "Movie Store",
    description: "This is the project description",
    link: "https://github.com/helentran64/movie-store",
  },
];
</script>
