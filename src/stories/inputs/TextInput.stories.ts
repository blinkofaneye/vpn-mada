import {Meta} from '@storybook/vue3';
import TextInput from '@/components/inputs/TextInput.vue';

export default {
  title: 'components/inputs/TextInput',
  component: TextInput,
} as Meta;

export const Main = () => ({
  components: {TextInput},
  template: `
    <TextInput id="test-input" style="width: 400px">
      Some input.
    </TextInput>
  `,
});
