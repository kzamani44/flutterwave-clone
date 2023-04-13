const hamburgerMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navBar = document.querySelector('.navbar');
const signBtn = document.querySelector('.sign');
const subscibeBtn = document.querySelector('#contact-btn');
const signLink = document.querySelector('.nav-btn');

// Show menu When Nav Button is clicked on Mobile Devices
hamburgerMenu.addEventListener('click', (e) => {
	hamburgerMenu.classList.toggle('active');
	signBtn.appendChild(signLink);
	navMenu.classList.toggle('active');
	navMenu.appendChild(signBtn);
});

// Remove Sign-in Button from NavBar if ScreenWidth is < 500px
