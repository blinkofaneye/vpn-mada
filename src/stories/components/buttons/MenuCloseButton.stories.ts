import {Meta} from '@storybook/vue3';
import MenuCloseButton from '@/components/buttons/MenuCloseButton.vue';

export default {
  title: 'components/buttons/MenuCloseButton',
  component: MenuCloseButton,
} as Meta;

export const Main = () => ({
  components: {MenuCloseButton},
  template: '<MenuCloseButton />',
});
