import {Meta} from '@storybook/vue3';
import ContentText from '@/components/typography/ContentText.vue';

export default {
  title: 'components/typography/ContentText',
  component: ContentText,
} as Meta;

export const Main = () => ({
  components: {ContentText},
  template: `
    <ContentText>
      Ceci est le contenu du component.
    </ContentText>
  `,
});
