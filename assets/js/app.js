'use strict';

let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  navbar.classList.toggle('fixed-top', window.scrollY > 0);
});
