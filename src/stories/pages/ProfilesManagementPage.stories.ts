import {Meta} from '@storybook/vue3';
import {ref} from 'vue';
import ProfilesManagementPage from '@/pages/ProfilesManagementPage.vue';
import MenuContent from '@/components/navigation/MenuContent.vue';
import MenuItem from '@/components/navigation/MenuItem.vue';

export default {
  title: 'pages/ProfilesManagementPage',
  component: ProfilesManagementPage,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta;

export const Main = () => ({
  components: {ProfilesManagementPage, MenuContent, MenuItem},
  setup: () => {
    const open = ref(false);
    return {open};
  },
  template: `
    <MenuContent v-model="open">
      <template #items>
        <MenuItem>Offres</MenuItem>
        <MenuItem>À propos</MenuItem>
        <MenuItem>Contact</MenuItem>
        <MenuItem>Déconnexion</MenuItem>
      </template>

      <ProfilesManagementPage />
    </MenuContent>
  `,
});
