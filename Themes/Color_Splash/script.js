const blob = document.querySelector('.cursor-blob');
const cards = document.querySelectorAll('.project-card');

document.addEventListener('mousemove', (e) => {
    blob.style.left = e.clientX + 'px';
    blob.style.top = e.clientY + 'px';
});

// Change blob color based on hovered card
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const color = card.style.getPropertyValue('--card-color');
        blob.style.background = `radial-gradient(circle, ${color}88 0%, ${color}00 70%)`;
        blob.style.width = '400px';
        blob.style.height = '400px';
    });

    card.addEventListener('mouseleave', () => {
        blob.style.background = `radial-gradient(circle, rgba(255,51,102,0.4) 0%, rgba(255,51,102,0) 70%)`;
        blob.style.width = '300px';
        blob.style.height = '300px';
    });
});

// Interactive elements hover effect
const links = document.querySelectorAll('a, .logo');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        blob.style.width = '100px';
        blob.style.height = '100px';
        blob.style.background = 'radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 70%)';
    });
    link.addEventListener('mouseleave', () => {
        blob.style.width = '300px';
        blob.style.height = '300px';
        blob.style.background = 'radial-gradient(circle, rgba(255,51,102,0.4) 0%, rgba(255,51,102,0) 70%)';
    });
});
