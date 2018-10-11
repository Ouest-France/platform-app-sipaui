import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { withReadme, withDocs, doc } from 'storybook-readme';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import CommonFooterDocs from '../COMMON_FOOTER.md';
import introDocs from '../INTRO.md';

var fs = require('fs');

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

var components_dir = '../../../components/';
// Pour chaque component
fs.readdirSync(components_dir).map(item => {
    comp_name = item.name;
    comp_dir = components_dir + comp_name;

    var doc_design = fs.readFileSync( comp_dir + '/doc-design.md' );
    // HTML

    storiesOf('Version HTML', module)
        .addDecorator(withKnobs)
        .addDecorator(withDocs(doc_design))
        .add(comp_name, () => ({
        template: req(comp_dir + '/doc-html.md'),
        }))
    ;


    const req = require.context(comp_dir, true, /^stories\.js$/)

    function loadStories() {
      req.keys().forEach((filename) => req(filename))
    }

    storiesOf(loadStories, module);


    // Ajout du pendant VUEJS
    var vue_component = fs.readFileSync( comp_dir + '/'+ item + '.vue' );
    var vue_component_doc = fs.readFileSync( comp_dir + '/doc-vuejs.md' );

    storiesOf('Version vuejs', module)
      .addDecorator(withKnobs)
      .addDecorator(withDocs(vue_component_doc))
      .add('Documentation', () => {
        return {
          components: {
            vue_component,
          }
        };
      })
    ;
});
