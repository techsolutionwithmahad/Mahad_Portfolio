// Add interactivity to the side nav
const navItems = document.querySelectorAll('.side-nav a');

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        // Remove active class from all
        navItems.forEach(nav => nav.classList.remove('active'));
        // Add active class to clicked
        item.classList.add('active');
    });
});
