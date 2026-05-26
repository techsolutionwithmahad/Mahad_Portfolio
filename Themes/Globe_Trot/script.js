// Add a background to header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(0,0,0,0.8)';
        header.style.padding = '1rem 5%';
    } else {
        header.style.background = 'transparent';
        header.style.padding = '1.5rem 5%';
    }
});
