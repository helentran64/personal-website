<template>
  <div class="welcomepic">
    <header>
      <div class="container">
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
                <a class="nav-link" href="#hello">About me</a>
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
    <section id="greeting">
      <h1>Welcome</h1>
      <p>HELEN TRAN</p>
      <p><span class="auto-type"></span></p>
      <!--Arrow-->
      <a href="#">
        <div class="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </a>
    </section>
  </div>
</template>
<script setup>
</script>
<style scoped>
.welcomepic {
  background-image: url(../assets/images/night-sky.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}

#greeting h1 {
  font-family: "Orbitron", sans-serif;
  color: white;
  font-size: 60px;
  text-align: center;
  padding-top: 130px;
}

#greeting {
  color: white;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 16pt;
  padding-bottom: 370px;
  text-transform: uppercase;
}

#greeting :nth-child(3) {
  letter-spacing: 10px;
  font-size: 14px;
}

/* ---- arrow ---- */
.arrow {
  margin-left: auto;
  margin-right: auto;
  width: 1em;
  padding-top: 30px;
}
.arrow span {
  display: block;
  width: 30px;
  height: 30px;
  border-bottom: 3px solid #53ceff6e;
  border-right: 3px solid #53ceff6e;
  transform: rotate(45deg);
  margin: -10px;
  animation: animate 2s infinite;
}
.arrow span:nth-child(2) {
  animation-delay: -0.2s;
}
.arrow span:nth-child(3) {
  animation-delay: -0.4s;
}
@keyframes animate {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
}

/* ---- bigger screen ---- */
@media screen and (min-width: 1664px){
  .welcomepic {
    background-image: url(../assets/images/night-sky-small.png);
  }
}

</style>
