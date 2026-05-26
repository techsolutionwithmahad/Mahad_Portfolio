// Parallax effect for the hero image
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroImg = document.querySelector('.hero-img img');
    
    if (heroImg) {
        heroImg.style.transform = `translateY(${scrolled * 0.4}px)`;
    }
});
