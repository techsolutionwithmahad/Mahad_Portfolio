document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.grid-item img');
    
    // Add simple fade-in effect on load
    images.forEach((img, index) => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.8s ease ' + (index * 0.1) + 's';
        
        // Wait for image to load before fading in
        if(img.complete) {
            img.style.opacity = '1';
        } else {
            img.addEventListener('load', () => {
                img.style.opacity = '1';
            });
        }
    });
});
