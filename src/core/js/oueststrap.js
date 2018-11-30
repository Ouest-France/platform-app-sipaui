//
// Ouest-France Bootstrap
// Framework Javascript OuestStrap
// Header
//
'use strict';
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
// OuestStrap - start
// Framework JavaScript
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
var of = {
    // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
    /**
     * tableau des selecteurs de la fonction ofScan (ajouté par onScan)
     */
    'scanSels': [],
    // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
    /**
     * tableau d'actions hookable par callback
     */
    _actions: {},
    // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
    /**
     * Ajoute une callback pour une clé au tableau {@link of._actions}
     *
     * @param {string} key le nom de l'action
     * @param {string} fn la fonction a appelé lors de l'activation de l'action
     */
    addAction: function(key,fn) {
        if( undefined === of._actions[key] ) {
            of._actions[key] = [fn];
        } else {
            of._actions[key].push(fn);
        }
        return of; // pour pouvoir enchaîner les addAction
    },
    // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
    /**
     * Appel les fonctions callback d'une action
     */
    doAction: function (key) {
        var ret = null, args, acts = of._actions[key];

        if( acts ) {
            // Transform "arguments" in a true javascript Array
            // to remove key and pass others args to callback functions.
            ( args = Array.prototype.slice.call(arguments) ).shift();
            for( var i in acts ) { if(acts.hasOwnProperty(i)) {
                ret = acts[i].apply(this, args);
            } }
        }

        return ret;
    },
    // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
    /**
     * Enlève une callback pour une clé au tableau {@link of._actions}.
     * Si plus de callback pour la clé, remove l'entrée.
     */
    removeAction: function (key, fn) {
        if( undefined !== of._actions[key] ) {
            var i = $.inArray(fn, of._actions[key]);
            if( -1 < i ) {
                of._actions[key].splice(i,1);
                if( 0 === of._actions[key].length ) {
                    delete of._actions[key];
                }
            }
        }
    }
};

var on = function (event, elem, callback, capture) {
    if (typeof (elem) === 'function') {
        capture = callback;
        callback = elem;
        elem = window;
    }
    capture = capture ? true : false;
    elem = typeof elem === 'string' ? document.querySelector(elem) : elem;
    if (!elem) return;
    elem.addEventListener(event, callback, capture);
}

;(function(of, undefined){
    if( undefined === of ) return;

    of.doc = document || window.document;

    // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
    // PolyFills
    //=require libs/polyfills/**/*.js


    // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
    // Initialisation du scan (fin du footer)
    of.asyncLoadOf = function() {

        of.$doc.ofScan(); // first scan sur tout le doc

        $('html').addClass('ofready').trigger('ofready');
    };

    var interOf = setInterval(function(){
        if( undefined === window.of ) return; // plugin du framework, pas de header pas plugin.
        clearTimeout(interOf);

       //=require libs/composants/oftoggleclass.js

        of.asyncLoadOf();
    }, 25);

})(window.of);
