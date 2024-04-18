<template>
  <div class="reservation-container">
    <div class="card-container">
      <div class="outer-card">
        <div class="inner-card">
          <h1 class="card-title">Apply Form</h1>
          <div class="form-container">
            <form @submit.prevent="submitForm" class="reservation-form">
              <div class="form-group">
                <label for="address" class="form-label">Address:</label>
                <input type="text" id="address" v-model="formData.address" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="age" class="form-label">Age:</label>
                <input type="number" id="age" v-model="formData.age" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="weight" class="form-label">Weight:</label>
                <input type="number" id="weight" v-model="formData.weight" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="bloodType" class="form-label">Blood Type:</label>
                <input type="text" id="bloodType" v-model="formData.bloodType" class="form-control" required>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        address: '',
        age: null,
        weight: null,
        bloodType: ''
      }
    };
  },
  methods: {
    submitForm() {
      if (typeof this.formData.address !== 'string' ||
          typeof this.formData.age !== 'number' ||
          typeof this.formData.weight !== 'number' ||
          typeof this.formData.bloodType !== 'string') {
        alert('Invalid form data types!');
        return;
      }

      // Handle form submission here
      console.log('Form submitted:', this.formData);
      alert('Form submitted successfully!');
    }
  }
};
</script>

<style>
.reservation-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card-container {
  max-width: 600px;
}

.outer-card {
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid #dc3545; /* Red border */
}

.inner-card {
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(248, 249, 250, 0.9); /* Transparent white background */
}

.card-title {
  text-align: center;
  margin-bottom: 20px;
  color: #dc3545; /* Red color */
}

.form-container {
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  font-weight: bold;
  color: #dc3545; /* Red color */
}

.form-control {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.btn {
  padding: 10px 20px;
  background-color: #dc3545; /* Red color */
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.btn:hover {
  background-color: #c82333; /* Darker red color */
}
</style>

