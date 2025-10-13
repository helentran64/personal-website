<template>
  <div>
    <h1 class="subHeadings">Career</h1>
    <v-card class="tw-my-6" color="indigo">
      <template #text>
        <p class="tw-my-3 tw-text-[15px]">
          In my role as a Software Developer, I have a wide range of
          responsibilities that are critical to creating and maintaining an
          exceptional digital experience for users.
        </p>
      </template>
    </v-card>

    <h1 class="subHeadings">Work Experiences</h1>
    <v-timeline
      line-color="gray-700"
      line-thickness="0.2"
      side="end"
      class="tw-my-10"
    >
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

        <!-- Main content: everything on the same side -->
        <div class="tw-ml-4">
          <h2 class="tw-font-bold tw-text-lg">{{ job.jobTitle }}</h2>
          <div class="tw-text-sm tw-text-gray-500 mb-1">
            {{ job.dateWorked }}
          </div>
          <p class="tw-text-[10px] sm:tw-text-[15px]">{{ job.description }}</p>
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
      "Centralized data exchange across the application stack using TypeORM, REST APIs, middleware configuration, and Express.js routing to support real-time updates. Resolved complex client and server-side issues by implementing solutions that significantly enhanced system functionality, while adhering to SOLID design principles",
  },
  {
    jobTitle: "Technical Systems Analyst",
    dateWorked: "May 2023 - August 2023",
    companyLogo: new URL("../assets/images/rbc.png", import.meta.url).href,
    description:
      "Streamlined and eliminated manual configuration of over 50 virtual machines by developing PowerShell scripts. Spearheaded the creation of Tableau dashboards and modification of PowerShell scripts in collaboration with the Automation team, facilitating data-driven decisions and timely delivery of vulnerability alerts to risk managers ",
  },
  {
    jobTitle: "Educational Technology Assistant",
    dateWorked: "May 2022 - August 2022",
    companyLogo: new URL("../assets/images/tmu.png", import.meta.url).href,
    description:
      "Authored comprehensive documentation for Desire2Learn (D2L), Opinio, and Brightspace Pulse, significantly enhancing the learning experience of over 48,000 students and staff at TMU. Developed a webpage by leveraging Adobe Experience Manager and Adobe Illustrator to create a platform that promotes inclusivity and accessibility",
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
