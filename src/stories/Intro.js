import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { withReadme, withDocs, doc } from 'storybook-readme';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import CommonFooterDocs from '../components/COMMON_FOOTER.md';

// Globablly
withDocs.addFooterDocs(CommonFooterDocs);


import introDocs from '../components/INTRO.md';

// Collection

storiesOf('intro', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(introDocs))
  .add('Documentation', () => ({
    template: '<h1>Sipa UI Storybook</h1>',
  }))
;
