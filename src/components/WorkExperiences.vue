<template>
  <div class="tw-w-1/2 tw-mx-auto">
    <h1 class="subHeadings">Work Experiences</h1>
    <v-timeline align="start" line-color="#9292a1">
      <v-timeline-item
        v-for="(job, i) in jobs"
        :key="i"
        size="x-large"
        dot-filled="false"
      >
        <template v-slot:icon>
          <img
            :src="job.companyLogo"
            alt="Company Logo"
            class="tw-w-11 tw-h-11 tw-rounded-full"
          />
        </template>

        <template v-slot:opposite>
          <div
            class="pt-1 headline font-weight-light"
            v-text="job.dateWorked"
          ></div>
        </template>
        <div>
          <h2 class="mt-n1 headline font-weight-bold mb-4 tw-text-lg">
            {{ job.jobTitle }}
          </h2>
          <p>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
            imperdiet nec ut, sed euismod convenire principes at. Est et nobis
            iisque percipit, an vim zril disputando voluptatibus, vix an
            salutandi sententiae.
          </p>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup>
const jobs = [
  {
    jobTitle: "Software Developer",
    dateWorked: "May 2024 - Present",
    companyLogo: new URL("../assets/images/rbc.png", import.meta.url).href,
  },
  {
    jobTitle: "Technical Systems Analyst",
    dateWorked: "May 2023 - August 2023",
    companyLogo: new URL("../assets/images/rbc.png", import.meta.url).href,
  },
  {
    jobTitle: "Educational Technology Assistant",
    dateWorked: "May 2022 - August 2022",
    companyLogo: new URL("../assets/images/tmu.png", import.meta.url).href,
  },
  {
    jobTitle: "Software Developer",
    dateWorked: "May 2021 - August 2021",
    companyLogo: new URL("../assets/images/riipen.png", import.meta.url).href,
  },
];
</script>
