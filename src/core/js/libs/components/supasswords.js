// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
// Composant sucheckboxes
//
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
;(function(cn){
    const password = ".su-password",
        passwordtoggle = ".su-password-toggle",
        conditions = ".su-conditions",
        condition_error = "su-conditions-error",
        condition_success = "su-conditions-success";

    function _launchDetection() {
        const containers = su.doc.querySelectorAll(password);

        containers.forEach(cont => {
            let input = cont.querySelector("input");
            if (!input || !cont.querySelector(conditions)) return;
            let konditions = cont.querySelector(conditions);
            _checkPassword(input,konditions);
        });
    }
    
    function _togglePassword(cont) {
        let elem = cont.querySelector('input');
        if(elem.getAttribute("type") == "password") {
            elem.setAttribute("type","text");
            cont.classList.add('su-js-show','su-toggle-text');
        } else {
            elem.setAttribute("type","password");
            cont.classList.remove('su-js-show','su-toggle-text');
        }
        elem.focus();
    }

    function _checkPassword(input,konditions) {
        let conf_conditions = 
        [
            {
                "klass":"su-condition-character-length",
                "regexp":".{8,}"
            },
            {
                "klass":"su-condition-uppercase",
                "regexp":"([A-Z])"
            },
            {
                "klass":"su-condition-lowercase",
                "regexp":"([a-z])"
            },
            {
                "klass":"su-condition-number",
                "regexp":"([0-9])",
            }
        ];
        conf_conditions.forEach(function(obj) {
            _conditionCheck(konditions,obj.klass,_testValue(input.value,obj))
        });
    }

    function _testValue(value,o) {
        return new RegExp(o.regexp, "g").test(value);
    }

    function _conditionCheck(konditions,klass,response) {
        let condition = konditions.querySelector('.'+klass);
        let icon = condition.querySelector('.su-icon');
        condition.classList.remove(condition_error,condition_success);
        condition.classList.add(response ? condition_success : condition_error);
        icon.innerHTML = konditions.closest('.su-error') ? response ? 'valid' : 'invalid' : 'valid';
    }

    function _stayFocus(cont) {
        cont.classList.add('su-password-focus');
    }

    function _focusManagement(cont) {
        if(cont.classList.contains('su-toggle-text')) return;
        cont.classList.toggle('su-js-show');
    }

    su.doc.addEventListener('click', function(e) {
        const cont = e.target.closest(password);
        const button = e.target.closest(passwordtoggle);
        if(!cont) return;
        _stayFocus(cont);
        if(!button) return;
        _togglePassword(cont);
    });

    ['input'].forEach(function(event) {
        su.doc.addEventListener(event, function(e) {
            const cont = e.target.closest(password);
            const input = e.target.closest("input");
            if (!cont || !input || !cont.querySelector(conditions)) return;
            const konditions = cont.querySelector(conditions);
            _checkPassword(input,konditions);
        });
    });

    ['focusin','focusout'].forEach(function(event) {
        su.doc.addEventListener(event, function(e) {
            const cont = e.target.closest(password);
            const input = e.target.closest("input");
            if (!cont || !input) return;
            _focusManagement(cont);
        });
    });

    if( su.doc.readyState == 'complete') {
        _launchDetection();
    } else {
        su.doc.addEventListener('readystatechange', function() {
            if( su.doc.readyState != 'complete') return;
            _launchDetection();
        });
    }

})('supasswords');