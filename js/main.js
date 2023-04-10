const hamburgerMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const subscibeBtn = document.querySelector('#contact-btn');
hamburgerMenu.addEventListener('click', (e) => {
	hamburgerMenu.classList.toggle('active');
	navMenu.classList.toggle('active');
});
subscibeBtn.addEventListener('click', (e) => {
	e.preventDefault();
});
