<template>
  <!-- About Me Content Section -->
  <v-row>
    <v-col cols="12" md="7">
      <h1 class="subHeadings">About Me</h1>
      <p>
        I've studied Computer Science at Toronto Metropolitan University, and I
        am currently working as a full-stack developer @ RBC.
      </p>

      <p>Here are some of the technologies I have worked with:</p>

      <!-- Skills list -->
      <div class="tw-flex tw-flex-col md:tw-flex-row">
        <ul class="tw-m-0">
          <li><v-icon>mdi-menu-right-outline</v-icon> JavaScript</li>
          <li><v-icon>mdi-menu-right-outline</v-icon> TypeScript</li>
          <li><v-icon>mdi-menu-right-outline</v-icon> Vue.js</li>
          <li><v-icon>mdi-menu-right-outline</v-icon> React.js</li>
          <li><v-icon>mdi-menu-right-outline</v-icon> Node.js</li>
        </ul>

        <ul class="tw-m-0">
          <li><v-icon>mdi-menu-right-outline</v-icon> Express.js</li>
          <li><v-icon>mdi-menu-right-outline</v-icon> MongoDB</li>
          <li><v-icon>mdi-menu-right-outline</v-icon> MySQL</li>
          <li><v-icon>mdi-menu-right-outline</v-icon> TypeORM</li>
          <li><v-icon>mdi-menu-right-outline</v-icon> Git</li>
        </ul>
      </div>

      <p>
        I am passionate about learning new technologies and improving my skills.
        I am always looking for new challenges and opportunities to grow as a
        developer.
      </p>
    </v-col>

    <!-- Image Section -->
    <v-col cols="12" md="5">
    <img
      src="../assets/images/app-development.png"
      alt="development"
      class="tw-w-full tw-max-w-[300px] tw-h-auto"
    />
    </v-col>
  </v-row>
</template>

<style scoped>
li {
  list-style-type: none;
}
</style>
