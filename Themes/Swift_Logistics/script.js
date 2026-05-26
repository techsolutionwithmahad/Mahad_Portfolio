document.getElementById('trackBtn').addEventListener('click', () => {
    const input = document.getElementById('trackId').value;
    if(input) {
        document.getElementById('progressContainer').classList.add('show');
    }
});
