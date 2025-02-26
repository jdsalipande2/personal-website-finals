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
      window.location.href = 'guestlist.html';
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
  padding: 30px;
  border-radius: 12px;
  width: 100%;
  max-width: 600px; /* Wider */
  color: white;
  text-align: center;
}

/* Form Inputs */
.guestbook-form input, 
.guestbook-form textarea {
  font-family: inherit;
  font-size: 1.1rem;
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: none;
  background: #fff;
  color: #000;
  box-sizing: border-box; /* Prevents stretching */
}

/* Buttons */
.button-group {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.guestbook-form button {
  padding: 15px 20px; /* Bigger buttons */
  font-size: 1rem; /* Bigger text */
  font-weight: bold;
  border-radius: 40px;
  border: 2px solid #fff;
  color: #fff;
  background: #000;
  cursor: pointer;
  flex: 1; /* Make buttons equal width */
  transition: 0.3s;
}

.guestbook-form button:hover {
  background: #fff;
  color: #000;
}

/* Thank You Message */
.thank-you {
  margin-top: 20px;
  font-size: 1.3rem;
}
</style>
