<template>
  <div class="tw-w-[80%] tw-mr-auto tw-ml-auto tw-py-20">
    <div class="centerItems tw-flex tw-items-center tw-gap-10">
      

      <!-- About Me Content Section -->
      <div class="tw-flex-grow">
        <h1 class="subHeadings">About Me</h1>
        <p>
          I've studied Computer Science at Toronto Metropolitan
          University, and I am currently working as a full-stack developer @ RBC.
        </p>
        <p>
          Here are some of the technologies I have worked with:
          <div class="tw-flex">
            <ul class="tw-mr-10">
              <li><v-icon>mdi-menu-right-outline</v-icon>JavaScript</li>
              <li><v-icon>mdi-menu-right-outline</v-icon>TypeScript</li>
              <li><v-icon>mdi-menu-right-outline</v-icon>Vue.js</li>
              <li><v-icon>mdi-menu-right-outline</v-icon>React.js</li>
              <li><v-icon>mdi-menu-right-outline</v-icon>Node.js</li>
            </ul>
            <ul>
              <li><v-icon>mdi-menu-right-outline</v-icon>Express.js</li>
              <li><v-icon>mdi-menu-right-outline</v-icon>MongoDB</li>
              <li><v-icon>mdi-menu-right-outline</v-icon>MySQL</li>
              <li><v-icon>mdi-menu-right-outline</v-icon>TypeORM</li>
              <li><v-icon>mdi-menu-right-outline</v-icon>Git</li>
            </ul>
          </div>
        </p>
        <p>
          I am passionate about learning new technologies and
          improving my skills. I am always looking for new challenges
          and opportunities to grow as a developer.
        </p>
      </div>
      <!-- Image Section -->
      <div class="tw-flex-shrink-0">
        <img
          src="../assets/images/app-development.png"
          alt="development"
          class="tw-w-full tw-max-w-[300px] tw-h-auto"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.centerItems {
  display: flex;
}
</style>