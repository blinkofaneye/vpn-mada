import {Meta} from '@storybook/vue3';
import ContentHeading from '@/components/typography/ContentHeading.vue';

export default {
  title: 'components/typography/ContentHeading',
  component: ContentHeading,
} as Meta;

export const Main = () => ({
  components: {ContentHeading},
  template: `
    <ContentHeading>
      Vous pouvez voir ceci.
      <template #caption>
        Ceci est un sous-titre.
      </template>
    </ContentHeading>
  `,
});
