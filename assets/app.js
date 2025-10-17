
const hamBurger = document.getElementById('hamBurger');

const menuLinks = document.getElementById('menuLinks');

const closeBtn = document.getElementById('closeBtn');

hamBurger.addEventListener('click', () => {
    menuLinks.classList.toggle('active');

});

closeBtn.addEventListener('click', () => {
    menuLinks.classList.remove('active');
});