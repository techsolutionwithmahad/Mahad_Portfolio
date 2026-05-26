// Simple like counter functionality
document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const countSpan = this.querySelector('.count');
        let currentCount = parseInt(countSpan.innerText);
        
        if (this.classList.contains('liked')) {
            countSpan.innerText = currentCount - 1;
            this.classList.remove('liked');
            this.style.opacity = '1';
        } else {
            countSpan.innerText = currentCount + 1;
            this.classList.add('liked');
            this.style.opacity = '0.7';
        }
    });
});
