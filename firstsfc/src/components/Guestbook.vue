<template>
  <div class="guestbook-container">
    <div class="guestbook">
      <h2>Guestbook</h2>

      <!-- Guestbook Form -->
      <form @submit.prevent="submitForm" class="guestbook-form">
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
        <button type="submit">Submit</button>
      </form>

      <!-- Guestbook Entries -->
      <div v-if="entries.length > 0" class="entries">
        <h3>Messages</h3>
        <ul>
          <li v-for="entry in entries" :key="entry.id">
            <strong>{{ entry.name }}</strong> ({{ entry.email }}) - {{ entry.message }} <br />
            <small>{{ formatDate(entry.created_at) }}</small>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { createClient } from '@supabase/supabase-js';

// Supabase Setup
const supabase = createClient(
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
      entries: []
    };
  },
  methods: {
    async submitForm() {
      if (!this.name.trim() || !this.email.trim() || !this.message.trim()) {
        alert('Please fill out all fields properly.');
        return;
      }

      // Insert new message into Supabase
      const { error } = await supabase
        .from('guestbook')
        .insert([{ name: this.name, email: this.email, message: this.message }]);

      if (error) {
        console.error('Error submitting message:', error);
        alert('Something went wrong. Try again.');
      } else {
        // Refresh guestbook list
        this.fetchEntries();
        // Reset form
        this.name = '';
        this.email = '';
        this.message = '';
      }
    },
    async fetchEntries() {
      const { data, error } = await supabase
        .from('guestbook')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching messages:', error);
      } else {
        this.entries = data;
      }
    },
    formatDate(date) {
      return new Date(date).toLocaleString();
    }
  },
  mounted() {
    this.fetchEntries();
  }
};
</script>

<style scoped>
/* Container Styling */
.guestbook-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: black;
  padding: 20px;
}

/* Guestbook Box */
.guestbook {
  background: #222;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  color: white;
  text-align: center;
}

/* Form Inputs */
.guestbook-form input, 
.guestbook-form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: none;
  background: #333;
  color: white;
}

/* Button */
.guestbook-form button {
  width: 100%;
  padding: 10px;
  background: #ffcc00;
  color: black;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
}

.guestbook-form button:hover {
  background: #ffaa00;
}

/* Guestbook Entries */
.entries {
  margin-top: 20px;
  text-align: left;
}

.entries h3 {
  margin-bottom: 10px;
}

.entries ul {
  list-style: none;
  padding: 0;
}

.entries li {
  background: #333;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
}

.entries small {
  color: #bbb;
}
</style>
