// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
// Composant ofcheckboxes
//
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
;(function(cn){
    const cIndeterminate = 'su-indeterminate',
        cArea = 'su-checkbox-area';

    function _checkStatus(that) {
        that = that || this;
        const l = that.closest("label"),
            g = l.nextElementSibling;
        if (g !== null && g.classList.contains(cArea)) {
            that.classList.remove(cIndeterminate);
            _childrenCheck(that, g);
        }
        _parentCheck(that, _isIndeterminate(that));
    }

    function _childrenCheck(elem, area) {
        const c = area.querySelectorAll('input[type="checkbox"]');
        for(let i = 0; i < c.length; i++) {
            c[i].checked = elem.checked;
            c[i].classList.remove(cIndeterminate);
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
                        parentCheckbox[i].classList.add(cIndeterminate);
                        parentCheckbox[i].checked = false;
                    } else {
                        parentCheckbox[i].classList.remove(cIndeterminate);
                        parentCheckbox[i].checked = status;
                    }
                    
                }
            } 

            parent = parent.parentNode;
            if(!(parent.classList.contains(cArea) || parent.tagName.toLowerCase() == "label")) break;
        }
    }

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
                        if(x[j].checked != status || x[j].classList.contains(cIndeterminate)) {
                            return true;
                        }
                    }
                }
                parent = direction[i] == 'previous' ? parent.previousElementSibling : parent.nextElementSibling;
            }
        }
        return false;
    }

    of.doc.addEventListener('change', function(e) {
        const cont = e.target.closest("."+cArea);
        const input = e.target.closest("input[type=checkbox]");
        if (!cont && !input) return;
        _checkStatus(input);
    });
})('ofcheckboxes');