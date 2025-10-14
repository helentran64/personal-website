<template>
  <v-row>
    <v-col cols="2"></v-col>
    <v-col cols="9">
      <div class="tw-w-[80%] tw-mx-auto tw-my-[50px]">
        <h1 class="subHeadings">Say Hi 👋🏼</h1>
        <p class="tw-text-[20px]">
          Feel free to send me a message, and I'll get back to you as soon as
          possible!
        </p>

        <form ref="contactForm" class="tw-my-[50px]" @submit.prevent="sendEmail">
          <v-text-field
            v-model="firstName"
            name="from_name"
            label="First Name"
            required
            variant="solo"
            density="compact"
          />
          <v-text-field
            v-model="lastName"
            name="last_name"
            label="Last Name"
            required
            variant="solo"
            density="compact"
          />
          <v-text-field
            v-model="email"
            name="reply_to"
            label="Email"
            required
            variant="solo"
            density="compact"
          />
          <v-textarea
            v-model="message"
            name="message"
            label="Write your message"
            required
            variant="solo"
            density="compact"
          />

          <v-btn color="primary" type="submit">Send</v-btn>
          <p class="tw-mt-2" v-if="emailSent">Email sent successfully!</p>
        </form>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Form fields
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const message = ref("");
const emailSent = ref(false);

// Form ref
const contactForm = ref(null);

// Send email function
function sendEmail() {
  if (!firstName.value || !lastName.value || !email.value || !message.value) {
    alert("Please fill out all fields before sending.");
    return;
  }

  emailjs
    .sendForm(
      serviceID,       
      templateID,      
      contactForm.value,
      publicKey      
    )
    .then(() => {
      emailSent.value = true;
      // Reset form
      firstName.value = "";
      lastName.value = "";
      email.value = "";
      message.value = "";
    })
    .catch((err) => {
      console.error("Email send error:", err);
    });
}
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
</style>
