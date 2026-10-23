export function createCarousel(slides, prevId, nextId, imgId) {
    const image = document.getElementById(imgId);
    const previous = document.getElementById(prevId);
    const next = document.getElementById(nextId);

    if (!image || !previous || !next || slides.length === 0) return;

    const container = image.closest('.carousel-container');
    let index = 0;

    function showSlide(nextIndex) {
        index = Math.max(0, Math.min(nextIndex, slides.length - 1));
        image.src = slides[index].src;
        image.alt = slides[index].alt;
        previous.setAttribute('aria-disabled', String(index === 0));
        next.setAttribute('aria-disabled', String(index === slides.length - 1));
    }

    previous.addEventListener('click', () => showSlide(index - 1));
    next.addEventListener('click', () => showSlide(index + 1));
    container?.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            showSlide(index + (event.key === 'ArrowRight' ? 1 : -1));
        }
    });

    showSlide(0);
}
