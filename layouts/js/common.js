const menuButton = document.querySelector('.header-icon');
const navMenu = document.querySelector('#navmenu');
const navIcon = document.querySelector('.nav-icon');


menuButton.addEventListener('click', function () {
    console.log(navMenu)
    navMenu.classList.remove('js-isClose')
    navMenu.classList.add('js-isOpen');
})

navIcon.addEventListener('click', function () {
    navMenu.classList.remove('js-isOpen')
    navMenu.classList.add('js-isClose');
})