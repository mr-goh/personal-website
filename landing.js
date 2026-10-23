const heading = document.getElementById('landingIntro');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (heading && !reducedMotion.matches) {
    const text = heading.textContent;
    let index = 0;
    let timer;
    heading.textContent = '';

    function typeWriter() {
        heading.textContent = text.slice(0, ++index);
        if (index < text.length) timer = window.setTimeout(typeWriter, 50);
    }

    reducedMotion.addEventListener('change', () => {
        if (reducedMotion.matches) {
            window.clearTimeout(timer);
            heading.textContent = text;
        }
    });

    typeWriter();
}
