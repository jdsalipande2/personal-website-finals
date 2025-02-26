<template>
  <header class="masthead">
    <div class="video-background">
      <video autoplay muted loop class="video-bg">
        <source src="/assets/masthead.mp4" type="video/mp4">
      </video>
    </div>
    <div class="masthead-content">
      <h1>Hi, I am<br><span class="name">Janice <i>Salipande</i></span></h1>
      <a href="#portfolio" class="btn-outline">PORTFOLIO</a>
      <div class="icon-buttons">
        <a href="https://www.linkedin.com/in/janice-maxene-salipande-8aa856216" target="_blank">
          <div class="icon-circle">
            <img src="/assets/linkedin%20icon.png" alt="LinkedIn Icon">
          </div>
        </a>
        <a href="mailto:jdsalipande2@student.apc.edu.ph">
          <div class="icon-circle">
            <img src="/assets/mail%20icon.png" alt="Mail Icon">
          </div>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Masthead",
};
</script>

<style scoped>

</style>
