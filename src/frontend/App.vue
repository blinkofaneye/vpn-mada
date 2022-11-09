<script setup lang="ts">
import {ref} from 'vue';
import {RouterView, useRouter} from 'vue-router';
import {store} from '@/store';
import MenuContent from '@/components/navigation/MenuContent.vue';
import MenuItem from '@/components/navigation/MenuItem.vue';

const router = useRouter();

const open = ref(false);


const onLogout = () => {
  store.authenticated = false;
  open.value = false;
  router.replace('/login');
};

</script>

<template>
  <MenuContent v-model="open">
    <template #items>
      <MenuItem @click="$router.push('/'); open = false;">
        Accueil
      </MenuItem>
      <MenuItem @click="$router.push('/contact'); open = false;">
        Contact
      </MenuItem>
      <MenuItem
        v-if="!store.authenticated"
        @click="$router.push('/login'); open = false;"
      >
        Se connecter
      </MenuItem>
      <MenuItem
        v-else
        @click="$router.push('/profiles'); open = false;"
      >
        Gérer les profiles
      </MenuItem>
      <MenuItem
        v-if="store.authenticated"
        @click="onLogout"
      >
        Déconnexion
      </MenuItem>
    </template>

    <router-view />
  </MenuContent>
</template>

<style>
@import './assets/css/reboot.css';
</style>
