import {Meta} from '@storybook/vue3';
import {defineComponent, ref} from 'vue';
import MenuContent from '@/components/navigation/MenuContent.vue';
import MenuItem from '@/components/navigation/MenuItem.vue';

export default {
  title: 'components/navigation/MenuContent',
  component: MenuContent,
} as Meta;

export const Main = () => defineComponent({
  components: {MenuContent, MenuItem},
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

      <div style="width: 100%; height: 150vh; background: url(https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg)">
      </div>
    </MenuContent>
  `,
});
