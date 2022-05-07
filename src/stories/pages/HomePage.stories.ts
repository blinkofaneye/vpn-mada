import {Meta} from '@storybook/vue3';
import HomePage from '@/pages/HomePage.vue';

export default {
  title: 'pages/HomePage',
  component: HomePage,
} as Meta;

export const Main = () => ({
  components: {HomePage},
  template: '<HomePage />',
});
