// Add a subtle spotlight effect to the body based on mouse movement
document.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth * 100;
    const y = e.clientY / window.innerHeight * 100;
    
    document.body.style.background = `radial-gradient(circle at ${x}% ${y}%, #1a1a1a 0%, #0a0a0a 50%)`;
});
