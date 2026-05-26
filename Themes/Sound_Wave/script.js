const playBtn = document.getElementById('play-pause');
const progress = document.getElementById('progress');
let isPlaying = false;

playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playBtn.textContent = isPlaying ? '⏸' : '▶';
    
    if(isPlaying) {
        // Simulate playing progress
        progress.style.transition = 'width 10s linear';
        progress.style.width = '100%';
    } else {
        // Pause simulation
        const currentWidth = progress.style.width;
        progress.style.transition = 'none';
        progress.style.width = currentWidth;
    }
});
