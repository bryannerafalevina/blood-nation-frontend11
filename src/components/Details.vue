<template>
  <div class="container-fluid d-flex justify-content-center align-items-center" style="display: flex; justify-content: center; align-items: center; margin-left: 300px;">
    <div class="card p-4" style="width: 500px;">
      <div class="card-header bg-primary text-white text-center">
        <h4 class="card-title">Login to Blood Nation</h4>
      </div>
      <div class="card-body" style="display: flex; flex-direction: column; flex-grow: 1;">
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label> <br>
            <input type="email" class="form-control" id="email" v-model="email" placeholder="Enter your email address" required>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label> <br>
            <input type="password" class="form-control" id="password" v-model="password" placeholder="Enter your password" required>
          </div>
          <button type="submit" class="btn btn-danger btn-block" :disabled="isLoggingIn">{{ isLoggingIn ? 'Logging in...' : 'Login' }}</button>
        </form>
        <div v-if="loginError" class="alert alert-danger mt-3" role="alert">
          {{ loginError }}
        </div>
      </div>
      <div class="card-footer bg-light text-muted text-center">
        <p class="mt-3 text-center">Don't have an account? <router-link to="/regist">Regist</router-link></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const isLoggingIn = ref(false);
const loginError = ref('');
const router = useRouter();

const login = async () => {
isLoggingIn.value = true;
try {
  // Simulating login process
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a 2-second login process

  // Redirect to home page after successful login
  router.push('/');
} catch (error) {
  console.error('Login error:', error);
  loginError.value = 'Invalid email or password. Please try again.';
} finally {
  isLoggingIn.value = false;
}
};
</script>


<style>
.card {
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card-header {
  border-radius: 15px 15px 0 0;
}
.card-body {
  margin-right: 5px;
  }
.card-footer {
  border-radius: 0 0 15px 15px;
}
.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}
.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
.form-control {
  width: 480px;
}

</style>
