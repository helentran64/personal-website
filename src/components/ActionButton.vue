<template>
  <div class="tw-fixed tw-bottom-4 tw-right-4 tw-z-50">
    <v-speed-dial
      location="top center"
      transition="fade-transition"
      v-model="open"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-fab
          v-bind="activatorProps"
          size="small"
          icon="mdi-plus"
          color="indigo"
        >
          <v-icon>{{ open ? "mdi-close" : "mdi-menu-up" }}</v-icon>
        </v-fab>
      </template>

      <v-btn key="1" icon="mdi-github" color="purple"></v-btn>
      <v-btn key="2" icon="mdi-linkedin" color="blue"></v-btn>
      <v-btn key="4" icon="mdi-play" color="green"></v-btn>
    </v-speed-dial>
  </div>
</template>

<script setup>
import { shallowRef } from "vue";

const open = shallowRef(false);
</script>
