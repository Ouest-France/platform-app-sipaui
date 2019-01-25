import { addDecorator, configure } from '@storybook/vue';
import { configureViewport } from '@storybook/addon-viewport';
import { themes } from '@storybook/components';

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins

import { withOptions } from '@storybook/addon-options';

// Install Vue plugins.
Vue.use(Vuex);

var theme_sipaui = themes.dark;
//theme_sipaui.mainBackground= 'radial-gradient(circle at 80% 0, #333, #000)';
theme_sipaui.mainBackground= '#333';        //applied to root `background`
theme_sipaui.mainBorder= 'none';            //applied to panels `border`
//theme_sipaui.mainBorderColor= 'rgba(0,0,0,0.1)'; //applied for most borders
theme_sipaui.mainBorderRadius= '1'; //applied to panels, buttons, inputs
theme_sipaui.mainFill= 'rgba(255,255,255, .2)'; // colonne de droite + Filter à gauche
theme_sipaui.barFill= 'rgba(0,0,0, 1)';     // onglets colonne de droite
theme_sipaui.inputFill= 'transparent';      //applied to Input `background`
theme_sipaui.mainTextFace='Arial, Helvetica, sans-serif'; //applied to root `font-family`
theme_sipaui.mainTextColor= '#fff';         //applied to root & buttons & input `color`
theme_sipaui.mainTextSize='16';             //applied to root
theme_sipaui.dimmedTextColor= 'rgba(255,255,255, .7)'; //applied in less important text
theme_sipaui.highlightColor= '#000';        //applied to indicate selection
//theme_sipaui.successColor= '#0edf62';     //applied to indicate positive
//theme_sipaui.failColor= '#ff3f3f';        //applied to indicate negative
//theme_sipaui.warnColor= 'orange';         //applied to indicate ow-ow
//theme_sipaui.monoTextFace= '';            //applied to pre
theme_sipaui.layoutMargin= '0';      //applied to space panels
//theme_sipaui.overlayBackground= 'linear-gradient(to bottom right, rgba(233, 233, 233, 0.6), rgba(255, 255, 255, 0.8))';         //applied to overlay `background`
theme_sipaui.barSelectedColor= '#fff';      // onglets colonne de droite
theme_sipaui.brand= {
    background: 'radial-gradient(circle at 100% 100%, #be0030, #6e0030)'
};


// Option defaults:
addDecorator(
  withOptions({
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
    showAddonPanel: false,
    /**
     * display floating search box to search through stories
     * @type {Boolean}
     */
    showSearchBox: false,
    /**
     * show addon panel as a vertical panel on the right
     * @type {Boolean}
     */
    addonPanelInRight: false,
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
    hierarchySeparator: /\_/,
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
  })
);

configure(() => require('../build/storybook/stories'), module);
