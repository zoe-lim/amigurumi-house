//navigation bar for all pages when device used is mobile//\
//hide nav bar into a navbar icon//
let mainNav = document.getElementById('js-navbar');
let navbarIcon = document.getElementById('js-navbar-icon');

navbarIcon.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});