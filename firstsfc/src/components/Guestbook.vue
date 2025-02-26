<template>
  <div class="guestbook-container">
    <div class="guestbook">
      <h2>CONTACT ME</h2>
      <h3>What do you think of my website?</h3>

      <!-- Guestbook Form -->
      <form v-if="!submitted" @submit.prevent="submitForm" class="guestbook-form">
        <input 
          type="text" 
          v-model="name" 
          placeholder="Full Name" 
          required 
          aria-label="Name" 
        />
        <input 
          type="email" 
          v-model="email" 
          placeholder="Email Address" 
          required 
          aria-label="Email"
        />
        <textarea 
          v-model="message" 
          placeholder="Message" 
          rows="4" 
          required 
          aria-label="Message" 
        ></textarea>
        
        <div class="button-group">
          <button type="submit">SEND MESSAGE</button>
          <button type="button" @click="viewGuestlist">VIEW GUESTLIST</button>
        </div>
      </form>

      <!-- Thank You Message -->
      <div v-else class="thank-you">
        <h3>Thank you for your message!</h3>
      </div>
    </div>
  </div>
</template>

<script>
const supabase = window.supabase.createClient(
  'https://emswahzkravskoohliol.supabase.co', 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtc3dhaHprcmF2c2tvb2hsaW9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1Mzc4OTYsImV4cCI6MjA1NjExMzg5Nn0.DW-8kMWDYoW-eJFI2Elrvf5dEc2DW_g2zhB-FZBXtuU'
);

export default {
  name: 'Guestbook',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      submitted: false
    };
  },
  methods: {
    async submitForm() {
      if (!this.name.trim() || !this.email.trim() || !this.message.trim()) {
        alert('Please fill out all fields properly.');
        return;
      }

      const { error } = await supabase
        .from('guestbook')
        .insert([{ name: this.name, email: this.email, message: this.message }]);

      if (error) {
        console.error('Error submitting message:', error);
        alert('Something went wrong. Try again.');
      } else {
        this.submitted = true; // Show thank-you message
        this.name = '';
        this.email = '';
        this.message = '';
      }
    },
    viewGuestlist() {
      window.location.href = '/guestlist'; // Change to actual guestlist page URL
    }
  }
};
</script>

<style scoped>
/* Container */
.guestbook-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

/* Guestbook */
.guestbook {
  background: #000;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  color: white;
  text-align: center;
}

/* Form Inputs */
.guestbook-form input, 
.guestbook-form textarea {
  font-family: inherit;
  font-size: inherit;
  width: calc(100% - 20px); /* Add space */
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: none;
  background: #fff;
  color: #000;
}

/* Buttons */
.button-group {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.guestbook-form button {
  padding: 10px 15px;
  color: #fff;
  background: #000;
  font-weight: bold;
  border: 2px solid #fff;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
}

.guestbook-form button:hover {
  color: #000;
  background: #fff;
}

/* Thank You Message */
.thank-you {
  margin-top: 20px;
  font-size: 1.2rem;
}
</style>
