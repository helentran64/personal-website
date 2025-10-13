<template>
  <div
    class="tw-text-[45px] tw-font-medium tw-text-left tw-flex tw-flex-col tw-justify-center tw-items-start tw-font-[Poppins]"
  >
    <img
      src="../assets/images/IMG_3724.png"
      alt="profile"
      class="tw-w-16 tw-h-16 tw-rounded-full"
    />
    <h1 ref="textAnimation" class="tw-pt-5"></h1>
    <p class="tw-mt-5 tw-text-[20px]">
      I am a full-stack developer who specializes in building seamless,
      high-impact applications that deliver real results
    </p>
    <v-btn
      variant="outlined"
      class="tw-mt-5"
      style="text-transform: none"
      @click="sendEmail"
      prepend-icon="mdi-email"
      color="primary"
    >
      Say hi!
    </v-btn>
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
