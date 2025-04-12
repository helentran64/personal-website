<template>
  <header>
    <div class="navBarSection tw-my-0 tw-mx-6">
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
              <a class="nav-link" href="#">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
