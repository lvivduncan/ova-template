// 9-10-2021

const nav = document.querySelectorAll('#nav > ul > li');
for(let i = 0; i < nav.length; i++){

    // навели мишку
    nav[i].addEventListener('mouseover', function() {

        this.classList.add('active');
    });

    // забрали мишку
    nav[i].addEventListener('mouseout', function() {

        this.classList.remove('active');
    });
}


// check devices
function isTouchDevice() {
    return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}