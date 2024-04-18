<template>
  <header>
    <a href="/" style="color: white;">BloodNation</a>    
    <div class="container">
      <div class="search-container">
        <!-- <form> 
          <div class="search-wrapper">
          <input type="search" placeholder="Search events...">
          <button class="btn btn-outline-danger" style="color: white; background-color: transparent; border-color: red; border: 1px solid white;" type="submit"> Search</button>
        </div>
        </form> -->
      </div>
      <div class="spacer"></div>
      <router-link to="/" style="color: white;" class="icon-link">
        <i class="bi bi-person-fill">Login</i>
      </router-link>
      <div class="spacer"></div>
      <router-link to="/history" style="color: white;" class="icon-link">
        <i class="bi bi-clock-history">History</i>
      </router-link>
      <div class="spacer"></div>
      <router-link to="/logout" style="color: white;" class="icon-link">
        <i class="bi bi-box-arrow-right">Logout</i>
      </router-link>
    </div> 
  </header>
  <router-view />
</template>

<style>

.container {
  margin-left: 20px;
  display: flex;
  align-items: center; /* Center vertically */
}

header {
  background-color: #BF3131;
  display: flex;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  position: fixed;
  width: 100%;
}

.search-container {
  display: flex;
  align-items: center;
  flex: 1; /* Grow to fill remaining space */
}

.search-container form {
  display: flex;
  align-items: center;
}

/* Add margin between navbar items */
.spacer {
  margin-left: 10px;
  margin-right: 10px;
}
/* Set input width to be larger */
.search-container input {
  flex: 1; /* Grow to fill remaining space */
  height: 30px; /* Set height for input field */
  padding: 5px; /* Set padding for input field */
  font-size: 14px; /* Set font size for input text */
  border-radius: 5px; /* Add border radius for input field */
  border: 1px solid white; /* Add border for input field */
  margin-top: 5px;
}

/* Set button width to be the same as other elements */
.search-container button {
  flex: 1; /* Grow to fill remaining space */
  height: 30px; /* Set height for input field */
  padding: 5px; /* Set padding for input field */
  font-size: 14px; /* Set font size for input text */
  border-radius: 5px; /* Add border radius for input field */
  border: 1px solid white; /* Add border for input field */
  margin-top: 5px;
}

.icon-link {
  display: flex;
  align-items: center;
  margin-left: 10px; /* Add margin to separate from other links */
}

nav a.router-link-exact-active {
  color: orange;
}



</style>
