const menuOpen = document.querySelector('.js-menu-open');
const menuClose = document.querySelector('.js-menu-close');
const menu = document.querySelector('.js-menu');
const navLinks = document.querySelectorAll('.js-menu a'); // Select all nav links


// The menu initially has a translate-x-full class and is hidden on the right side of the screen
// Open the menu
menuOpen.addEventListener('click', () => {
    menu.classList.remove('translate-x-full');
});
// when the user click the element, remove the class translate-x-full, (transform: translateX(100%)) 

// Close the menu when clicking the close button
menuClose.addEventListener('click', () => {
    menu.classList.add('translate-x-full');
});
// when the user click the element, add the class translate-x-full, (transform: translateX(100%)) 

// Close the menu when clicking any nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('translate-x-full');
        // when the user click the any nav link, remove the class translate-x-full so can go back to the page, (transform: translateX(100%)) 
    });
});



