<template>
  <div id="introMessage">
    <h1 ref="textAnimation"></h1>
    <p class="tw-w-1/2 tw-mr-auto tw-ml-auto">
      I am a full-stack developer who specializes in building seamless,
      high-impact applications that deliver real results
    </p>
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
</script>
<style scoped>
#introMessage {
  text-align: center;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#introMessage h1 {
  font-size: 45px;
  font-weight: 500;
  text-align: center;
  padding-top: 130px;
}

#introMessage p {
  margin-top: 20px;
  font-size: 20px;
}

#introMessage :nth-child(3) {
  letter-spacing: 10px;
  font-size: 14px;
}
</style>
