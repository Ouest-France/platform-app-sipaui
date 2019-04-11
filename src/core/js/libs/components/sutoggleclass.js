// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
// Composant sutoggleclass
//
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
;(function(cn){
    function _doToggle(event, that) {
        that = that || this;
        const opt = JSON.parse(that.getAttribute('data-'+cn) || '{}'),
            inputTypes = ['text', 'password', 'number', 'email', 'tel', 'url', 'search', 'date', 'datetime', 'datetime-local', 'time', 'month', 'week']
        ;

        (Array.isArray(opt) ? opt : [opt]).forEach(function(_data){
            const f = {
                'sel': that,
                'parent': null,
                'klass': null,
                'delais': 0,
                'force': null
            };
            const d = {...f,..._data};

            if(!d.klass) return; // parametre obligatoire

            if(['focusin', 'input'].indexOf(event.type) >= 0) {
                d.force = _data.force != undefined ? _data.force : (_data.inverted ? false : true);
            } else if('focusout' == event.type) {
                d.force = _data.force != undefined ? _data.force : (_data.inverted ? true : false);
            }

            if(that.tagName.toLowerCase() == 'input' && inputTypes.indexOf(that.getAttribute('type')) >= 0 && that.value == "" ) {
                d.force = false;
            }

            var sel;
            if(d.parent) {
                sel = that.closest(d.parent);
            } else {
                sel = typeof d.sel == 'string' ? su.doc.querySelectorAll(d.sel) : d.sel; // Le parametre sel est soit un selecteur CSS, soit c'est l emement lui meme
            }

            if(!sel) return;

            (sel.forEach ? sel : [sel]).forEach(function(el) {
                if(d.force === null) {
                    el.classList.toggle(d.klass);
                } else {
                    el.classList.toggle(d.klass, !!d.force);
                }
            });
        });

    }

    // Pas tous les input, les checkbox / radio c'est l event click qu il faut capter
    const focusables = ['[type="text"]', '[type="password"]', '[type="email"]', '[type="tel"]', '[type="date"]', '[type="number"]', 'textarea', 'select'];
    
    ['focusin', 'focusout', 'input'].forEach(event => su.doc.addEventListener(event, function(e) {
        const element = e.target.closest(focusables.map(el => el + '[data-'+cn+']').join(', '));
        if (!element) return;
        _doToggle(e, element);
    }));

    su.doc.addEventListener('click', function(e) {
        const element = e.target.closest(
            '[data-'+cn+']'+focusables.map(el => ':not('+el+')').join('')
        );

        if (!element) return;
        _doToggle(e, element);
    });

})('sutoggleclass');
