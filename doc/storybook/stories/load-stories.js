import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withReadme, withDocs, doc } from 'storybook-readme';

import CommonFooterDocs from '../COMMON_FOOTER.md';
import introDocs from '../INTRO.md';

##imports##

// Globablly
withDocs.addFooterDocs(CommonFooterDocs);

// Collection
storiesOf('intro', module)
    .addDecorator(withKnobs)
    .addDecorator(withDocs(introDocs))
    .add('Documentation', () => ({
        template: '<h1>SipaUI Storybook</h1>',
    }))
;

##stories##
