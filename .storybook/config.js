import { configure } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import { configureViewport } from '@storybook/addon-viewport';

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins

// Install Vue plugins.
Vue.use(Vuex);

// Option defaults:
setOptions({
  url: '#',
  addonPanelInRight: true,
  sidebarAnimations: true,
  enableShortcuts: false, // true by default
});

configure(() => require('../src/stories'), module);
