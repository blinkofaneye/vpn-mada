import {Meta} from '@storybook/vue3';
import {ref} from 'vue';
import LoginPage from '@/pages/LoginPage.vue';
import MenuContent from '@/components/navigation/MenuContent.vue';
import MenuItem from '@/components/navigation/MenuItem.vue';

export default {
  title: 'pages/LoginPage',
  component: LoginPage,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta;

export const Main = () => ({
  components: {LoginPage, MenuContent, MenuItem},
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
        <MenuItem>Se connecter</MenuItem>
      </template>

      <LoginPage />
    </MenuContent>
  `,
});
