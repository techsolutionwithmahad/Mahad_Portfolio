const playBtns = document.querySelectorAll('.play-btn');

playBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Toggle play/pause state visually
        if (this.innerText === '▶') {
            // Reset all others
            playBtns.forEach(b => b.innerText = '▶');
            this.innerText = '⏸';
        } else {
            this.innerText = '▶';
        }
    });
});
