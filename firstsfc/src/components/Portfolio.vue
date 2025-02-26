<template>
  <div class="fade-in">
    <section id="portfolio" class="portfolio">
      <h2>Portfolio</h2>
      <div class="portfolio-container">
        <div class="portfolio-item" v-for="(item, index) in portfolioItems" :key="index">
          <img 
            :src="item.image" 
            :alt="item.title"
            @click="openLightbox(item)"
          />
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <span class="lightbox-close" @click="closeLightbox">&times;</span>
        <img :src="lightboxItem.image" :alt="lightboxItem.title">
        <div class="lightbox-description" v-html="lightboxItem.description"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolioItems: [
        {
          title: "APC RAMKET WEBSITE",
          image: "/assets/APC%20Ramket%20Website.png",
          description: `
            <p class='portfolio-title'>APC RAMKET WEBSITE</p>
            <p class='portfolio-date'>August - November 2024</p>
            <p class='portfolio-course'>USERDES Course 2nd Year - 1st Term</p>
            <p class='portfolio-description'>An e-commerce platform where we crafted the user interface to ensure a seamless and intuitive shopping experience for buying and selling products made by the APC community.</p>
          `
        },
        {
          title: "APC RAMKET MOBILE APP",
          image: "/assets/APC%20Ramket%20Mobile%20App.png",
          description: `
            <p class='portfolio-title'>APC RAMKET MOBILE APP</p>
            <p class='portfolio-date'>August - November 2024</p>
            <p class='portfolio-course'>USERDES Course 2nd Year - 1st Term</p>
            <p class='portfolio-description'>A mobile app designed to complement the e-commerce platform, where we focused on creating a user-friendly interface for easy navigation and seamless transactions on-the-go for APC students.</p>
          `
        },
        {
          title: "dreambuildsla",
          image: "/assets/dreambuildsla.png",
          description: `
            <p class='portfolio-title'>@dreambuildsla on IG</p>
            <p class='portfolio-date'>August - November 2024</p>
            <p class='portfolio-description'>Instagram Reels showcasing real estate located in West Los Angeles, CA to captivate audiences and drive inquiries.</p>
          `
        },
        {
          title: "athletezerous",
          image: "/assets/athletezerous.png",
          description: `
            <p class='portfolio-title'>@athletezerous on IG</p>
            <p class='portfolio-date'>April - June 2024</p>
            <p class='portfolio-description'>Instagram Reels enhancing social media presence and audience engagement.</p>
          `
        },
        {
          title: "Instagram Feed Posts",
          image: "/assets/Instagram%20Feed%20Posts.png",
          description: `
            <p class='portfolio-title'>Instagram Feed Posts for</p>
            <p class='portfolio-course'>LocalPro Renovations</p>
            <p class='portfolio-course'>SuppDog</p>
            <p class='portfolio-course'>Bayside Endermologie</p>
            <p class='portfolio-course'>Vasavi Kumar</p>
            <p class='portfolio-course'>Biohackk</p>
          `
        },
        {
          title: "MARKSMAN GRADE TRACKING SYSTEM",
          image: "/assets/Marksman.png",
          description: `
            <p class='portfolio-title'>MARKSMAN GRADE TRACKING SYSTEM</p>
            <p class='portfolio-date'>May - June 2023</p>
            <p class='portfolio-course'>APC Senior High School Bootcamp</p>
            <p class='portfolio-description'>A web application conceptualized and designed to help students track their grades, with a focus on intuitive user flow and a clean, efficient interface for seamless grade management.</p>
          `
        },
      ],
      lightboxOpen: false,
      lightboxItem: {}
    };
  },
  methods: {
    openLightbox(item) {
      this.lightboxItem = item;
      this.lightboxOpen = true;
    },
    closeLightbox() {
      this.lightboxOpen = false;
    }
  }
};
</script>

<style scoped>

</style>
