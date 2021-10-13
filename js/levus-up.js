
{
    const levusUp = document.createElement('div');
    levusUp.setAttribute('id', 'levus-up');
    document.body.append(levusUp);

    // show/hide
    window.addEventListener('scroll', () => {
        if(window.pageYOffset < 50){
            levusUp.className = '';
        } else if(window.pageYOffset > 100) {
            setTimeout( () => {
                levusUp.className = 'active';
            }, 10);
        }
    });

    // click to up
    levusUp.addEventListener('click', () => {
        document.documentElement.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
}