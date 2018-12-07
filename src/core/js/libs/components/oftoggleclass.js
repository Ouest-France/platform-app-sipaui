
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
// Composant oftoggleclass
//
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
;(function(cn){
    function _doToggle(event, that) {
        var that = that || this,
            opt = that.getAttribute('data-'+cn);
        ;

        (Array.isArray(opt) ? opt : [opt]).forEach(function(_data){
            var f = {
                'sel': that,
                'parent': null,
                'klass': '',
                'delais': 0,
                'force': null
            };
            _data = JSON.parse(_data);
            var d = {...f,..._data};

            if(event.type) {
                if('mouseover' == event.type || 'focusin' == event.type) {
                    d.force = _data.force != undefined ? _data.force : (_data.inverted ? 0 : 1);
                } else if('mouseout' == event.type || 'focusout' == event.type) {
                    d.force = _data.force != undefined  ? _data.force : (_data.inverted ? 1 : 0);
                }
            }
            if(d.parent) {
                var parent = that.closest(d.parent);
                parent.classList.toggle(d.klass, d.force === null ? null : !!d.force);
            } else {
                d.sel.classList.toggle(d.klass, d.force === null ? null : !!d.force);
            }
        });
        
    }
    
    console.log('--- Composant en vie : '+cn+' ---');
    of.doc.addEventListener('click', function(e) {
        var elem = e.target.closest("[data-"+cn+"]");
        if (!elem) return;
        _doToggle(e, elem);
    });

})('oftoggleclass');
