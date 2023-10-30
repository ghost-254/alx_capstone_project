// Javascript to Handle Mobile Menu navigation
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');
const nav = document.querySelector('nav');

mobileMenuIcon.addEventListener('click', () => {
    nav.classList.toggle('show-mobile-menu');
    mobileMenuIcon.classList.toggle('active');
    
});

// JavaScript to show/hide the overlay when the hamburger menu is clicked

document.getElementById("menu-toggle").addEventListener("click", function () {
    const overlay = document.getElementById("overlay");
    const tip = document.querySelector(".tip");
    
    if (overlay.style.display === "block") {
        overlay.style.display = "none";
        tip.style.display = "none";
    } else {
        overlay.style.display = "block";
        tip.style.display = "block";
    }
});
