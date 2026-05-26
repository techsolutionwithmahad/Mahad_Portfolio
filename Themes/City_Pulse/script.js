// Pause ticker on hover
const tickerWrap = document.querySelector('.ticker-wrap');
const ticker = document.querySelector('.ticker');

tickerWrap.addEventListener('mouseenter', () => {
    ticker.style.animationPlayState = 'paused';
});

tickerWrap.addEventListener('mouseleave', () => {
    ticker.style.animationPlayState = 'running';
});
