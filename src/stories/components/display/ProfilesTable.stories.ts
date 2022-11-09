import {Meta} from '@storybook/vue3';
import ProfilesTable from '@/components/display/ProfilesTable.vue';

export default {
  title: 'components/display/ProfilesTable',
  component: ProfilesTable,
} as Meta;

export const Main = () => ({
  components: {ProfilesTable},
  template: `
    <ProfilesTable/>
  `,
});
