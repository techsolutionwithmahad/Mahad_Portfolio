const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
        console.log('Filter updated.');
    });
});
