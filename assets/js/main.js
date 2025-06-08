// Toggle search function
function toggleSearch() {
    const searchBox = document.querySelector('.search-box');
    const searchLink = document.querySelector('.fixed-bottom-menu .search');

    searchBox.classList.toggle('active');
    searchLink.classList.toggle('active');

    if (searchBox.classList.contains('active')) {
        searchBox.querySelector('.search-input').focus();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const menuHamburger = document.querySelector('.menu-hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const menuOverlay = document.querySelector('.menu-overlay');

    // Toggle menu function
    function toggleMenu() {
        mobileNav.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    }

    // Toggle menu on hamburger click
    menuHamburger.addEventListener('click', toggleMenu);

    // Close menu when clicking overlay
    menuOverlay.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && mobileNav.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Close search box when clicking outside
    document.addEventListener('click', function (event) {
        const searchBox = document.querySelector('.search-box');
        const searchLink = document.querySelector('.fixed-bottom-menu .search');

        if (searchBox.classList.contains('active') &&
            !searchBox.contains(event.target) &&
            !searchLink.contains(event.target)) {
            searchBox.classList.remove('active');
            searchLink.classList.remove('active');
        }
    })
});