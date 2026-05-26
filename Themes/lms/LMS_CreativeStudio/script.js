document.addEventListener('DOMContentLoaded', () => {
    console.log('CreativeStudio Hub Active');
    const buttons = document.querySelectorAll('.continue-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const courseTitle = e.target.parentElement.querySelector('h3').innerText;
            alert(`Opening canvas for: ${courseTitle}`);
        });
    });
});
