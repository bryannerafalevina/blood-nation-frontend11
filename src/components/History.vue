<template>
  <div>
    <h2 class="mt-4 mb-3" style="margin-top: 50px;">History Page</h2>
    <!-- Date Filter -->
    <div class="date-filter">
      <label for="filterDate">Filter by Date 1:</label>
      <input type="date" id="filterDate" v-model="filterDate" @input="updateFilterDate" pattern="\d{4}-\d{2}-\d{2}">
    </div>
<!-- Event Cards -->
<div class="container-history" style="margin-bottom: 100px;">
  <div class="row">
    <div class="col-md-12">
      <div class="card mb-4" v-for="(event, index) in filteredEvents" :key="index">
        <div class="card-body-history">
          <h5 class="card-title">Blood Donation Event</h5>
          <p><strong>Date:</strong> {{ formatDate(event.date) }}</p>
          <p><strong>Blood Type:</strong> {{ event.bloodType }}</p>
          <!-- New fields for address, age, and weight -->
          <p><strong>Address:</strong> {{ event.address }}</p>
          <p><strong>Age:</strong> {{ event.age }}</p>
          <p><strong>Weight:</strong> {{ event.weight }}</p>
          <!-- End of new fields -->
          <div class="d-flex justify-content-between">
            <button class="btn btn-primary" @click="editEvent(event)">Edit</button>
            <button class="btn btn-danger" @click="deleteEvent(event)">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    <!-- Edit Form -->
<div v-if="showEditForm" class="edit-form">
  <h4>Edit Donation Event</h4>
  <form @submit.prevent="updateEvent">
    <div class="mb-3">
      <label for="editDate" class="form-label">Date:</label>
      <input type="date" id="editDate" v-model="editedEvent.date" class="form-control" required>
    </div>
    <div class="mb-3">
      <label for="editBloodType" class="form-label">Blood Type:</label>
      <input type="text" id="editBloodType" v-model="editedEvent.bloodType" class="form-control" required>
    </div>
    <!-- Removed Last Donation Date field -->
    <div class="mb-3">
      <label for="editAddress" class="form-label">Address:</label>
      <input type="text" id="editAddress" v-model="editedEvent.address" class="form-control" required>
    </div>
    <div class="mb-3">
      <label for="editAge" class="form-label">Age:</label>
      <input type="number" id="editAge" v-model="editedEvent.age" class="form-control" required>
    </div>
    <div class="mb-3">
      <label for="editWeight" class="form-label">Weight:</label>
      <input type="number" id="editWeight" v-model="editedEvent.weight" class="form-control" required>
    </div>
    <!-- End of removed field -->
    <button type="submit" class="btn btn-primary">Update</button>
    <button class="btn btn-secondary" @click="cancelEdit">Cancel</button>
  </form>
</div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  data() {
    return {
      donationHistory: [
        { id: 1, date: '2024-04-15', bloodType: 'A+', age: 30, address: '123 Main St', weight: 70, lastDonationDate: '2024-03-15' },
        // Add more donation history data here
      ],
      filterDate: '',
      editedEvent: {},
      showEditForm: false,
    };
  },
  computed: {
    filteredEvents() {
      if (!this.filterDate) {
        return this.donationHistory;
      }
      return this.donationHistory.filter(event => {
        const formattedDate = this.formatDate(event.date);
        return formattedDate === this.filterDate;
      });
    },
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}/${month}/${day}`;
    },
    updateFilterDate() {
      const selectedDate = new Date(this.filterDate);
      const year = selectedDate.getFullYear();
      const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
      const day = String(selectedDate.getDate()).padStart(2, '0');
      this.filterDate = `${year}-${month}-${day}`;
    },
    editEvent(event) {
      this.editedEvent = { ...event };
      this.showEditForm = true;
    },
    deleteEvent(event) {
      const index = this.donationHistory.findIndex(e => e.id === event.id);
      this.donationHistory.splice(index, 1);
    },
    updateEvent() {
      const index = this.donationHistory.findIndex(e => e.id === this.editedEvent.id);
      this.donationHistory[index] = { ...this.editedEvent };
      this.showEditForm = false;
    },
    cancelEdit() {
      this.showEditForm = false;
    },
  },
};
</script>

<style>
.container-history {
  margin-top: 50px;
}
.date-filter {
  margin-bottom: 20px;
}
.edit-form {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Make the form inputs wider */
.edit-form input[type="date"],
.edit-form input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

/* Center the form buttons */
.edit-form button {
  margin-right: 10px;
  margin-bottom: 10px; /* Add margin bottom here */
}

</style>
