document.addEventListener('DOMContentLoaded', () => {
    console.log('Kids Discover Ready!');
    const buttons = document.querySelectorAll('.continue-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const courseTitle = e.target.parentElement.querySelector('h3').innerText;
            alert(`Yay! Launching ${courseTitle}!!`);
        });
    });
});
