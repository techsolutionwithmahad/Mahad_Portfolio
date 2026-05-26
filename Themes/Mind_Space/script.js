// Breathing animation logic
const circle = document.getElementById('breath-circle');
const text = document.getElementById('breath-text');

const totalTime = 8000;
const breatheTime = 4000; // 4s in, 4s out

function breatheAnimation() {
    text.innerText = 'Breathe In';
    circle.style.transform = 'scale(1.5)';
    circle.style.backgroundColor = 'rgba(220, 174, 150, 0.4)';

    setTimeout(() => {
        text.innerText = 'Breathe Out';
        circle.style.transform = 'scale(1)';
        circle.style.backgroundColor = 'rgba(220, 174, 150, 0.2)';
    }, breatheTime);
}

breatheAnimation();
setInterval(breatheAnimation, totalTime);
