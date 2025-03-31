<template>
  <header>
    <div class="navBarSection">
      <nav class="navbar navbar-expand-sm navbar-dark">
        <a class="navbar-brand" href="#">
          <img
            src="../assets/images/programming.png"
            alt="laptop icon"
            width="50"
            height="50"
            class="d-inline-block align-top"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#toggleMobileMenu"
          aria-controls="toggleMobileMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="toggleMobileMenu">
          <ul class="navbar-nav ms-auto text-center">
            <li>
              <a class="nav-link" href="#">About Me</a>
            </li>
            <li>
              <a class="nav-link" href="#">Experiences</a>
            </li>
            <li>
              <a class="nav-link" href="#">Technology</a>
            </li>
            <li>
              <a class="nav-link" href="#">Projects</a>
            </li>
            <li>
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  <section id="introMessage">
    <h1 ref="textAnimation"></h1>
    <p>
      I'm a software developer driven by a passion for crafting seamless, <br />
      high-impact applications
    </p>
  </section>
</template>
<script setup>
import { onMounted, ref } from "vue";

const text = "Hi, I'm Helen!";
const textAnimationSpeed = 120;
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
.navBarSection {
  margin: 0 20px;
}

#introMessage {
  text-align: center;
  font-family: "Poppins", sans-serif;
  padding-bottom: 370px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#introMessage h1 {
  font-family: "Orbitron", sans-serif;
  font-size: 60px;
  font-weight: 500;
  text-align: center;
  padding-top: 130px;
}

#introMessage p {
  margin-top: 20px;
  font-size: 22px;
}

#introMessage :nth-child(3) {
  letter-spacing: 10px;
  font-size: 14px;
}
</style>
