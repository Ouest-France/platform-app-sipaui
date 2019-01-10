
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
// Composant ofemptyinput
//
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
;(function(cn){

    function _emptyInput(event, that) {
        that = that || this;
        const opt = that.getAttribute('data-'+cn),
            f = {
                'sel': that.parentElement.querySelector('input'),
            };
        if(opt != '') {
            (Array.isArray(opt) ? opt : [opt]).forEach(function(_data){
                
                _data = JSON.parse(_data);
                const d = {...f,..._data};
                if(typeof(d.sel) != 'object') {
                    d.sel = that.parentElement.querySelector(d.sel);
                }
                d.sel.value = '';
            });
        } else {
            f.sel.value = '';
        }
        
    }

    of.doc.addEventListener('click', function(e) {
        const elem = e.target.closest("[data-"+cn+"]");
        if (!elem) return;
        _emptyInput(e, elem);
    });

})('ofemptyinput');
