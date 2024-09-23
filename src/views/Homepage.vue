<template>
  <div>
    <Navbar/>
  </div>
  <div>Welcome</div>
  <div>About me</div>
  <div>Experiences</div>
  <div>Technologies</div>
  <div>Projects</div>
  <div>Contact</div>
</template>
<script setup>
import Navbar from "@/components/Navbar.vue"
</script>
<style scoped>
nav {
  display: flex;
  background-color: red;
}
</style>
