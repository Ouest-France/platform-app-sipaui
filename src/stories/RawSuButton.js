import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { withReadme, withDocs, doc } from 'storybook-readme';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import CommonFooterDocs from '../components/COMMON_FOOTER.md';

// Globablly
withDocs.addFooterDocs(CommonFooterDocs);

import SuButtonReadme from '../components/raw/SuButton/README.md';
import SuButtonDocs from '../components/raw/SuButton/DOCS.md';

storiesOf('raw', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(SuButtonDocs))
  .addDecorator(withReadme(SuButtonReadme))
  .add('SuButton', () => ({
    template: '<button class="su-button basic">SipaUi Button basic</button>',
  }))
;
storiesOf('raw', module)
  .add('SuButton.basic', () => ({
    template: '<button class="su-button basic">SipaUi Button basic</button>',
  }))
  .add('SuButton.primary', () => ({
    template: '<button class="su-button primary">SipaUi Button primary</button>',
  }))
  .add('SuButton.secondary', () => ({
    template: '<button class="su-button secondary">SipaUi Button secondary</button>',
  }))
  .add('SuButton.featured', () => ({
    template: '<button class="su-button featured">SipaUi Button featured</button>',
  }))
;
