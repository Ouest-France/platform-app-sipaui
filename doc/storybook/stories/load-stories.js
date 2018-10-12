import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { withReadme, withDocs, doc } from 'storybook-readme';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import CommonFooterDocs from '../COMMON_FOOTER.md';
import introDocs from '../INTRO.md';
import doc_design_button from '../../../src/components/button/doc-design.md';
import doc_html_button from '../../../src/components/button/doc-html.md';
import doc_vue_button from '../../../src/components/button/doc-vuejs.md';

import doc_design_text_fields from '../../../src/components/text-fields/doc-design.md';
import doc_html_text_fields from '../../../src/components/text-fields/doc-html.md';
import doc_vue_text_fields from '../../../src/components/text-fields/doc-vuejs.md';

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


storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('DESIGN', doc(doc_design_button))
    .add('HTML', doc(doc_html_button))
    .add('VUEJS', doc(doc_vue_button))
;

storiesOf('Text Fields', module)
    .addDecorator(withKnobs)
    .add('DESIGN', doc(doc_design_text_fields))
    .add('HTML', doc(doc_html_text_fields))
    .add('VUEJS', doc(doc_vue_text_fields))
;
