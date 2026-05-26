// Translate vertical scroll to horizontal scroll
const wrapper = document.querySelector('.horizontal-scroll-wrapper');

window.addEventListener('wheel', (e) => {
    // Check if we are not scrolling vertically inside a specific element (like a modal)
    if (e.deltaY !== 0) {
        // Scroll horizontally based on the vertical scroll amount
        wrapper.style.transform = `translateX(${-window.scrollY}px)`;
        
        // Actually scroll the window down to trigger the transform visually, 
        // but we'll use a smoother approach: intercepting wheel event.
        
        e.preventDefault();
        window.scrollBy({
            left: e.deltaY,
            behavior: 'auto'
        });
    }
}, { passive: false });
