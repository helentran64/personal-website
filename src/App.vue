<template>
  <v-app>
    <div class="tw-min-h-screen tw-flex tw-flex-col">
      <div>
        <Navbar />
      </div>
      <div class="tw-flex-1">
        <RouterView />
      </div>
      <v-row class="tw-mt-auto">
        <v-col cols="2"></v-col>
        <v-col cols="9">
          <MyFooter />
        </v-col>
      </v-row>
    </div>
    <ActionButton />
  </v-app>
</template>
<script setup>
import Navbar from "@/components/Navbar.vue";
import { RouterView } from "vue-router";
import ActionButton from "@/components/ActionButton.vue";
import MyFooter from "./components/MyFooter.vue";
</script>
<style scoped></style>
