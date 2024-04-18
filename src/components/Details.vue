<template>
  <div class="container">
    <div class="card mt-5" style="background-color: #f8f9fa;">
      <div class="card-header bg-primary text-white">
        <h4 class="card-title">Event Details</h4>
      </div>
      <div class="card-body">
        <p><strong>Activity Address:</strong> {{ event.address }}</p>
        <p><strong>Preparation:</strong> {{ event.preparation }}</p>
        <p><strong>Date:</strong> {{ event.date }}</p>
        <p><strong>Quota:</strong> {{ event.quota }}</p>
        <!-- Existing content -->
        <button v-if="isAuthorized" class="btn btn-primary" @click="register">Register</button>
        <p v-else class="text-muted"> <router-link to="/reservation">Apply</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: {
        address: 'Blood Donation Center A, Example Street, City',
        preparation: 'Please bring a valid ID and eat a healthy meal before donation.',
        date: '2024-04-01',
        quota: 100
      },
      isAuthorized: false // Set to true if user is authorized
    };
  },
  methods: {
    register() {
      // Implement registration logic
      // Redirect to registration form page
      if (this.isAuthorized) {
        this.$router.push('/registration-form');
      } else {
        // Redirect to register page
        this.$router.push('/register');
      }
    }
  }
};
</script>

<style>
.card {
  border-radius: 15px;
}
</style>
