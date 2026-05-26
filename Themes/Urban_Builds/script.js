const items = document.querySelectorAll('.gallery-item');
items.forEach(item => {
    item.addEventListener('click', () => {
        const title = item.querySelector('span').innerText;
        alert('Viewing project category: ' + title);
    });
});
