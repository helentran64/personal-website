<template>
  <v-col cols="2" class="tw-relative">
    <div
      ref="line"
      class="tw-fixed tw-top-0 tw-left-[calc(16.6667%)] tw-h-full tw-border-r tw-border-gray-700 tw-border-opacity-50"
    ></div>

    <div
      ref="sidebar"
      class="tw-fixed tw-top-1/2 -tw-translate-y-1/2 tw-flex tw-flex-col tw-justify-center"
      :style="{ left: `${sidebarLeft}px` }"
    >
      <ul class="text-right">
        <li>
          <router-link class="nav-link" to="/">
            <v-icon>mdi-home-outline</v-icon>
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/work-experiences">
            <v-icon>mdi-briefcase-outline</v-icon>
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/contact-me">
            <v-icon>mdi-email-outline</v-icon>
          </router-link>
        </li>
      </ul>
    </div>
  </v-col>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
const line = ref(null);
const sidebar = ref(null);
const sidebarLeft = ref(0);

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

<style scoped>
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

.nav-link.router-link-active {
  color: #1e88e5;
}
</style>
