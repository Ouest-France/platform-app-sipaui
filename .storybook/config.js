import { addParameters, configure } from '@storybook/vue';
import { configureViewport } from '@storybook/addon-viewport';

import sipauiTheme from './sipauiTheme';

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins

// Install Vue plugins.
Vue.use(Vuex);

// Options de StoryBook
addParameters({
  options: {
        //theme: themes.dark,  // ancienne syntaxe
        theme: sipauiTheme,  // ancienne syntaxe
        //name: 'SipaUI', // ancienne syntaxe. Maintenant pris en charge par les options dans sipauiTheme
        //url: '/', // ancienne syntaxe. Maintenant pris en charge par les options dans sipauiTheme
    isFullscreen: false, // nouvelle syntaxe, fonctionne
        //goFullScreen: true,  // ancienne syntaxe, fonctionne
    showPanel: false,  // nouvelle syntaxe, fonctionne
        //showAddonPanel: false,  // ancienne syntaxe, fonctionne
    panelPosition: 'right',  // nouvelle syntaxe, fonctionne
    isToolshown: true,  // nouvelle syntaxe, fonctionne
  },
});
/*
// Méthode non-fonctionnelle proposée par StoryBook : https://github.com/storybooks/storybook/blob/master/MIGRATION.md#theming-overhaul
addParameters({
  options: {
    theme: themes({
      base: 'light',
      brandTitle: 'SipaUI',
      brandUrl: '/',
      // To control appearance:
      // brandImage: 'http://url.of/some.svg',
    }),
    isFullscreen: false,
    showPanel: false,
    panelPosition: 'right',
    isToolshown: true,
  },
});
*/



configure(() => require('../build/storybook/stories'), module);
// configure(() => {
//   const r = require.context('../src', true, /.stories.(js|ts)$/);
//   r.keys().forEach(filename => r(filename));
// }, module);
