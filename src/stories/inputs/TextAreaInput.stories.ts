import {Meta} from '@storybook/vue3';
import TextAreaInput from '@/components/inputs/TextAreaInput.vue';

export default {
  title: 'components/inputs/TextAreaInput',
  component: TextAreaInput,
} as Meta;

export const Main = () => ({
  components: {TextAreaInput},
  template: `
    <TextAreaInput id="test-input" style="width: 400px">
      Some input.
    </TextAreaInput>
  `,
});
