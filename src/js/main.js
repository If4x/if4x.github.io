const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('nav');
const navIcon = document.querySelectorAll('.nav-icon');
const hamburger = document.querySelector('#hamburger-menu');
const header = document.querySelector('header');


navToggle.addEventListener('click', () => {
    header.classList.toggle("darken");
    nav.classList.toggle("open");
    navIcon.forEach(icon => {
        icon.classList.toggle("hidden");
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
        nav.classList.remove("open");
        navIcon.forEach(icon => {
            icon.classList.add("hidden");
        });
        hamburger.classList.remove("hidden");
        header.classList.remove("darken");
    }
});