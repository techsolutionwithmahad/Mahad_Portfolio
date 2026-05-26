// Animate progress bars when they come into view
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const targetWidth = bar.getAttribute('data-width');
            bar.style.width = targetWidth;
        }
    });
}, observerOptions);

document.querySelectorAll('.progress-bar').forEach(bar => {
    bar.style.width = '0'; // reset for animation
    observer.observe(bar);
});
