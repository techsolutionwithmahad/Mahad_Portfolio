// Add a simple flicker effect to matches on hover
const matches = document.querySelectorAll('.match-item');

matches.forEach(match => {
    match.addEventListener('mouseenter', () => {
        match.style.background = 'rgba(0, 243, 255, 0.1)';
        match.style.boxShadow = '0 0 15px rgba(0, 243, 255, 0.2)';
    });
    
    match.addEventListener('mouseleave', () => {
        match.style.background = 'rgba(255,255,255,0.05)';
        match.style.boxShadow = 'none';
    });
});
