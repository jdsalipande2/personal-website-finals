<template>
  <div>
    <Navigation />
    <Masthead />
    <About />
    <Education />
    <Experience />
    <Skills />
    <Services />
    <Portfolio />
    <Guestbook />
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Masthead from "@/components/Masthead.vue";
import About from "@/components/About.vue";
import Education from "@/components/Education.vue";
import Experience from "@/components/Experience.vue";
import Skills from "@/components/Skills.vue";
import Services from "@/components/Services.vue";
import Portfolio from "@/components/Portfolio.vue";
import Guestbook from "@/components/Guestbook.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navigation,
    Masthead,
    About,
    Education,
    Experience,
    Skills,
    Services,
    Portfolio,
    Guestbook,
    Footer,
  },
};
</script>
