import './assets/css/styles.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

// Create and mount the Vue app
const app = createApp(App);
app.mount('#app');

// Ensure the script runs only after the DOM is ready
setTimeout(() => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fade-in effect
    const fadeInElements = document.querySelectorAll('.fade-in');

    const handleScroll = () => {
        fadeInElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            if (isVisible) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
}, 0); // Ensures script runs AFTER Vue is mounted
