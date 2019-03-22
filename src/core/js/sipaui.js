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
var su = {
    // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
    /**
     * tableau des selecteurs de la fonction suScan (ajouté par onScan)
     */
    'scanSels': [],
    // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
    /**
     * tableau d'actions hookable par callback
     */
    _actions: {},
    // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
    /**
     * Ajoute une callback pour une clé au tableau {@link su._actions}
     *
     * @param {string} key le nom de l'action
     * @param {string} fn la fonction a appelé lors de l'activation de l'action
     */
    addAction: function(key,fn) {
        if( undefined === su._actions[key] ) {
            su._actions[key] = [fn];
        } else {
            su._actions[key].push(fn);
        }
        return su; // pour pouvoir enchaîner les addAction
    },
    // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
    /**
     * Appel les fonctions callback d'une action
     */
    doAction: function (key) {
        var ret = null, args, acts = su._actions[key];

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
     * Enlève une callback pour une clé au tableau {@link su._actions}.
     * Si plus de callback pour la clé, remove l'entrée.
     */
    removeAction: function (key, fn) {
        if( undefined !== su._actions[key] ) {
            var i = $.inArray(fn, su._actions[key]);
            if( -1 < i ) {
                su._actions[key].splice(i,1);
                if( 0 === su._actions[key].length ) {
                    delete su._actions[key];
                }
            }
        }
    }
};

document.on = function (event, elem, callback, capture) {
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

document.suScan = function(outerScan){
    if(!this) { return; }

    var $contexte = this;

    su.scanSels.forEach(function(scanSel){

        var $toScan = $contexte.querySelectorAll( scanSel.sel ),
            nbElts;

        if( outerScan ) { $toScan = $toScan.addBack( scanSel.sel ); }

        for (var i = 0; i < $toScan.length; i++) {
            var $o = $toScan[i],
                doneScans = $o.getAttribute('doneScans.su') || [];

            if( false == doneScans.includes(scanSel.sel) ) {
                scanSel.fn.call($o, $contexte); // en param, la callback aura le context de scan (this);
                doneScans.push(scanSel.sel);
                $o.setAttribute('doneScans.su', doneScans);
            }
        }

    });
    return this;
}
document.onScan = function(sel,fn) {
    su.scanSels.push({sel:sel,fn:fn});
}

;(function(su, undefined){
    if( undefined === su ) return;

    su.doc = document || window.document;

    // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
    // PolyFills


    // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
    // Initialisation du scan (fin du footer)
    su.asyncLoadSu = function() {

        su.doc.suScan(); // first scan sur tout le doc

        var suready = document.createEvent("Event");
        suready.initEvent("suready", false, true);
        var html = document.querySelector('html')
        html.classList.add("suready")
        html.dispatchEvent(suready);
    };

    var interSu = setInterval(function(){
        if( undefined === window.su ) return; // plugin du framework, pas de header pas plugin.
        clearTimeout(interSu); //

        //=require libs/components/sutoggleclass.js
        //=require libs/components/suemptyinput.js
        //=require libs/components/sucheckboxes.js

        su.asyncLoadSu();
    }, 25);

})(window.su);
