<template>
  <div>
    <div v-if="!loggedOut" class="container-fluid d-flex justify-content-center align-items-center">
      <div class="card mt-5" style="width: 500px; margin-left: 350px;">
        <div class="card-header bg-primary text-white">
          <h4 class="card-title">Logout</h4>
        </div>
        <div class="card-body" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
          <p>Are you sure you want to logout?</p>
          <div class="button-container">
            <button class="btn btn-secondary btn-equal" @click="cancelLogout">Cancel</button>
            <button class="btn btn-danger btn-equal" @click="logout">Logout</button>
          </div>
        </div>
      </div>
    </div>
    <router-view v-else></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loggedOut: false
    };
  },
  methods: {
    logout() {
      // Implement logout logic here
      // For example, clear user session and set loggedOut flag to true
      localStorage.removeItem('user'); // Clear user session
      this.loggedOut = true;
      this.$router.push('/login'); // Redirect to login page
    },
    cancelLogout() {
      this.$router.push('/'); // Redirect to home page
    }
  }
};
</script>
 

<style>
/* Add custom styles for the component here */
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button-container button {
  margin: 5px;
}

.btn-equal {
  width: 120px; /* Sesuaikan ukuran dengan yang diinginkan */
}
</style>
