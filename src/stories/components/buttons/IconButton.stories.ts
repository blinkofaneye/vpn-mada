import {Meta} from '@storybook/vue3';
import CrossIcon from '@/assets/svg/cross.svg';
import IconButton from '@/components/buttons/IconButton.vue';

export default {
  title: 'components/buttons/IconButton',
  component: IconButton,
} as Meta;

export const Main = () => ({
  components: {IconButton},
  setup: () => {
    return {
      icon: CrossIcon,
      color: 'red',
    };
  },
  template: '<IconButton :color="color" :icon="icon" />',
});
