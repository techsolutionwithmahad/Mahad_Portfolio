document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple validation and success message simulation
    const btn = document.querySelector('.submit-btn');
    const msg = document.getElementById('form-msg');
    
    btn.textContent = 'Sending...';
    btn.style.opacity = '0.7';
    
    setTimeout(() => {
        btn.textContent = 'Send Request';
        btn.style.opacity = '1';
        msg.textContent = 'Request sent successfully! We will contact you soon.';
        this.reset();
        
        setTimeout(() => {
            msg.textContent = '';
        }, 5000);
    }, 1500);
});
