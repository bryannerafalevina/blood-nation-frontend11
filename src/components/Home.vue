
<template>
  <div class="card-container">
    <div v-for="(bloodnation, index) in bloodnations" :key="index" class="card">
      <img :src="bloodnation.image" alt="bloodnation Image" class="bloodnation-image" />
      <div class="card-content">
        <h3><b>{{ bloodnation.name }}</b></h3>
        <p>{{ bloodnation.date }}</p>
        <p>{{ bloodnation.kuota }}</p>
        <p>{{ bloodnation.detail}}</p>
        <router-link to="/details">Details</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>

const bloodnations = [
  { name: 'Donor Darah Ja...', date: '28 Maret 2024, Bandung', image: "https://source.unsplash.com/featured/?hospital", kuota: 'Kuota: 50 Orang', detail: 'Details' },
  { name: 'Donor Darah Reu...', date: '1 April 2024, Bandung', image: "https://source.unsplash.com/featured/?hospital", kuota: 'Kuota: 50 Orang', detail: 'Details' },
  { name: 'Donor Darah Ber...', date: '13 April 2024, Bandung', image: "https://source.unsplash.com/featured/?hospital", kuota: 'Kuota: 50 Orang', detail: 'Details' },
  { name: 'Donor Darah Kas...', date: '18 April 2024, Jakarta', image: "https://source.unsplash.com/featured/?hospital", kuota: 'Kuota: 50 Orang', detail: 'Details' },
  { name: 'Donor Darah PMI', date: '19 April 2024, Bandung', image: "https://source.unsplash.com/featured/?hospital", kuota: 'Kuota: 50 Orang', detail: 'Details' },
  { name: 'Donor Darah PMI', date: '24 April 2024, Jakarta', image: "https://source.unsplash.com/featured/?hospital", kuota: 'Kuota: 50 Orang', detail: 'Details' },
  { name: 'Donor Darah Ber...', date: '13 April 2024, Bandung', image: "https://source.unsplash.com/featured/?hospital", kuota: 'Kuota: 50 Orang', detail: 'Details' },
  { name: 'Donor Darah Kas...', date: '18 April 2024, Jakarta', image: "https://source.unsplash.com/featured/?hospital", kuota: 'Kuota: 50 Orang', detail: 'Details' },
  { name: 'Donor Darah PMI', date: '19 April 2024, Bandung', image: "https://source.unsplash.com/featured/?hospital", kuota: 'Kuota: 50 Orang', detail: 'Details' },
  { name: 'Donor Darah PMI', date: '24 April 2024, Jakarta', image: "https://source.unsplash.com/featured/?hospital", kuota: 'Kuota: 50 Orang', detail: 'Details' }
];
</script>


<style>
.card-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-left: 70px;
}

.card {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 15px;
  margin: 70px;
}

.bloodnation-image {
  width: 200px;
  height: auto;
  border-radius: 5px 5px 0 0;
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.card-content b {
  font-weight: bold;
}

</style>