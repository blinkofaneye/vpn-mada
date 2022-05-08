import {Meta} from '@storybook/vue3';
import {ref} from 'vue';
import HomePage from '@/pages/HomePage.vue';
import MenuContent from '@/components/navigation/MenuContent.vue';
import MenuItem from '@/components/navigation/MenuItem.vue';

export default {
  title: 'pages/HomePage',
  component: HomePage,
} as Meta;

export const Main = () => ({
  components: {HomePage, MenuContent, MenuItem},
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

      <HomePage />
    </MenuContent>
  `,
});
