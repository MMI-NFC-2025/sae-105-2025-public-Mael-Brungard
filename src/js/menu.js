const toggle = document.querySelector('.nav-btn');
const menu_content = document.querySelector('#menu__content');
const menu = document.querySelector('.menu');
let isOpen = false;
toggle.addEventListener('click', () => {
    menu_content.ariaHidden = isOpen;
    toggle.ariaExpanded = !isOpen;
    menu.classList.toggle('menu--close');
    isOpen = !isOpen;
});