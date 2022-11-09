<template>
  <table>
    <tr>
      <th>Statut</th>
      <th>Nom</th>
      <th>Fichier</th>
      <th>Créé le</th>
    </tr>
    <ProfileItem />
    <ProfileItem />
  </table>
</template>

<script lang="ts" setup>
import ProfileItem from '@/components/display/ProfileItem.vue';
</script>

<style scoped>
table {
    font-family: Roboto;
    width: 100%;
    text-align: center;
    color: #fff;
    border-spacing: 0px 20px;
    margin-top: 25px;
}
th {
    padding-bottom: 15px;
}
</style>
