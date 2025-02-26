<template>
  <div class="fade-in">
    <section class="contact" id="contact">
      <div class="contact-container">
        <h2>SEND US YOUR FEEDBACK!</h2>
        <p>What do you think of my website?</p>
        
        <!-- Contact Form -->
        <form @submit.prevent="submitForm" class="contact-form">
          <input 
            type="text" 
            v-model="name" 
            placeholder="Full Name" 
            required 
            aria-label="Full Name"
          >
          <textarea 
            v-model="message" 
            placeholder="Message" 
            rows="5" 
            required 
            aria-label="Message"
          ></textarea>
          <button 
            type="submit" 
            class="send-btn" 
            aria-label="Send Message"
          >
            SEND MESSAGE
          </button>
        </form>

        <!-- Display Submitted Data -->
        <div v-if="submitted" class="submitted-container">
          <h3>Thank you, {{ name }}!</h3>
          <p>Your message: {{ message }}</p>
          <button 
            class="reset-btn" 
            @click="resetForm" 
            aria-label="Submit Another Message"
          >
            Submit Another
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Guestbook",
  data() {
    return {
      name: '',
      message: '',
      submitted: false
    };
  },
  methods: {
    submitForm() {
      if (this.name.trim() === '' || this.message.trim() === '') {
        alert("Please fill out both fields properly.");
        return;
      }
      this.submitted = true;
    },
    resetForm() {
      this.name = '';
      this.message = '';
      this.submitted = false;
    }
  }
};
</script>

<style scoped>

</style>
