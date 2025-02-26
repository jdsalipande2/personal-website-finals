<template>
  <div class="guestlist-container">
    <div class="guestlist">
      <h2>Guestlist</h2>
      <p>Below are the messages sent through the guestbook.</p>

      <div v-if="entries.length > 0" class="entries">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="entry in entries" :key="entry.id">
              <td>{{ entry.name }}</td>
              <td>{{ entry.email }}</td>
              <td>{{ entry.message }}</td>
              <td>{{ formatDate(entry.created_at) }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-else class="no-entries">
        <p>No messages yet.</p>
      </div>

      <button @click="goBack">Back to Contact Page</button>
    </div>
  </div>
</template>

<script>
const supabase = window.supabase.createClient(
  'https://emswahzkravskoohliol.supabase.co', 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtc3dhaHprcmF2c2tvb2hsaW9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1Mzc4OTYsImV4cCI6MjA1NjExMzg5Nn0.DW-8kMWDYoW-eJFI2Elrvf5dEc2DW_g2zhB-FZBXtuU'
);

export default {
  name: 'Guestlist',
  data() {
    return {
      entries: []
    };
  },
  methods: {
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
    },
    goBack() {
      window.location.href = '/'; // Change this to your actual contact page route
    }
  },
  mounted() {
    this.fetchEntries();
  }
};
</script>

<style scoped>
/* Container */
.guestlist-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

/* Guestlist */
.guestlist {
  background: #000;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 700px;
  color: white;
  text-align: center;
}

/* Table */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

th, td {
  padding: 10px;
  border: 1px solid #fff;
  text-align: left;
}

th {
  background: #333;
}

td {
  background: #222;
}

/* No Entries Message */
.no-entries {
  margin-top: 15px;
  font-size: 1.2rem;
}

/* Button */
button {
  margin-top: 15px;
  padding: 10px 15px;
  color: #fff;
  background: #000;
  font-weight: bold;
  border: 2px solid #fff;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  color: #000;
  background: #fff;
}
</style>