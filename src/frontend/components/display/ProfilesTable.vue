<template>
  <table>
    <tr>
      <th>Statut</th>
      <th>Nom</th>
      <th>Fichier</th>
      <th>Créé le</th>
    </tr>
    <ProfileItem
      v-for="item of items"
      :key="item.file"
      :name="item.name"
      :file="item.file"
      :date="item.date"
      :url="item.url"
      @delete="onDelete(item.file)"
      @download="onDownload(item.file)"
    />
  </table>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import ProfileItem from '@/components/display/ProfileItem.vue';
const items = ref([
  {
    name: 'Mon ordinateur',
    file: 1,
    date: '09/11/2022',
    url: '/client-1-profile.ovpn',
  },
  {
    name: 'Ordinateur du salon',
    file: 2,
    date: '09/11/2022',
    url: '/client-2-profile.ovpn',
  },
  {
    name: 'Mon ordinateur',
    file: 3,
    date: '09/11/2022',
    url: '/client-3-profile.ovpn',
  },
  {
    name: 'Ordinateur du salon',
    file: 4,
    date: '09/11/2022',
    url: '/client-4-profile.ovpn',
  },
  {
    name: 'Mon ordinateur',
    file: 5,
    date: '09/11/2022',
    url: '/client-5-profile.ovpn',
  },
  {
    name: 'Ordinateur du salon',
    file: 6,
    date: '09/11/2022',
    url: '/client-6-profile.ovpn',
  },
]);

const onDelete = (file: number) => {
  items.value = items.value.filter((item) => {
    return item.file !== file;
  });
};

const onDownload = (file: number) => {
  const item = items.value.find((item) => {
    return item.file === file;
  });

  if (item) {
    const anchor = document.createElement('a');
    anchor.target = '_blank';
    anchor.href = item.url;
    anchor.download = `client-${item.file}-profile.ovpn`;
    anchor.click();
  }
};
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
