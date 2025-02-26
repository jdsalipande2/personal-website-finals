<template>
  <div class="fade-in">
    <section class="skills-tools">
      <h2>Skills & Tools</h2>
      <div class="skills-categories">
        
        <!-- Programming Tools -->
        <div class="tools-category">
          <h3>Programming</h3>
          <div class="tools-list">
            <div class="tool-item" v-for="(tool, index) in programmingTools" :key="index">
              <img :src="tool.src" :alt="tool.alt">
            </div>
          </div>
        </div>

        <!-- Graphic Design & Video Editing Tools -->
        <div class="tools-category">
          <h3>Graphic Design & Video Editing</h3>
          <div class="tools-list">
            <div class="tool-item" v-for="(tool, index) in designTools" :key="index">
              <img :src="tool.src" :alt="tool.alt">
            </div>
          </div>
        </div>

        <!-- Administrative Tools -->
        <div class="tools-category">
          <h3>Administrative</h3>
          <div class="tools-list">
            <div class="tool-item" v-for="(tool, index) in adminTools" :key="index">
              <img :src="tool.src" :alt="tool.alt">
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      programmingTools: [
        { src: "/assets/Python.png", alt: "Python" },
        { src: "/assets/Java.png", alt: "Java" },
        { src: "/assets/HTML.png", alt: "HTML" },
        { src: "/assets/CSS.png", alt: "CSS" },
        { src: "/assets/MySQL.png", alt: "MySQL" },
        { src: "/assets/VSC.png", alt: "Visual Studio Code" },
        { src: "/assets/GitHub.png", alt: "GitHub" }
      ],
      designTools: [
        { src: "/assets/Canva.png", alt: "Canva" },
        { src: "/assets/Figma.png", alt: "Figma" },
        { src: "/assets/CapCut.png", alt: "CapCut" },
        { src: "/assets/Filmora.png", alt: "Filmora" }
      ],
      adminTools: [
        { src: "/assets/MS%20Office.png", alt: "Microsoft Office" },
        { src: "/assets/G%20Suite.png", alt: "Google Suite" }
      ]
    };
  }
};
</script>

<style scoped>

</style>
