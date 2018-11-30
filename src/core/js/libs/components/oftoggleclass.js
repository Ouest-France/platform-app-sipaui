
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
// Composant oftoggleclass
//
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
;(function(cn){
    function _doToggle(event, that) {
        var that = that || this,
            opt = that.getAttribute('data'+cn);
        ;
        console.log(opt);
        
    }

    of.$doc.on('click.'+cn, _doToggle);

})('oftoggleclass');
