const playBtn = document.getElementById('play-btn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');

playBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Parallax effect for hero text
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    
    document.querySelector('.hero h1').style.transform = `translate(${x}px, ${y}px)`;
    document.querySelector('.hero h2').style.transform = `translate(${-x}px, ${-y}px)`;
});
