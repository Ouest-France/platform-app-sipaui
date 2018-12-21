// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
// Composant ofcheckboxes
//
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
;(function(cn){

    function _checkAllStatus(e, that) {
        that = that || this;
        const opt = that.getAttribute('data-'+cn);
        if (that.childNodes.length == 0) return;
        const f = that.nextElementSibling,
            d = f.querySelectorAll('input[type=checkbox]');
        console.log(d);
        _checkAll(d, that.firstElementChild.checked);
        if(!that.firstElementChild.checked) that.firstElementChild.classList.remove('su-indeterminate');
    }

    function _checkAll(checkboxes, status) {
        for(let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = status;
            console.log(checkboxes[i]);
            if(!status) checkboxes[i].classList.remove('su-indeterminate');
        }
    }

    function _indeterminate(e) {

    }

    of.doc.addEventListener('change', function(e) {
        const elem = e.target.closest("[data-"+cn+"]");
        if (!elem) return;
        _checkAllStatus(e, elem);
    });
})('ofcheckboxes');