document.addEventListener('DOMContentLoaded', () => {
    console.log('ZenMind centered.');
    const buttons = document.querySelectorAll('.continue-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const courseTitle = e.target.parentElement.querySelector('h3').innerText;
            alert(`Taking a deep breath for: ${courseTitle}`);
        });
    });
});
