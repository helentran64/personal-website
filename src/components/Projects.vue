<template>
  <div class="tw-w-[80%] tw-mx-auto">
    <h1 class="subHeadings">Projects</h1>
    <br>
    <v-row>
  <v-col
    v-for="project in projects"
    :key="project.title"
    cols="12"
    md="4"
  >
    <v-card
      prepend-icon="mdi-folder"
      :title="project.title"
      :text="project.description"
    >
      <template #append>
        <v-btn
          :href="project.link"
          target="_blank"
          variant="text"
          icon
        >
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
];
</script>
