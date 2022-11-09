import {Meta} from '@storybook/vue3';
import CenterLayout from '@/components/layouts/CenterLayout.vue';

export default {
  title: 'components/layouts/CenterLayout',
  component: CenterLayout,
} as Meta;

export const Main = () => ({
  components: {CenterLayout},
  template: `
    <CenterLayout style="color: #fff">
     <p>
      Ceci devrait être centré.
     </p>
     <p>
      Ceci aussi.
     </p>
    </CenterLayout>
  `,
});
