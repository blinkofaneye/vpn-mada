import {Meta, Story} from '@storybook/vue3';
import {defineComponent} from 'vue';
import MenuItem from '@/components/navigation/MenuItem.vue';

export default {
  title: 'components/navigation/MenuItem',
  component: MenuItem,
} as Meta;

const Template: Story = (args) => defineComponent({
  components: {MenuItem},
  setup: () => ({args}),
  template: `
    <div style="width: 450px; border: 2px #fff solid;">
      <MenuItem>{{args.default}}</MenuItem>
    </div>
  `,
});

export const Main = Template.bind({});
Main.args = {
  default: 'Sign Up',
};
