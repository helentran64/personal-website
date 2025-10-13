<template>
  <v-row>
    <v-col cols="2"></v-col>
    <v-col cols="9">
      <section
        ref="workRef"
        class="tw-w-[80%] tw-mx-auto tw-my-[50px]"
      >
        <WorkExperiences />
      </section>
    </v-col>
  </v-row>
</template>
<script setup>
import WorkExperiences from "@/components/WorkExperiences.vue";
import { useFadeUp } from "@/composables/useFadeUp";
const workRef = useFadeUp();
</script>
<style scoped></style>
