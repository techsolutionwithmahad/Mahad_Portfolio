const toggle = document.getElementById('billingToggle');
const amounts = document.querySelectorAll('.amount');
toggle.addEventListener('change', (e) => {
    if (e.target.checked) {
        amounts[0].innerText = '24';
        amounts[1].innerText = '79';
    } else {
        amounts[0].innerText = '29';
        amounts[1].innerText = '99';
    }
});
