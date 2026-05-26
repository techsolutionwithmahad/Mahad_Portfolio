document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.querySelector('.check-btn');
    btn.textContent = 'Searching...';
    
    setTimeout(() => {
        btn.textContent = 'Check Availability';
        alert('Simulation: Redirecting to booking engine...');
    }, 1500);
});

// Set minimum date to today
const dateInputs = document.querySelectorAll('input[type="date"]');
const today = new Date().toISOString().split('T')[0];
dateInputs.forEach(input => {
    input.min = today;
});
