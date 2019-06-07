// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
// Composant sucheckboxes
//
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
;(function(cn){
    const password = "su-password";

    function _togglePassword(cont) {
        console.log('toggle');
    }

    function _checkPassword(input) {
        console.log('check');
    }

    su.doc.addEventListener('click', function(e) {
        const cont = e.target.closest("."+password);
        const button = e.target.closest(".su-password-toggle");
        if (!cont && !button) return;
        _togglePassword(cont);
    });

    su.doc.addEventListener('keypress', function(e) {
        const cont = e.target.closest("."+password);
        const input = e.target.closest("input[type=password]");
        if (!cont && !input) return;
        _checkPassword(input);
    });

})('supasswords');