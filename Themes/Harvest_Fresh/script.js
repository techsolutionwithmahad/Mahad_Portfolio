const btns = document.querySelectorAll('.item button');
btns.forEach(btn => {
    btn.addEventListener('click', () => alert('Added fresh item to cart!'));
});
