function disableOther(s) {
    "showLeft" !== s && classie.toggle(showLeft, "disabled")
}! function(s) {
    "use strict";

    function e(s) {
        return new RegExp("(^|\\s+)" + s + "(\\s+|$)")
    }

    function t(s, e) {
        var t = n(s, e) ? c : a;
        t(s, e)
    }
    var n, a, c;
    "classList" in document.documentElement ? (n = function(s, e) {
        return s.classList.contains(e)
    }, a = function(s, e) {
        s.classList.add(e)
    }, c = function(s, e) {
        s.classList.remove(e)
    }) : (n = function(s, t) {
        return e(t).test(s.className)
    }, a = function(s, e) {
        n(s, e) || (s.className = s.className + " " + e)
    }, c = function(s, t) {
        s.className = s.className.replace(e(t), " ")
    }), s.classie = {
        hasClass: n,
        addClass: a,
        removeClass: c,
        toggleClass: t,
        has: n,
        add: a,
        remove: c,
        toggle: t
    }
}(window);
var menuLeft = document.getElementById("cbp-spmenu-s1"),
    body = document.body;
showLeft.onclick = function() {
    classie.toggle(this, "active"), classie.toggle(menuLeft, "cbp-spmenu-open"), disableOther("showLeft")
};