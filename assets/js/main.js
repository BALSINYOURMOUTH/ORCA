// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

document.addEventListener("DOMContentLoaded", function() {

    // Basic Mobile Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav ul');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('open');
            navToggle.classList.toggle('open'); // Rotate the icon
        });
    }

    // Smooth Scroll for internal links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Adjust offset for fixed header
                    behavior: "smooth"
                });
            }
        });
    });

    
    // do not forget to add the remaining code in this you fucking idiot


});
