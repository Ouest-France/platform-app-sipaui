import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withReadme, withDocs, doc } from 'storybook-readme';

import CommonFooterDocs from '../components/COMMON_FOOTER.md';

import SuButton from '../components/SuButton/SuButton.vue';
import ButtonReadme from '../components/SuButton/README.md';
import ButtonDocs from '../components/SuButton/DOCS.md';


// Globablly
withDocs.addFooterDocs(CommonFooterDocs);

// Collection
storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(ButtonDocs))
  .addDecorator(withReadme(ButtonReadme))
  .add('Documentation', () => {
    return {
      components: {
        SuButton,
      },
      template: `
        <button onClick="javascript:alert('coucou');" class="primary">SipaUi Button primary</button>`,
      data() {
      return {
        typeClass: 'zerrez',
      };
    },
    };
  })
;
storiesOf('Button', module)
  .add('basic', () => ({
    template: '<button class="basic">SipaUi Button basic</button>',
  }))
  .add('primary', () => ({
    template: '<button class="primary">SipaUi Button primary</button>',
  }))
  .add('secondary', () => ({
    template: '<button class="secondary">SipaUi Button secondary</button>',
  }))
  .add('featured', () => ({
    template: '<button class="featured">SipaUi Button featured</button>',
  }))
;
