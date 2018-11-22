import { configure } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import { configureViewport } from '@storybook/addon-viewport';
import { themes } from '@storybook/components';

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins

// Install Vue plugins.
Vue.use(Vuex);

var theme_sipaui = themes.dark;
//theme_sipaui.mainBackground= 'radial-gradient(circle at 80% 0, #333, #000)';
theme_sipaui.mainBackground= '#333';
theme_sipaui.mainFill= 'rgba(255,255,255, .2)'; // coll de droite + Filter à gauche
theme_sipaui.mainBorder= 'none';
theme_sipaui.mainBorderRadius= '1';
theme_sipaui.barFill= 'rgba(0,0,0, 1)'; // onglets coll de droite
theme_sipaui.mainTextFace='Arial, Helvetica, sans-serif';
theme_sipaui.mainTextSize='16';
theme_sipaui.inputFill= 'transparent';
theme_sipaui.barSelectedColor= '#fff'; // onglets coll de droite
theme_sipaui.mainTextColor= '#fff';
theme_sipaui.dimmedTextColor= 'rgba(255,255,255, .7)';
theme_sipaui.highlightColor= '#000';
theme_sipaui.brand= {
    background: 'radial-gradient(circle at 100% 100%, #be0030, #6e0030)'
};

// Option defaults:
setOptions({
    /**
     * name to display in the top left corner
     * @type {String}
     */
    name: 'SipaUI',
    /**
     * URL for name in top left corner to link to
     * @type {String}
     */
    url: '/',
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
