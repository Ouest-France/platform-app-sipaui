import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { withReadme, withDocs, doc } from 'storybook-readme';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import CommonFooterDocs from '../components/COMMON_FOOTER.md';

// Globablly
withDocs.addFooterDocs(CommonFooterDocs);

import VueSuButton from '../components/vue/SuButton/SuButton.vue';
import VueSuButtonReadme from '../components/vue/SuButton/README.md';
import VueSuButtonDocs from '../components/vue/SuButton/DOCS.md';

storiesOf('vue', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(VueSuButtonDocs))
  .addDecorator(withReadme(VueSuButtonReadme))
  .add('SuButton Documentation', () => {
    return {
      components: {
        VueSuButton,
      },
      template: `<button class="su-button basic">SipaUi Button primary</button>`,
    };
  })
;




