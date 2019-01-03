import { unwatchFile } from "fs";

// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
// Composant ofcheckboxes
//
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
;(function(cn){

    function _checkAllStatus(e, that) {
        that = that || this;
        const l = that.closest("label"),
            g = l.nextElementSibling;
        if (g == null || !g.classList.contains('su-checkbox-area')) {
            _parentCheck(that, _isIndeterminate(that));
        } else {
            console.log('--- children way ---');
            const d = g.querySelectorAll('input[type=checkbox]');
            console.log('g');
            console.log(g);
            console.log('d');
            console.log(d);
        }
        
        /*_checkAll(d, that.firstElementChild.checked);
        if(!that.firstElementChild.checked) that.firstElementChild.classList.remove('su-indeterminate');*/
    }

    function _checkAll(checkboxes, status) {
        for(let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = status;
            if(!status) checkboxes[i].classList.remove('su-indeterminate');
        }
    }

    function _parentCheck(elem, indeterminate) {
        const status = elem.checked;
        let parent = elem.parentNode;
        while(parent.parentNode) {
            const p = parent.parentNode.previousElementSibling;
            if(p !== null && p.tagName.toLowerCase() == 'label') {
                const parentCheckbox = p.querySelectorAll('input[type=checkbox]');
                for(let i = 0; i < parentCheckbox.length; i++) {
                    
                    if(indeterminate) {
                        parentCheckbox[i].classList.add('su-indeterminate');
                        parentCheckbox[i].checked = false;
                    } else {
                        parentCheckbox[i].classList.remove('su-indeterminate');
                        parentCheckbox[i].checked = status;
                    }
                    
                }
            } 

            parent = parent.parentNode;
            if(!(parent.classList.contains('su-checkbox-area') || parent.tagName.toLowerCase() == "label")) break;
        }
    }

    /* Connaitre le statut des autres cases pour savoir si le groupe est indéterminé ou pas */
    function _isIndeterminate(elem) {
        const status = elem.checked,
            direction = ['previous','next'];
        let parent = elem.parentNode;
        for(let i = 0; i < direction.length; i++) {
            while(direction[i] == 'previous' ? parent.previousElementSibling : parent.nextElementSibling) {
                let w = direction[i] == 'previous' ? parent.previousElementSibling : parent.nextElementSibling;
                if(w !== null && w.tagName.toLowerCase() == 'label')  {
                    let x = w.querySelectorAll('input[type=checkbox]');
                    for(let j = 0; j < x.length; j++) {
                        if(x[j].checked != status) {
                            console.log('Statut indéterminé !');
                            return true; // statut indeterminé
                        }
                    }
                }
                parent = direction[i] == 'previous' ? parent.previousElementSibling : parent.nextElementSibling;
            }
        }
        console.log('Pas de conflit !');
        return false; // pas indeterminé
    }

    /*of.doc.addEventListener('change', function(e) {
        const elem = e.target.closest("[data-"+cn+"]");
        if (!elem) return;
        _checkAllStatus(e, elem);
    });*/

    of.doc.addEventListener('change', function(e) {
        const cont = e.target.closest(".su-checkbox-area");
        const input = e.target.closest("input[type=checkbox]");
        if (!cont && !input) return;
        _checkAllStatus(e, input);
    });
})('ofcheckboxes');