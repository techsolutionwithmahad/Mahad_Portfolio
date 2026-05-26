const slider = document.getElementById('compare-slider');
const afterImage = document.querySelector('.image-wrapper.after');
const sliderHandle = document.querySelector('.slider-handle');

slider.addEventListener('input', (e) => {
    const value = e.target.value;
    afterImage.style.width = `${value}%`;
    sliderHandle.style.left = `${value}%`;
});
