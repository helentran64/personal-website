<template>
  <div>
    <h1 class="subHeadings">Career</h1>
    <v-card class="tw-my-6" color="indigo">
      <template #text>
        <p class="tw-my-3 tw-text-[20px]">
          In my role as a Software Developer, I have a wide range of
          responsibilities that are critical to creating and maintaining an
          exceptional digital experience for users.
        </p>
      </template>
    </v-card>

    <h1 class="subHeadings">Work Experiences</h1>
    <v-timeline align="start" line-color="#9292a1" line-thickness="0.2">
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
            {{ job.description }}
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
    description:
      "Centralized data exchange across the application stack using TypeORM, REST APIs, middleware configuration, and Express.js routing to support real-time updates and interactive features on a dashboard. Resolved complex client and server-side issues by implementing solutions that significantly enhanced system functionality, while adhering to SOLID design principles",
  },
  {
    jobTitle: "Technical Systems Analyst",
    dateWorked: "May 2023 - August 2023",
    companyLogo: new URL("../assets/images/rbc.png", import.meta.url).href,
    description:
      "Streamlined and eliminated manual configuration of over 50 virtual machines by developing PowerShell scripts that automatically set Adobe Acrobat Reader as the default PDF viewer. Spearheaded the creation of Tableau dashboards and modification of PowerShell scripts in collaboration with the Automation team, facilitating data-driven decisions and timely delivery of vulnerability alerts to risk managers ",
  },
  {
    jobTitle: "Educational Technology Assistant",
    dateWorked: "May 2022 - August 2022",
    companyLogo: new URL("../assets/images/tmu.png", import.meta.url).href,
    description:
      "Authored comprehensive documentation for Desire2Learn (D2L), Opinio, and Brightspace Pulse, significantly enhancing the learning experience of over 48,000 students and staff at TMU. •	Developed a webpage by leveraging Adobe Experience Manager and Adobe Illustrator to create a platform that promotes inclusivity and accessibility while ensuring compliance with AODA legislation",
  },
  {
    jobTitle: "Software Developer",
    dateWorked: "May 2021 - August 2021",
    companyLogo: new URL("../assets/images/riipen.png", import.meta.url).href,
    description:
      "Formulated an interactive website for a start-up company from scratch using HTML, CSS, and JavaScript to establish online marketing and amplify the organization’s credibility. •	Tested and debugged customer support contact channels, which solved over 50 client inquiries and significantly improved web functionality that generated a 7% increase in customer retention",
  },
];
</script>
