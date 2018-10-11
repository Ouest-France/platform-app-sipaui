import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { withReadme, withDocs, doc } from 'storybook-readme';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import CommonFooterDocs from '../COMMON_FOOTER.md';
import introDocs from '../INTRO.md';
import doc_design from '../../../src/components/button/doc-design.md';
import doc_html from '../../../src/components/button/doc-html.md';
import doc_vue from '../../../src/components/button/doc-vuejs.md';

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

['button'].map(item => {
    var comp_name = item;

    storiesOf(item, module)
        .addDecorator(withKnobs)
        .add('DESIGN', doc(doc_design))
        .add('HTML', doc(doc_html))
        .add('VUEJS', doc(doc_vue))
    ;
});
