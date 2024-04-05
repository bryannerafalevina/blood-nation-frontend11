<template>
    <div class="container" >
      <div class="card mt-5" >
        <div class="card-header bg-primary text-white">
          <h4 class="card-title">Appointment History</h4>
        </div>
        <div class="card-body">
          <div class="form-group">
            <label for="filterDate">Filter by Date:</label>
            <input type="date" class="form-control" id="filterDate" v-model="filterDate">
          </div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="appointment in filteredAppointments" :key="appointment.id">
                <td>{{ appointment.date }}</td>
                <td>{{ appointment.time }}</td>
                <td>{{ appointment.location }}</td>
                <td>{{ appointment.status }}</td>
                <td>
                  <button class="btn btn-primary btn-sm" @click="editAppointment(appointment)" :disabled="!isAuthorized || !isEventOngoing(appointment)">
                    Edit
                  </button>
                  <button class="btn btn-danger btn-sm" @click="cancelAppointment(appointment)" :disabled="!isAuthorized || !isEventOngoing(appointment)">
                    Cancel
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-if="appointments.length === 0" class="text-center">
            <p>No appointment history found.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        appointments: [
          { id: 1, date: '2024-03-28', time: '10:00 AM', location: 'Blood Donation Center A', status: 'Completed' },
          { id: 2, date: '2024-04-02', time: '02:30 PM', location: 'Blood Donation Center B', status: 'Scheduled' },
          { id: 3, date: '2024-04-15', time: '09:15 AM', location: 'Blood Donation Center C', status: 'Scheduled' }
        ],
        filterDate: '',
        isAuthorized: false, // Set to true if user is authorized
      };
    },
    computed: {
      filteredAppointments() {
        if (!this.filterDate) {
          return this.appointments;
        }
        return this.appointments.filter(appointment => appointment.date === this.filterDate);
      }
    },
    methods: {
      isEventOngoing(appointment) {
        // Check if the event is still ongoing based on the appointment date
        const currentDate = new Date();
        const appointmentDate = new Date(appointment.date);
        return currentDate <= appointmentDate;
      },
          editAppointment(appointment) {
        // Implement edit appointment logic
        if (this.isAuthorized && this.isEventOngoing(appointment)) {
          // Open a modal or form to edit appointment details
          console.log('Editing appointment:', appointment);
          // Example: open a modal with appointment details pre-filled for editing
          this.editingAppointment = { ...appointment };
          this.isEditing = true;
        } else {
          // Show error message or disable edit button
          console.log('Cannot edit appointment:', appointment);
        }
      },
          cancelAppointment(appointment) {
        // Implement cancel appointment logic
        if (this.isAuthorized && this.isEventOngoing(appointment)) {
          // Cancel appointment
          this.appointments = this.appointments.filter(a => a.id !== appointment.id);
          console.log('Appointment canceled:', appointment);
        } else {
          // Show error message or disable cancel button
          console.log('Cannot cancel appointment:', appointment);
        }
      },
          saveEditedAppointment() {
        // Update the appointment in the appointments array
        const index = this.appointments.findIndex(a => a.id === this.editingAppointment.id);
        if (index !== -1) {
          this.appointments[index] = { ...this.editingAppointment };
          this.isEditing = false;
          console.log('Appointment edited successfully:', this.editingAppointment);
        }
      },
      cancelEdit() {
        // Cancel the edit operation and close the modal or form
        this.isEditing = false;
      }
      }
      };
  </script>
  
  <style>
  /* Add custom styles for the component here */
  .btn {
    width: 80px;
      }
  </style>