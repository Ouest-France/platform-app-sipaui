import { configure } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import { configureViewport } from '@storybook/addon-viewport';
import { themes } from '@storybook/components';

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins

// Install Vue plugins.
Vue.use(Vuex);

var theme_sipaui = themes.dark;
theme_sipaui.mainBackground= 'radial-gradient(circle at 35% 10%, #be0030, #6e0030)';
theme_sipaui.barFill= 'radial-gradient(circle at 35% 10%, #be0030, #6e0030)'; // coll de droite
theme_sipaui.mainFill= 'rgba(255,255,255,0.1)'; // coll de droite
theme_sipaui.barSelectedColor= '#dedede';
theme_sipaui.dimmedTextColor= '#dedede';
theme_sipaui.mainTextColor= '#dedede';
theme_sipaui.brand= {
    background: 'radial-gradient(circle at 35% 10%, #be0030, #6e0030)'
};

// Option defaults:
setOptions({
    /**
     * name to display in the top left corner
     * @type {String}
     */
    name: 'Sipa UI',
    /**
     * URL for name in top left corner to link to
     * @type {String}
     */
    url: '#',
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    goFullScreen: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showStoriesPanel: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showAddonPanel: true,
    /**
     * display floating search box to search through stories
     * @type {Boolean}
     */
    showSearchBox: false,
    /**
     * show addon panel as a vertical panel on the right
     * @type {Boolean}
     */
    addonPanelInRight: true,
    /**
     * sorts stories
     * @type {Boolean}
     */
    sortStoriesByKind: false,
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: null,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: null,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,
    /**
     * id to select an addon panel
     * @type {String}
     */
    selectedAddonPanel: 'viewport', // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: false, // true by default
    theme: themes.dark,
});

configure(() => require('../build/storybook/stories'), module);
