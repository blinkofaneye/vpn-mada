import {Meta} from '@storybook/vue3';
import SendButton from '@/components/buttons/SendButton.vue';
import {Story} from '@storybook/vue3';

export default {
  title: 'components/buttons/SendButton',
  component: SendButton,
} as Meta;

const Template: Story = (args) => ({
  components: {SendButton},
  setup() {
    return {args};
  },
  template: `
    <div style="width: 400px; margin-left: 20px; margin-top: 20px;">
      <SendButton v-bind="args">
        Envoyer
      </SendButton>
    </div>
  `,
});

export const Main = Template.bind({});

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
