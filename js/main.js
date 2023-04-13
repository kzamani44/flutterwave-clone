const hamburgerMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navBar = document.querySelector('.navbar');
const signBtn = document.querySelector('.sign')
const subscibeBtn = document.querySelector('#contact-btn');
hamburgerMenu.addEventListener('click', (e) => {
	hamburgerMenu.classList.toggle('active');
	navMenu.classList.toggle('active');
	navMenu.appendChild(signBtn)
});
subscibeBtn.addEventListener('click', (e) => {
	e.preventDefault();
});
