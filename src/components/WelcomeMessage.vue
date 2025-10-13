<template>
  <div
    class="tw-h-[calc(100vh-64px)] tw-text-[45px] tw-ont-medium tw-text-center tw-flex tw-flex-col tw-justify-center tw-items-center tw-font-[Poppins]"
  >
    <h1 ref="textAnimation"></h1>
    <p class="tw-w-1/2 tw-mr-auto tw-ml-auto tw-mt-5 tw-text-[20px]">
      I am a full-stack developer who specializes in building seamless,
      high-impact applications that deliver real results
    </p>
    <v-btn style="text-transform: none; margin: 20px;" @click="sendEmail" prepend-icon="mdi-email" color="primary">Say hi!</v-btn>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

const text = "Hi, I'm Helen";
const textAnimationSpeed = 100;
const textAnimation = ref(null);

onMounted(() => {
  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      textAnimation.value.innerHTML += text[index];
      index++;
    } else {
      clearInterval(interval);
    }
  }, textAnimationSpeed);
});

const sendEmail = () => {
  window.location.href = "mailto:helentran64@gmail.com";
};
</script>
