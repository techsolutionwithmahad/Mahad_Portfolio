const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.menu-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding content
        const target = tab.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
    });
});
