function position_change() {
    if (document.querySelector('.collapse').classList.contains('show')) {
        document.querySelector('.collapse').classList.remove('show');
        document.querySelector('.custom-bodyBG').classList.remove('col-10');
        document.querySelector('.custom-bodyBG').classList.add('col-12');
    } else {
        document.querySelector('.collapse').classList.add('show');
        document.querySelector('.custom-bodyBG').classList.remove('col-12');
        document.querySelector('.custom-bodyBG').classList.add('col-10');
    }
}

// To prevent users with a smaller screen from accessing content meant for larger screens with inspect
window.onresize = function() {
    document.location.reload(true);
};


// Scroll while contents of Side Naviagtion follow
window.onscroll = function() {
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
        /* an object is returned from getBoundingClientRect.
        Since we need y, we would need to check for y in the key and obtain the 
        value of them through checker[key]*/

    var checker = document.querySelector(".custom-checker").getBoundingClientRect();
    var position;
    for (let key in checker) {
        if (key === 'y') {
            position = checker[key];
        }
    }
    // Checker is not in view div should move
    if (position < 0) {
        document.querySelector(".custom-vertnavcontent").style.position = 'fixed';
        document.querySelector(".custom-vertnavcontent").style.top = '1.5rem';
    // Checker is in view div should not move
    } else {
        document.querySelector(".custom-vertnavcontent").style.position = 'relative';
        document.querySelector(".custom-vertnavcontent").style.top = '0';
    }
};