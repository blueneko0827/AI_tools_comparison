// Check if we're on mobile
function isMobile() {
    return window.innerWidth <= 768;
}

// Handle mobile menu visibility
function handleMobileMenu() {
    const bottomMenu = document.querySelector('.fixed-bottom-menu');
    if (bottomMenu) {
        if (isMobile()) {
            bottomMenu.style.display = 'flex';
        } else {
            bottomMenu.style.display = 'none';
        }
    }
}

// Initial check
handleMobileMenu();

// Listen for window resize
window.addEventListener('resize', handleMobileMenu);

// Add active class to current menu item
function setActiveMenuItem() {
    const currentPath = window.location.pathname;
    const menuItems = document.querySelectorAll('.fixed-bottom-menu a');
    
    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentPath) {
            item.classList.add('active');
        }
    });
}

// Set active menu item on page load
document.addEventListener('DOMContentLoaded', setActiveMenuItem); 