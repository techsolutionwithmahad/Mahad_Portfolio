document.addEventListener('DOMContentLoaded', () => {
    console.log('GlassFuture matrix synced.');
    const buttons = document.querySelectorAll('.continue-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const courseTitle = e.target.parentElement.querySelector('h3').innerText;
            alert(`Initializing Neural Link for: ${courseTitle}`);
        });
    });
});
