<template>
  <div class="guestbook">
    <h2>Guestbook</h2>

    <!-- Guestbook Form -->
    <form @submit.prevent="submitForm" class="guestbook-form">
      <input 
        type="text" 
        v-model="name" 
        placeholder="Your Name" 
        required 
        aria-label="Name" 
      />
      <textarea 
        v-model="message" 
        placeholder="Your Message" 
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
          <strong>{{ entry.name }}</strong> - {{ entry.message }} <br />
          <small>{{ formatDate(entry.created_at) }}</small>
        </li>
      </ul>
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
      message: '',
      entries: []
    };
  },
  methods: {
    async submitForm() {
      if (!this.name.trim() || !this.message.trim()) {
        alert('Please fill out both fields properly.');
        return;
      }

      // Insert new message into Supabase
      const { error } = await supabase
        .from('guestbook')
        .insert([{ name: this.name, message: this.message }]);

      if (error) {
        console.error('Error submitting message:', error);
        alert('Something went wrong. Try again.');
      } else {
        // Refresh guestbook list
        this.fetchEntries();
        // Reset form
        this.name = '';
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

</style>