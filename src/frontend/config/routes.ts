import HomePage from '../pages/HomePage.vue';
import LoginPage from '../pages/LoginPage.vue';
import ContactPage from '../pages/ContactPage.vue';
import ProfilesManagementPage from '../pages/ProfilesManagementPage.vue';
import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
  {path: '/', component: HomePage},
  {path: '/login', component: LoginPage},
  {path: '/contact', component: ContactPage},
  {path: '/profiles', component: ProfilesManagementPage},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
