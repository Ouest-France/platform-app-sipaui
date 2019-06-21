// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
// Composant sucheckboxes
//
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
;(function(cn){
    const password = "su-password",
        passwordtoggle = "su-password-toggle",
        conditions = "su-conditions",
        condition_error = "su-conditions-error",
        condition_success = "su-conditions-success",
        minchar = 8;

    function _togglePassword(cont) {
        let elem = cont.querySelector('input');
        if(elem.getAttribute("type") == "password") {
            elem.setAttribute("type","text");
        } else {
            elem.setAttribute("type","password");
        }
    }

    function _checkPassword(e,input,konditions) {
        console.log(e);
        console.log(input.value);
        let conf_conditions = 
        [
            {
                "klass":"su-condition-character-length",
                "regexp":"8"
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
        console.log('check');
    }

    function _testValue(value,o) {
        if(o.klass == "su-condition-character-length") {
            if(value.length < minchar) {
                return false
            } else {
                return true;
            }
        }
        let regexp = new RegExp(o.regexp, "g");
        if(regexp.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    function _conditionCheck(konditions,klass,response) {
        let char_condition = konditions.querySelector('.'+klass);
        char_condition.classList.remove(condition_error,condition_success);
        if(response) {
            char_condition.classList.add(condition_success);
        } else {
            char_condition.classList.add(condition_error);
        }
    }

    function _stayFocus(cont) {
        cont.classList.add('su-password-focus');
    }

    su.doc.addEventListener('click', function(e) {
        const cont = e.target.closest("."+password);
        const button = e.target.closest("."+passwordtoggle);
        if(!cont) return;
        _stayFocus(cont);
        if (!button) return;
        _togglePassword(cont);
    });

    ['keypress','keyup'].forEach(function(event) {
        su.doc.addEventListener(event, function(e) {
            const cont = e.target.closest("."+password);
            const input = e.target.closest("input");
            if (!cont || !input || !cont.querySelector("."+conditions)) return;
            const konditions = cont.querySelector("."+conditions);
            _checkPassword(e,input,konditions);
        });
    });

})('supasswords');