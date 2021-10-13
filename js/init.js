// 9-10-2021

const body = document.getElementsByTagName('body')[0];

{
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
}


// search
{
    const search = document.querySelector('#search form');
    const button = document.querySelector('#search .search');

    button.addEventListener('click', () => {

        search.classList.toggle('active');
        button.classList.toggle('active');
        body.classList.toggle('active');
    });
}


// menu
{
    const nav = document.querySelector('#nav ul');
    const button = document.querySelector('#nav > svg');

    button.addEventListener('click', () => {

        nav.classList.toggle('active');
        button.classList.toggle('active');
        body.classList.toggle('active');
    });
}


// news change
{
    const hot = document.querySelectorAll('#hot article');
    const length = hot.length;
    let counter = 0;

    hot[0].classList.add('active');

    setInterval(() => {
        if(counter < length-1){

            counter++;
        } else {

            counter = 0;
        }

        for(let i = 0; i < length; i++){
            
            hot[i].classList.remove('active');

            hot[counter].classList.add('active');
        }

    }, 4000);
}

// check devices
function isTouchDevice() {
    return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}

// 13-10-2021