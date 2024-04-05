import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Regist from '../views/Regist.vue';
import History from '../views/History.vue';
import Logout from '../views/Logout.vue';
import Details from '../views/Details.vue';
import Login from '../views/Login.vue';
import ForgotPassword from '../views/ForgotPassword.vue';



const routes = [
  { path: '/', component: Home },
  { path: '/regist', component: Regist },
  { path: '/history', component: History },
  { path: '/logout', component: Logout },
  { path: '/details', component: Details },
  { path: '/login', component: Login },
  {path: '/forgot-password',component: ForgotPassword}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

