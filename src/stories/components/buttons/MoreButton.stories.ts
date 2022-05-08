import {Meta} from '@storybook/vue3';
import MoreButton from '@/components/buttons/MoreButton.vue';

export default {
  title: 'components/buttons/MoreButton',
  component: MoreButton,
} as Meta;

export const Main = () => ({
  components: {MoreButton},
  template: '<MoreButton />',
});
