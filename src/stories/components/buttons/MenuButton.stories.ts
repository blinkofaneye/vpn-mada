import {Meta} from '@storybook/vue3';
import MenuButton from '@/components/buttons/MenuButton.vue';

export default {
  title: 'components/buttons/MenuButton',
  component: MenuButton,
} as Meta;

export const Main = () => ({
  components: {MenuButton},
  template: '<MenuButton />',
});
