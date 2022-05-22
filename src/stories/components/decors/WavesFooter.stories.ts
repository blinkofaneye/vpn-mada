import {Meta} from '@storybook/vue3';
import WavesFooter from '@/components/decors/WavesFooter.vue';

export default {
  title: 'components/decors/WavesFooter',
  component: WavesFooter,
} as Meta;

export const Main = () => ({
  components: {WavesFooter},
  template: '<WavesFooter />',
});
