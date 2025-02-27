function menuAparece() {
    let menuMobile = document.querySelector('.mobile-menu');
    let menuIcon = document.querySelector('#icon-menu');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        menuIcon.classList.remove('bi-x-lg');
        menuIcon.classList.add('bi-list');
    } else {
        menuMobile.classList.add('open');
        menuIcon.classList.remove('bi-list');
        menuIcon.classList.add('bi-x-lg');
    }        

}