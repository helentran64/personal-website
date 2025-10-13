<template>
  <v-app>
    <div>
      <Navbar />
    </div>
    <div>
      <RouterView />
    </div>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="9">
        <MyFooter />
      </v-col>
    </v-row>
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
