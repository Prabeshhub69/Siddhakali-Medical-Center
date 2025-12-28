// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function () {
    // Create hamburger button
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';

    // Insert hamburger before contact button
    const navbar = document.querySelector('.navbar');
    const contact = document.querySelector('.contact');
    navbar.insertBefore(hamburger, contact);

    // Insert overlay after navbar
    const mainNavbar = document.getElementById('main-navbar');
    mainNavbar.parentNode.insertBefore(overlay, mainNavbar.nextSibling);

    // Get elements
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a');

    // Toggle menu function
    function toggleMenu() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        contact.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = hamburger.classList.contains('active') ? 'hidden' : '';
    }

    // Close menu function
    function closeMenu() {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        contact.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Hamburger click event
    hamburger.addEventListener('click', toggleMenu);

    // Overlay click event
    overlay.addEventListener('click', closeMenu);

    // Close menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking contact button
    contact.querySelector('a').addEventListener('click', closeMenu);

    // Close menu on window resize if open
    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024 && hamburger.classList.contains('active')) {
            closeMenu();
        }
    });

    // Handle active nav link based on scroll or hash
    function setActiveLink() {
        const hash = window.location.hash || '#home';
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            }
        });
    }

    // Set active link on page load
    setActiveLink();

    // Update active link on hash change
    window.addEventListener('hashchange', setActiveLink);

    // Optional: Close menu when pressing Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && hamburger.classList.contains('active')) {
            closeMenu();
        }
    });
});

//hamburger menu for services in navbar should open for mobile view when clicked because hover doesn't work on mobile.
// const serviceDropdown = document.querySelector(".nav-dropdown > a");
// const navDropdown = document.querySelector(".nav-dropdown");

// serviceDropdown.addEventListener("click", (e) => {
//     if (window.innerWidth <= 1024) {
//         e.preventDefault();
//         navDropdown.classList.toggle("active");
//     }
// });

// Select both dropdown toggles
const dropdownToggles = document.querySelectorAll(".dropdown-toggle-custom");

dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", (e) => {
        if (window.innerWidth <= 1024) {
            e.preventDefault();
            const parentDropdown = toggle.closest(".nav-dropdown");
            
            // Close other dropdowns
            document.querySelectorAll(".nav-dropdown").forEach(dropdown => {
                if (dropdown !== parentDropdown) {
                    dropdown.classList.remove("active");
                }
            });
            
            // Toggle current dropdown
            parentDropdown.classList.toggle("active");
        }
    });
});

