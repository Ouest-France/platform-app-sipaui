// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
// Composant sutoggleclass
//
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
;(function(cn){
    function _doToggle(event, that) {
        that = that || this;
        const opt = that.getAttribute('data-'+cn),
            inputTypes = ['text', 'password', 'number', 'email', 'tel', 'url', 'search', 'date', 'datetime', 'datetime-local', 'time', 'month', 'week']
        ;

        (Array.isArray(opt) ? opt : [opt]).forEach(function(_data){
            const f = {
                'sel': that,
                'parent': null,
                'klass': '',
                'delais': 0,
                'force': null
            };
            _data = JSON.parse(_data);
            const d = {...f,..._data};

            if(['focusin', 'input'].indexOf(event.type) >= 0) {
                d.force = _data.force != undefined ? _data.force : (_data.inverted ? false : true);
            } else if('focusout' == event.type) {
                d.force = _data.force != undefined ? _data.force : (_data.inverted ? true : false);
            }

            if(that.tagName.toLowerCase() == 'input' && inputTypes.indexOf(that.getAttribute('type')) >= 0 && that.value == "" ) {
                d.force = false;
            }

            if(d.parent) {
                const parent = that.closest(d.parent);
                parent.classList.toggle(d.klass, d.force === null ? null : !!d.force);
            } else {
                d.sel.classList.toggle(d.klass, d.force === null ? null : !!d.force);
            }
        });
        
    }

    ['focusin', 'focusout', 'input'].forEach(event => su.doc.addEventListener(event, function(e) {
        const elem = e.target.closest("[data-"+cn+"]");
        if (!elem) return;
        _doToggle(e, elem);
    }));

})('sutoggleclass');
