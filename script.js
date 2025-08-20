document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'D') {
        const developerEffect = document.querySelector('.developer-effect');
        if (developerEffect) {
            const isActive = developerEffect.classList.toggle('developer-effect-active');
            developerEffect.style.opacity = isActive ? '1' : '0';
            developerEffect.style.backgroundColor = isActive ? 'rgba(0, 0, 0, 0.7)' : 'transparent';
        }
    }
});
